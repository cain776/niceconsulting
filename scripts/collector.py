#!/usr/bin/env python3
"""
BrightPath ESG 자료실 자동 수집기
- RSS 피드에서 ESG 관련 기사 수집
- Gemini API로 한국어 번역/요약
- board.js의 boardData에 자동 등록
- git commit & push
"""

import os
import re
import json
import time
import random
import hashlib
import logging
from datetime import datetime, timedelta
from pathlib import Path
from xml.etree import ElementTree as ET

import feedparser
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv

# ── 설정 ──────────────────────────────────────────────

BASE_DIR = Path(__file__).resolve().parent.parent
BOARD_JS = BASE_DIR / "js" / "board.js"
HISTORY_FILE = Path(__file__).resolve().parent / "collected_urls.json"
LOG_FILE = Path(__file__).resolve().parent / "collector.log"

load_dotenv(BASE_DIR / ".env")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")

# 수집할 RSS 피드 목록
# category: 유형 (news/law/cert/insight), topic: 주제 (esg/ecovadis/iso/safety/rba)
RSS_FEEDS = [
    # ESG 종합
    {"url": "https://www.esgtoday.com/feed/", "category": "news", "categoryName": "소식", "topic": "esg", "topicName": "ESG"},
    {"url": "https://www.greenbiz.com/rss.xml", "category": "news", "categoryName": "소식", "topic": "esg", "topicName": "ESG"},
    # 탄소/기후
    {"url": "https://www.carbonbrief.org/feed/", "category": "news", "categoryName": "소식", "topic": "esg", "topicName": "ESG"},
    {"url": "https://www.climatechangenews.com/feed/", "category": "news", "categoryName": "소식", "topic": "esg", "topicName": "ESG"},
    {"url": "https://carbonmarketwatch.org/feed/", "category": "news", "categoryName": "소식", "topic": "esg", "topicName": "ESG"},
    # 공급망
    {"url": "https://www.supplychaindive.com/feeds/news/", "category": "news", "categoryName": "소식", "topic": "esg", "topicName": "ESG"},
    # 안전/노동
    {"url": "https://www.ehstoday.com/rss", "category": "news", "categoryName": "소식", "topic": "safety", "topicName": "중대재해처벌법"},
    # Reddit 커뮤니티 — 개인 Q&A·DIY 차단 위해 exclude 강화
    {
        "url": "https://www.reddit.com/r/sustainability/.rss",
        "category": "news", "categoryName": "소식", "topic": "esg", "topicName": "ESG",
        "exclude_keywords": [
            # 개인 조언/구직 요청
            "조언", "도와주", "도움이 필요", "도와주세요", "추천해주", "추천 부탁",
            "advice", "guidance", "seeking", "any tips", "any thoughts",
            "looking for", "i need", "i'm a", "i am a", "as a recent",
            "career advice", "help me", "any recommendations",
            # DIY·개인 경험·취미
            "내가 길", "내 정원", "취미로", "베란다", "옥상에서",
            "i grew", "my balcony", "my garden", "my apartment",
            "diy", "tutorial", "how i ", "my experience",
            # 잡담/의견 청취
            "wondering", "curious", "thoughts on", "what do you think",
            "am i the only", "anyone else",
        ],
    },
    {
        "url": "https://www.reddit.com/r/climate/.rss",
        "category": "news", "categoryName": "소식", "topic": "esg", "topicName": "ESG",
        "exclude_keywords": [
            "조언", "도와주", "도움이 필요", "추천해주", "추천 부탁",
            "advice", "guidance", "seeking", "any tips", "any thoughts",
            "looking for", "i need", "i'm a", "i am a", "as a recent",
            "career advice", "help me", "any recommendations",
            "내가 길", "내 정원", "취미로", "베란다", "옥상에서",
            "i grew", "my balcony", "my garden", "my apartment",
            "diy", "tutorial", "how i ", "my experience",
            "wondering", "curious", "thoughts on", "what do you think",
            "am i the only", "anyone else",
        ],
    },
    # EcoVadis 전용 (Google News 검색 RSS)
    {"url": "https://news.google.com/rss/search?q=ecovadis&hl=en-US&gl=US&ceid=US:en", "category": "news", "categoryName": "소식", "topic": "ecovadis", "topicName": "에코바디스"},
    {"url": "https://news.google.com/rss/search?q=%EC%97%90%EC%BD%94%EB%B0%94%EB%94%94%EC%8A%A4&hl=ko&gl=KR&ceid=KR:ko", "category": "news", "categoryName": "소식", "topic": "ecovadis", "topicName": "에코바디스"},
    # EcoVadis 자체 블로그 (RSS 비활성화되어 sitemap 사용)
    {"url": "https://ecovadis.com/blog-post-sitemap.xml", "type": "sitemap", "category": "news", "categoryName": "소식", "topic": "ecovadis", "topicName": "에코바디스"},
    # 중대재해처벌법 (한국어 Google News, 처벌 사례 제외)
    {
        "url": "https://news.google.com/rss/search?q=%EC%A4%91%EB%8C%80%EC%9E%AC%ED%95%B4%EC%B2%98%EB%B2%8C%EB%B2%95&hl=ko&gl=KR&ceid=KR:ko",
        "category": "news", "categoryName": "소식",
        "topic": "safety", "topicName": "중대재해처벌법",
        "include_keywords": [
            "개정", "시행", "가이드", "해설", "교육", "강의", "세미나", "강연",
            "안전관리", "예방", "표준", "매뉴얼", "정책", "입법",
            "법률", "법적", "의무", "기준", "지침", "컨설팅",
            "안전보건", "산업안전", "감독", "고용노동부", "국회",
            "위험성평가", "산업안전보건법", "중대재해처벌법",
            "안전체계", "법제", "공포", "의결", "통과",
        ],
        "exclude_keywords": [
            "징역", "벌금형", "구속", "기소", "유죄", "1심", "2심", "3심",
            "선고", "구형", "검찰 송치", "처벌받", "처벌 받",
            "법정구속", "집행유예", "실형",
            "항소", "송치", "무죄", "무혐의", "1호 사건",
            "아리셀", "석포제련소", "삼표",
        ],
    },
]

# Reddit 등 일부 사이트는 기본 User-Agent를 차단하므로 명시적으로 설정
USER_AGENT = "BrightPath ESG Collector/1.0 (+https://github.com/cain776/niceconsulting)"

# 수집 키워드 필터 (하나라도 포함되면 수집)
KEYWORDS = [
    "esg", "ecovadis", "sustainability", "supply chain",
    "carbon", "cbam", "sbti", "climate", "emission",
    "rba", "responsible business", "gri", "sasb",
    "occupational safety", "workplace safety", "industrial accident",
    "human rights", "due diligence", "csddd",
    "iso 14001", "iso 45001", "iso 27001",
    "kcgs", "k-esg",
]

# 하루 최대 수집 건수 (env로 일회성 catch-up 시 오버라이드 가능)
MAX_ARTICLES_PER_RUN = int(os.environ.get("MAX_ARTICLES_PER_RUN", "5"))

# ── 로깅 ──────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler(),
    ],
)
log = logging.getLogger(__name__)

# ── 수집 이력 관리 ────────────────────────────────────

def load_history():
    if HISTORY_FILE.exists():
        return json.loads(HISTORY_FILE.read_text(encoding="utf-8"))
    return []

def save_history(urls):
    HISTORY_FILE.write_text(json.dumps(urls, ensure_ascii=False, indent=2), encoding="utf-8")

def url_hash(url):
    return hashlib.md5(url.encode()).hexdigest()

# ── RSS 수집 ──────────────────────────────────────────

def _collect_sitemap(feed_info, history_set):
    """sitemap.xml 기반 피드 처리: lastmod 7일 이내 글의 og 메타로 후보 생성"""
    candidates = []
    SM_NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    try:
        r = requests.get(feed_info["url"], headers={"User-Agent": USER_AGENT}, timeout=30)
        r.raise_for_status()
        root = ET.fromstring(r.content)
        entries = []
        for url_el in root.findall("sm:url", SM_NS):
            loc_el = url_el.find("sm:loc", SM_NS)
            lm_el = url_el.find("sm:lastmod", SM_NS)
            if loc_el is None or lm_el is None:
                continue
            try:
                d = datetime.fromisoformat(lm_el.text.replace("Z", "+00:00"))
            except Exception:
                continue
            loc = loc_el.text
            if loc.endswith("/"):  # 인덱스 페이지 제외
                continue
            entries.append((loc, d.replace(tzinfo=None)))

        # 최신순 정렬 후 7일 이내만
        entries.sort(key=lambda x: x[1], reverse=True)
        for loc, d in entries:
            if datetime.now() - d > timedelta(days=7):
                break  # 정렬되어 있어 이후는 모두 7일 초과
            if url_hash(loc) in history_set:
                continue
            try:
                page = requests.get(loc, headers={"User-Agent": USER_AGENT}, timeout=20)
                soup = BeautifulSoup(page.text, "html.parser")
                og_t = soup.find("meta", property="og:title")
                og_d = soup.find("meta", property="og:description")
                title = ((og_t.get("content") if og_t else "") or "").replace(" | EcoVadis", "").strip()
                summary = ((og_d.get("content") if og_d else "") or "").strip()
                if not title:
                    continue
                # sitemap은 신뢰 소스라 키워드 필터 생략 (피드 정의 자체로 큐레이션됨)
                candidates.append({
                    "link": loc,
                    "title": title,
                    "summary": summary[:500],
                    "date": d.strftime("%Y.%m.%d"),
                    "category": feed_info["category"],
                    "categoryName": feed_info["categoryName"],
                    "topic": feed_info["topic"],
                    "topicName": feed_info["topicName"],
                })
            except Exception as e:
                log.warning(f"  페이지 메타 추출 실패: {e}")
            time.sleep(0.5)
    except Exception as e:
        log.warning(f"sitemap 처리 실패: {feed_info['url']} - {e}")
    return candidates


def fetch_rss_articles():
    """모든 RSS/sitemap 피드에서 후보를 모은 뒤 피드 간 라운드로빈으로 선정"""
    history = load_history()
    history_set = set(history)

    by_feed = []  # 피드별 후보 리스트의 리스트

    for feed_info in RSS_FEEDS:
        candidates = []
        log.info(f"피드 수집 중: {feed_info['url']}")
        if feed_info.get("type") == "sitemap":
            candidates = _collect_sitemap(feed_info, history_set)
            log.info(f"  → 후보 {len(candidates)}건")
            by_feed.append(candidates)
            continue
        try:
            feed = feedparser.parse(feed_info["url"], agent=USER_AGENT)

            for entry in feed.entries[:10]:
                link = entry.get("link", "")
                title = entry.get("title", "")
                summary = entry.get("summary", "")
                content_text = title + " " + summary

                # 이미 수집된 URL 건너뛰기
                if url_hash(link) in history_set:
                    continue

                # 키워드 필터: 피드별 include 우선, 없으면 글로벌 KEYWORDS
                include_kw = feed_info.get("include_keywords") or KEYWORDS
                if not any(kw in content_text.lower() or kw in content_text for kw in include_kw):
                    continue

                # 피드별 exclude (있으면 적용)
                exclude_kw = feed_info.get("exclude_keywords") or []
                if exclude_kw and any(kw in content_text for kw in exclude_kw):
                    continue

                # 발행일 파싱
                published = entry.get("published_parsed") or entry.get("updated_parsed")
                if published:
                    pub_date = datetime(*published[:6])
                    # 7일 이내 기사만
                    if datetime.now() - pub_date > timedelta(days=7):
                        continue
                else:
                    pub_date = datetime.now()

                candidates.append({
                    "link": link,
                    "title": title,
                    "summary": BeautifulSoup(summary, "html.parser").get_text()[:500],
                    "date": pub_date.strftime("%Y.%m.%d"),
                    "category": feed_info["category"],
                    "categoryName": feed_info["categoryName"],
                    "topic": feed_info["topic"],
                    "topicName": feed_info["topicName"],
                })

        except Exception as e:
            log.warning(f"피드 수집 실패: {feed_info['url']} - {e}")

        log.info(f"  → 후보 {len(candidates)}건")
        by_feed.append(candidates)

    # 피드 순서를 매 실행마다 셔플 → 슬롯이 모자랄 때 특정 피드만 우선되지 않게
    random.shuffle(by_feed)

    # 라운드로빈: 피드마다 1건씩 돌아가며 선정, MAX_ARTICLES_PER_RUN까지
    selected = []
    while len(selected) < MAX_ARTICLES_PER_RUN:
        picked_this_round = False
        for candidates in by_feed:
            if not candidates or len(selected) >= MAX_ARTICLES_PER_RUN:
                continue
            selected.append(candidates.pop(0))
            picked_this_round = True
        if not picked_this_round:
            break

    log.info(f"최종 선정: {len(selected)}건 (라운드로빈 분배)")
    return selected

# ── Gemini 번역/요약 ─────────────────────────────────

def translate_with_gemini(title, summary, link):
    """Gemini API로 영문 기사를 한국어로 번역/요약"""
    if not GEMINI_API_KEY:
        log.error("GEMINI_API_KEY가 설정되지 않았습니다.")
        return None

    prompt = f"""다음 영문 ESG 관련 기사를 한국어로 번역/요약해주세요.

원문 제목: {title}
원문 요약: {summary}
원문 링크: {link}

다음 JSON 형식으로만 응답해주세요 (다른 텍스트 없이):
{{
  "title_ko": "한국어 제목 (간결하게, 40자 이내)",
  "content_ko": "<h2>핵심 내용</h2><p>기사 핵심 내용 3~5문장 요약</p><h3>주요 포인트</h3><ul><li>포인트1</li><li>포인트2</li><li>포인트3</li></ul><p>원문: <a href=\\"{link}\\" target=\\"_blank\\" rel=\\"noopener\\">원문 보기</a></p>"
}}"""

    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent"

    try:
        resp = requests.post(url,
            headers={"Content-Type": "application/json", "X-goog-api-key": GEMINI_API_KEY},
            json={
                "contents": [{"parts": [{"text": prompt}]}],
                "generationConfig": {"temperature": 0.3},
            }, timeout=60)
        resp.raise_for_status()
        data = resp.json()

        text = data["candidates"][0]["content"]["parts"][0]["text"]
        # JSON 블록 추출
        text = re.sub(r"^```json\s*", "", text.strip())
        text = re.sub(r"\s*```$", "", text.strip())
        result = json.loads(text)

        log.info(f"번역 완료: {result['title_ko']}")
        return result

    except Exception as e:
        log.error(f"Gemini API 호출 실패: {e}")
        return None

# ── board.js 업데이트 ─────────────────────────────────

def get_current_max_id():
    """board.js에서 현재 최대 ID를 추출"""
    content = BOARD_JS.read_text(encoding="utf-8")
    ids = re.findall(r"id:\s*(\d+)", content)
    return max(int(i) for i in ids) if ids else 0

def insert_to_board_js(articles_data):
    """board.js의 boardData 배열에 새 항목 삽입"""
    content = BOARD_JS.read_text(encoding="utf-8")
    current_max_id = get_current_max_id()

    new_entries = []
    for i, article in enumerate(articles_data):
        new_id = current_max_id + i + 1
        entry = f"""    {{
      id: {new_id},
      pinned: false,
      category: '{article["category"]}', categoryName: '{article["categoryName"]}',
      topic: '{article["topic"]}', topicName: '{article["topicName"]}',
      title: '{article["title_ko"].replace(chr(39), chr(92)+chr(39))}',
      author: '관리자',
      date: '{article["date"]}',
      views: 0,
      hasAttachment: false,
      content: `
        {article["content_ko"]}
      `
    }}"""
        new_entries.append(entry)

    if not new_entries:
        return False

    # boardData 배열의 첫 번째 요소 앞에 삽입
    insert_block = ",\n".join(new_entries) + ","
    content = content.replace(
        "const boardData = [\n",
        "const boardData = [\n" + insert_block + "\n",
    )

    BOARD_JS.write_text(content, encoding="utf-8")
    log.info(f"board.js에 {len(new_entries)}건 등록 완료")
    return True

# ── Git 커밋 & 푸시 ───────────────────────────────────

def git_commit_and_push(count):
    """변경사항을 커밋하고 푸시"""
    import subprocess

    os.chdir(BASE_DIR)
    today = datetime.now().strftime("%Y-%m-%d")

    try:
        subprocess.run(["git", "add", "js/board.js"], check=True)
        subprocess.run(["git", "add", "scripts/collected_urls.json"], check=True)

        msg = f"content: ESG 자료실 자동 업데이트 ({today}, {count}건)"
        subprocess.run(["git", "commit", "-m", msg], check=True)
        subprocess.run(["git", "push", "origin", "main"], check=True)

        log.info(f"Git push 완료: {msg}")
        return True
    except subprocess.CalledProcessError as e:
        log.error(f"Git 작업 실패: {e}")
        return False

# ── 메인 실행 ─────────────────────────────────────────

def main():
    import sys
    no_git = "--no-git" in sys.argv

    log.info("=" * 50)
    log.info("ESG 자료실 자동 수집 시작")
    log.info("=" * 50)

    # 1. RSS 수집
    articles = fetch_rss_articles()
    if not articles:
        log.info("새로운 기사가 없습니다. 종료.")
        return

    # 2. 번역/요약
    translated = []
    history = load_history()

    for article in articles:
        result = translate_with_gemini(article["title"], article["summary"], article["link"])
        if result:
            article.update(result)
            translated.append(article)
            history.append(url_hash(article["link"]))
            time.sleep(2)  # API 호출 간격

    if not translated:
        log.info("번역된 기사가 없습니다. 종료.")
        return

    # 3. board.js 업데이트
    if insert_to_board_js(translated):
        save_history(history)

        # 4. Git 커밋 & 푸시 (--no-git 옵션 시 스킵, GitHub Actions에서는 워크플로우가 처리)
        if not no_git:
            git_commit_and_push(len(translated))

    log.info(f"완료: {len(translated)}건 등록")

if __name__ == "__main__":
    main()
