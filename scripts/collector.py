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
import hashlib
import logging
from datetime import datetime, timedelta
from pathlib import Path

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
RSS_FEEDS = [
    # ESG 종합
    {"url": "https://www.esgtoday.com/feed/", "category": "esg", "categoryName": "ESG"},
    {"url": "https://www.greenbiz.com/rss.xml", "category": "esg", "categoryName": "ESG"},
    # 탄소/기후
    {"url": "https://www.carbonbrief.org/feed/", "category": "esg", "categoryName": "ESG"},
    {"url": "https://www.climatechangenews.com/feed/", "category": "esg", "categoryName": "ESG"},
    {"url": "https://carbonmarketwatch.org/feed/", "category": "esg", "categoryName": "ESG"},
    # 공급망
    {"url": "https://www.supplychaindive.com/feeds/news/", "category": "cert", "categoryName": "인증"},
    # 안전/노동
    {"url": "https://www.ehstoday.com/rss", "category": "law", "categoryName": "법규"},
]

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

# 하루 최대 수집 건수
MAX_ARTICLES_PER_RUN = 5

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

def fetch_rss_articles():
    """모든 RSS 피드에서 최근 기사를 수집"""
    history = load_history()
    history_set = set(history)
    articles = []

    for feed_info in RSS_FEEDS:
        try:
            log.info(f"피드 수집 중: {feed_info['url']}")
            feed = feedparser.parse(feed_info["url"])

            for entry in feed.entries[:10]:
                link = entry.get("link", "")
                title = entry.get("title", "")
                summary = entry.get("summary", "")
                content_text = title + " " + summary

                # 이미 수집된 URL 건너뛰기
                if url_hash(link) in history_set:
                    continue

                # 키워드 필터
                if not any(kw in content_text.lower() for kw in KEYWORDS):
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

                articles.append({
                    "link": link,
                    "title": title,
                    "summary": BeautifulSoup(summary, "html.parser").get_text()[:500],
                    "date": pub_date.strftime("%Y.%m.%d"),
                    "category": feed_info["category"],
                    "categoryName": feed_info["categoryName"],
                })

        except Exception as e:
            log.warning(f"피드 수집 실패: {feed_info['url']} - {e}")

    log.info(f"새 기사 {len(articles)}건 발견")
    return articles[:MAX_ARTICLES_PER_RUN]

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

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"

    try:
        resp = requests.post(url, json={
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"temperature": 0.3},
        }, timeout=30)
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
      category: '{article["category"]}',
      categoryName: '{article["categoryName"]}',
      title: '{article["title_ko"].replace(chr(39), chr(92)+chr(39))}',
      author: '관리자',
      date: '{article["date"]}',
      views: 0,
      hasAttachment: false,
      isNew: true,
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

    # 기존 항목의 isNew를 false로 변경 (새로 추가한 항목 제외)
    # 새 항목의 id 목록
    new_ids = set(range(current_max_id + 1, current_max_id + len(articles_data) + 1))

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

        # 4. Git 커밋 & 푸시
        git_commit_and_push(len(translated))

    log.info(f"완료: {len(translated)}건 등록")

if __name__ == "__main__":
    main()
