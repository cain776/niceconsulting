#!/bin/bash
# ============================================
# BrightPath ESG 자료실 자동 수집기 - 맥북 초기 세팅
# ============================================

set -e

echo "=========================================="
echo "  BrightPath ESG Collector 초기 세팅"
echo "=========================================="

# 1. Homebrew 확인/설치
echo ""
echo "[1/5] Homebrew 확인..."
if ! command -v brew &> /dev/null; then
    echo "Homebrew 설치 중..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
    echo "Homebrew 이미 설치됨 ✓"
fi

# 2. Python3 확인/설치
echo ""
echo "[2/5] Python3 확인..."
if ! command -v python3 &> /dev/null; then
    echo "Python3 설치 중..."
    brew install python3
else
    echo "Python3 이미 설치됨 ✓ ($(python3 --version))"
fi

# 3. Python 패키지 설치
echo ""
echo "[3/5] Python 패키지 설치..."
pip3 install --upgrade feedparser beautifulsoup4 requests python-dotenv google-generativeai
echo "Python 패키지 설치 완료 ✓"

# 4. .env 파일 생성
echo ""
echo "[4/5] .env 파일 설정..."
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

if [ ! -f "$PROJECT_DIR/.env" ]; then
    read -p "Gemini API 키를 입력하세요: " api_key
    echo "GEMINI_API_KEY=$api_key" > "$PROJECT_DIR/.env"
    echo ".env 파일 생성 완료 ✓"
else
    echo ".env 파일 이미 존재 ✓"
fi

# 5. launchd 등록
echo ""
echo "[5/5] 자동 실행 스케줄 등록..."
PLIST_SRC="$SCRIPT_DIR/com.brightpath.collector.plist"
PLIST_DST="$HOME/Library/LaunchAgents/com.brightpath.collector.plist"
USERNAME=$(whoami)

# plist 파일의 경로를 실제 사용자 경로로 치환
sed "s|/Users/사용자이름|$HOME|g" "$PLIST_SRC" > "$PLIST_DST"

# python3 경로도 실제 경로로 치환
PYTHON_PATH=$(which python3)
sed -i '' "s|/usr/local/bin/python3|$PYTHON_PATH|g" "$PLIST_DST"

# 기존 등록 해제 (있으면)
launchctl unload "$PLIST_DST" 2>/dev/null || true

# 새로 등록
launchctl load "$PLIST_DST"
echo "매일 오전 9시 자동 실행 등록 완료 ✓"

# 완료
echo ""
echo "=========================================="
echo "  세팅 완료!"
echo "=========================================="
echo ""
echo "  - 매일 오전 9시에 자동으로 ESG 기사를 수집합니다"
echo "  - 수동 실행: python3 $SCRIPT_DIR/collector.py"
echo "  - 로그 확인: cat $SCRIPT_DIR/collector.log"
echo "  - 스케줄 확인: launchctl list | grep brightpath"
echo "  - 스케줄 해제: launchctl unload $PLIST_DST"
echo ""
