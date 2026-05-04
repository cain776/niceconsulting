/* ============================================
   BrightPath ESG Board - JavaScript
   이중 필터(유형+주제), 검색, 페이지네이션, 상세보기
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- 게시판 데이터 ---
  // category: 유형 (news/law/cert/insight)
  // topic: 주제 (esg/ecovadis/iso/safety/rba)
  const boardData = [
    {
      id: 464,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '미 국방부 검토 지연으로 150개 이상 풍력 프로젝트 중단',
      id: 566,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '김해시, 중대재해 예방 교육 실시… 관리감독자 안전역량 강화',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미 국방부의 인허가 검토 지연으로 인해 미국 내 150개 이상의 풍력 발전 프로젝트가 중단된 상태입니다. 업계 관계자들은 최근 몇 주 사이 지연 상황이 급격히 악화되었다고 보고하고 있습니다. 이는 트럼프 행정부가 풍력 발전을 억제하려는 시도의 일환으로 해석되며, 재생 에너지 산업 전반에 큰 차질을 빚고 있습니다.</p><h3>주요 포인트</h3><ul><li>미 국방부의 검토 지연으로 150개 이상의 풍력 프로젝트가 발이 묶임</li><li>최근 몇 주간 지연 현상이 심화되며 업계의 불만이 고조됨</li><li>트럼프 행정부의 풍력 발전 차단 정책의 연장선상으로 분석됨</li></ul><p>원문: <a href="https://www.reddit.com/r/climate/comments/1t3rtne/more_than_150_us_wind_projects_stall_as_pentagon/" target="_blank" rel="noopener">원문 보기</a></p>
        <h2>핵심 내용</h2><p>김해시, 중대재해 예방 교육 실시… 관리감독자 안전역량 강화 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 이뉴스투데이</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTFBkc3dNWFhnX2t6UThibi1NODBRRGRwN3QxNjNvd1NSckxRaUFKcGZCVDBmTXZuVjAtbFRBRUthTzhYeUJxZFFhUjVESGVwYUdyemJFaEdQYWh0RWZHYTN2a2VORDYyTVpJY3NBX0gwT1HSAXRBVV95cUxQZk1BZ3VoMndoRXdJT3RUYnpSVzJtM3lXMlZnWTNXbDFRd1FCemNNcnE4M0tscDJQb3ZoUk95Z3J4a1dTNG1qU0I1Q2pnaGRERWpUZ21rRUh4WDFwTXljYzYwZ005M0ExdkNtMXVySHNYWE5tVA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 567,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '무안군, 중대재해처벌법 포함 농작업 안전교육 진행',
      author: '관리자',
      date: '2026.05.03',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>무안군, 중대재해처벌법 포함 농작업 안전교육 진행 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 호남타임즈</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE9feGZmc0ZBbTdzSlF2eHBwUVgzcWg5ZWlYck5uWDNpMUFIQ2JGLURlTWt3UWhjOUV0NUZ0WElDNjBUOE9EcU5xdXptLURfYTVfOC1qWDFYamJWMVVCZUVOR1E0aFBjVkpaOWJUNw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 568,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '시민 안전이 최우선…포항시, 중대시민재해 예방 의무 이행 총력 점검',
      author: '관리자',
      date: '2026.05.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>시민 안전이 최우선…포항시, 중대시민재해 예방 의무 이행 총력 점검 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZEFVX3lxTE92UjN3RDZKSG9pbXhobUMwNndQZFBTRVQxUmt0QmRHTTZXU004UEpRd3VER0RReGlDc1lKY3M0eUFOUWx1LTR1V2d5N21sZU1kRmpfb29RYlNZaWp1WWJQY1dxblo?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 569,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '연수구 2026년 중대재해처벌법 교육 실시 > 뉴스',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>연수구 2026년 중대재해처벌법 교육 실시 > 뉴스 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 더코리아</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiQ0FVX3lxTE9IT3MwNWJobmJyTzQtSGY0OE9LU090TEEwNmZSRVo0dFQzZkRaY294Mi1ub09HOVpoOFhuVFNjWXlRcnc?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 570,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '인천 동구, 중대재해처벌법 이해도 제고… 관리 공백 없는 안전체계 구축',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>인천 동구, 중대재해처벌법 이해도 제고… 관리 공백 없는 안전체계 구축 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 녹색경제신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTFA4UVR6U0xNclRsU2hEZk9ObjU0dXVlRlk5QzVJelhvc3liczlaYU1LZFlTNDVxbFlqSzZRUGk5UmNOV1B0VnB1RVdPMGVUZmdyYVlmX3NkMDVJX0FLTEpSbU1Td2dQdWc2?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 571,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '손호영 판사의 판례 공부 161 / 중대재해처벌법에서 ‘사업장’은 어디까지일까',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>손호영 판사의 판례 공부 161 / 중대재해처벌법에서 ‘사업장’은 어디까지일까 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9MTlV1TlJUdGFCM25Cb0ZuUllvczJ1aml0M3F4YW9rbjQ4LW15OWtodnYyVEJ2SVFTbXJsbGpYalYxR3RnTEc1Vk40LVh0SWtXSkF6SzhiMzhpVjhJcHBBZnh3UU1Eak0?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 574,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '파주시, 중대재해 막는다…고위험 사업장 안전관리 전면 재정비',
      author: '관리자',
      date: '2026.04.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>파주시, 중대재해 막는다…고위험 사업장 안전관리 전면 재정비 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 경기일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTFA3am9OUmVWQzBJR1ZJbVdMWkpyUWUyT0p1VzRtSVlpV2ZibHJoai02SlRYQ3IwN01kVEI5VlBBWEpiaUdLZXF5LUM0ZERHYUsyYUF3Sm1nWEI0NTg?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 575,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 4년, 왜 산업현장 사망자는 늘어났나',
      author: '관리자',
      date: '2026.04.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 4년, 왜 산업현장 사망자는 늘어났나 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 조선일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMihAFBVV95cUxOTjV1dHgyOXh0Y0R6dHF0emVtLUhzOGxLNkdUbWRsTy14UVF1VzZHOW9QVVdkVkdVOVdNTWU3UktJNU1oWUxZak5JSXRkMUQ3OXVHVEV3NHJYaEdKYXZ4dkVBMDg4VEd0d25oNHp0empoU1VtejlXZnhZMFRSZjloVzBDa2M?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 576,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[단독]민간 안전보건평가기관, 평가·컨설팅 ‘동시 수행’ 논란',
      author: '관리자',
      date: '2026.04.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[단독]민간 안전보건평가기관, 평가·컨설팅 ‘동시 수행’ 논란 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE5BbXA5cl8tMnRFVlZsUTBIYTIxRU5RTDVJTVNQSzdVbEhGVndKV2xhcW5Nc1FqcXpYWXBPZF9lS18zS1MyTTRucnB5R1VMTmYyM3ZZQ29rSVpFbGlwQkR3aGR2ektyOU9qaWp2amZ5NTY?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 577,
      pinned: false,
      category: 'law', categoryName: '법령·기준',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[매일 2명씩 목숨 잃는데] 국회 노동안전 관련법 개정 또 무산',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[매일 2명씩 목숨 잃는데] 국회 노동안전 관련법 개정 또 무산 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTFBWbkVwM2tvejlEdnp3N2Y1ZzF0bFdod0RkQWJJa290eTNyOVMzWmVPOC1zdDFZSy1CQnNRZlBxWDZZWUtTV29KcTBnT1EwaGpTamtydTY1WWh1VHFMWW5NaXY5Y2xTYzlBRnhkLV9nXy0?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 578,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '법무법인 B&H·세이프지, 산업안전 플랫폼 구축 협력 MOU 체결',
      author: '관리자',
      date: '2026.04.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>법무법인 B&H·세이프지, 산업안전 플랫폼 구축 협력 MOU 체결 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 한국보험신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE5IRDdqNE1ZZHFmNHhQdUplQl9LcC1tTWt6QktDdnZWUHJocHZzMWRpTVg0THVNUFdGNk9mWTdmQUpYVmFFdjE3SGxvUjJTQmpHVkFyVXhYZ1hsVldzY3NLMkdmcDJScTRNUTdJ0gFvQVVfeXFMUFZ2WFMtcWNFY09VYVVORmRGNVFsSWFLTFlkRGFpUzAxbUVPT1d4TlNmYWxUc2Q4QmZvSkNYOEM5SkJnLXJGLVJ4OVJtQ3NHM1RKSE05dk9BMFM0YjJyY2EzQ3Q0QVUybzlfbWFiLUcw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 579,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '개인정보 보호법 개정안, 제2의 중대재해처벌법 되지 말아야 [취재진담]',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>개인정보 보호법 개정안, 제2의 중대재해처벌법 되지 말아야 [취재진담] 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 쿠키뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiY0FVX3lxTE5TQURDaFpOTC1mUWN0djZ5RkppaUpwX1g2cjF6dUE5X0tjcjNFam5xWG54V0ZMOF83NmJTN19iY2Z4U3QxUFJRbTRhV2RKeDFBR2szSHQ3UTRzUm1td1N0UkFiWQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 581,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '"韓 중대재해법 시행 4년, 처벌만으론 한계…제도 개선해야"',
      author: '관리자',
      date: '2026.04.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>"韓 중대재해법 시행 4년, 처벌만으론 한계…제도 개선해야" 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 한국경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTE1SUl9JZDNRaFF5RkdHR0xvZjhfN2puNUprOHh3QU93V2ctdHkwRUVKTVRKQ2pLRTRQd213d1Brc1ZhbTVsV3gwZjhnRjF2UTc0ai00MG5XWDd3QdIBVEFVX3lxTFBMTmx0U2FwLTRUcnJPZGNuWmgybUY4VzVRSEVENTB0eWFRdGtlX254aW12STNoT2VmTTJkTmJYdWwzR3c1LW1hRFNPRmN3Z1VSc3JsLQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 582,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '인명 피해 반복 사고, 정작 \'중대재해처벌법\' 적용에선 배제',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>인명 피해 반복 사고, 정작 '중대재해처벌법' 적용에선 배제 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 오마이뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMid0FVX3lxTFB6WHdldnhyb0NxNktLX2lXVVFGRF9yWXM3VzlrOUpnRE1UeWZjeGU2dGhXcHA0b1Z1c0RtenJaV0dPQ0IxLS1SYUdZXzNTTFIzV0xjNW9VR3UwMnFQVVZ1OWI3QldTVGVhMXZQazd6eS1EeTcwN2tz?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 583,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '울주군, 간부 공무원 이어 실무자도 중대재해 예방 교육',
      author: '관리자',
      date: '2026.04.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>울주군, 간부 공무원 이어 실무자도 중대재해 예방 교육 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 연합뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTE5iVEhja1lPZllpVVJyM1IzOXhPYkEzSUlocGlZVUpzdGVwcUYwOVRzd1p0T1RLdk10bTd2MWRrN2ctU3dFdjRCYkdZam1YdUlZc0VtVW1FSkxrTlXSAWBBVV95cUxPWTdIeVdHUl9yLXV6X3hnaFN3WWFFd2pKUkMybzVqZ0ZhWjFkeXZVaWUzQWVaQnBpM3BSaU9yc3ZRZjVxZkhCSVA4NGNhb2t2SWRuVU44N1BMNFRiREs5Q0k?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 584,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '국힘, 정부여당에 “중대재해처벌법 개정 착수 강력 촉구”',
      author: '관리자',
      date: '2026.04.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>국힘, 정부여당에 “중대재해처벌법 개정 착수 강력 촉구” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMib0FVX3lxTE1vcGtLems5LTRRRjZFQXJFMV82Wm95Sm9IMVZwSGZyc00wczJRT0t1Ny1udjRnTmtMOUgyLVhQVzdSZ2FWaEFoUXZ1M3NKOEJpamZhU3Y4VFY1Y3duNnFwQ0NRTEY3VG9qY1RfeUtMRQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 585,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[중대재해처벌법 4년, 무엇이 바뀌었나] ①엇갈린 4년의 명암',
      author: '관리자',
      date: '2026.04.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[중대재해처벌법 4년, 무엇이 바뀌었나] ①엇갈린 4년의 명암 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 한국재난안전뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiXkFVX3lxTE54Um9MVlZ1Qjl1enpjR1gtZmdjYXRZZE1Mam0ybVBiUzcySGJKOXBfdnVwbnBfTDk1MlM4dXZGd1B1MFhFeEswRnhmamtSYmh5M1RxeEdMbmlfWEJlTlE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 586,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[정읍시] 농작업 안전 컨설팅 추진… 중대재해 예방 강화',
      author: '관리자',
      date: '2026.04.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[정읍시] 농작업 안전 컨설팅 추진… 중대재해 예방 강화 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 투데이안</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiakFVX3lxTE9VaXNNSGdFR1IzWHRpTk9XVWJ4aUE0Zzc4aWdZSkpQUWROQmtweUJBUHRIQVlBOF9Pc3RoNWI2X2hXMnBEQWlrV19Wdkxva2RXSERlbTNXanNPa0FXMVNVY25vbmF0M2lwdWc?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 587,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '“중대재해처벌법 시대, 안전관리의 새로운 기준”',
      author: '관리자',
      date: '2026.04.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>“중대재해처벌법 시대, 안전관리의 새로운 기준” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 한국아파트신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE9ScFdnVlk2RlFhU0VVWnRleEtDN09iaVFZa2xwZVZhaksyZzdJWlBmMTdvSklUVmQxT25zUllQRkNBSHVFSFREU3MtN2dPMnBaRWs4Mnh5Xy1hRFVxOUp5NDJJZ2NLenN6?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 588,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '청주상의, 중대재해방지 컨설팅 참여기업 모집',
      author: '관리자',
      date: '2026.04.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>청주상의, 중대재해방지 컨설팅 참여기업 모집 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 충청매일</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiakFVX3lxTE9nMFNuYTNKU0c5Y3ZrMFoyTV9BQ3NKR2FGWFVjLTR0dDdDYWhXRnZGMFhmQzlQVEJZUGlSTVZSTm95ZDl4Q0RzRXpfZHNyTm56MlpUS09oUE4tR3JvZFh2SmtmemloVjd3bFE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 589,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '사천시, 2026년 중대재해 예방 컨설팅 지원사업 참여 사업체 모집',
      author: '관리자',
      date: '2026.04.05',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>사천시, 2026년 중대재해 예방 컨설팅 지원사업 참여 사업체 모집 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 브릿지경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTFBFWFlXUWdUR3phYUdCa2d2MWdzX3VnWjUwLUFxT0V2bVhreFlMQmxkNWZVblB1bUNJUkNLaEx0VlJaXzNGNy1NNjM5ZjFTbHpUc3lSeWp0a3FTZw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 590,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '가평군, 농작업 ‘중대재해 제로’ 도전 본격화…110농가 현장점검 및 컨설팅',
      author: '관리자',
      date: '2026.04.03',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>가평군, 농작업 ‘중대재해 제로’ 도전 본격화…110농가 현장점검 및 컨설팅 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZEFVX3lxTE9uR1hPa0dzSlhBb3J2RTNPZ1hjS3R6bkhMT1ExNEVfdTRGMEVndXpQNUU2Yk9SQjJOWnlHbVQ2eHJrS3VYdzV2ekluMGQzaWhYYmRlN3pkVU5Dc19UUGg1OWdSWjE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 591,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '무주군, 중대재해 예방 교육 시행',
      author: '관리자',
      date: '2026.04.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>무주군, 중대재해 예방 교육 시행 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 무진장뉴스i</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTFBsd1dHeFJFUG1sbnIwRVA0QllYMHVIUHJWaHFLNVpxeWZOYnNRUU5wNEZLcTlyU0dfOGNZbDhMb3VfTGNERXdwUTJPYkhrZW5paDJ4Sm9uVUpBQQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 592,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '밀양시,\'중소기업 중대재해예방 컨설팅\' 참여 기업 모집',
      author: '관리자',
      date: '2026.03.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>밀양시,'중소기업 중대재해예방 컨설팅' 참여 기업 모집 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 신아일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTFAwLUszN3htQk1LVHBXSHZrN2lPZ3dJcnlBRzFFQi1rSFVWcTJYd2sxdDFXek83Wl9GSVFxYktCVEpUbi1wRUMydjM3aHlGTGpRNFlzcWplU21jQndod3ZDcElfaDBKSmFycmt4MWs5Vkw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 593,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '"강화된 산업안전보건법, 기업 대응 전략 달라져야"',
      author: '관리자',
      date: '2026.03.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>"강화된 산업안전보건법, 기업 대응 전략 달라져야" 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 지디넷코리아</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiVkFVX3lxTE9Yb3MzbjZ3WVJ2QldlTUMzdnU5VzBqSUtnbnJmYjI1aHBRUHowT0dDVHlaLVVRdS1OUXgzbDhkZmI3d2xTVkw3bi1zM3l1QnhJVllwWTh3?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 594,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '서울시, 소규모 사업장 \'위험성평가 무료 컨설팅\' 지원…산업재해 예방 나선다',
      author: '관리자',
      date: '2026.03.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>서울시, 소규모 사업장 '위험성평가 무료 컨설팅' 지원…산업재해 예방 나선다 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 대한민국교육신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiY0FVX3lxTE1rckluUFpoNm0wX2Q5Z2t2YjdYdlVUWjktZjRaaTNfSm1XVV9qcXc3MW55eE96U1BONGIyeDZ2cXFHS2xvcndUTkt0LWNpZS1uT080MVM2ZmV3ckhBcEVpaXRuWQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 595,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '서울시, 소규모 사업장 \'위험성평가 컨설팅\' 지원…"산업재해 예방"',
      author: '관리자',
      date: '2026.03.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>서울시, 소규모 사업장 '위험성평가 컨설팅' 지원…"산업재해 예방" 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 뉴스1</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiT0FVX3lxTFBibVB5ODFUN1N4eENFbXR5T0ZRSjJ4cVExdHVMS0dWTmpGU3R4dzlQUDFpeVhfMUVXeXhaYUVBSVZKRFVWME1hUURvczBxVjg?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 596,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '창원시, 중소기업 중대재해 예방 컨설팅 지원',
      author: '관리자',
      date: '2026.03.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>창원시, 중소기업 중대재해 예방 컨설팅 지원 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 신아일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE1qMnhPOUlwV1BubnM3OGwyWGNsRG8zNmUzX3V3SDVpUUVPSm4wTEt4WW9wRzQtcUFiaTdXWFNJclhuN0l0U3pGOFR5TzU5SFJRc1FZVU90aG93eFFkVktiM1N0TGVYVHp1ZU5DaldLano?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 597,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '‘74명 사상자 발생’ 대전 화재 참사, 중대재해처벌법 적용은 어떻게',
      author: '관리자',
      date: '2026.03.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>‘74명 사상자 발생’ 대전 화재 참사, 중대재해처벌법 적용은 어떻게 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 경향신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTFBncEN4NmJ3V1BiRk5VY2pfUkhPNmk0c0VmeE9QU3NvQy03NjVLVkJYRFZZYUVTS3B2MlpKWUlCV3o4a3BzU0VjNWVIYkV4cEx5TVQ2MkRJNG1MQdIBX0FVX3lxTE1kQXh5VFNzMVBDa0VJa2dpUEN2SDZpM2pROEFWWEcxU1BRVXprSVhpY0hiUHNPNEwtWjZsbE82Z3BVSGJHelpYQUxja1hCQWFpSHJPLWtHbEtlOGdrNEpZ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 598,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '위험성평가 미실시 과태료 ‘최대 1000만원’',
      author: '관리자',
      date: '2026.03.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>위험성평가 미실시 과태료 ‘최대 1000만원’ 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 아파트관리신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1HVkJxYWdYRVdKdkZncENNdzAxeHNkUnB2WW5Tc2dqbDJHQjZfQU1NZ3pRYXBQTjNYcXJvakpQcnpxR3NRNjBGR3F5ZnhHY0x0QktoX3BvOGRvalZ6N1M2clAzWmJsQUnSAWtBVV95cUxNQzA3clJzNWZrckNKU2lLdGRiejNKZjB4eTJvb3pkdUprSW54Mm1sRkE0VkNWeXpSNl8tOHVtRXJhTEI0QUpGcUVjaVdRVlJHYWNjYnlSNnVzckZVVnZjNUtILUlBWFpvWDNuOA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 599,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 50문 50답 신청하기',
      author: '관리자',
      date: '2026.03.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 50문 50답 신청하기 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법무법인 세종</p><p>원문: <a href="https://news.google.com/rss/articles/CBMipwFBVV95cUxOWmVreFZzbXF3a1hfVldRT1g5VW1GODFGRDNGN3psWXJGMjBxZnhkVGNPWFFzbGVYUlBmazVlNnZLVlVPM3NBemtHUlhBT2ZzZEE5Uzk4dldDV2JSZ0hVNVdZMHhncE9Fd1VzRTRZQXE1ZWo3Q3lDWWMxbTNOWVdmYlBsZGNucFIwcTNBd2J5eThtRFE1UmlCNUstUU45ZGVRdUJvVGVidw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 600,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[판결] "인사·재무 묶여있으면 같은 회사"',
      author: '관리자',
      date: '2026.03.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[판결] "인사·재무 묶여있으면 같은 회사" 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE9kU01RNkwzTUo2dk5GcXZkR1p0M1JQY1QyS2QxSGxmNmRWQ2xlQ3JQN2JIbUl5YkN5VG1ZX3owQjdTYUNoNEExWjRmXzRkN1o3d3ZLZHJtbURlRnZocG44eWx6UVl0LWt6VGdvSzF30gFyQVVfeXFMTlpKNFA2SXJwOEtUaW5oNnoxcGlVc1VHclh0LVVoVTdPN293VEJBU0JNaU1EYWRkUlE1OE5kTFluWEIySkI5WFpRcEx1ZjNSNTBRNFhxc2JjVEJPNk84RTFHOVZqRHNLMTN6ZkUtY2J3NkVB?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 601,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해법 적용 사업장 기준은? “본사·지점·공장 모두 합쳐야”',
      author: '관리자',
      date: '2026.03.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해법 적용 사업장 기준은? “본사·지점·공장 모두 합쳐야” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 중앙일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiVkFVX3lxTE5GcXFOb05ndDIzc2xtQ0Y3U3pHMWQ3cnZpTnV4dGNSUEVlTzJaM1B1eC1RYmNUdmVzNVlaZnU0dktTcWdjMVVtd2JDUXBhcUVvVkVCQ1Vn?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 602,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '‘중대재해처벌법도 유예’ 4대 지역 특별법 독소조항 ‘우후죽순’',
      author: '관리자',
      date: '2026.03.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>‘중대재해처벌법도 유예’ 4대 지역 특별법 독소조항 ‘우후죽순’ 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE1rcWotVG9HMXkzUEd2cldZR2RvbWtaa0FFdlQwV1hUa0JmSjRWTV9zZS1nN01Xd1VnYV9mb1B6LXp5REJwQXFEQWJheW9WMER1UlZmUG1sZHNvcW9LdEk3ZmJRWWVhekdSUWlCM2ZrQ0s?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 603,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[기고-신유림]2026년 위험성평가 개정에 주목해야 하는 이유',
      author: '관리자',
      date: '2026.03.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[기고-신유림]2026년 위험성평가 개정에 주목해야 하는 이유 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE56UU54YXJNQWpxa3pNWXhkNGs3ME1McEYzRTVPQnhfWXVwbnFBUXNDMWctbnR1SmFtZmxJby1rbzZJaDlOWkYxYTZ3NUsyRVlfSlB3WTA0Mkg0cFRFRkcwSW9yeVBVM3lmaTJKcF9QVWw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 604,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[열린송현] 중대재해처벌법 시행 4년과 향후 과제',
      author: '관리자',
      date: '2026.03.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[열린송현] 중대재해처벌법 시행 4년과 향후 과제 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 서울경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiUkFVX3lxTE4xOWZHLUJadHpaNnZLRUo5YnljcHc0QW1hYVB2RWNQa1phNVpvcXUyWEZzZzRIdndYV2hleEtHU1lER0VsOEp6Z1RQeFpzdnIycGfSAVNBVV95cUxOU19kakg1X1dxalVpZVdaOUhCcDdwWXpzTkhoSzd0NkdrbW1fLWxYd0tlbDBnTC1BZDZqd2RLSm5KSElMWFR4ZWpkVml1VHZNcGRJVQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 605,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '그룹 회장, 중대재해처벌법상 경영책임자 아니다.',
      author: '관리자',
      date: '2026.02.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>그룹 회장, 중대재해처벌법상 경영책임자 아니다. 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTFB1QXFsa2lnNjdJQXJDOVYya3p0YW5yVWp6NXdwNkV4UUtZNVE5R2M3REVlSXlUNml1T2hzZUxXREFZLVptaGlIZ0hWWFFzWDhWMi1tbDJ4NGNEOUVmYWxHOXBhdVJIZnRlMWNhSFpn0gFyQVVfeXFMTTlBb3A1R3F0SHdwT3A4M08tMlJSRHhzODh4bld1emtQeHpzV3B2SzVWVU5yNG1jU0VhQjBmMmpHYmFRbHhpcHViQ1VibHFrT1FtZ3h5SjBZdTVpMWZDOFFYZGVIcGo3UUR0c1dad19yRkx3?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 606,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '보람상조, 장례 넘어 ‘안전’까지…중대재해 무료 컨설팅 지원',
      author: '관리자',
      date: '2026.02.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>보람상조, 장례 넘어 ‘안전’까지…중대재해 무료 컨설팅 지원 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 헤럴드경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiVkFVX3lxTE42ci1CSHpNdmFqNzZuV0UtQzNFYVJpbVBRZEtvT201THM4VmUzbEdRNTBOYVFSNFlTSkdqdkRjZmZPd0IzQVVEM1BYRUFld1ZTZHRFX3Nn?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 607,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '안전보건공단, “개정 산안법 현장에 안착시킬 것”',
      author: '관리자',
      date: '2026.02.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>안전보건공단, “개정 산안법 현장에 안착시킬 것” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9ZM2hIUEp1a1BnX1FFalBxZXZTeHk5ZjRUWTAtTU5fTTN6UVhuMTA4NHY4ajluSzRYYVdNN3R6bzlramJUMEVUMW9sOFMta09paTVyWEstcDJiWUlld3pnVFJleGxtamM?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 608,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '상장회사 중대재해 발생 시 \'즉시 공시\' 의무화',
      author: '관리자',
      date: '2026.02.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>상장회사 중대재해 발생 시 '즉시 공시' 의무화 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE1zQ0ZTaGRxellUOUhGc2JrbUQ5aTI0b043RndVTUhnLWZYc2FCWUtjMGJUM0FLWk42S2lybzk0bFA3THlMQk9hRTVRR05UbTVxcE9CQlVUOVF2bDBjTVFiX2l6NGtXaXBWWDU4azln0gFyQVVfeXFMTzZqcGJaaFZBSVJuWHdoeWFzcE1sT0hHTEh6dFpCNkdEbHpMM0g0anRlWkVHR2Y5am1TUVltdXgzZWFPNmRXVEI0ay1BeXNlTUJTbmR3NGZ6b3JHSjZkaWZ4ZnZoalJrcEhiNmxLQ042ZnJn?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 610,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '울주군, 소규모 사업장 중대재해 예방 무료 컨설팅',
      author: '관리자',
      date: '2026.02.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>울주군, 소규모 사업장 중대재해 예방 무료 컨설팅 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 연합뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTFB0em1EdGxxN1pKRldNNFAteGNiNElvVHdiUTJiLUNzYnBtNk9YSnVkRTJ0bDB0NHVkbWpHd2IyLUVOQjRlcUFmeGhWTlhNX0djbEdKeVVqYmp0dmvSAWBBVV95cUxPOGttNThkNDcwWkFjSkhTUVE5SzhRdHRLNG5hZVpCX25tdXFlOVVhTVk5RjZvUEVsblVNajVpZ2h2alNKVTVPUXN6QThRSVkwMkhOZGRaZ2JvWklPUkRBd2I?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 611,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[산업안전 뉴스] 3000만원 지원하는 안전보건 컨설팅 2월 19일부터 접수',
      author: '관리자',
      date: '2026.02.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[산업안전 뉴스] 3000만원 지원하는 안전보건 컨설팅 2월 19일부터 접수 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 아웃소싱타임스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMickFVX3lxTFBndm5tcXY2LW5uSVhRMVFjTDFPOFRSb0hRcmZ2bXFpdTJRTWt5VlVIcWN5MDJnV2ZrdUJvVkVrbWphUGJWVWMyQTJ1dFlHYnAwS1FycnpfOGJSLXJDMDcxd3Q5dkNmUHo2ZVp4UGpsOVFndw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 613,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 시행 4년…현장 변화는 ‘아직’',
      author: '관리자',
      date: '2026.02.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 시행 4년…현장 변화는 ‘아직’ 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: KBS 뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTE9TeEM4RDFyUkZuSGNnbnBQSmJ4XzJRd2lJel9ROTlfQ19HNldrVGNvLTJsT3RKeWpGS2xxNW5BcEZETXNXVHRoM2ZZVWpfZDk1VmY2RDdGQlF6Wjg?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 614,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '개정 산업안전보건법 4대 포인트',
      author: '관리자',
      date: '2026.02.03',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>개정 산업안전보건법 4대 포인트 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE80UHdXaWNVM3BnQ0RxSFk1bVA4bFdVdGhPOFR1WlZTMDRvejlyQkxIY3FhNVRGYXpwaTRxd1NRR1ZQQWlKTHQ1cHdlYmFJenFTanhDcmxrZ3RvNVBrLXlsTUdjT2Vyd3ZkZG1LNy1n0gFyQVVfeXFMTzY0S0lYWXRCVGZXQTlsc29DZXcwdU1MYVZUdjZsRi1aLVZPSFJJd1lzT2FXTXJZWUQ4YkxEZGYzUmtWNWt2Tk5ET1NFeTNmVkRwT0dxSHRzNXRYd1FpREktR1lDMHRrWXkzY3IyNTJBcFNR?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 615,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '산업안전보건법 일부개정',
      author: '관리자',
      date: '2026.02.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>산업안전보건법 일부개정 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE5MUXV3aHpqNnE5ZWJCZHcxdHEzVXQzZ2VhVkJfaVZGcmNuRmg0YU5yN0VnZzM0Vm5sRDh5Z3ZtdHdHU2oyX1luZ3hEVWVfQ0hzSVJySndwOHNtMGlMQ3Z2bVE5LVZwSWFOc01qM2Z30gFyQVVfeXFMTkhaMnZoVXpOVms1enI1Q1hUanEtZkROajlZWUM4QmwzMTQwWDZpVkNWdEEyZmZvT3BwSFlDalh1NTJ1UHkxZEVxZDRSTHk5WHU4MF9FanEtRzhVYkhxNm1fSVZDVmx4MFRzZmNLMFZSTXVR?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 616,
      pinned: false,
      category: 'law', categoryName: '법령·기준',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '김태선 의원 대표 발의 ‘산업안전보건법’ ‘자원재활용법 일부개정법률안’ 국회 통과',
      author: '관리자',
      date: '2026.02.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>김태선 의원 대표 발의 ‘산업안전보건법’ ‘자원재활용법 일부개정법률안’ 국회 통과 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: v.daum.net</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiT0FVX3lxTFBHUEg5ZFpNZXpWSEp5ajB6RUlzVXRzcjZSZG9hTlVYaHE2TUZ6eWVnMUFlMWFCZnN4MjdDdncxTDItSGF4TWQ5LVFnek1JZFU?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 617,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 시행 이후 판례 분석',
      author: '관리자',
      date: '2026.01.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 시행 이후 판례 분석 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 중소기업신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE9zT1lXczZIOUc5eUt4U3Z3U25xb2JFaU9ta2ZHMjJ3amRLNEVkT1hDM3lzcUhKbnV2V1hZME1vY0xZSGxWbmFiNVNUSnhJLTNFWkYteVlIeDlZamlLR0V4VVJPd2pZdjV3SmV5OFVB?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 618,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[자료집] 중대재해처벌법 시행 4년, 국회토론회 왜 산업재해 공화국 굴욕을 멈추지 못하고 있나',
      author: '관리자',
      date: '2026.01.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[자료집] 중대재해처벌법 시행 4년, 국회토론회 왜 산업재해 공화국 굴욕을 멈추지 못하고 있나 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 민주노총</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiTkFVX3lxTE92aFBDWDJkb203dXlldzJTV05GdEpzR3BaVUVjWkRwM2xudk9YZUVYRjhXYlZXRldpOWJKcGlEc2UzU19wZmV1X2ktdlAtUQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 619,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 시행 4년, 중처법 엄정집행 처벌강화 촉구! 민주노총 경기도본부 기자회견',
      author: '관리자',
      date: '2026.01.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 시행 4년, 중처법 엄정집행 처벌강화 촉구! 민주노총 경기도본부 기자회견 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 노동과세계</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE1ScGY3N3JtQlpZV0huRzJTMi1pMnhhd0tWcFRaY09fUlZaclNxUF9iMXFrSHB5YnNpaFlDQ3kwZVJFbXh0YUx0QUtkbXNzRVZiMl9wZ0tnRmM0Vm5tXzhtTTNRWDd1NVVvR1hPckJ30gFyQVVfeXFMTTh4YXZ2MUFhTWszX0ZZY0lsd3dwZG5saXBIeDg1enBUbWE1WjUyYjVwenNpUU1sbmFsR0tRVTFOMHNCdlNWa1lQTU5SbVR5UlB0TUJheU9yZ1BtbmN4R3c5OG84ejFhb002N2VSNDJaWnZB?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 620,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '\'죽어도 늘지 않는, 너무나 가벼운\' 중대재해처벌법, ‘산재 공화국’을 벗어나지 못하는 이유',
      author: '관리자',
      date: '2026.01.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>'죽어도 늘지 않는, 너무나 가벼운' 중대재해처벌법, ‘산재 공화국’을 벗어나지 못하는 이유 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 경향신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTFBRY2hONjhRWmZhaXhvckRkWlZDcGRxNm1MRWd3UDRnWThLV2x1UnNncFRxM0lEQ21FQVhueFVZdVN2Z21VcVhyUFFPM2pCQzRweFdqT25zRVoxQQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 621,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '"중대재해처벌법 시행 4년, 노동자 죽음은 멈추지 않았다"',
      author: '관리자',
      date: '2026.01.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>"중대재해처벌법 시행 4년, 노동자 죽음은 멈추지 않았다" 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 오마이뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMid0FVX3lxTE9XaE92MTZYWGlvQ2d2QlZCS3ZSU2NDYUpKTnMtUU1EcnVIUlM4TS0wdWg0QWhlMTJvUG8yTHRlalZRWWdYUUtLWk1zdl92Y1BYY2pxUEtta0VTT3ZQWHA5d0gxajdBYkxEUzM3MExPSGFMRUtZSXQ0?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 622,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[토론회] 중대재해처벌법 시행 4년 국회 토론회 - 공지사항',
      author: '관리자',
      date: '2026.01.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[토론회] 중대재해처벌법 시행 4년 국회 토론회 - 공지사항 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 민주노총</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiSEFVX3lxTFBGZnJWZHZQbGlVTEU4SnVfNl8tY2pvcDJMd0NseHh3aUtyS3BiVmlfeWNGZjI1NEZkeFE4cUdMSUZPTTdWajVNcw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 624,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '대기업 오너 등기임원 겸직 줄어…“상법 개정·중대재해법 영향”',
      author: '관리자',
      date: '2026.01.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대기업 오너 등기임원 겸직 줄어…“상법 개정·중대재해법 영향” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 인더스트리뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMickFVX3lxTFA1M2tEUmhTZC1OQ2h2dU9TMWRMRml5OGhzTFJ4dG5KMFM3RXBVeVBlUjdBd3hrUGE1MHRvSlFRaDJjUVlmVXNkM1BRVWprODBxQlphaXlXQmVsSV9oV055ZGdWQkgyMXFXOGJaNlZNNVhYUQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 625,
      pinned: false,
      category: 'law', categoryName: '법령·기준',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '“‘산재 과징금’ 법안 조속 처리” 설 전 국회 본회의 통과할까',
      author: '관리자',
      date: '2026.01.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>“‘산재 과징금’ 법안 조속 처리” 설 전 국회 본회의 통과할까 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTFBZZHdwMW82RUxuc2g0TFpCXzYyemJsWkhjOEdCRWFQbmFJQUJTWE10ZXVyeFdlLXJGSzZOQ1RSSms2SGpTNFRmakF1dEU1TzdFM25ncUx3Rm5ySkxUM0VyQ2RpQ0VYWldIZnFuV1lkM2g?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 464,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 시행 4년…‘일하다 죽지 않는 사회’ 언제쯤?',
      author: '관리자',
      date: '2025.12.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 시행 4년…‘일하다 죽지 않는 사회’ 언제쯤? 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: KBS 뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTE9heWMwMFJvWE1wQ1RuSzI4NXZJazBmYlktZWRNM3VYQ1dtNXZJZlpXNnVQRFhRbWVFOVhpZ1hKTnBudmNqZTg1R0RiVkE3MEJncWI4V3hGSFNKZXc?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 465,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '2026 산업안전 정책 \'소규모 사업장\'에 초점',
      author: '관리자',
      date: '2025.12.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2026 산업안전 정책 '소규모 사업장'에 초점 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9xaURlUDAxT3prT1g3UW9BVEN0REVWU002UHdtLWFEWHF0Sm5hNEYxRzRXdDJrSG04TFFseDFDMzdxbDBRUjdiQ0JfUEpPYzVaZmNuZlN1Q29tMVpzY1BWTHoyMzFjQVE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 466,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '산업안전보건법상 ‘근로’를 ‘노동’으로 대체 추진',
      author: '관리자',
      date: '2025.12.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>산업안전보건법상 ‘근로’를 ‘노동’으로 대체 추진 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5OcE9zdWo2dzBiZkxxRFpIMUh4LXJqRFVId2o5TUFqS05wQ2p3LWlGVDVkQlhTS2t5T2pTRUtTWUdPc0xMUnRuNzYtbkV4Nkw0UmtNVXZYb0ZwQ2lQWFFoVkdWd2x6Wk0?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 467,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '‘어선원 안전·보건 매뉴얼’ 개정판·‘외국인 안전·보건 가이드’ 무료 제공',
      author: '관리자',
      date: '2025.12.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>‘어선원 안전·보건 매뉴얼’ 개정판·‘외국인 안전·보건 가이드’ 무료 제공 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 부산일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMidEFVX3lxTE85SzlrekZFWjVCTHAxRWdzVUFVcXZPZnItSGFvYjdkNkhVdWhELXFDckloeGh5dThjcjNKaDYzTEVyd1Vuc0JHdEJQcXBvVXFacC1lRFk0aC1uVTgyX3pIQTdKUGdBNTBQenBiRVJaQUo0Q05k?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 468,
      pinned: false,
      category: 'law', categoryName: '법령·기준',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '산안비 목적 외 사용 전면 차단… 박홍배 의원, 산업안전보건법 개정안 발의',
      author: '관리자',
      date: '2025.12.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>산안비 목적 외 사용 전면 차단… 박홍배 의원, 산업안전보건법 개정안 발의 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 에너지데일리</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE1rbHMyQTEwRDFhYW90NHFoZjdyUm9URzUxaWpxandYd3dDR1FtNERLWGhMdHdLSnl3Z3JvN1E2ajIxVEQ3OWQ4X2k2RFpQY3pib3Z4YmpFSkZuU2VXUnFUakJkTlFTak5TQXlQbDVlSG0?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 469,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중기 10곳 중 6곳 “중대재해처벌법 시행 후 경영부담”',
      author: '관리자',
      date: '2025.12.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중기 10곳 중 6곳 “중대재해처벌법 시행 후 경영부담” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5oaE9fYmFIVWdKVExHOVBJN1h2UGU3N3JBeDV4YXFha2U3TndvbGRCallqZ3pMR1o3b3ZfQnAyLXY4LU9FU3lvam9ScnhfZnN3YlNUQmlfUGpkbThnZzZ3cWppbkZESTQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 470,
      pinned: false,
      category: 'law', categoryName: '법령·기준',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '“중대재해 전에도 작업중지 명령”..김태선 의원, 산업안전보건법 개정안 발의',
      author: '관리자',
      date: '2025.12.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>“중대재해 전에도 작업중지 명령”..김태선 의원, 산업안전보건법 개정안 발의 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 에너지데일리</p><p>원문: <a href="https://news.google.com/rss/articles/CBMickFVX3lxTFA1RjRhLU54U2U2SHA3RW9PWWFJQWRaci1yT05WdVktYTRTSlg3ZENMblVTdmNjTDYwT3pSMS1xOVNGb2pYVWxwSkVlaGE2eXpwR1FURUo5MnpvclVNeDRxQjQ5NDVEUVM4QWJQMVNMTG5Ydw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 471,
      pinned: false,
      category: 'law', categoryName: '법령·기준',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '“작업중지권 실질 보장”...박정 의원, 산업안전보건법 개정안 발의',
      author: '관리자',
      date: '2025.12.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>“작업중지권 실질 보장”...박정 의원, 산업안전보건법 개정안 발의 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 에너지데일리</p><p>원문: <a href="https://news.google.com/rss/articles/CBMickFVX3lxTE5WZElIY1NCeUpoR1YwdUZHeXRlQWx1NXo3b2llV1FuaVhMbjBNM24wRnktcV9kY3ZLX3dPWU04dmdoeURfa2dyUVZpOUZBZ0trMWo0MnlhWkQ3VW5OTk9RS1c3WmRvWXUzTWU4X0tSa1NlQQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 472,
      pinned: false,
      category: 'law', categoryName: '법령·기준',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[성명] 죽지 않고 일할 권리. 국회는 지금 당장 산업안전보건법을 개정하라',
      author: '관리자',
      date: '2025.11.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[성명] 죽지 않고 일할 권리. 국회는 지금 당장 산업안전보건법을 개정하라 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 민주노총</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiTEFVX3lxTE5ETlFzVDZFN2xfY1h0VFFuYTBwQ1hyQjIyeGtKa2JNZVduay1xZEpSWFBSbDl1a25MRklFVVVCRUlNMHNDcWV0WjhuM3A?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 473,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[근로자 건강이 국가경쟁력] ⑦\'중대재해처벌법 시행 3년\'…사고는 현재 진행형, 실효성은 물음표',
      author: '관리자',
      date: '2025.11.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[근로자 건강이 국가경쟁력] ⑦'중대재해처벌법 시행 3년'…사고는 현재 진행형, 실효성은 물음표 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매경헬스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE9XSkU4b0VSTnZScjhIUlRKQlRzci1abkdBUUZMVkxfenpKYmNzQ0drOXBXQ2JydnNzLWlobkVsRTZSMDdsU3RYaUVwQTZzS2hSWEJqS01LN2xVdWphMy16cWJTOUJfcWRMQ0lwZg?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 474,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '연천교육지원청, 교육현장을 위한 \'중대재해처벌법\' 업무 매뉴얼 교육 실시',
      author: '관리자',
      date: '2025.11.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>연천교육지원청, 교육현장을 위한 '중대재해처벌법' 업무 매뉴얼 교육 실시 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 한국미디어뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZkFVX3lxTE1mN0xCNjJNM29ONnczRDJjQzllZkV5LVNPa0FIRi0wcVNnSGU1XzFLR3d4ekdrcmVnQzJVb191RGw0VFVHdS1xQ29FRTdJYU9yT2pWanNCOHVkNWJUS0Z0T29kM05YUQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 475,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '‘안전보건공시제·재해조사보고서 공개’ 상임위 문턱 넘었다',
      author: '관리자',
      date: '2025.11.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>‘안전보건공시제·재해조사보고서 공개’ 상임위 문턱 넘었다 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE1QOVhTZ0FkbFJiMHQ2NEZHOHNJVm9RQjdHMHRCdnBUM2gwRjBtVDM2X1pDVktoMmJud25EVndPdzVJVk0tS0pwRl9BRmd1aUlJSUhrTXNRQkoyLWdrTnRJNXpEeDhpWXBNRkFRbkpnY3Q?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 476,
      pinned: false,
      category: 'law', categoryName: '법령·기준',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '“위험성평가 미이행 시 처벌 강화”… 박해철 의원, 산업안전보건법 개정안 발의',
      author: '관리자',
      date: '2025.11.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>“위험성평가 미이행 시 처벌 강화”… 박해철 의원, 산업안전보건법 개정안 발의 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 에너지데일리</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE5XTDNRQl9QODNzTTNsX3NGS01HcWkzRHlzb1VnVzRWRVhrOS1xODViQkRONDJSRDZ0OFRBa2hfM21yN0YtRDJxYmUyY2JzSkpPeW1OZTJWbUlYOFZ6OFN1TzJFZnhUdXhicTZhU1RTOEo?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 477,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '명예산업안전감독관 의무 위촉 추진… “노·사 참여형 산업재해 예방 체계 강화”',
      author: '관리자',
      date: '2025.11.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>명예산업안전감독관 의무 위촉 추진… “노·사 참여형 산업재해 예방 체계 강화” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 에너지데일리</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9tcjRWWk1GcG95WnFFbkpudU94LWRyeS1zdVZBWWpDcjdpTEE2MWhkd2t2LUY4SkxWdlFyOWF3N2RURXA0aV9kTFIyaElrQ0JLLU5OaHVqSjAyRkNBSlgzbGJGZzBLVkpjMjB6d3hoMzQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 478,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법에 따른 사업주 책임, 갈수록 무거워져… 사고 발생 전 미리 확인해야',
      author: '관리자',
      date: '2025.11.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법에 따른 사업주 책임, 갈수록 무거워져… 사고 발생 전 미리 확인해야 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 로이슈</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiekFVX3lxTFB6cE1YS0RBRXFZNlluUGJvM1huZ0dvWk1GX040QkxWR0Fmck1oNXUwX29pcUQtY1ZBNzIxWWl1SVpySkdyUV80MU0wckd2TzF3Zk5PU0xqUTJ0LXZ6Ti1VZUZUc0NPOUxwdHBrZWhRS0JvV0VCaHM4SHJ3?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 479,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '용산구, 산업재해 예방 앞장… ‘관리감독자 가이드북’ 제작·배포',
      author: '관리자',
      date: '2025.11.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>용산구, 산업재해 예방 앞장… ‘관리감독자 가이드북’ 제작·배포 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 핀포인트뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMic0FVX3lxTFAwRjk5eDQ1cHpHOURmdWU4c3g5RDFuaWkwQk1Pb3hhUHBYbUZrMW4tSVFUZFljc3dZS1ZkNUd3LVh6bEpJbnBMVkVvT29BSFBDN1JCTkF3QnJvcnl3cW1CM2x2SDJ6SzY4SWQyZjQtTklBNk3SAXdBVV95cUxOZm9JRkR3QVJFdU1ib3RHZDFIS3FRa2xHbjlULWx2b0pxWk9XODVwdDhvelBGMlpzblJPcjJBZV9SOHVVUkxtZ1NTc3VNTEZnLXBBN1ZzZDZoQTlhSGk0WFJpVTI0QmxPRERlbXdHcUpVU2NQMnpFTQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 480,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해조사 전문성 강화…‘산업안전보건법’ 개정 추진',
      author: '관리자',
      date: '2025.11.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해조사 전문성 강화…‘산업안전보건법’ 개정 추진 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 에너지데일리</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTFBzaXJ6ckFkMFFBWjRPOHVMSXd5RDVjY2REV2x4MHoxejU0ZDVuLURkUjhCYnVHaFJYcHdFVGlxeEFpSmRJb2FGdGtYUWc1YWRLVFZwSllpMU1nelJaeFFRcFAtcm1VangtUjFXRndWQ20?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 481,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '‘산재와의 전쟁’ 따른 산업안전보건법 개정안 무더기 발의',
      author: '관리자',
      date: '2025.11.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>‘산재와의 전쟁’ 따른 산업안전보건법 개정안 무더기 발의 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 아파트관리신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBWR2NvZXlFS1VDNHFYTzl4MmhQODR1QjZLeFY1bEhLZG9IcnNfNjR0YTVVcWlCQmJKTVc2eTJDT1NuV1daOGRLd0FRRGJiTVo1Vng2OHlqdkRQSUZhSGZ4dS1uZkQ1S2vSAWtBVV95cUxPVFc4cEFKVWhYX0pKS1ZHbkRmelkwZjZrMjRHZDJrdURYMnFhZThjTHZHaElBMzRJSElGcTFaNjhDd19QLVVSLTV2QnR5eXlGaWxDOXNHd0FZSEwwT19kNEVpb2xwVVFUdzhfdw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 482,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 3년, “안전 투자 늘었지만, 재해 예방 효과는 아쉬워”',
      author: '관리자',
      date: '2025.11.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 3년, “안전 투자 늘었지만, 재해 예방 효과는 아쉬워” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 물류신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE9ORVVjUUhfUXRGVTVVZDVUVURZZnFzT2YzT1AtbURxODNHRkNyTHgzdS1ZcG5WcW8yeDVUZjcwd043TEFVME81MUg4d25WY3hRVG5yQ3VaQ3VoZktwN25rT3ZpTWlNWG15TEow?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 483,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[김민승 변호사의 국가계약 이슈] 중대재해 발생 시 형사처벌을 넘어 입찰제한까지 (국가계약법 개정안에 대하여)',
      author: '관리자',
      date: '2025.10.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[김민승 변호사의 국가계약 이슈] 중대재해 발생 시 형사처벌을 넘어 입찰제한까지 (국가계약법 개정안에 대하여) 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 정보통신신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE5zdE1Dc3ExdTZNU250b1hEYjBrWldzZzdqZGhPTWRRalkydkl1dWF5Z1lrTk83X0lNMW9HUUxlRER5UWJySUx4cjFVN3pPOW10RkIzNUpER3VEd3E0ekQ1VU1XZ2JGNG1R0gFsQVVfeXFMTmtaZlZKeGRPNFQ3Q2xnVGNISlg3b0VzeEgtYmIxNldaMXFpWkhXa0t4MUJXVDdjY2kwSGxyTWJ6cEU5TU9sYUQwZVZjZWxKci1lc3R1eGU1akdaeDVILVppZlUtQTZmdTlfVWhf?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 484,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '작업중지권, 노동자 참여 실질화 산업안전보건법 개정 촉구 선언 운동',
      author: '관리자',
      date: '2025.10.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>작업중지권, 노동자 참여 실질화 산업안전보건법 개정 촉구 선언 운동 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 민주노총</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiSEFVX3lxTE5uTzRoRV8tT3hQeDZEajlvVGlWa1huM2dkQ3pYM1lvMldBV2l5QkZqNm1HT1Z3aTNQQUt2V2VJQzlNMUJiMVJRUg?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 485,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '입법 취지 달성 못 하고, 산재 책임자 처벌 효과 낮아',
      author: '관리자',
      date: '2025.10.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>입법 취지 달성 못 하고, 산재 책임자 처벌 효과 낮아 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: economychosun.com</p><p>원문: <a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE00czUzWFNmbDE0dVFaU09Pa3d2cy1Odm9ZQ0VDNWdTTVU0bTJHTFZOYmg1LXBuZnFtbUEydVhTdHYyZHAwcUxLbm5fTFpFclVJeDFESUxCTWVrQy1EaHdmSnNWbC1WX2RWMU9EcWY0NzVqN0lSVDUwTzNQZUVLQUU?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 487,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해법 시행에도 재해자 수 오히려 지속 증가',
      author: '관리자',
      date: '2025.10.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해법 시행에도 재해자 수 오히려 지속 증가 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9DazgwWWpmQ2dPOVJxaHFXUW0zalJGTGl6Z0RKN0o2OXhvcHZ5NTRaOWVWVzJiazNBTUhFS0dqRWt4TFN0bmozWTZXM0c4b1I5dlRrenF4Q1NpYlJ3MHJhZjBTcW5OaVE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 488,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해보험, 약관개정 시급',
      author: '관리자',
      date: '2025.09.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해보험, 약관개정 시급 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 한국보험신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE05Mmkxam5MdWQ3YWxvb3NLXzBqMkZOZXl4MXRtREZxZ1RONWZfQlF2LWVSZ25HNDdKUy1vUFZmUHA1c1l5ZzdCVFQyRDBEbzVXZ2VmSThZbl9JajVMMGF1RmZPT1pPMjdTU2k00gFvQVVfeXFMTjZLN2ZwbWNjdWJfTjJIVmNjQ0hSYzE2LWFybktXVVV5bnkyVWdXbGRTRlZhb1dqdS1IUlhWdlJKc1JHTTZIOWl4UjhqUVNabjllSEZqblpBTzBlZ1JvcnlmLWpwTXp1SWZHVWgtdHZJ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 489,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '화성특례시, 중대재해 예방 위한 안전·보건 매뉴얼 개정·배포 공공시설·산업현장 안전관리 절차 담아 현장 활용도 강화',
      author: '관리자',
      date: '2025.09.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>화성특례시, 중대재해 예방 위한 안전·보건 매뉴얼 개정·배포 공공시설·산업현장 안전관리 절차 담아 현장 활용도 강화 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 한스경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE5TbzJMcm5ma2haMmFCNS1kRDlXZ0ZUTmZZemlkV0w5ck9rYTM0WXRZX1NJRTlBcWJpdVFfdnpmdldreldYMXp4akNNWGpkcHNtOWVqbl9IWDQ5WGoyczUtR3pkV2tFSjdlV0VR0gFvQVVfeXFMTjlDVkhxcDZILTFwZmRwYkY5ZkI3dTBxMGlITkNwTFJHX3dOMDVON1Q4Zl9sWGFQVF9xekFDWHdYNmZ6TURBMWhJcEg2c0lvMU5KZ0hKcjhDVEFPU0MtM19YYjNDU19fRUtna2N0eDhz?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 490,
      pinned: false,
      category: 'law', categoryName: '법령·기준',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '산업안전보건법 개정 발의안 동향과 쟁점 (2025. 7. ~ 8. 발의 법안)',
      author: '관리자',
      date: '2025.08.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>산업안전보건법 개정 발의안 동향과 쟁점 (2025. 7. ~ 8. 발의 법안) 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE1ET3JLNmZpTy00UFhpTTFuWTA0Rnp1YlFxcC1oOERTWW1IWEFWamNjRGlvcFFvbFc0WVZLZ3dXWlRzVWlPMXBFNk55V1VxQ1U2TlJqcUFleTJXMVo1SW5VX0t5UWNpeUNlQWM2OEtn0gFyQVVfeXFMUGVxV2JTckw2bmlSdzIzR1dBMUcwUlFPU3NxVzJBbllDcFV3UkxiODNOd3VrWG1ya28tR2s5bWFkMTJ0dTF5VThPNGt4dVcyWlQ4WHk4OGdHeWYzYkZ1ZHFjVl9mT1NQS3dZMWNtY3ZsZVBR?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 491,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '대구시, 중대재해·재난안전 담당자 실무교육 실시',
      author: '관리자',
      date: '2025.08.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대구시, 중대재해·재난안전 담당자 실무교육 실시 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE5VZE5jMGV0eENtRm9EOXNfN3V4a1h1WDV6djhWWWNwRkREY3A1TUhXOWJEaXdlckZ0by1mUW04NFVlUkdWbnNmWEpUOUZxdlFRUWtKX2xFTEd6Uy1kTFBjc19MeHdaTnFsNkE3R2ZPakQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 492,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '‘산재와의 전쟁’ 선포한 李, 다시 ‘뜨거운 감자’된 중대재해처벌법 [옛날신문보기]',
      author: '관리자',
      date: '2025.08.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>‘산재와의 전쟁’ 선포한 李, 다시 ‘뜨거운 감자’된 중대재해처벌법 [옛날신문보기] 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: sisaon.co.kr</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTFBtZXcyQVhWVW5BVzk2aUVvLWNUcHBaVTJLaWhxUXV0RmkwZ0s1UTdLRGtlb2pSenBYWDdsLUZxTWw0azBnaXFYZGdzdnZ5ODFDdmphYkY3YzZVMk5adzZMb0NpQ1NtUnRCOTd3?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 493,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중처법 3년, 산재는 더 늘었다…李 정부 ‘엄청 처벌’이 산재 줄일까',
      author: '관리자',
      date: '2025.08.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중처법 3년, 산재는 더 늘었다…李 정부 ‘엄청 처벌’이 산재 줄일까 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 월간노동법률</p><p>원문: <a href="https://news.google.com/rss/articles/CBMib0FVX3lxTE44OHA0UmkyTkNNZU8zQWlxN3FfTUk5UUcwOEJJMWJTMzFFRzdnbi1qcHNkWndKNHBsYkhHNEIzWnlNNmVVSUh0V3ZXVmFzNHhUSUhkT2NtWUMwS01nVFpKRXhtUk5WYXhtdk11Z0VLYw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 494,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[앵커 브리핑] 중대재해처벌법 시행 3년 지났지만···이재명표 중대재해 예방책은?',
      author: '관리자',
      date: '2025.08.11',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[앵커 브리핑] 중대재해처벌법 시행 3년 지났지만···이재명표 중대재해 예방책은? 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 대구MBC</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTFBGakpWVzFvVjJ5N1JOXzluektZYVcxWC1xYlVVdjJzdENkaUltNGFyRnV4S0ZoRklRN3JPZElCcHNBRkdHMFE5ZmdZM2s5X1BoTlRvUy03VEFiZw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 495,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '\'산재 엄벌\' 李 발언에 관련 입법 속도내는 與...더 강한 중대재해처벌법 예고',
      author: '관리자',
      date: '2025.08.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>'산재 엄벌' 李 발언에 관련 입법 속도내는 與...더 강한 중대재해처벌법 예고 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 뉴스핌</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiXEFVX3lxTE9ZOXpMZWI4WjlLclBXVVIzdDRDSWNUenJSZnpsdWFtc080TDlQblNTdE1aTWR4NlV5blYtQU9YeW1ieGtQSjVWNlI3dHU0ZUpxd2h1OFZBdDlwbVBE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 496,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 시행 3.5년, 재해 감소 효과 없고 현장 혼란만 가중',
      author: '관리자',
      date: '2025.07.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 시행 3.5년, 재해 감소 효과 없고 현장 혼란만 가중 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 뉴스1</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZEFVX3lxTE5DN0taZGFaYU55MmFTZVNVMmFyQWlHbi15cUJJX192eUM2TWZyaTZndmx1anVETTdGRVRSODdqckJ1NzVlb2h0QVRCN1dUaGIwZU5nM2hCV013dElVSzRzdnJoTEk?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 497,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '\'폭염작업 시 2시간마다 20분 이상 휴식\' 의무화…17일부터 시행',
      author: '관리자',
      date: '2025.07.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>'폭염작업 시 2시간마다 20분 이상 휴식' 의무화…17일부터 시행 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 대한민국 정책브리핑</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTFBTeGstbDN2b0tkMW5PeGtWSVBRaVNsYUlYWGVSWmRQZGJQWTkwcDd3NXVsaENBNG42MzE4bFRScjdmV0hIbi0zY2pEZENoN0lZMWpFSEFPM1VMcmdsa0FyQjFZNlZuTGV3SW9yLQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 498,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 3년…개정에 나선 국회',
      author: '관리자',
      date: '2025.07.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 3년…개정에 나선 국회 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 네이트</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiU0FVX3lxTE9YM2Fqa19KY1VvRTE3ZzNXUXl3MGJ4M0ZnS1ZBOGtwN0JPbHR0aXRaS1B2eHgtQnc4SU1aSVI5bTNRSTdldWo3bjZtX0xPd0d0Tklv?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 499,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '경총, 원하청 협력 안전관리 가이드북 발간',
      author: '관리자',
      date: '2025.06.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>경총, 원하청 협력 안전관리 가이드북 발간 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9rWS1JYWMzOUhEWURsNVlocWU2R2ZFbG5IWEM3bFBzdVE5QlF6amhhZDgzWXBKU25DRGY3eFRsaXBzNXkycTBNZnl1MHdZNEs3Y1JJeUR5OVBlcUJMZkJmUThGRXF1QTgwa1RLZENSb3k?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 500,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[중대재해처벌법 3년] \'강화 vs 완화\' 21대 대선 후보자별 입장은?',
      author: '관리자',
      date: '2025.05.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[중대재해처벌법 3년] '강화 vs 완화' 21대 대선 후보자별 입장은? 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 비즈한국</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiVkFVX3lxTFBDQkZxVTdOTDkzX19jZHM3NWtqTVFOZTZkUkZqUDBKVGZDY3J6amZuU2MtTzJ2THlLVGNmSVBVUjdaQVFyci1DOTFPNkhKMmZrOWNfeDBB?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 501,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '“중대재해법, 처벌 대신 예방으로 전환해야”',
      author: '관리자',
      date: '2025.05.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>“중대재해법, 처벌 대신 예방으로 전환해야” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB4ZHh3SmZJaGhRbzZLRkhtSUxfYUxpNEljYmpsS2ZlSERBWW9jWXU3Y1BfbzIyLXVmcHY1d0JkemZVS2JmRmlGdHlOOWNEZ082aGF4eDZnM25nOF90QVp0WmNtcUxsSW8?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 502,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '김문수 "중대재해처벌법은 악법, 노란봉투법은 위헌…모두 고치겠다"',
      author: '관리자',
      date: '2025.05.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>김문수 "중대재해처벌법은 악법, 노란봉투법은 위헌…모두 고치겠다" 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 한국경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTE9OdDJINHFjbm83bkNvZTYwVDY5R1J4TWtFV2NzNFVGUkVvWHZjdEM0SUhXclpCVFlGX3M1MmxPZ21scThRSjZOT2JiMllLVTFWM3llZkdpYjdDQdIBVEFVX3lxTFBNc09HUktJcTZXMFZBUGJqeTBxRDZvZjhmZGhEamFQeHBDZV9mMEN4TU9jNDVGMHhnNTdfeWRvcWwyOWZSYWFvQ3hxSllPRTBRNHNvbQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 503,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '사무직군 영역으로 중대재해처벌법 확대적용',
      author: '관리자',
      date: '2025.03.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>사무직군 영역으로 중대재해처벌법 확대적용 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE1vUG1rdVFVQlRsN2ZCZzBDQU43Rlkzd1JaSHpXWUgzTmVEcmxFVGN5UmF3eHZmRVg2Mjd0elRoRjJOWG5WalYzM09wRTR2SGRRTjY3VFVHTldPa2x6a0hieDE4dENoWmpMRTB6UHNR0gFyQVVfeXFMTnJVeXFFTk4tUGlUcFpsS2NDTGRacjdVUmFuOENsbEJocGtVcW1rTW1sT200REtfS19pZTV6S1F3cGRJNXlqRFN3Y0EwaFlFMll0R3c1TTZVQzM3X2NZdmViaW5MMDNIVGRhdkFlUl9nZm9n?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 504,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 처벌·기준 완화 개정 움직임에 노동계 우려',
      author: '관리자',
      date: '2025.03.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 처벌·기준 완화 개정 움직임에 노동계 우려 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 경인일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiUkFVX3lxTE5zQ2pGeGE0OXA5aVlkaHdtTzR0YWxyVWdhanYwbmllcXl0bk5UdHV1Mk9LMkxBRTVvYVA3VXV3VXc1ZlNfa3oyN044b3QyTFlCWlE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 505,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[책소개] 중대재해처벌법: 해석과 입법론',
      author: '관리자',
      date: '2025.02.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[책소개] 중대재해처벌법: 해석과 입법론 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 환경일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE81VDRFSDJMVHI2M2hTVDkzZERFS3o4RDRXNHNuRHNJUEt1WGdreFNFVGR6UkF6b0hkOEdjOV9KSmZJR1N5NERsQU12YmxQOWhGcGdDRloxVFZTdDNHYzAySmRvdC01Y2JF?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 506,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '순천시, 중대재해 예방 가이드북 및 매뉴얼 제작',
      author: '관리자',
      date: '2025.02.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>순천시, 중대재해 예방 가이드북 및 매뉴얼 제작 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 파이낸스투데이</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE5FLVJlMUtPdnFRcXlzVDJaUFZjN01KbjdzR0JVWm5DMm9wMWlYelBmSVdqbzJzaUpkOTNxQjctbmQyRUdSVWZVclVNVDVTdXN4U0V0VTFxY2pfTldtam1Ja05Gci01NUc4a0dEZA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 507,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '대기업과 중소기업 안전관리 예산 1255배 차이…의무이행률도 차이 커',
      author: '관리자',
      date: '2025.02.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대기업과 중소기업 안전관리 예산 1255배 차이…의무이행률도 차이 커 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 월간노동법률</p><p>원문: <a href="https://news.google.com/rss/articles/CBMib0FVX3lxTE5UTHk1cTd5OTIzRUpYUXFjSTFTVlprU1J2aWVnbkZiel9qX1NvQW16MV90VVphQmI3SjJjLTJYS3NGU1N2aFZjbGR0cjJMTnMzRHF4bGV5aFQ2MGZYSnZCSVh6V3lPckZEeVE3WWNMSQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 508,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 사고 예방 효과에 노사 모두 ‘긍정’',
      author: '관리자',
      date: '2025.02.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 사고 예방 효과에 노사 모두 ‘긍정’ 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTFBuYzhQT1JTTmcxeENXSDFJX2VDb1NRQzA5YVAwcEctZ0xtS2ZNTU00cm94cHNYc0tCMS1XaWdHU2UyOTRHSU05Wng0TmdyTzh1QnJJeW9rX0dYcGtBSmR1d0RJdGNKalI3V2RRNlVCSVE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 509,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[서평] 입법과 해석을 아우른 중대재해처벌법의 지침서',
      author: '관리자',
      date: '2025.02.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[서평] 입법과 해석을 아우른 중대재해처벌법의 지침서 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE1CLWxhYnNxUWxsME96czJCMVM5UzBhbl9EeGswV3plS2ZLeWtKRGI5dnRRNGx1Yzl4UlBJdXdualh5b3BxaVdpM29yRmdjZkNDZjVjdWVRMERLZmZOX1VET25JZFAycUFVRVBGY2lR0gFyQVVfeXFMTTFBWmdOVkM0bnJqdy1HUzZrVzJNdWpaSURoMHFiODVxbzVRVlR4dWpmV0xLYWowR29CNHZaRnNJbEt6SUZUZDhWQzVvaVROQnppMUZkUXBEMVRjQm83RzdDRVVQZl84UEwxTU84cGo3d1JB?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 510,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[특별기고-조희태]적격수급업체 선정을 위한 안전보건수준 평가의 시기와 방식',
      author: '관리자',
      date: '2024.11.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[특별기고-조희태]적격수급업체 선정을 위한 안전보건수준 평가의 시기와 방식 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9kMjJUaG5FT0JnWlNqWEctM2dqcWxOZW9uaGR0SlBEV2JZb001WjJVeU9sWWlYOEVPT3Fmc2NpVWttLWlydE01U3l6ZHVhUWZrRGYwT3RJa21VQ0p6SjBNNHJpT1V3RDlfaFJHU0tKdzA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 511,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '교통사고와 ‘실질적으로 지배ㆍ운영ㆍ관리(또는 그 책임)’와의 관계',
      author: '관리자',
      date: '2024.11.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>교통사고와 ‘실질적으로 지배ㆍ운영ㆍ관리(또는 그 책임)’와의 관계 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 월간노동법률</p><p>원문: <a href="https://news.google.com/rss/articles/CBMi4AFBVV95cUxQQzdXSmM1emQyem5rWURLMmZDcFhIOTZ6c3dYZlliWHVpTnZfT2s3VGhCNkZEUnVuclItVFhJa29iLVNFRjVWZjNIeExtR2lZYl9BRnNJRXVHSWhJZUJoZGdSNDdldTlaOU9kUnUyZkE5d09VSDJKWFQ3NmNVM1c5Y2ZYRE5rU2RjY2RGMHVDQVVuU1VkekkzV0x3OFNRcGk0UW44ZmZDY0xWQXh0S0VfYWNRT21vOWVhQ0d1NFhiM3cyQk9obFFfZGlmZF83R3JYeWdMTFo5UHdxMXpwVERwYQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 512,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '건설업계, 중대재해처벌법 大수술 건의 착수',
      author: '관리자',
      date: '2024.11.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>건설업계, 중대재해처벌법 大수술 건의 착수 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 대한경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMidEFVX3lxTE9jYUxWV3JXMXlUTVZRMjJSRUFjSFRiWWJCTnZBSnBaUV95SUIwRFhzcnlJWjdEcDVQUllsNGE1dElPS2ZKX2JtaTIyd040YzJGZXFRUjkzNXJsSXIwTHdUT1JTUnp4V3VibENUX0JzTVE2OFdk?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 513,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '김영규 대륙아주 변호사, \'중대재해처벌법 해설-중대산업재해 쟁점과 사례\' 발간',
      author: '관리자',
      date: '2024.11.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>김영규 대륙아주 변호사, '중대재해처벌법 해설-중대산업재해 쟁점과 사례' 발간 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE0zeUQ1NjF5MDJ5LXlQVDI1bUdnM3kzRFoyMlNtakRPcHZCT0pMV2JjU3I1UTB2bk9ZSkNzXzl4WElBNG50dzgxVDdFZFhaaWhHZ25XbTR3NHBoU0V0RTVQOTFKT1ZoUWVWOWZVcEJ30gFyQVVfeXFMT0tUeEhwSGxNNUZYd0J2VHlHQTduWVJTVG1TbEdRcEQ1cDV5czg0R1RWVzRPak9Na1EwS2NwOW0tTHdHeVVlbjR6cllSVGxmYldHX2x0TG1mbWpZM0FYNXZTSDdTMHBsQ3VuZzRGcnpEWU9B?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 514,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법상 의무이행의 범위 : 기업이 알아야 할 것들',
      author: '관리자',
      date: '2024.10.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법상 의무이행의 범위 : 기업이 알아야 할 것들 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 월간노동법률</p><p>원문: <a href="https://news.google.com/rss/articles/CBMijgFBVV95cUxPcnRldFNsT1hkdjRHYWVUZ1gtM0ZuWkZSUTRIQk12V01KTWRiUVdaTGtWU002WW5DWXRnOS02SnA2ZGFqQXVnLXdZcXJmY2M1QUhERHRMMThzLVI3bEtjSENLRE9vT2JJenRzYnlqYy1oV094NDVWWHRyNEQzOXVxSmpmcm5vM0dMSWxlTjV3?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 515,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '경총 “중처법 위헌성 多, 실효성 無…법 개정 서둘러야”',
      author: '관리자',
      date: '2024.06.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>경총 “중처법 위헌성 多, 실효성 無…법 개정 서둘러야” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 월간노동법률</p><p>원문: <a href="https://news.google.com/rss/articles/CBMib0FVX3lxTE1UQUZwS01tQm15QzE0dzhXc0QwM1k5eGp6SVZBdm9rVU95ZVdUUW5pS0FtQmVWVFoybDhpTWVQUTZOY0w1OWhnTG5UWXFxVE81UlFpdlVmZmh6VWtFZGdLZXMtcjM2dzIxdnZkRFl0RQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 516,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '"중소기업 중대재해처벌법 대응력 제고"…경총, 매뉴얼 2종 발간',
      author: '관리자',
      date: '2024.06.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>"중소기업 중대재해처벌법 대응력 제고"…경총, 매뉴얼 2종 발간 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 서울경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiU0FVX3lxTE1BeGpwUFFUdmpGbDNZUW9BUld6SGZlSm9LQXZkOXMtUFZnbi1yb3k2Wk8xUVpzM3JlMUE5dGNhLWVwVlNpay1pQnNQOGxtVXpoOVp30gFTQVVfeXFMTUF4anBQUVR2akZsM1lRb0FSV3pIZmVKb0tBdmQ5cy1QVmduLXJveTZaTzFRWnMzcmUxQTl0Y2EtZXBWU2lrLWlCc1A4bG1Vemg5Wnc?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 517,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 명칭, ‘중대재해 예방법’으로 개정 추진',
      author: '관리자',
      date: '2024.06.11',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 명칭, ‘중대재해 예방법’으로 개정 추진 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTE00RE9ZLTZNeVZkV1FKYUpPTFA2cFhYREJaZGcwM18xTXctUlFBY3NQNE5SeEFWY3BvbEtLc0hIMmdBNEx2R0ZxanJrMGxBQ0NzeHpoVXRGWWZSaGd3N3BMakI4ZXF3YUU?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 518,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해 예방 및 대응 가이드북 나와',
      author: '관리자',
      date: '2024.05.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해 예방 및 대응 가이드북 나와 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9RQWZrTzVScWRBbzFmTUwyakpYby1XNmx6T2dMREo4b09neW9KbUNYdGFkNWU1b0FHQnFTVVhpbTVHckgwTlk2Yjc1YkJQTHZLcGJHbEt0T2ExVS05dklwMTJQNFZVcS1MWHZYejFFRng?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 519,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '고용노동부 군산지청, 안전보건관리 가이드 간소화 제작',
      author: '관리자',
      date: '2024.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>고용노동부 군산지청, 안전보건관리 가이드 간소화 제작 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 뉴시스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTE1CVEFETkw1Zkh5S19TdWpoSkN6SThkRDBZbFB5d0J4Y25QY1BtVHJSU2dIOUV2eVNCcWpzU213cFFiSG9vb003THdNbURnUnhfMkRzNWZwaHJMR09MN1lPYtIBeEFVX3lxTE1zMVFrOVYwUF9nUzUtYTRLeXppdFJ1VUxNVTQtQ2l1eHU4aFFBVEkwUnl3VWF1cDVBbzZ5ZHZINlNScElhUGZMMkpzOWJpRnd2bGs2Mml0TTZyMFhaTW1NLWh4UFQxZFB1ODdaWVpaVUR0bTZrUXd3Vw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 520,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[산업안전 뉴스] 경비청소업 등 간소화된 \'업종별 안전보건 가이드\' 배포',
      author: '관리자',
      date: '2024.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[산업안전 뉴스] 경비청소업 등 간소화된 '업종별 안전보건 가이드' 배포 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 아웃소싱타임스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE1HTDItZXJaYjgzYVFNdVhaSC0zVF85Sy1YVTdmajV2NE1aTEN3djI1aHhZY0NIZ1VFQ1hkNEMtdGoyTURNUjU4SWdDUE9nZzZobkJVZGhreW8zYmZHbEt3emh3alF0MkRmRTdVRkp3SGQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 521,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해 예방 ‘막막’ 작은 사업장 가이드라인 나왔다',
      author: '관리자',
      date: '2024.04.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해 예방 ‘막막’ 작은 사업장 가이드라인 나왔다 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE5mUEVaVjNJZi1RbUp0ck56YUk5MlZRWkNSRXJneE0yMEItZGJxTjJPSEFicnlqakE2RTR1dDg1Q0hBT0NVRzhRTHpVVDlUeG4tQ1R5MERZMVFzMGltbG9FOTRlLVd3UVZSTTZES1hiZ1o?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 522,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[HOT ISSUE] 1월 27일 중대재해처벌법 전격 시행',
      author: '관리자',
      date: '2024.03.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[HOT ISSUE] 1월 27일 중대재해처벌법 전격 시행 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: igasnet.com</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE1kNGpQakg0dXdEY3JnbUNGWGFGbEZvdlhNYld6V3c4NDR6U2tkaWxCUjJfVFRJMnJtd256RFBWZGFQZVNOdGs3SnNPd2JsbGNOYTEzR2ppYkJEUE5LRjlGNHczN1NlZ2FI?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 523,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '산업재해예방 가이드',
      author: '관리자',
      date: '2024.02.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>산업재해예방 가이드 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 세종특별자치시청</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiywFBVV95cUxQNDh2OEdkUU5obk1XT1AtVlJZcWpKUzZOVEJQcTJVTXhPdmtuUFI1ek9VczJCOTZRMG1SYmstYmoweEViTUZMYy1Ra05JaTRId01uYmUtY2ZRZFBaT2laRWVlTFNINm9ucndicXNpZllFQWZKN3R5cUpJTUpQNUctTlRveENtQ3dyRk9Mamd2cXBpTVBONFI5Y003R2lfT0JOTnZUVmIxTjlWNHllOTVjSGFibWMwa25Wd0NNVFN6S1phYUljcmlDRm1Ecw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 524,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해 처벌 등에 관한 법률 시행 2년 분석 및 시사점',
      author: '관리자',
      date: '2024.01.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해 처벌 등에 관한 법률 시행 2년 분석 및 시사점 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTFBjSWR0dTdOM3NFbEwwRVF0Ri00b2pMcmJmd0VSSVpxc0dKaFFNNWR1c01leU8tUzZSTFMxVkp2NnEtallKUzZSTVZUTFgxVEJxV1RELWpHY2FSdU4zU1gyT2ZXMUdzd0VxN01QUGF30gFyQVVfeXFMTlVtbU1JcldTU1FCU2hjMGVoOU00X1JQU003dERPTGQ5bkI1OG5ocTY3dE1LM0JkUWdwWlowZjNSM2ctNVJaLWxvYmt2d1ZlaVhQTlc5UmstR1N2YVB6QU54UlotOFlWSXUxVElJc0VLeW5B?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 525,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '대통령까지 나선 중대재해처벌법 적용유예',
      author: '관리자',
      date: '2024.01.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대통령까지 나선 중대재해처벌법 적용유예 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE5taGJDLWtzaTVELTlBbDFXenRHODNZYVV4b3ZodTc5MEp5Ym03OXVUSTI5a0pmbGw3MmZ3V0ZmU09WZ3h1SWQ1WXB2TXdwRGRXaF80ZDk1cXRENFJrYmpNQV9OX1R1VWozdV9xVFh4Qlc?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 526,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '\'중대재해 스마트안전 바이블 2024\' 출간...중대재해처벌법 완벽 대비',
      author: '관리자',
      date: '2024.01.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>'중대재해 스마트안전 바이블 2024' 출간...중대재해처벌법 완벽 대비 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 뉴스;트리</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiXEFVX3lxTE43dkpfT0lwenN6dXlGR1ZJVjZNdFFndHNJTFd2bkVvVFFDNTFicDRMNWktWVRRX2hHYk92Q3Y2OE1YLWQzdkhVOHJvbHQ4c0Nwd1EwSWNQSjBZb0lm?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 527,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 ‘적용 유예’ 안갯속',
      author: '관리자',
      date: '2023.11.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 ‘적용 유예’ 안갯속 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTFBUaldQSGhjc3U4R3g5aUE4LVJCdWhkeXI4R3huaXRCbTU5QlFaOWZySmtWZFpVZXZFRG5ORzRNaWUzM2tnbTBQUTV4cFNydEhUOGtJQ3hEVzBxVkN6WG1NUkNYN0xwRVV2ajJmS2xfakM?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 528,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 개정 논의 ‘더 늦출 수 없다’…실질적 대안 마련해야',
      author: '관리자',
      date: '2023.09.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 개정 논의 ‘더 늦출 수 없다’…실질적 대안 마련해야 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 전기신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE55SmVyNnE3YkRZd0Z6VlVNbjVIdV9qWlVSMFEzbzZQc0llQ2l6T0Zady1XQWhRLXd6ZlM3MlFhdUhKZWJ0NUJQcTNiU2NBY1ZsQ2lPQ0JlaDlNbzZDTzJmdGdwSzZfODBwRTRBddIBcEFVX3lxTE5FcG5LX05naWxGUm5FaEpXbEE1ZFhCcFBUOVhKWUVkWm1ISTdCQmEtUzJwamVTSlNBWXBBMnQtZUVVTDVxVmxkZk9rVjNSekJ3U1FFSVkwQmFTc3F1SVZUNmhDWmRfNmV0TXprMmxPOWE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 529,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '지금 중대재해처벌법 개정이 필요한 까닭은',
      author: '관리자',
      date: '2023.08.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지금 중대재해처벌법 개정이 필요한 까닭은 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9YUEhXeS1FS1l0T2szRjJiMFl1XzBNMzVSdzdvTXhLRTB0M3pSdnBnSUhfRGRuazlabmd4dGw0MG9zZEYxRGJZT2RyTGxaaTFTVjRBU0wxSjM2T3JMTjlfbHgtWlVwbTFVRENXSGh4dkI?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 530,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '‘오송참사’ 중대재해처벌법 적용될까?',
      author: '관리자',
      date: '2023.07.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>‘오송참사’ 중대재해처벌법 적용될까? 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTFA1cmJTc1pKVXdINHNvZGU4NmZJTEJKNEJoNWc3QjNETVYtOVVYSnFiUGtBZ3BCbE1FYWZNdUVQWjgzRW5YUGR1bGtTYUlhRjI5QWY2Qm1iYXV3U0NtaGpmX2xYYTN2UHRPVHF6VndB0gFyQVVfeXFMT2swbjFyc3VBaC1Oa2xNamFxWGhnLVpUVjJ1M29KenR5U3A0cTVqOG1HYVdmMEczclhMaTUxaHlKN2ktNXMzUEFYYVNYRkFQdHMxY1hNaE9mT0Q2UWRJeWlUMUlHX0NqbG1INFdvdkpEVkVB?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 531,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[기고]중대재해처벌법을 통해 지자체장에게 책임을 물을 수 있을까 - 머니투데이',
      author: '관리자',
      date: '2023.07.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[기고]중대재해처벌법을 통해 지자체장에게 책임을 물을 수 있을까 - 머니투데이 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 머니투데이</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE1YbFlVN3d6UW5GekNseDRleFZmMEpUcDRHQzFKSVlFLWZad0lrZTZlUXdldldIOWQ1YlVsRVVNMXJvVV9sNUlVSnFXZVdWdXhHOVZkMzdxMVgweUpXX1VSeFNQOUpIcEhvTzVj0gFwQVVfeXFMT01wUzJVcnNScEluaXBEUlp0VElVUEhVaDFOY3Zxa041Vkx3UFVwZnd0YTBzVHg5aDhxWUVTc0gtREpaNERCU2MwaXZsb1o4QXlxTU5aVDJlU0lmbllEQWdZYlNwbEJYX0ZabG05NWVEWA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 532,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '“중대재해처벌법, 국민 생명·안전 최우선하는 법”',
      author: '관리자',
      date: '2023.07.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>“중대재해처벌법, 국민 생명·안전 최우선하는 법” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 식품외식경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE1aVkpHQkRfaEo0akJKeEJCUHRtMTF1bkV5MjJWSTdKa3UzZ2ROOV9xNE1obE5LQ2R4aG1lR19mWHdiWFhpci1UVlRyNDMxdEdhSEZPV1dpMTdPclhXLUd6WXM3Rzd1elJiTTVKeA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 533,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법과 그럴듯한 말들 - 정기훈의 토론',
      author: '관리자',
      date: '2023.05.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법과 그럴듯한 말들 - 정기훈의 토론 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: campaigns.do</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiTEFVX3lxTE5MdzZKUEdtbml5bmZyMDVMcldyTFpVZHZoRUlFcUFQdlFIRkJXc041UWdSRUxnaFQ4YWdtc2xZYTY4WDNuX1dKUGtzREY?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 534,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '소규모 사업장 중대재해 감축위한 \'안전보건교육 가이드북\' 배포',
      author: '관리자',
      date: '2023.03.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>소규모 사업장 중대재해 감축위한 '안전보건교육 가이드북' 배포 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: safety1stnews.com</p><p>원문: <a href="https://news.google.com/rss/articles/CBMib0FVX3lxTE5nWDJmcFNyMkpCSVA4ekR3YXpPeHBTaVRjY3A2SGpZU3M5UW1rZC0yZE1JenlNalFVMFVPbExzMFdHXzYxTEtiM0VzbldRRTBVSVltTktMOVZwMmdfaGFtNlVwc3lqSGxPaVk0T0MzUQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 535,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '"중대재해처벌법 영세기업 대책없다"',
      author: '관리자',
      date: '2023.02.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>"중대재해처벌법 영세기업 대책없다" 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 뉴스인</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE5PX0d0ZE13R0FNcVBySUdzVDdONk5qdVBGRXFGR0VWYjFoNldaTjBzX3lJY2dUUjJBVGxfODlYMVkxY1c0YUl6RUZiaGdiYzczZW9SQjVkOENqOTZhWW5xaXZpZ3puOWhBdWw0?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 536,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '"예방체계부터 실제 사례 분석까지… 중대재해처벌법의 모든 것 한 권에 담았습니다."',
      author: '관리자',
      date: '2023.02.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>"예방체계부터 실제 사례 분석까지… 중대재해처벌법의 모든 것 한 권에 담았습니다." 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 한국경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTE5sWWFkS252MVhZWU04MDg0OXNEbnFTVWZWc0JPS1Nxem1ieTN2OVRyX3RLazlzS3JFUmRnajJfVG54eWxQR2lwa3hVWGRsNWdZMXdaTnk1OEhtUdIBVEFVX3lxTE5HdThTWGp5ZVRxamJRT2htZ1BRWXpfMWNWdk5pRTh4bWVCdm41ckxHaEYxc0tkVHBxazk0YlJsY0ZoN3JDcWpQTzB4eDNSZHFXbXo0YQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 537,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[토론회] 중대재해처벌법 과연 위헌인가',
      author: '관리자',
      date: '2023.02.03',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[토론회] 중대재해처벌법 과연 위헌인가 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 참여연대</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiUEFVX3lxTE9uM1dyQzFqNkFNNVdyQU4xMUNNVEtLR1hFS3JOOHhxYk4wdmRzZWsxN2diVnhnQm4zbTVGS3JOWE96T1BZQzQ2RzJRaEJYM3VE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 538,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[신간안내] 중대재해처벌법(개정판)',
      author: '관리자',
      date: '2023.01.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[신간안내] 중대재해처벌법(개정판) 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZkFVX3lxTE4xaHdwS2NBdnV0RkRlLXhsdG5PUzBYdjJCZmxQa2FXZTJ4RmRZUWwwREF4dm52SkhJNmZiOHdzQ21Zeng0V0VTLTdMaGd1T0J2M1hweXJrYy1oQUc1WWV5QWN3Uk5Idw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 539,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '법무법인 동인, 《중대재해처벌법 해설 및 사례집》 발간',
      author: '관리자',
      date: '2023.01.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>법무법인 동인, 《중대재해처벌법 해설 및 사례집》 발간 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE4xclpLc3lWSTVJRkNuOHZNVVVibm1tbUNZdl9HdUpsTlc0cEtsWjZELUJyS1YxU052QlpKOEduMUJldFR4aVp1LWZNZ0U1R2tURzZ0czhyTXZyNFB2cmNvUW9KcEhyQ1ZkWVpJTEZR0gFyQVVfeXFMT3M1VkczU0xhNkowY3BXb2M2am1RdW5wVWtWSGZTSmR5Z2I5LTljUUV4MFk4Y2oyQnhUYjBtZHJJQ0c0c1ZNemExOFhpenZSV1dkZzFiRFp5WVV0Mm1CSk5IU0JLQ0wwUTRMc0hXRXlNbU53?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 540,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '강선건조업 등 5개업종 사망자 5년간 192명…안전 가이드북 제작',
      author: '관리자',
      date: '2022.11.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>강선건조업 등 5개업종 사망자 5년간 192명…안전 가이드북 제작 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 연합뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTE5IMWFONDZqRW9kZklQLU5VWFNoMkZBVWJ0dnFHdzZPTUs3eTZheDhHYWJnUDl6QUNYYk9KTU1oN2hhczR4dElMT0JXcDRmVTdRQUJBWlZkTTR6R2PSAWBBVV95cUxPSmJZQkZnN0hhYkNqX29TbzVUWjhFQWFGaVQwQzJfTGxoTGo0NjNtLVo0alR1U0RNY0JpQVg3Wm1QRndhazYzNElvUjJzS1FPU0NlckV1UFFMWVhWVWtMRC0?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 541,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 시행령, 지금 개정할 이유 없다',
      author: '관리자',
      date: '2022.11.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 시행령, 지금 개정할 이유 없다 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9BLTVVUGdOemt1aTZLcVhkOWhZM3h5Z2tzd3IzcE85M3N5SUZXX2xNa1drdHBJemVRbnpPMjlqeXdJNWlWMjhKS09JTUFJdU16ZzhSLWcxTUVZN1lVYWZQeDdzNElZQmkwM184SzhYTGk?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 542,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '고용노동부, 고위험 소규모 사업장용 안전보건 가이드북 배포',
      author: '관리자',
      date: '2022.10.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>고용노동부, 고위험 소규모 사업장용 안전보건 가이드북 배포 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE81aTZZSnhWQVl2aUU3X3I5Ny1ZdWljcWMyV0xHOS1QdVlVaDlxTmNBX0JzVnJRb0hwWjFOV0g0dTJFRmxURXBwbDc3TDd6cGsxSlAxMm45UExCeWJZWEFkbGxIMXl0RU5VcDA5MHpycmU?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 543,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '기재부 중대재해법 시행령안 베낀 노동부',
      author: '관리자',
      date: '2022.10.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기재부 중대재해법 시행령안 베낀 노동부 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE1ObXB1Y1k2ekJGRE8xV1pHSG5QR19kblQ0UVc4VTJsbmdrTnQtaGtBNzFDVThqRk9FbTJtSXYxa0c2UU9uTnpqWlJBOHdlS2pPWEM4cXNGTVVzQ1JjMTFMUzlLbW5INzEtNzFEeTcwU0E?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 544,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[단독] 중대재해법 해석 흔들리나...‘도급인 사업장’ 법원 판단은?',
      author: '관리자',
      date: '2022.09.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[단독] 중대재해법 해석 흔들리나...‘도급인 사업장’ 법원 판단은? 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 월간노동법률</p><p>원문: <a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE9WS3hSQW5QMWtzazVCMXhzb0k2WFR3ekpELUUyS0QxNnNvSkJJSDdORjB3Sm5KSFNtQ0d6VTlqTGt5NlRlU3o5M2hfNS00X1AwVUFLTjRiQjk2Z2FjX2pHVWc4OTQtaUpwUFRqUEJKZnV5c053RlQ3azFQRWhlSzg?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 545,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 해설(중대산업재해)의 몇 가지 쟁점',
      author: '관리자',
      date: '2022.08.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 해설(중대산업재해)의 몇 가지 쟁점 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 월간노동법률</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiY0FVX3lxTFBjbDRGcXRzanlXNXlmaFl6dzVQdi1yVWhIWnowRVBubUFCOFkxeDM3ek5RcHRhODhwbHQwZENtbzJNa1RqbG9LMUtYUUM1OE95UVVsaS1KbTlyVUk3R1hJdlJtZw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 546,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[칼럼] 중대재해처벌법 제정을 미룬 정당, 반대한 의원은 누구?',
      author: '관리자',
      date: '2022.08.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[칼럼] 중대재해처벌법 제정을 미룬 정당, 반대한 의원은 누구? 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 참여연대</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTFBON3Zhc2NPR214ZXVGZG9jbkIyRkFKdEtRTURtenBFQnR3LUcwdkRYczllMlFiMy1JNURyRWg0d1RnZGpCTjlQU1lFb2JpN0xsek80Wg?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 547,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '50인 미만 기업 대상 안전관리체계 안내서 확인하세요',
      author: '관리자',
      date: '2022.08.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>50인 미만 기업 대상 안전관리체계 안내서 확인하세요 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 아웃소싱타임스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTFB6YVhNblJ2SE5fb2RsT19hNGVCbU1ydWttSnhHN0RvYnBVV3UwSTJycFBSZHVKU2lDai1aOVRwc3JFUkxsMVhsVUUtMW43NFBHalN2TTR4dHRoQ2F6djRXc2dqbFA2c1lkM09pQ25NQUo?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 548,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '‘금속 주조업’ 안전보건관리 이렇게 하세요',
      author: '관리자',
      date: '2022.08.11',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>‘금속 주조업’ 안전보건관리 이렇게 하세요 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전저널</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBEWWZXSzZmVzJSbEVkXzhPM1BmenIyaWdsdzM4OGZtcUZwQkN4a1dySHlsU0ZDT3FrTTZaQzl0S2trWXRnemh4aHQ5UktVcHBQVEk0c01LT3BsMEtHeUtjbk00YmpXckU?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 549,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[안심TV] 최고 전문가의 중대재해처벌법 해설서- 화학공정안전, 권혁면 교수 편',
      author: '관리자',
      date: '2022.08.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[안심TV] 최고 전문가의 중대재해처벌법 해설서- 화학공정안전, 권혁면 교수 편 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: safety1stnews.com</p><p>원문: <a href="https://news.google.com/rss/articles/CBMib0FVX3lxTE9qczhhQzBYbFBVcTc2VktWTWRJVmpEQng0ZGtuNVFZT3BNRndaN0N6NnNLbUdncTk2YnBVdGRPMXFpWm52d2M4TGNPaWltbHFuX2tqM3d3MXRfa3VsbVdaNmFzN0VFRWFFR2pIaUJSSQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 550,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '항만건설분야 안전관리업무 길라잡이 제작·배포',
      author: '관리자',
      date: '2022.07.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>항만건설분야 안전관리업무 길라잡이 제작·배포 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 해사신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE05QXF5V1NleGwybkY2SEdQUFU4N0xCR09rUy1DWDZZUW9Oem8zQWFZN0lkNy13VmZoSzlaaWFNU2VWVUprMC1TYUswTVM5ODlNMWNZeGtRUW83OS0wczBwbWVKVnlOOUpSOFZv?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 551,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'safety', topicName: '중대재해처벌법',
      title: 'LK보험중개, 중대재해처벌법 보험 가입 가이드 공개',
      author: '관리자',
      date: '2022.06.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>LK보험중개, 중대재해처벌법 보험 가입 가이드 공개 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 뉴스와이어</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiXkFVX3lxTE9CYWV3eEtvanhDdW1UaWxHU3JRZ1lHTFlxVmhaNU5mTTdoWGM2MUJ3MWZva1NzalJScWFsQW5iQnVrOHczaDNvak1DX1VyUlJ3OVl6VkItMENiMWpHVUE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 552,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[팀 탐방] 법무법인 대륙아주 ‘중대재해처벌법 대응본부’',
      author: '관리자',
      date: '2022.06.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[팀 탐방] 법무법인 대륙아주 ‘중대재해처벌법 대응본부’ 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 법률신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibkFVX3lxTE9qS3VtcnkxYVYyNXFZNGZPSWM3dl9uY3VNMmgxX1MtTmNUSHhjXzJ1ejVmbDJyZ2FDRC1DY0tPXzlUU21nX0djOGRaMlNjSjVwa2hwNzNNNy16UnpWdldDazdPNVo3OGlMMmh2a0ZB0gFyQVVfeXFMTkNWTHJ0V1dYN0dZZW14Q3NPQVdNSjVtV2tCVUlYT0RsRUtnd3lwZm9JVDdFeHdiVE1pcGQzeWR0cE13TGlVR29WY1o2TEEwdFNuTGkwVHV5bGtaYU1lSXVtNmNUUk44dUo3N2ZQcGNYNEtn?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 553,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[인터뷰] “중대재해처벌법, 실효성 없다" 정진우 서울과기대 안전공학과 교수',
      author: '관리자',
      date: '2022.04.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[인터뷰] “중대재해처벌법, 실효성 없다" 정진우 서울과기대 안전공학과 교수 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 오피니언뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE1DOHRpVGwxZlJuTExZOWpSNzctQjNGTTFISHR6bzgwdlNMbGcwWWRockpJbE9UWG9oWEdsYTI5d2xCS2VwUUVCUk9SVDBwelBwUDJib3JUdDM1VnFvZDRvRlZKeWFBZ25NenBBMnpKRnE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 554,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '고용부, 중소기업용 ‘중대재해처벌법’ 안내서 배포',
      author: '관리자',
      date: '2022.03.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>고용부, 중소기업용 ‘중대재해처벌법’ 안내서 배포 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 대한민국 정책브리핑</p><p>원문: <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE5IWC1xUW9oUTV5Y3poOWNOYzdlUHBiZU9Nd2dXQkMzb2RqcThfN0ZnUzBJSldvWWZwLXlZc1d3c28wZml0YXBJdUFRbFVWWC0yeUpQZy0wRUJ5QWRwUmtqME5tWXY5S2RvREpzNA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 555,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[기자수첩] ‘억’ 소리 나는 안전컨설팅 비용',
      author: '관리자',
      date: '2022.03.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[기자수첩] ‘억’ 소리 나는 안전컨설팅 비용 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 대한전문건설신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE5EWENPWGdyU2hVamJCSmJrZnFBRW5Kd3BlWHRUU0FqY2ZhcUlqZ20zdlE3VTdST042NmR6UWdmM0tGWmNzN09veDlCUXozOUM1YlJnMFdRSHlYTEZGNHZyRm9ORExXNGlv0gFsQVVfeXFMT0k5S01Va2NqcEpSWTNIOEsxVGNjSXQ4Q1RVczhoVVlrUzQ2YWJ1eUE1TnN6VGlyNFVrdE9ycjVkbXdacHNWZ1huN1RHd2oyY2hLUGlQS2dlLTBYNlN3ZUcybGpKbGpZYlFKLWFm?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 556,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[검찰 ‘중대재해처벌법 벌칙해설서’ 집중분석 ④] ‘치료기간 6개월 이상’ 기준, 중대재해 면죄부 될까',
      author: '관리자',
      date: '2022.03.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[검찰 ‘중대재해처벌법 벌칙해설서’ 집중분석 ④] ‘치료기간 6개월 이상’ 기준, 중대재해 면죄부 될까 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE8xSElxeHphdm5wQjIwZmphb2Z3NWs2bzI3SEV0eWVLTDJxd3c2VnBsOU82T3ZFbDBEWVlmZjNJT2ZVd05RcEMzb0VadlhnS1JoNHJhakZ1TWhDazJlNzFOR1pPOGM4VzBzbUtQbHZVYXI?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 557,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[검찰 ‘중대재해처벌법 벌칙해설서’ 집중분석 ③] 특수고용·무급 노동자, 중대재해법이 보호하는 종사자',
      author: '관리자',
      date: '2022.03.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[검찰 ‘중대재해처벌법 벌칙해설서’ 집중분석 ③] 특수고용·무급 노동자, 중대재해법이 보호하는 종사자 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일노동뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE1HVWR3bnJpb01na0g0UlNMSlk0Qmowdk14VE5TVWtvd2N0SmZBS0ZMMkFQTkU0VzItTXlSdDMwZ1c1QVVSdTdQU010dm8zOEpONFBpT1JmYms0cVhoRXk1VjN3N1c2MmYyeVJrdVhVSU4?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 558,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '“중대재해처벌법, ‘합리적 실행 가능성’ 법리로 대비해야”',
      author: '관리자',
      date: '2022.03.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>“중대재해처벌법, ‘합리적 실행 가능성’ 법리로 대비해야” 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 월간노동법률</p><p>원문: <a href="https://news.google.com/rss/articles/CBMi1AFBVV95cUxNa0g4WFQ1NUlmZ1NoaFZHREpjcTRLa3dZaTdha2hleFBFZ1B0Mi1WOTBNa0s0NFphTzlxdGdaV1dIOEl6TWNpNm5EaXVjdDNvSlFWRkRTcGNuWWdmdzZWOE04YnN3QkdIWXdEcWdVaHRFQkVQVXBoRU5ENXVQaThXcnl3MnZxUjJPckQ2VXg4Q0xxdHk1WmhEY2NKdmhsbDA5NUpNTlJneGlFY0Etb2pMLWQxUmlLbUJ2RWM0MWpwSVh1Wk5saUh3LUtObHFfTTdsbTYzSA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 559,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '[기자24시] 검찰만 보는 중대재해법 해설서',
      author: '관리자',
      date: '2022.02.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>[기자24시] 검찰만 보는 중대재해법 해설서 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 매일경제</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiWEFVX3lxTE4wdnZNZG1wcGdFTmVadVZkYkVSNF9yeHlBWlFkeTNVQ2liQ19pcUMyY3A2aGNLVVBwVlVnYU9rbVQxbWpaWlBRdjVHUVdzcU9MMmNvbGF6OWY?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 560,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '한국산업단지공단, 중대재해처벌법 시행 대응 총력',
      author: '관리자',
      date: '2022.01.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>한국산업단지공단, 중대재해처벌법 시행 대응 총력 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: CNB뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiakFVX3lxTE40SExmdEd6cEE0Q0tWOUtDZFVaU3RZZ1AtV3h0a1hnZE50TjhCR2E2SlNGcVdSdlRwMHR6Qzd4dTBkNkNUbE1WZHIwT2UyTk9KSUZvTGt0SjdZSnBJbUF4MjA2aGdyeFN6amc?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 561,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '해운협회, \'중대재해처벌법 대응 가이드북\' 발간 배포',
      author: '관리자',
      date: '2022.01.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>해운협회, '중대재해처벌법 대응 가이드북' 발간 배포 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 해사신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE5EY0dKMDRWLWxmN0JjcmlBOEk5dGNvVENrbDhkTVJXektmNFdfejBfN3FwYUtlR0JOTVRld3c3aGVFVFFZNlhjMm9pMHl4WkFXaHhkdl9FNDI2UWYzenVEQzNHSG94R2NVeVJv?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 562,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '500인 이상 회사, 안전보건계획 이사회 승인받아야…노동부 안내',
      author: '관리자',
      date: '2022.01.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>500인 이상 회사, 안전보건계획 이사회 승인받아야…노동부 안내 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 연합뉴스</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTE1IdDV6VkRrVHJCUU9rREY5Y2R3MHlTTlB4QTR4N3VndE1PVXN1ZUZOQkpTTUxZX2gzVjBwdl9iQlg1R0lIa2szaVNvenBaQ1lNQzFqNmVvd3V3d2fSAWBBVV95cUxPV1hBU1YxS2tBRkwxdWY1SGs2Sy1VTUhlc3duT1dzX1p5SmprUFdob1EtdmxJNVp0VmxCOU5IVVhYdVEzWlZsd1NaM2pldktqRl9VV0NZdjlseTNTVWxXSkE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 563,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 대비 제조·기타업종 대상 무료 컨설팅 시행',
      author: '관리자',
      date: '2022.01.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 대비 제조·기타업종 대상 무료 컨설팅 시행 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 안전신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9CREM5aTk0bUc1dDFrbFBsbzZoalVXR05vU0VWUEJTci16UWdmYlVHVGQ4MEg2NzJieFM3bE1wOHQyMzRwSzlHWmtYbm9Fc0drbVFvRy1lOV9sWjhiX3o3QW5TUFNnZjM4NThiR2xEVWY?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 564,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '중대재해처벌법 시행 앞두고 일제점검',
      author: '관리자',
      date: '2022.01.11',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중대재해처벌법 시행 앞두고 일제점검 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 환경일보</p><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE1sNXhGVUI5cmo3d1pLa21nOEhuTFpyc3NnSDJhYUJkMVkzRTRrVGl5TDZxcDA4SkxidV9lZ2ltb0RDR0Zvb1M5WXdUQmEzYnVrNEZZaEd5c2ZseWpwRDNVcE85Y3R4UzJs?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 565,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '설비건설협회, 중대재해 예방 가이드 교육 시행',
      author: '관리자',
      date: '2022.01.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>설비건설협회, 중대재해 예방 가이드 교육 시행 관련 보도입니다. 자세한 내용은 원문을 참고하세요.</p><p>출처: 기계설비신문</p><p>원문: <a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE9wSVB3VXo1YlB2ZWFMdkd4WEJlMHgxczl6aGJzQ0VhQ3Q1Ml9RWHNvMnlVRlRJcWhSN2tIdkpRRFdOTXA3SE43a2VRR3lmRWRUVkxjVm1CWFlmbGhtNUZJaktBVk5nMWtQaWJn?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 461,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '전쟁의 시대, 화석 연료가 초래하는 막대한 비용',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>전 세계적인 분쟁 상황 속에서 화석 연료에 대한 의존은 연료 및 식량 가격의 급등을 초래하며 인류에게 막대한 경제적 비용을 지우고 있습니다. 각국 정부는 심화되는 에너지 빈곤과 생활비 위기에 대응해야 한다는 강력한 압박에 직면해 있습니다. 화석 연료는 이제 단순한 환경 오염원을 넘어 국가 안보와 경제적 안정을 위협하는 핵심 요인이 되었습니다. 따라서 지속 가능한 에너지 체제로의 신속한 전환을 통해 에너지 주권을 확보하고 화석 연료 중심의 권력 구조를 재편해야 합니다.</p><h3>주요 포인트</h3><ul><li>전쟁과 지정학적 갈등으로 인한 에너지 및 식량 가격의 연쇄적 상승</li><li>화석 연료 의존에 따른 에너지 빈곤 심화와 가계 경제 부담 가중</li><li>기후 위기 극복과 국가 안보 강화를 위한 에너지 전환의 시급성</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/30/what-fossil-fuels-really-cost-us-in-a-world-at-war/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 462,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Energi.AI, 지속가능성 자문사 CEMAsys 인수',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>노르웨이의 기후 테크 플랫폼 Energi.AI가 지속가능성 전문 자문사인 CEMAsys를 인수하며 서비스 역량을 강화했습니다. 이번 인수는 Energi.AI의 AI 기반 탄소 회계 자동화 기술과 CEMAsys의 ESG 보고 및 컨설팅 전문성을 결합하기 위해 추진되었습니다. 양사는 이를 통해 기업들이 유럽의 CSRD 등 강화되는 ESG 공시 규제에 효율적으로 대응할 수 있도록 통합 솔루션을 제공할 예정입니다.</p><h3>주요 포인트</h3><ul><li>AI 기반 탄소 데이터 분석과 전문가 자문의 결합을 통한 시너지 창출</li><li>유럽 기업지속가능성보고지침(CSRD) 등 글로벌 공시 규제 대응 지원</li><li>탄소 배출량 측정, 관리 및 ESG 보고서 작성의 전 과정 자동화 및 고도화</li></ul><p>원문: <a href="https://www.esgtoday.com/carbon-data-platform-energi-ai-acquires-sustainability-advisory-cemasys/?utm_source=rss&utm_medium=rss&utm_campaign=carbon-data-platform-energi-ai-acquires-sustainability-advisory-cemasys" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 463,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '스페인, 과일 및 채소 플라스틱 포장 금지',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>스페인 정부가 플라스틱 폐기물을 줄이기 위해 소매점에서 판매되는 과일과 채소의 플라스틱 포장을 금지하기로 결정했습니다. 이번 조치는 특히 1.5kg 미만으로 판매되는 농산물에 적용되며, 불필요한 일회용 플라스틱 사용을 억제하는 것을 목표로 합니다. 이는 유럽연합(EU)의 환경 규제 지침에 따른 행보로, 소비자들에게 재사용 가능한 용기 사용을 장려하고 지속 가능한 소비 문화를 확산시킬 것으로 기대됩니다.</p><h3>주요 포인트</h3><ul><li>1.5kg 미만 소량 판매 과일 및 채소의 플라스틱 포장 전면 금지</li><li>플라스틱 폐기물 감축을 통한 환경 보호 및 지속 가능한 유통 생태계 구축</li><li>유럽연합(EU)의 일회용 플라스틱 감축 지침 및 환경 정책 준수</li></ul><p>원문: <a href="https://www.reddit.com/r/sustainability/comments/1sz4vxv/spain_to_ban_plastic_wrap_for_fruits_and_veggies/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 436,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'EcoVadis/Ulula, OS Hub Spotlight 가입…고충처리 메커니즘 데이터 접근성 확대',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis 산하 Ulula가 Open Supply Hub의 OS Hub Spotlight 프로그램에 합류해 생산 시설별 고충처리 메커니즘 운영 여부 정보를 노출하기 시작했습니다. 글로벌 공급망 인권 책무성을 데이터로 강화하는 협력입니다.</p><h3>주요 포인트</h3><ul><li>공급망 시설 단위 고충처리 메커니즘 가시화</li><li>OSH·Ulula 통합 플랫폼 데이터 활용</li><li>HRDD 규제 대응 위한 협력 인프라 강화</li></ul><p>원문: <a href="https://ecovadis.com/blog/ecovadis-ulula-joins-os-hub-spotlight-to-expand-access-to-grievance-mechanism-data/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 437,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'EU의 새 ESG 평가 규제, EcoVadis와 고객사에 갖는 의미',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU의 신규 ESG 평가 규제는 ESMA 감독과 시장 투명성 강화를 도입합니다. EcoVadis는 이 규제를 환영하며 공급망 평가에 미치는 영향과 고객사의 대응 방향을 정리했습니다.</p><h3>주요 포인트</h3><ul><li>ESMA 감독으로 ESG 평가 시장 표준화</li><li>이해상충 방지·방법론 공개 의무화</li><li>EcoVadis 고객의 평가 신뢰성 강화 효과</li></ul><p>원문: <a href="https://ecovadis.com/blog/esgrr-ecovadis-news/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 438,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '2026년 ESG 규제 핵심 가이드',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2026년은 ESG 규제의 분기점입니다. CSRD, CSDDD, 캘리포니아 기후 법, 글로벌 보고 표준의 핵심 변화를 정리한 EcoVadis 가이드입니다.</p><h3>주요 포인트</h3><ul><li>CSRD·CSDDD 옴니버스 영향 정리</li><li>캘리포니아 SB-253/261 시행 동향</li><li>ISSB 등 글로벌 표준 통합 흐름</li></ul><p>원문: <a href="https://ecovadis.com/blog/guide-esg-regulations/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 439,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '엔터프라이즈 리더를 위한 ESG 전략 실전 가이드',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>공급망 전반에서 작동하는 ESG 전략을 어떻게 수립할지 다룬 EcoVadis 가이드입니다. 프레임워크·통합·사례·구현 지표 등을 종합 정리했습니다.</p><h3>주요 포인트</h3><ul><li>전사 ESG 전략 수립 5단계 프레임워크</li><li>비즈니스·운영·공급망 통합 모델</li><li>실행 지표와 진척 측정 방법</li></ul><p>원문: <a href="https://ecovadis.com/blog/esg-strategy/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 440,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '2026년 조달 부문에 영향을 미치는 ESG 투자 트렌드',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2026년 ESG 투자 트렌드가 조달에 어떻게 작용할지 분석한 EcoVadis 인사이트입니다. 규제 변화, 투자자 요구, 공급망 지표 중 핵심을 정리했습니다.</p><h3>주요 포인트</h3><ul><li>투자자의 공급망 ESG 데이터 요구 증가</li><li>조달이 ESG 가치 창출의 핵심 채널</li><li>측정 가능한 지표 중심 전환</li></ul><p>원문: <a href="https://ecovadis.com/blog/esg-investing-trends/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 441,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'ESG 실사(Due Diligence)란? 프로세스와 모범 사례',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>ESG 실사의 개념·프레임워크·프로세스를 정리하고 조달팀이 협력사 리스크 통제를 어떻게 구현하는지 실용 체크리스트와 함께 다룬 EcoVadis 가이드입니다.</p><h3>주요 포인트</h3><ul><li>ESG 실사 표준 프로세스 6단계</li><li>협력사 리스크 통제 체크리스트</li><li>CSDDD 등 규제 대응에 직결</li></ul><p>원문: <a href="https://ecovadis.com/blog/esg-due-diligence/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 442,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'ESG 컨설팅: 데이터에서 지속가능 성과로의 격차 메우기',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>ESG 컨설팅이 평가 데이터를 측정 가능한 협력사 성과로 전환하는 방법을 다룬 EcoVadis 인사이트입니다. 평가와 장기 비즈니스 가치 사이의 격차를 메우는 접근법입니다.</p><h3>주요 포인트</h3><ul><li>평가 데이터 → 행동 계획 변환 모델</li><li>지속가능 컨설팅의 ROI 측정</li><li>고객사 성과 연동 사례</li></ul><p>원문: <a href="https://ecovadis.com/blog/esg-consulting/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 443,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'ESG 표준: 전략적 기업 거버넌스의 기반',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능성 목표와 결과 사이의 격차를 메우는 데 ESG 표준이 어떤 역할을 하는지 다룬 분석입니다. 효과적 기업 거버넌스에 필요한 검증 가능한 데이터를 제공합니다.</p><h3>주요 포인트</h3><ul><li>주요 ESG 표준(GRI·ISSB·EFRAG 등) 비교</li><li>표준 기반 거버넌스 효과</li><li>검증·감사 가능성 확보 방안</li></ul><p>원문: <a href="https://ecovadis.com/blog/esg-standards/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 444,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'ESG 커뮤니케이션: 방어 가능한 지속가능성 내러티브 구축법',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>검증된 데이터를 활용해 ESG 커뮤니케이션을 어떻게 개선할지 다룬 EcoVadis 가이드입니다. 제3자 평가가 어떻게 이해관계자 요구에 부응하는 투명성을 제공하는지 설명합니다.</p><h3>주요 포인트</h3><ul><li>그린워싱 리스크 방지 커뮤니케이션</li><li>제3자 평가 기반 신뢰성 확보</li><li>투자자·소비자 대응 메시징 전략</li></ul><p>원문: <a href="https://ecovadis.com/blog/esg-communications/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 445,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'ESG 갭 분석: 리스크 식별과 ESG 전략 개선',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>ESG 전략 개발의 첫 단계인 갭 분석은 '현재 위치'를 알려주는 진단 도구라는 EcoVadis 가이드입니다. 갭 분석은 진단, 전략은 그 이후의 항법지도라는 비유로 설명합니다.</p><h3>주요 포인트</h3><ul><li>ESG 갭 분석의 위치·역할 정의</li><li>핵심 분석 영역과 데이터 소스</li><li>전략으로 연결하는 후속 단계</li></ul><p>원문: <a href="https://ecovadis.com/blog/esg-gap-analysis/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 446,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '2026년 공급망 지속가능성 — 데이터가 말하는 것',
      author: '관리자',
      date: '2026.04.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2026년 공급망 지속가능성의 현 위치를 데이터로 진단한 EcoVadis 보고서입니다. Scope 3·컴플라이언스·협력사 성과를 어떻게 개선하는지 다룹니다.</p><h3>주요 포인트</h3><ul><li>2026 공급망 핵심 데이터 인사이트</li><li>Scope 3·컴플라이언스 진척 평가</li><li>협력사 성과 개선 모범 사례</li></ul><p>원문: <a href="https://ecovadis.com/blog/supply-chain-sustainability/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 447,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '2026년 신뢰성 있는 Scope 3 보고 프로그램 구축법',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>CSRD, 캘리포니아 SB 253, 호주 기후 규정으로 Scope 3 보고가 의무화되고 있습니다. 2026년 시작점부터 신뢰성 있는 프로그램을 어떻게 구축할지 다룬 실용 가이드입니다.</p><h3>주요 포인트</h3><ul><li>Scope 3 의무화 규제 현황 정리</li><li>1차 데이터 수집 체계 구축법</li><li>거버넌스·검증 프로세스 베스트 프랙티스</li></ul><p>원문: <a href="https://ecovadis.com/blog/build-a-credible-scope-3-reporting/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 448,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'Sustain 2026: 회복력과 책임 성장의 새 운영체제',
      author: '관리자',
      date: '2026.04.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이틀에 걸쳐 진행된 Sustain 2026에 전 세계 2,200명 이상의 현장·온라인 참가자가 모여 조달·지속가능성·비즈니스 리더의 공통 과제를 논의했습니다. EcoVadis의 글로벌 핵심 컨퍼런스 후기입니다.</p><h3>주요 포인트</h3><ul><li>Sustain 2026 글로벌 2,200명+ 참여</li><li>회복력·책임 성장의 핵심 의제</li><li>EcoVadis 신규 솔루션·로드맵 공개</li></ul><p>원문: <a href="https://ecovadis.com/blog/sustain-2026-recap/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 449,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '프랑스 비질랑스법(LOI Vigilance), CSDDD·CSRD에 주는 시사점',
      author: '관리자',
      date: '2026.04.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>프랑스 LOI Vigilance에 대한 새 실증 연구는 CSDDD와 CSRD가 단순 컴플라이언스 비용이 아닌 실질적 운영 효율 향상을 가져올 수 있음을 보여줍니다. EcoVadis가 분석한 인사이트입니다.</p><h3>주요 포인트</h3><ul><li>프랑스 비질랑스법 운영 효과 실증 연구</li><li>CSDDD·CSRD가 경쟁우위로 작용 가능</li><li>컴플라이언스 → 가치 창출 전환 사례</li></ul><p>원문: <a href="https://ecovadis.com/blog/what-loi-de-vigilance-tells-us-about-csddd-and-csrd/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 450,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '협력사 리스크 평가 실시법: 프로세스·카테고리·모범 사례',
      author: '관리자',
      date: '2026.04.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>협력사 리스크 평가의 실용 가이드로, 핵심 리스크 카테고리·5단계 프로세스·데이터를 협력사 성과로 전환하는 방법을 다룬 EcoVadis 자료입니다.</p><h3>주요 포인트</h3><ul><li>5단계 협력사 리스크 평가 프로세스</li><li>주요 리스크 카테고리(ESG·재무·운영)</li><li>평가 데이터 → 성과 향상 변환</li></ul><p>원문: <a href="https://ecovadis.com/blog/supplier-risk-assessment/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 451,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'Sustain 2026 CPO 서클 — 5가지 핵심 인사이트',
      author: '관리자',
      date: '2026.03.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Sustain 2026 파리 행사에서 수천 명의 지속가능성·조달 리더가 'Sustained Advantage'를 논의하는 동안, 비공개 CPO 서클에서 진행된 보다 친밀한 대화의 5가지 핵심 인사이트를 정리한 글입니다.</p><h3>주요 포인트</h3><ul><li>글로벌 CPO들의 비공개 대화 인사이트</li><li>지속가능 우위 확보의 실전 노하우</li><li>조달 리더십의 진화 방향</li></ul><p>원문: <a href="https://ecovadis.com/blog/inside-the-room-5-learnings-from-the-sustain-2026-cpo-circle/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 452,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '대규모 지속가능 조달 — Amazon Business와 EcoVadis의 협력 모델',
      author: '관리자',
      date: '2026.03.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>조달 리더에게 공급망 지속가능성의 전략적 명분(리스크 감소, 컴플라이언스, ESG 진척)은 이미 명확합니다. 이제 'Why'가 아니라 'How to scale'이 핵심 질문이며, Amazon Business와 EcoVadis가 그 답을 제공합니다.</p><h3>주요 포인트</h3><ul><li>대규모 책임 구매의 실행 모델</li><li>Amazon Business + EcoVadis 통합 사례</li><li>조달 자동화로 ESG 가시성 강화</li></ul><p>원문: <a href="https://ecovadis.com/blog/sustainable-procurement-at-scale-how-amazon-business-and-ecovadis-make-responsible-purchasing-easier/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 453,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'CSDDD·EU 강제노동 규제 임박, 투명성 격차 해소법',
      author: '관리자',
      date: '2026.03.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>실사 규제 시행 시점이 다가오는 가운데 공급망 투명성 격차를 어떻게 메울지 다룬 EcoVadis 분석입니다. 전통적 감사가 실패하는 이유와 Worker Voice 기술이 회복력을 어떻게 구축하는지 설명합니다.</p><h3>주요 포인트</h3><ul><li>전통 감사 방식의 한계 진단</li><li>Worker Voice 기술의 회복력 강화 효과</li><li>HRDD 규제 대응 실용 전략</li></ul><p>원문: <a href="https://ecovadis.com/blog/solving-the-transparency-gap-as-csddd-and-eu-forced-labor-regulation-dates-loom/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 454,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '가치사슬 행동·보고 — 옴니버스 이후 새 환경 항법',
      author: '관리자',
      date: '2026.03.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>옴니버스 이후 공급망 데이터와 협력사 인게이지먼트에 관한 새로운 의무사항을 실용적으로 정리한 EcoVadis 개요입니다.</p><h3>주요 포인트</h3><ul><li>옴니버스 이후 보고 의무 변화 정리</li><li>공급망 데이터·인게이지먼트 요건</li><li>실무자용 우선순위 가이드</li></ul><p>원문: <a href="https://ecovadis.com/blog/value-chain-action-reporting-after-omnibus/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 455,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '서아프리카 농업의 여성 목소리 검증',
      author: '관리자',
      date: '2026.03.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Labor Rights Project의 성별 분리 설문 데이터가 서아프리카 여성 농업 노동자가 직면한 고유 건강·시스템적 리스크를 포착했습니다. 공급망 인권 데이터의 깊이를 보여주는 사례입니다.</p><h3>주요 포인트</h3><ul><li>성별 분리 데이터의 인권 가시화 효과</li><li>서아프리카 농업 노동자 리스크 정량화</li><li>Worker Voice 기술의 차별화 가치</li></ul><p>원문: <a href="https://ecovadis.com/blog/women-voices-in-africa/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 456,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'VSME 도입, 중견기업은 준비되었나',
      author: '관리자',
      date: '2026.02.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>옴니버스 I이 VSME 적용 범위를 1,000명 이상 기업으로 확대했습니다. 자율 표준인 VSME만으로 충분한지, 단순화된 ESRS가 더 전략적인 선택인지 다룬 EcoVadis 분석입니다.</p><h3>주요 포인트</h3><ul><li>VSME 적용 범위 1,000명 기업으로 확대</li><li>VSME vs 단순화 ESRS 비교 분석</li><li>중견기업의 전략적 선택 가이드</li></ul><p>원문: <a href="https://ecovadis.com/blog/is-your-mid-sized-company-ready-for-the-new-vsme/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 457,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'EcoVadis World Tour 뉴욕 2025 — 핵심 인사이트',
      author: '관리자',
      date: '2026.01.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis World Tour 2025의 뉴욕 행사에 북미 지역 지속가능성·조달·비즈니스 리더들이 모여 '소음 속에서 공급망 명료성을 확보하는 법'을 논의했습니다.</p><h3>주요 포인트</h3><ul><li>북미 시장 EcoVadis World Tour 핵심 의제</li><li>공급망 데이터 명료성 확보 전략</li><li>현지 리더 인사이트 공유</li></ul><p>원문: <a href="https://ecovadis.com/blog/from-noise-to-clarity-key-takeaways-from-the-ecovadis-world-tour-new-york-2025/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 458,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'EcoVadis World Tour 샌프란시스코 — 대규모 지속가능 조달 청사진',
      author: '관리자',
      date: '2026.01.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>9개 도시 EcoVadis World Tour 2025의 마지막 정거장 샌프란시스코에서는 조달·기술·비즈니스 리더들이 모여 대규모로 지속가능하고 회복력 있는 공급망을 구축하는 방법을 탐구했습니다.</p><h3>주요 포인트</h3><ul><li>스케일러블 지속가능 조달 모델</li><li>기술 활용 공급망 회복력 구축</li><li>9개 도시 World Tour 마무리 인사이트</li></ul><p>원문: <a href="https://ecovadis.com/blog/a-blueprint-for-scaling-sustainable-procurement-ecovadis-world-tour-stop-in-san-francisco/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 459,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '2026 지속가능성 전망 — 야망에서 임팩트로',
      author: '관리자',
      date: '2026.01.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2026년은 전환의 해가 아니라 공급망에 대한 결산의 해라는 메시지를 담은 EcoVadis 전망 보고서입니다. 야망 단계에서 측정 가능한 임팩트로 이행하는 시점입니다.</p><h3>주요 포인트</h3><ul><li>2026 = 공급망 결산의 해</li><li>야망 → 임팩트 이행 가이드</li><li>핵심 지표·성과 측정 프레임</li></ul><p>원문: <a href="https://ecovadis.com/blog/2026-sustainability-outlook/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 460,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'EcoVadis World Tour 런던 2025 — 복잡성을 기회로',
      author: '관리자',
      date: '2026.01.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis World Tour 2025 런던 정거장에 다양한 산업의 지속가능성·조달·ESG 리더들이 모여 '복잡성을 기회로 전환하는 법'이라는 강력한 주제를 탐구했습니다.</p><h3>주요 포인트</h3><ul><li>유럽 시장 ESG 리더 네트워킹</li><li>복잡성 → 기회 전환 프레임</li><li>다국적 산업의 베스트 프랙티스 공유</li></ul><p>원문: <a href="https://ecovadis.com/blog/turning-complexity-into-opportunity-insights-from-the-ecovadis-world-tour-london-2025/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 417,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[고객 사례] 시세이도, 지속가능한 뷰티에 대한 도전',
      author: '관리자',
      date: '2026.02.11',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>시세이도는 EcoVadis의 평가와 IQ Plus를 활용해 글로벌 협력사 네트워크의 CSR 리스크를 식별하고 시정조치를 시행하고 있습니다. 동시에 'Responsible Beauty Initiative(RBI)'를 통해 뷰티 산업 전반의 표준 향상과 협력 강화를 추진하고 있습니다.</p><h3>주요 포인트</h3><ul><li>EcoVadis 평가 + IQ Plus 활용으로 협력사 CSR 리스크 가시화</li><li>RBI 이니셔티브로 산업 차원의 표준 상향</li><li>일본 뷰티 산업의 지속가능 공급망 모범 사례</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/buyers-customer-stories/shiseido-the-challenge-of-sustainable-beauty" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 418,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[보도자료] 기후 행동 지연, 2030년까지 글로벌 기업 연간 5,000억 달러 이상 부채 리스크',
      author: '관리자',
      date: '2026.01.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis가 BCG와 공동으로 발표한 보고서에 따르면, 글로벌 기업이 기후 행동을 미룰 경우 2030년까지 연간 5,000억 달러를 초과하는 부채 리스크에 노출될 수 있습니다. 기후 무위(無爲)의 비용을 정량화한 분석입니다.</p><h3>주요 포인트</h3><ul><li>2030년 연간 5,000억 달러 잠재 부채 리스크 정량화</li><li>지연된 기후 대응의 재무적 손실 가시화</li><li>선제적 탈탄소 투자의 경제적 정당성 강화</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/press-releases/delayed-climate-action-could-expose-global-companies-annual-liability-risk" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 419,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[보도자료] SOMPO리스크와 EcoVadis, 일본 기업 공급망 리스크 대응 위한 MOU 체결',
      author: '관리자',
      date: '2026.01.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis와 SOMPO 리스크 매니지먼트가 일본 기업의 정보 공시와 리스크 대응을 공동 지원하기 위한 기본 합의서(MOU)를 체결했습니다. 환경·노동·인권 등 공급망 리스크를 가시화·평가해 글로벌 공급망에서 일본 기업의 경쟁력을 뒷받침합니다.</p><h3>주요 포인트</h3><ul><li>일본 보험사와 ESG 평가사의 전략적 제휴</li><li>공급망 '보이지 않는 리스크' 가시화 솔루션</li><li>일본 기업의 정보공시 대응 역량 강화</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/press-releases/joint-release-sompo-risk-and-ecovadis-sign-memorandum-of-understanding" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 420,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[보도자료] LINK-J×BCG 헬스케어 산업 전략 세미나에 EcoVadis 임원 등단',
      author: '관리자',
      date: '2026.01.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>LINK-J와 BCG가 공동 주최한 헬스케어 산업 전략 세미나 '헬스케어×지속가능 조달'에 EcoVadis 일본법인 대표 와카츠키 죠와 어카운트 임원 이와야마 료야가 발표자로 참가했습니다.</p><h3>주요 포인트</h3><ul><li>일본 헬스케어 산업의 지속가능 조달 의제 부각</li><li>EcoVadis 임원진의 일본 시장 인사이트 공유</li><li>제약·의료기기 산업의 ESG 공급망 전략</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/press-releases/link-j-x-bcg-healthcare-industry-strategy-seminar" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 421,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[웨비나] 인권 실사·인적자본 공시와 노동·인권 리스크 공동 세미나',
      author: '관리자',
      date: '2026.01.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis가 공동 개최한 일본 시장 대상 세미나로, 인권 실사(HRDD)·인적 자본 공시·노동/인권 리스크의 실무 대응 방안을 다뤘습니다. 일본 기업이 글로벌 인권 규제에 대응하기 위한 실용 가이드입니다.</p><h3>주요 포인트</h3><ul><li>HRDD 글로벌 규제 트렌드 정리</li><li>인적자본 공시(SSBJ 등) 일본 기업 영향</li><li>공급망 노동·인권 리스크 통합 관리 방안</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/webinars/ecovadis-co-hosted-seminar-human-rights-due-diligence-human-capital-disclosure-and-labor-human-rights-risks" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 422,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[솔루션] 바이어-협력사가 함께 만드는 지속가능 공급망 — EcoVadis 활용 대화·개선 실천',
      author: '관리자',
      date: '2025.10.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis가 일본 시장에 제공하는 가이드로, 바이어와 협력사가 EcoVadis를 매개로 어떻게 대화하고 개선 활동을 함께 추진할 수 있는지 실천적 방법론을 정리했습니다.</p><h3>주요 포인트</h3><ul><li>바이어-협력사 ESG 대화 프레임워크</li><li>평가 결과 기반 개선 행동 단계</li><li>일본 산업 특성에 맞춘 사례·노하우</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/solution-materials-for-rated/building-a-sustainable-supply-chain-together-with-buyers-and-suppliers" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 423,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[고객 사례] 후지쯔, 데이터 기반 지속가능 경영…EcoVadis로 공급망 개혁',
      author: '관리자',
      date: '2025.09.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>일본 IT 기업 후지쯔가 EcoVadis를 활용해 데이터 기반의 지속가능 경영을 추진하고 글로벌 공급망 개혁에 도전하는 사례입니다. 협력사 ESG 데이터를 통합 관리하며 선제적으로 리스크에 대응합니다.</p><h3>주요 포인트</h3><ul><li>대형 IT 기업의 EcoVadis 활용 사례</li><li>협력사 ESG 데이터 통합·분석 체계</li><li>일본 공급망 개혁의 모범 사례</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/buyers-customer-stories/data-driven-sustainability-management-fujitsu-takes-on-supply-chain-reform-with-ecovadis" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 424,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[솔루션] EcoVadis 탄소 평가 방법론 — 개요와 원칙',
      author: '관리자',
      date: '2025.07.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis가 적용하는 탄소 평가 방법론의 개요와 핵심 원칙을 정리한 일본어 가이드입니다. 기업이 평가 항목과 점수 산정 기준을 사전에 이해하는 데 도움이 됩니다.</p><h3>주요 포인트</h3><ul><li>EcoVadis 탄소 평가 항목·구조 정리</li><li>점수 산정 원칙과 가중치</li><li>기업의 사전 준비를 위한 실무 가이드</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/solution-materials-for-rated/ecovadis-carbon-methodology-overview-principles-ja" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 425,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[백서] 방대한 ESG 데이터를 전략적 액션으로 — ESG 리스크 관리 실천 가이드',
      author: '관리자',
      date: '2025.05.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis의 IQ Plus 솔루션을 활용해 방대한 ESG 데이터를 전략적 의사결정으로 연결하는 실천 가이드입니다. 데이터 과부하 시대의 ESG 리스크 관리 모범 사례를 다룹니다.</p><h3>주요 포인트</h3><ul><li>ESG 데이터 과부하 대응 실천 방법</li><li>IQ Plus 활용 우선순위·인사이트 도출</li><li>ESG 리스크 관리 베스트 프랙티스</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/whitepapers/iq-plus-from-data-overload-to-decisive-action-ja" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 426,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[솔루션] 워커 보이스 커넥트 — 공급망 인권 가시성 솔루션',
      author: '관리자',
      date: '2025.04.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis의 신규 솔루션 'Worker Voice Connect'는 협력사 공급망의 근로자 목소리를 직접 수집·분석해 인권 책무성을 강화합니다. 글로벌 HRDD 규제에 대응하는 실무 도구입니다.</p><h3>주요 포인트</h3><ul><li>근로자 직접 입력 기반 인권 검증 채널</li><li>HRDD 규제 대응 디지털 솔루션</li><li>일본·아시아 공급망 적용 사례</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/solution-materials-for-requesting/worker-voice-connect-brochure-jp-2" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 427,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[블로그] 2024 최신 데이터 — EcoVadis 평가에서 본 일본 기업의 지속가능성 동향과 과제',
      author: '관리자',
      date: '2025.03.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis 평가 데이터를 기반으로 일본 기업의 지속가능성 진척과 주요 과제를 분석한 블로그입니다. 글로벌 평균과의 비교, 강점·약점 영역, 향후 개선 방향을 다룹니다.</p><h3>주요 포인트</h3><ul><li>일본 기업 EcoVadis 등급 분포 현황</li><li>강점 영역(거버넌스)과 약점 영역(인권)</li><li>글로벌 표준 도달을 위한 개선 우선순위</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/blog/sustainability-trends-and-challenges-of-japanese-companies-as-seen-in-ecovadis-ratings" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 428,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[보도자료] EcoVadis, Google Cloud와 제휴…자율형 AI 에이전트로 업무 최적화',
      author: '관리자',
      date: '2025.01.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis가 Google Cloud와 제휴해 '자율형 AI 에이전트'를 활용한 업무 최적화와 고객 가치 향상을 가속한다고 발표했습니다. 평가·분석 자동화로 사용자 경험을 한 단계 끌어올립니다.</p><h3>주요 포인트</h3><ul><li>Google Cloud 기반 자율형 AI 에이전트 도입</li><li>평가·고객 응대 자동화로 효율성 확보</li><li>대규모 ESG 데이터 처리 기반 강화</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/press-releases/ecovadis-google-cloud-partnership" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 429,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[보도자료] EcoVadis, Microsoft \'AI Transformation - Scale\' 부문 FY25 로컬 파트너 어워드 수상',
      author: '관리자',
      date: '2024.11.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis가 Microsoft의 FY25 로컬 파트너 어워드 'AI Transformation - Scale' 부문에서 수상했다고 발표했습니다. AI를 활용한 ESG 평가·인사이트 솔루션의 우수성을 인정받은 사례입니다.</p><h3>주요 포인트</h3><ul><li>Microsoft 공식 파트너 어워드 수상</li><li>AI 활용 ESG 솔루션 시장 인정</li><li>일본 시장 AI 적용 모범 사례</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/press-releases/ecovadis-wins-fy25-local-partner-award-in-the-microsoft-ai-transformation-scale-category" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 430,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[솔루션] EcoVadis 평가용 증빙 자료 가이드',
      author: '관리자',
      date: '2024.10.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis 평가에서 제출해야 하는 증빙 자료의 종류와 작성 요건을 정리한 일본어 가이드입니다. 평가 첫 시도 기업이 사전 준비를 통해 실수를 줄일 수 있도록 돕습니다.</p><h3>주요 포인트</h3><ul><li>평가 항목별 필수·권장 증빙 정리</li><li>제출 문서 포맷·언어 요건</li><li>일본 기업 사례 기반 실수 회피 팁</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/solution-materials-for-rated/ecovadis-document-guide-ja" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 431,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[고객 사례] 일본특수도업(Niterra), EcoVadis로 그룹 ESG 거버넌스 강화',
      author: '관리자',
      date: '2024.09.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>일본특수도업(Niterra, 옛 NGK 스파크 플러그)이 EcoVadis를 활용해 그룹 차원의 ESG 거버넌스를 강화하고 미래지향적 지속가능 경영을 추진하는 사례입니다.</p><h3>주요 포인트</h3><ul><li>Niterra의 그룹 ESG 거버넌스 구축</li><li>EcoVadis 평가 기반 개선 활동 체계화</li><li>일본 자동차 부품 산업 ESG 모범 사례</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/suppliers-customer-stories/strengthening-niterra-s-esg-governance-with-ecovadis" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 432,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[웨비나] EcoVadis 점수 향상 세미나 — 환경 점수 개선',
      author: '관리자',
      date: '2024.08.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis가 공동 개최한 점수 향상 세미나로, 평가 4개 영역 중 환경 점수를 효과적으로 개선하는 실천 방법을 다뤘습니다. 협력사 실무자 대상 콘텐츠입니다.</p><h3>주요 포인트</h3><ul><li>환경 점수 핵심 평가 항목 정리</li><li>개선 우선순위 도출 방법론</li><li>실제 사례 기반 점수 향상 노하우</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/suppliers-customer-stories/ecovadis-joint-seminar-improving-environmental-score" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 433,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[솔루션] EcoVadis 인증 컨설팅 파트너 안내 가이드',
      author: '관리자',
      date: '2024.07.11',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis 평가 준비를 지원하는 공식 인증 컨설팅 파트너 제도와 활용 방법을 정리한 일본어 안내 가이드입니다. 자체 역량이 부족한 기업도 외부 전문가 도움을 받을 수 있습니다.</p><h3>주요 포인트</h3><ul><li>EcoVadis 인증 파트너 제도 개요</li><li>파트너 활용 시점·범위 가이드</li><li>일본 시장 적용 사례·요금 구조</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/solution-materials-for-requesting/ecovadis-accredited-consulting-partner-information-guide-jp-2" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 434,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[웨비나] 데이터로 바꾸는 일본 기업 지속가능 조달 — Barometer 2026과 ROI 극대화',
      author: '관리자',
      date: '2024.05.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EcoVadis Sustainable Procurement Barometer 2026 데이터를 통해 일본 기업의 지속가능 조달 실태를 분석하고, ROI를 최대화하기 위한 다음 단계를 제시한 웨비나입니다.</p><h3>주요 포인트</h3><ul><li>Barometer 2026 일본 시장 핵심 인사이트</li><li>지속가능 조달 ROI 측정·향상 방안</li><li>글로벌 평균 대비 일본 기업 격차 진단</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/webinars/transforming-japanese-companies-sustainable-procurement-through-data-sustainable-procurement-barometer-2026-webinar" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 435,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[웨비나] EcoVadis 활용한 SSBJ 기준 지속가능성 정보공시 대비',
      author: '관리자',
      date: '2024.04.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>일본 SSBJ(지속가능성 기준 위원회) 공시 기준 도입에 대비해 EcoVadis를 어떻게 활용할 수 있는지 다룬 SOMPO 공동 웨비나입니다. 일본 기업의 ISSB 호환 보고 준비에 직결되는 실무 콘텐츠입니다.</p><h3>주요 포인트</h3><ul><li>SSBJ 기준의 EcoVadis 활용 매핑</li><li>ISSB 호환 일본 공시 대비 가이드</li><li>SOMPO·EcoVadis 협업 시너지 사례</li></ul><p>원문: <a href="https://resources.ecovadis.com/ja/webinars/sompo-webinar-on-demand" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 354,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[ESG 칼럼] 에코바디스, 중소기업의 \'신뢰 여권\'이 되다',
      author: '관리자',
      date: '2025.12.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 공급망의 새로운 질서 속에서 에코바디스 평가가 중소기업에게 '신뢰의 여권' 역할을 하고 있다는 칼럼입니다. 글로벌 발주처 입찰·계약에서 ESG 인증이 사실상 진입 조건이 되어가고 있습니다.</p><h3>주요 포인트</h3><ul><li>글로벌 발주처의 ESG 평가 요구 일반화</li><li>중소기업 수출 경쟁력의 핵심 자산화</li><li>인증 → 계약·금융까지 이어지는 효과</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTFBMczg1dWtZaXNUQkVGOE5TSUE4ak5McVJnbnN3Vm1McTVVOWZyME5ELURKQVpZYy1reE5UdmlBTkpoSXc2b2pfMENrU0I1MkNJR2tBQkFTN0RoRFdhQ2xj?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 356,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스 인사이트: 탄소가 새로운 경쟁의 차원으로 부상',
      author: '관리자',
      date: '2025.12.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스 분석에 따르면 글로벌 네트워크 기업 다수가 이제 막 탄소 관리에 착수했고 일부만이 본격적으로 확장 중입니다. 탄소 규제와 국경세가 다가오면서 지역별 저탄소 준비도가 새로운 경쟁력으로 떠오르고 있습니다.</p><h3>주요 포인트</h3><ul><li>탄소 관리가 비용 → 경쟁력으로 전환</li><li>지역별 저탄소 준비도 격차 확대</li><li>CBAM 등 국경세 시대 대비 시급</li></ul><p>원문: <a href="https://ecovadis.com/blog/carbon-emerges-as-a-competitive-dimension/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 357,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'Nordex Group, 에코바디스 플래티넘 등급 달성',
      author: '관리자',
      date: '2025.12.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>독일 풍력 터빈 제조사 Nordex Group이 뛰어난 지속가능성 성과로 에코바디스 플래티넘 등급(상위 1%)을 획득했다고 발표했습니다. 재생에너지 장비 산업의 ESG 모범 사례입니다.</p><h3>주요 포인트</h3><ul><li>에코바디스 최상위 플래티넘(상위 1%) 등급</li><li>풍력 산업 공급망의 지속가능 경영 인정</li><li>글로벌 발주 경쟁력 강화 효과</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiywFBVV95cUxQVWRLUldkQ2podEk5OUN1OFVPejlPQndDZ19zRnVCNzAyd0c2RmZKTEo1YzlrX3RBYTM0VmVncGZGNENRM2FGcjBTTGZEU2dCdFJqNzViM3k4cFBDZDVXajMyQ3dwX3Q2bGhCcEZWM2pyUFpVb0t4N2dFcEljSzQ2cGNkOGh4bDBNa3BEZEd5cWl4dDhZa0ZMUTRyWHJwVkZxYVNOWUhpY0JmM0xJa0pTTHREMGdaNGs0WGpUY0FfT1V1Yi10VDBwUnotWQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 358,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '피에이치에이, 에코바디스 ESG 평가서 2년 연속 플래티넘',
      author: '관리자',
      date: '2025.12.11',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>자동차 부품기업 피에이치에이(PHA)가 에코바디스 ESG 평가에서 2년 연속 최상위 플래티넘 등급을 획득했습니다. 한국 자동차 부품 업계의 글로벌 ESG 경쟁력 사례로 평가됩니다.</p><h3>주요 포인트</h3><ul><li>2년 연속 플래티넘 유지로 일관성 입증</li><li>글로벌 자동차 OEM 협력 경쟁력 확보</li><li>한국 부품사의 ESG 모범 사례</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTFB2OVVjVWxKTmFTM3oxSnNtMVFBbHJyOHJXT3EtT2xKTWp6ekZTU1NEN0JsaThGN2NtOTFpRzRtQlo5N2szTGhMQ0hYVVFEeVVnWUdRVjU2VlhLUdIBVEFVX3lxTE5MYkFCTmRKZjl6c1RJWW1LZ045WloxTzdPeHpJazlzQWcxcFJNcndoYTVqWU90V2ZOSXNPVkZYSUNaRHZoNEpyaXZBYzdnMzFMSzZRSg?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 359,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '투자자 공급망 타깃화 속 에코바디스, 가장 유용한 ESG 평가로',
      author: '관리자',
      date: '2025.12.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>투자자들이 공급망 ESG에 점점 더 집중하면서 에코바디스 평가가 가장 유용한 ESG 데이터 소스로 부상했다는 분석입니다. New Private Markets의 데이터 스냅샷 기사입니다.</p><h3>주요 포인트</h3><ul><li>공급망 ESG에 대한 투자자 관심 급증</li><li>에코바디스 평가의 시장 표준 지위 강화</li><li>비공개 시장(PE)의 ESG 데이터 의존도 증가</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMitAFBVV95cUxOdDJrdnlvaXMyMVJMMTNiNk9wLXcwR054WUVIa3FscE1SWE9Nc3BJdnlnLXh2dWJTMnJrSEpiY25SUTJaeGJTUm9mMVQ0dnRiVlIwaUVjMkowZlhlaHVHLW9rTVUta0lFYjBvcllVSHNLa1hjeDFGdUlpb1hRT3BBdllLU2UzYUFoSUxJMnIwVkx2cGx5dERwcVVzRklQcDRYaXRuTkl0NmtNUU9lY01QMURZNnE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 360,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'EU, 옴니버스 협상 마무리…지속가능성 체계 대폭 재편',
      author: '관리자',
      date: '2025.12.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>브뤼셀이 마지막 트라이얼로그에서 옴니버스 협상을 마무리하며 EU 지속가능성 체계의 대대적 재편이 확정됐습니다. CSRD·CSDDD 적용 범위와 시기에 큰 변화가 예상됩니다.</p><h3>주요 포인트</h3><ul><li>EU 지속가능성 규제 체계의 본격 재편</li><li>적용 범위·시기 조정으로 기업 부담 변화</li><li>글로벌 공급망 ESG 요구의 새로운 균형점</li></ul><p>원문: <a href="https://ecovadis.com/blog/the-eu-closes-deal-on-omnibus/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 361,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '유한양행 자회사 유한화학, 에코바디스 플래티넘 메달 획득',
      author: '관리자',
      date: '2025.12.03',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유한양행 자회사 유한화학이 에코바디스 평가에서 플래티넘 메달을 획득했다고 발표했습니다. 화학·제약 산업의 한국 기업이 글로벌 최상위 ESG 평가에 도달한 사례로 주목됩니다.</p><h3>주요 포인트</h3><ul><li>플래티넘 메달로 글로벌 상위 1% 진입</li><li>제약·화학 분야 한국 기업 ESG 경쟁력</li><li>글로벌 고객사 공급계약 경쟁력 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE0wMkZxVGhiWldBdFFiUWVXNzFLQUtGMzZYQ3VVYWFkaElEVER6R0NRc2tuS3EyX2NXNGdwd1o2Wl9tc2NfUVZWdmJhX2FLc29ONVZOT0JNOEhqYzVsOTdNeUhkLWRfZWs0VFBESA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 363,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'ABB, 에코바디스 플래티넘 메달 수상…뛰어난 지속가능성 성과',
      author: '관리자',
      date: '2025.12.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>스위스 다국적 산업기술 기업 ABB가 에코바디스 평가에서 플래티넘 메달을 획득했다고 발표했습니다. 산업·전력 자동화 분야의 지속가능 경영 모범 사례로 인정받았습니다.</p><h3>주요 포인트</h3><ul><li>ABB 플래티넘 등급으로 상위 1% 진입</li><li>산업 자동화 분야 ESG 모범 평가</li><li>글로벌 인프라·제조 고객사 신뢰 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMivAFBVV95cUxNWm1sRDNXNWt3SDR1WWFlMHVvZzhZSnA5UHlDbGNNSGRiWFZxTlV3bDZPMno4VzBTSHk5UU9xYmJacWk4YWpuZ2tZaWNCV0x6MVFmdG52UDR3VV9IZnNXV3dNZVlaWHpuOGFBdktDQTctY2tNS29id3lkMDJoaXpra1Z2U1FleXNaSS0yRFVZN3MxZ0xwSmpBcHFkX3RqVTIwSzJNSS1yT1FjXzdYc05FbGJvMEJ1emdObXJ6TA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 364,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'Japan Elastomer 오이타 공장, 에코바디스 플래티넘 메달',
      author: '관리자',
      date: '2025.11.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>아사히카세이 자회사 Japan Elastomer의 오이타 공장이 에코바디스 평가에서 플래티넘 메달을 받았다고 발표했습니다. 일본 화학 산업의 공장 단위 ESG 평가 모범 사례입니다.</p><h3>주요 포인트</h3><ul><li>공장 단위 플래티넘 평가 사례</li><li>일본 화학산업의 ESG 모범 평가</li><li>고무·엘라스토머 공급망 신뢰성 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiX0FVX3lxTE5FbVd5YzZ1Ykp6bHJGcVRyMDRjRzhQdlhlQ1oxTUtHX1FVVmpZaXRhaXNmeXVvUzFqQWROdHpaRExwcklXSW5pN2c4eXVlanZTcTVxMU0za1p2ODJBTzR3?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 365,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스 인사이트: COP30 진행 중, 기업이 주목할 5가지',
      author: '관리자',
      date: '2025.11.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스가 브라질 벨렘에서 진행되는 COP30의 핵심 의제 5가지를 분석했습니다. 기후 금융, 생물다양성, 책임있는 AI 활용 등 이사회 회의실에서도 다뤄야 할 주제들입니다.</p><h3>주요 포인트</h3><ul><li>COP30 핵심 의제 5가지 정리</li><li>기후 금융·생물다양성·AI 책임</li><li>이사회 차원의 전략적 함의</li></ul><p>원문: <a href="https://ecovadis.com/blog/cop30-is-underway-5-things-businesses-need-to-watch/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 366,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스 인사이트: 옴니버스 투표가 조달·공급망에 주는 의미',
      author: '관리자',
      date: '2025.11.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU 옴니버스 투표 결과가 조달·공급망 리더에게 어떤 의미인지 분석한 에코바디스 칼럼입니다. 정치적 좌절을 전략적 기회로 전환하는 방법이 핵심입니다.</p><h3>주요 포인트</h3><ul><li>규제 변화 속에서도 자발적 ESG 행동 필요성</li><li>조달·공급망 리더의 선제적 대응 전략</li><li>컴플라이언스에서 회복력으로의 전환</li></ul><p>원문: <a href="https://ecovadis.com/blog/what-the-omnibus-vote-means-for-procurement-and-supply-chain-leaders/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 367,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '다온시스, 에코바디스 플래티넘 획득…글로벌 ESG 최상위 기업으로',
      author: '관리자',
      date: '2025.11.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>IT 솔루션 기업 다온시스가 에코바디스 평가에서 플래티넘 등급을 획득해 글로벌 ESG 최상위 1%에 진입했다고 발표했습니다. 한국 IT 기업의 ESG 도약 사례입니다.</p><h3>주요 포인트</h3><ul><li>한국 IT 기업의 플래티넘 진입 사례</li><li>글로벌 상위 1% ESG 경쟁력 입증</li><li>공공·민간 발주 경쟁력 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE9KWHkyZU43Qkh6TlFSTFNoVk9haWZaUkhtSGd3RlVHZWpuYVhONVdsbUtmbzdyTUJMTkNqREtyMm1kWUJ6Q0djMjNQaUk1MThBODV4RWhPZnZiRnFGUm5ZQUhoQUxDb0xY?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 368,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 공급망 ESG 입법 흐름, 리스크·회복력 전략 재편',
      author: '관리자',
      date: '2025.11.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>캐나다 S-211, 캘리포니아 SB-253, EU 다중 규제 등 새로운 공급망 ESG 입법 흐름이 기업의 회복력 전략에 도전을 던지고 있다는 에코바디스 분석입니다.</p><h3>주요 포인트</h3><ul><li>다국적 공급망 ESG 입법 동시다발 진행</li><li>선제적 컴플라이언스가 회복력의 핵심</li><li>리스크 관리 프로세스의 전사 통합 필요</li></ul><p>원문: <a href="https://ecovadis.com/blog/wave-of-supply-chain-esg-laws-to-rethink-risk-and-resilience-strategy/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 369,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'HS효성첨단소재, 에코바디스서 최상위 등급 유지',
      author: '관리자',
      date: '2025.11.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>HS효성첨단소재가 에코바디스 평가에서 최상위 등급을 유지했다고 발표했습니다. 첨단소재 산업의 한국 기업이 지속적으로 글로벌 ESG 우수 기업으로 인정받는 사례입니다.</p><h3>주요 포인트</h3><ul><li>최상위 등급 지속 유지로 일관성 입증</li><li>첨단소재 산업의 ESG 모범 사례</li><li>글로벌 공급망 신뢰성 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiRkFVX3lxTE1vUTVaTXJ1ZjlNVlphZEtLNjd3ME02VW42S0o3NFc0YWlvMVV1QmJVTXM1a3hCMklacWZwTDljNE5HckZCUFE?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 370,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, Amazon Business와 협력해 지속가능 셀러 지원',
      author: '관리자',
      date: '2025.11.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스가 Amazon Business와 새 파트너십을 맺어 지속가능성에 헌신하는 셀러를 구매자에게 부각시킬 수 있도록 지원합니다. 글로벌 B2B 마켓플레이스에서 ESG 인증의 가시성이 강화됩니다.</p><h3>주요 포인트</h3><ul><li>Amazon Business 내 ESG 셀러 차별화</li><li>구매자 검색·필터에 ESG 인증 노출</li><li>중소 셀러의 ESG 인증 가치 가시화</li></ul><p>원문: <a href="https://ecovadis.com/blog/stand-out-on-amazon-business-the-new-way-to-prove-your-commitment-to-sustainability/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 371,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스 보고서: 美·캐나다 기업의 Scope 3 행동 준비도',
      author: '관리자',
      date: '2025.11.05',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스가 3,000개 기업 데이터를 분석해 미국·캐나다 기업의 Scope 3 감축 진척과 가치사슬 탈탄소 준비도를 평가한 보고서를 발표했습니다.</p><h3>주요 포인트</h3><ul><li>3,000개 기업 데이터 기반 정량 분석</li><li>북미 기업의 목표 설정·보고 진척</li><li>가치사슬 탈탄소 가속화 과제 도출</li></ul><p>원문: <a href="https://ecovadis.com/blog/scope-3-us-canada-suppliers-value-chain-decarbonization/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 372,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: EU 비즈니스 자연 정상회의 핵심 인사이트',
      author: '관리자',
      date: '2025.10.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>핀란드 헬싱키에서 열린 EU 비즈니스 자연 정상회의 2025의 메시지가 분명했습니다 — 자연 보존이 비즈니스 회복력의 근간이며, 그 쇠퇴는 모든 조직에 재무 리스크를 초래합니다.</p><h3>주요 포인트</h3><ul><li>자연자본 = 비즈니스 회복력의 핵심 자산</li><li>자연 쇠퇴의 재무적 리스크 정량화 흐름</li><li>TNFD·EU 자연복원법 등 정책 동력</li></ul><p>원문: <a href="https://ecovadis.com/blog/nature-takes-center-stage-key-insights-from-the-eu-business-nature-summit-2025/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 373,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: EUDR 동향…집행위, 연기 거부하나 단계적 적용 제안',
      author: '관리자',
      date: '2025.10.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU 산림 파괴 규제(EUDR) 컴플라이언스가 단계적으로 도입될 가능성이 제기됐습니다. 집행위는 시행 연기는 거부했지만 단계적 적용과 유예 기간을 제안했습니다.</p><h3>주요 포인트</h3><ul><li>EUDR 본격 시행 vs 단계적 적용 절충안</li><li>대형·중소 기업별 적용 시점 차등 가능성</li><li>공급망 추적·문서화 요건 그대로 유지</li></ul><p>원문: <a href="https://ecovadis.com/blog/latest-on-eudr-compliance/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 374,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: EU 옴니버스 사가, 새로운 불확실성 국면 진입',
      author: '관리자',
      date: '2025.10.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU 의회가 옴니버스 협상 입장에 대한 타협안을 거부하면서 EU 지속가능성 입법은 새로운 불확실성 국면에 진입했습니다. 대폭 완화 시나리오가 후퇴할 가능성도 있습니다.</p><h3>주요 포인트</h3><ul><li>EU 의회의 타협안 거부로 협상 장기화</li><li>대폭 완화 시나리오 후퇴 가능성</li><li>글로벌 기업의 정책 모니터링 강화 필요</li></ul><p>원문: <a href="https://ecovadis.com/blog/the-eus-omnibus-saga-enters-a-new-phase-of-uncertainty/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 375,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, SGS·QIMA와 공급망 지속가능성 감사 서비스 출시',
      author: '관리자',
      date: '2025.10.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스가 글로벌 인증기관 SGS, QIMA와 협력해 공급망 지속가능성 감사 신규 서비스를 출시한다고 발표했습니다. 평가 + 현장 감사를 결합한 통합 솔루션입니다.</p><h3>주요 포인트</h3><ul><li>평가 + 현장 감사 결합한 통합 서비스</li><li>SGS·QIMA의 글로벌 감사 네트워크 활용</li><li>공급망 ESG 검증의 신뢰성 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiuAFBVV95cUxNNmZHRS1YamhCRWNqUlJGaFBPZnJsNFVlcERJbWRXOHYzWDg5bThIZlJlakQzR3VMMUZ2d3lDa1hvSm8wQkR0d0dlYVhxQ09MNEtqM21MdjFMenIzZFRsV1VXazR0MUdPR180YXliaFZJdlB4XzF1cUEtUEM1XzZ0c0NULW93TXhDWW1sQkJmdk1wS2dPVU5VaVBoN2M1VWZKZV9ya2hFWEFvRUN1em43VjMtUGJSZC1R?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 376,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 컴플라이언스 너머, 근로자 목소리로 공급망 리스크 완화',
      author: '관리자',
      date: '2025.10.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>감사 가능한 고충 처리 메커니즘으로서의 '근로자 목소리(Worker Voice)' 활용법을 다룬 에코바디스 분석입니다. HRDD 분절화에 대비한 미래 대응 전략입니다.</p><h3>주요 포인트</h3><ul><li>Worker Voice를 활용한 공급망 인권 검증</li><li>HRDD(인권 실사) 분절화 대비 통합 접근</li><li>중요 공급망 리스크 사전 완화 효과</li></ul><p>원문: <a href="https://ecovadis.com/blog/beyond-compliance-leveraging-worker-voice-to-mitigate-supply-chain-risk/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 377,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 호주 기후공시 의무화, 알아야 할 3가지',
      author: '관리자',
      date: '2025.10.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>호주 기후 관련 재무 공시 의무화에 대해 알아야 할 3가지 핵심 사항을 정리한 에코바디스 분석입니다. 보고 대상에는 GHG 프로토콜 표준에 부합하는 15개 Scope 3 카테고리가 모두 포함됩니다.</p><h3>주요 포인트</h3><ul><li>호주 ISSB 호환 기후공시 의무화 임박</li><li>15개 Scope 3 카테고리 전부 보고 요구</li><li>호주 사업장 보유 다국적 기업 영향</li></ul><p>원문: <a href="https://ecovadis.com/blog/three-things-you-should-know-about-the-australian-climate-related-financial-disclosure/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 378,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'Atos Group, 6년 연속 에코바디스 플래티넘 메달 획득',
      author: '관리자',
      date: '2025.10.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>프랑스 IT 서비스 기업 Atos Group이 에코바디스 평가에서 6년 연속 플래티넘 메달을 획득했다고 발표했습니다. 지속가능성에 대한 장기적 헌신이 인정받은 사례입니다.</p><h3>주요 포인트</h3><ul><li>6년 연속 플래티넘 유지로 일관성 입증</li><li>IT 서비스 기업 ESG 모범 사례</li><li>유럽 디지털 서비스 산업 지속가능 경영</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMi6wFBVV95cUxQRzdQVU9XT3hXWktkbWtjMnNNdC1TbHlJN2MxYkxYOWp5TlhpWm5tN0NzTlB3elpFS0pua1A2MXhRQjgzUTlRUjJMV0lDTDFuM2VCTWZHY1AtZG1DYzhIM1Q5YkNIVzFDNnJQRS1RaEVCaXZvTzZGUHJ3MXhScVJZRWNnczVWa1A0ME10RUtMMlg1cUY4VW9Td1NoSGd4ZzFtajBURnNmR0l0eGlKU3N1M3pFRkItaGZ2RkYwXzh6dWxjVlhiVkRuZGZuSDcwVS1zTlg4WTh1SXlqbWZNbDlkZUh4RG00ZVpNVUpZ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 379,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, 글로벌 공급망 인권 책무 강화 위한 \'Worker Voice Connect\' 출시',
      author: '관리자',
      date: '2025.10.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스가 글로벌 공급망에서 인권 책무성을 강화하기 위한 신규 솔루션 'Worker Voice Connect'를 출시했다고 발표했습니다. 근로자가 직접 의견을 제출하는 디지털 채널이 핵심입니다.</p><h3>주요 포인트</h3><ul><li>근로자 직접 입력 기반 인권 검증 채널</li><li>HRDD 규제 대응 위한 디지털 솔루션</li><li>공급망 인권 리스크 가시화 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMi8wFBVV95cUxNdEQwTTRkTlM2X2RrOUoxRC1Cb2NENjZqQkhyMnNGNmdXaWhyTG1SZ21YZE5SRGlEM0NaZWJEclFreG9fSW53T2JOX3RHUnoyd1BxSldQYWFlejdaSVNfRE9LU2tScktYVW94dFU3cS0xNUtxRU9VTUNWQXFWWmhEaUlPdzBGcHVrOGlsSXVvOGFReTctVGxNYjBLSldNRm8xZjFVYUxkWVpZX0prdVo3SHlUZkhiRFZadDFFbS1uMHR4c1Y5eHlOVUZFcUFmVGNKSTdyNUxHclctMWxMSUdqVkhhbTBKeFM2SjEyaHRGbkw3YTA?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 381,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 지속가능성 향상에 맞춰 메달 인정 기준 상향',
      author: '관리자',
      date: '2025.10.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 공급망 전반의 지속가능성 관행이 꾸준히 향상됨에 따라 에코바디스가 메달 인정 기준을 상향 조정합니다. 이는 동일 등급 유지에 더 높은 성과가 요구된다는 의미입니다.</p><h3>주요 포인트</h3><ul><li>글로벌 ESG 성과 향상에 따른 기준 상향</li><li>메달 등급 유지 위한 추가 노력 필요</li><li>평가 신뢰성·차별성 강화 효과</li></ul><p>원문: <a href="https://ecovadis.com/blog/raising-the-bar-as-sustainability-performance-accelerates-we-re-adapting-our-benchmarks/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 382,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스 인사이트: 지속가능 조달 ROI 측정 9가지 지표',
      author: '관리자',
      date: '2025.10.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>비즈니스 리더가 지속가능 조달 활동의 ROI를 입증할 수 있는 9가지 핵심 지표를 정리한 에코바디스 분석입니다. 비용 절감, 리스크 감소, 매출 성장 등 다각적 효과를 추적합니다.</p><h3>주요 포인트</h3><ul><li>지속가능 조달 ROI 9가지 지표 정리</li><li>비용·리스크·매출 다차원 효과 측정</li><li>경영진 보고용 실무 프레임워크</li></ul><p>원문: <a href="https://ecovadis.com/blog/unlocking-the-roi-of-sustainable-procurement-9-metrics-every-business-leader-should-track/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 383,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 옴니버스 패키지, EU 지속가능성 보고·실사 규제 현실 점검',
      author: '관리자',
      date: '2025.10.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU 집행위가 발표한 옴니버스 단순화 패키지가 EU 규제 완화 흐름 속에서 어떤 의미를 갖는지 분석한 에코바디스 칼럼입니다. CSRD·CSDDD 적용 범위 변화를 점검합니다.</p><h3>주요 포인트</h3><ul><li>EU 옴니버스 패키지 핵심 내용 정리</li><li>CSRD·CSDDD 적용 범위 변화 분석</li><li>기업의 실용적 대응 방향 제시</li></ul><p>원문: <a href="https://ecovadis.com/blog/omnibus-package-a-reality-check-for-the-eu-sustainability-reporting-and-due-diligence-policies/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 384,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[ESG 칼럼] 글로벌 공급망 ESG 평가, 에코바디스 이해와 대응',
      author: '관리자',
      date: '2025.10.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 공급망 ESG 평가 흐름 속에서 에코바디스를 어떻게 이해하고 대응할 것인지 다룬 칼럼입니다. 평가 체계, 등급 의미, 준비 절차 등을 한국 기업 시각에서 정리했습니다.</p><h3>주요 포인트</h3><ul><li>에코바디스 평가 4대 영역 구성</li><li>등급 체계와 글로벌 입지 관계</li><li>한국 기업의 단계별 대응 전략</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTFBIYmVkTjBmTUN2cFNGRXd2ODlsRGtIUnk0UEJGSWl3cE9GRUlZNE5FOTRrM296b1FiQXk5THZISzVLNmFrQnNJT1lheWNqWTEzZzZMQ0RpcTkyVG44R2JNYWFzUnJRZVg2?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 385,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 지속가능 금융이 글로벌 파급효과를 일으킨다',
      author: '관리자',
      date: '2025.09.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>JP모건, 브리지스톤, ING, 로레알, 씨티가 지속가능성 평가와 금융을 결합한 혁신적 방식을 통해 새로운 글로벌 임팩트 시대를 열고 있다는 분석입니다.</p><h3>주요 포인트</h3><ul><li>SLB·SLL 등 ESG 연동 금융 확산</li><li>에코바디스 등급의 금융 인센티브 활용</li><li>글로벌 임팩트 금융 모멘텀 강화</li></ul><p>원문: <a href="https://ecovadis.com/blog/sustainable-finance-set-to-make-global-waves/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 386,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'BCG 보고서: 기후 미흡 시 2030 연간 5,000억 달러 손실',
      author: '관리자',
      date: '2025.09.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>보스턴컨설팅그룹(BCG)이 기후 행동을 미루는 기업이 2030년까지 연간 5,000억 달러 이상의 글로벌 부담을 안게 될 것이라는 분석을 발표했습니다. 기후 무위(無爲)의 비용 정량화입니다.</p><h3>주요 포인트</h3><ul><li>기후 무위의 글로벌 비용 정량화</li><li>2030년 연간 5,000억 달러 잠재 부담</li><li>선제적 행동의 경제적 정당성 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMipwFBVV95cUxPSERzQVF5dG54Q1o5WnJXdWtyRVZoZE5CS0tSQm55RnhiUnY3eW5iR2lyaUNKaGRwTE4tcTRYQ0tlNjFURVhBUTJldDQwSGxJRGdxaDBsZU9DNXF6a3RQM0luSy1sZ2ItYjlpa2hid2pnZl94ZHQ1RmdlUUdLOWRTYzlDeTNmaXFqQTRRdVFORThtSU1BeUk1czQyQ0ZET3ZTMG9nZ2k0VQ?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 390,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: UN Global Compact 20년, 지속가능성 평가의 역할',
      author: '관리자',
      date: '2025.09.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>UN Global Compact 20주년을 맞아 지속가능성 평가가 기업의 SDG 대응을 어떻게 지원하는지 분석한 에코바디스 칼럼입니다. 'Decade of Action' 시작과 함께 평가의 중요성이 더 커졌습니다.</p><h3>주요 포인트</h3><ul><li>UN Global Compact 20주년 회고</li><li>지속가능성 평가의 SDG 이행 지원</li><li>공급망 ESG 행동의 가속화 필요성</li></ul><p>원문: <a href="https://ecovadis.com/blog/20-years-of-un-global-compact-how-sustainability-ratings-help-companies-kick-start-the-decade-of-action/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 391,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: EU 강제노동 가이드, CSDDD 대응 5가지 핵심',
      author: '관리자',
      date: '2025.09.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU 공급망 강제노동 가이드라인이 CSDDD 등 공급망 실사법 대응에 어떻게 활용될 수 있는지 정리한 에코바디스 분석입니다. 조달팀이 미리 대비할 5가지 측면을 제시합니다.</p><h3>주요 포인트</h3><ul><li>EU 강제노동 가이드 5가지 핵심 측면</li><li>CSDDD·관련 입법 사전 대응 방안</li><li>에코바디스 솔루션 활용 가이드</li></ul><p>원문: <a href="https://ecovadis.com/blog/5-ways-businesses-can-plan-for-mandatory-eu-due-diligence-regulations-based-on-new-forced-labour-guidelines/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 392,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스 보고서: 영국 기업 지속가능성 진척과 격차',
      author: '관리자',
      date: '2025.09.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2020~2024년 동안 159,000개 영국 기업의 에코바디스 평가 데이터를 분석해 강점·격차·기회를 도출한 보고서입니다. 영국 기업의 ESG 회복력 진단을 다룹니다.</p><h3>주요 포인트</h3><ul><li>영국 기업 159,000건 데이터 정량 분석</li><li>지속가능성 강점·격차 부문 도출</li><li>영국 시장 ESG 트렌드 인사이트</li></ul><p>원문: <a href="https://ecovadis.com/blog/uk-companies-on-the-sustainability-journey-ecovadis-data-reveals-strengths-gaps-and-opportunities-for-growth/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 393,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, Microsoft Azure로 AI 기반 공급망 인사이트 제공',
      author: '관리자',
      date: '2025.09.05',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스가 Microsoft Azure를 활용해 AI 기반 공급망 지속가능성 인사이트를 제공한다고 발표했습니다. 클라우드·AI 결합으로 평가 효율과 정확도가 향상됩니다.</p><h3>주요 포인트</h3><ul><li>Azure 기반 AI 평가·분석 인프라</li><li>공급망 ESG 인사이트 자동 추출</li><li>대규모 데이터 처리 효율화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiiAFBVV95cUxORTZGZk1MMGlwZDdSTUU4aW0zUHJUNEVRbUxWNTlrbEZEcUFLUzl0WVozTzBrdWFjbHZ1bFNuZVBTeXRVZmVETTM0VG1YODhaemx1Rjl5SkdRbjFKSHVXYXZkc2tXeDdpSVRHM25udHpCN2tvangzOWtXUnE5WDEtTjRiNGhFVDJ4?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 394,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 독일 공급망법 — 사실과 오해',
      author: '관리자',
      date: '2025.08.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>독일 공급망법(LkSG)에 대한 정확한 사실과 잘못된 정보(오해)를 구분한 에코바디스 분석입니다. 끊임없이 변하는 규제 속에서 기업이 진짜 알아야 할 내용을 정리했습니다.</p><h3>주요 포인트</h3><ul><li>독일 LkSG 적용 범위·의무 정확한 정리</li><li>흔한 오해 5가지 사실 점검</li><li>독일 사업장 보유 다국적 기업 영향</li></ul><p>원문: <a href="https://ecovadis.com/blog/fact-or-fiction-what-companies-really-need-to-know-now-about-germanys-supply-chain-act/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 395,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'TDK, 에코바디스 지속가능성 평가서 첫 플래티넘 등급',
      author: '관리자',
      date: '2025.08.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>일본 전자부품 기업 TDK가 에코바디스 평가에서 처음으로 플래티넘 등급을 획득했다고 발표했습니다. 글로벌 전자 산업 공급망 ESG의 진전 사례입니다.</p><h3>주요 포인트</h3><ul><li>TDK 첫 플래티넘 등급 진입</li><li>일본 전자부품 산업 ESG 도약</li><li>글로벌 전자 공급망 ESG 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiaEFVX3lxTE9VTDk1YW4tYTRpclhEVHh1S1VMR093VVFDSlVyNzN5bWF4REIzY3Fka1FjTk84TkFXbVR4M2Rncnl2c2ZFendQNy1PVm9FUEc5UURFcmg2Q251aDlyYnM0VzYzYmQ4Q3BP?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 396,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: 'Neste, 에코바디스 지속가능성 평가서 플래티넘 메달 획득',
      author: '관리자',
      date: '2025.08.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>핀란드 재생연료 기업 Neste가 에코바디스 평가에서 플래티넘 메달을 획득했다고 발표했습니다. SAF·재생디젤 등 글로벌 청정연료 시장 리더의 ESG 우수성을 입증한 사례입니다.</p><h3>주요 포인트</h3><ul><li>재생연료 산업 리더의 플래티넘 진입</li><li>SAF·재생디젤 공급망 ESG 모범</li><li>유럽 청정연료 산업 신뢰성 강화</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMimwFBVV95cUxPTl9hcjc0cEI1VENOYmdRdXRWSUdROHVqM2hCRDZDOFU1RHNnYkEyWGVDTm11M00zNEg3cy15NzFpWV9TNkJGRHlIeHFIS2sxMzZkSU1lT1ExemdYelZ4UWxKTmZJUEVaS1VzNnliR2wxVlRYRWxnTWxyZ1V2S3oxZXNaYmZKQjNPT0lZZ1lLWkRJQXc4Nk9xd1hMbw?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 397,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '지멘스, 에코바디스 평가서 플래티넘·역대 최고 점수',
      author: '관리자',
      date: '2025.08.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>독일 산업 자동화 기업 지멘스가 에코바디스 평가에서 플래티넘 등급과 역대 최고 점수를 동시에 달성했다고 발표했습니다. 산업 자동화 산업의 ESG 모범으로 자리매김했습니다.</p><h3>주요 포인트</h3><ul><li>플래티넘 + 역대 최고 점수 동시 달성</li><li>독일 산업 대표 기업의 ESG 리더십</li><li>유럽 산업 자동화 ESG 표준 제시</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiwwFBVV95cUxPZzZ2Q2hDWF80QjZicUZkTnltVTBSSXdPVExwMWxVMjU5azRyLXg5RDVyODlzS2Y3X1U1Ul9sWmdMNG0xVkw4MldVRkhCSXNpNlgtTzFEY0VpMkt0NTZHZjRhajQ3dzNjaUpIRExFUXl0bVg1WDVOcF85SElHYlNQS1VPUGNqekJLcjVvX0plbmNXY0p5eDZkTXBrajNENmJQb0ZPeGVrVDJrRkRfQnhiOGtqel95U2FxV09fcmRrMmRNbnM?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 398,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 순환경제 시대 비즈니스 적응 가이드',
      author: '관리자',
      date: '2025.07.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>순환경제는 비교 불가능한 기회를 제공하며 기후변화 대응에 필수적이라는 에코바디스 분석입니다. 협력사와의 효과적인 커뮤니케이션과 지속가능성 평가가 전환의 핵심입니다.</p><h3>주요 포인트</h3><ul><li>순환경제로의 비즈니스 적응 필요성</li><li>협력사 커뮤니케이션과 평가의 역할</li><li>기후 행동과 순환경제 결합 효과</li></ul><p>원문: <a href="https://ecovadis.com/blog/adapting-business-to-a-circular-economy/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 399,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 아시아·태평양 신규 지속가능성 보고 요건 점검',
      author: '관리자',
      date: '2025.07.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>아시아·태평양 지역의 신규 지속가능성 보고 규제 흐름을 정리한 에코바디스 분석입니다. 호주·싱가포르·일본·홍콩 등 주요국의 정책이 어떻게 진화하는지 다룹니다.</p><h3>주요 포인트</h3><ul><li>APAC 주요국 ESG 보고 규제 정리</li><li>호주·싱가포르·일본 ISSB 호환 동향</li><li>아시아 진출 다국적 기업 대응 가이드</li></ul><p>원문: <a href="https://ecovadis.com/blog/navigating-new-sustainability-reporting-requirements-in-the-asia-pacific-region/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 400,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스 보고서: 美 기업 87%, 규제 논란 속에도 ESG 지출 증가',
      author: '관리자',
      date: '2025.07.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스 연구 결과 미국 기업 87%가 정치적 논란과 규제 불확실성에도 불구하고 지속가능성 지출을 조용히 늘리고 있다고 밝혀졌습니다. 시장 자체의 동력이 정책에 우선합니다.</p><h3>주요 포인트</h3><ul><li>美 기업 87%의 ESG 지출 확대</li><li>정치 논란에도 시장 동력 유지</li><li>장기 경쟁력 관점의 ESG 투자 지속</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMiggJBVV95cUxORkxzbHYzeHF3WVN4cG04R2laazN4RE51WXBUS3VRcXNlUXlzRW1VdUVPcmhZV2ZMZDZoWk92bTNzWXJ4d0VLWGV5d1poTlltZWdOb3ZFRXJzYUpNX2piNEp3c0Z6Vkh4dDV5d1piaXJ1V2FyNDJtTUV0WUhTTnptdDFwUm5lcXdWaW9ORmdGUHg5Ti0xWEhWaEFSSXR1M28xQlRicjhBenE3MGZ0WERwTGduZDdrSnZ6aF9jXzJPck5QTFZGZVU2NFVCZm5pR2p5M3gxNGlaT1ZFbmRMbFhsTVZmMHpLd3d1R2NTdHhsMExVZl9XeGdRckg0Rkc1LVpZTXc?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 401,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '[ESG 칼럼] 규제 완화의 역설…에코바디스가 주목받는 이유',
      author: '관리자',
      date: '2025.07.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU 옴니버스 등 규제 완화 흐름 속에서 오히려 에코바디스 같은 자율 평가 체계가 더 주목받는 이유를 분석한 칼럼입니다. 시장이 규제 공백을 메우는 메커니즘으로 평가가 부상합니다.</p><h3>주요 포인트</h3><ul><li>규제 완화 → 시장 평가 의존 증가</li><li>에코바디스 등 평가의 시장 표준화</li><li>중소기업의 자율적 입증 수단 확대</li></ul><p>원문: <a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE52MDNTaUQ5Q25wQ1lsakNlendMYzhrdTFYNVVuVW81SlkwR3pYQnpwSVNUR1NQelhHZWp5Y1hHRy1aREd6QlQ1QkVGMlVmb0g5YjRqcUNDLWtjMlhmWHlhZ2JxNjZUNFFmUUQ5Qg?oc=5" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 404,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: Scope 3 탈탄소의 빠진 조각, 양질의 1차 배출 데이터',
      author: '관리자',
      date: '2025.02.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Scope 3 퍼즐의 핵심 빠진 조각은 양질의 1차 배출 데이터라는 분석입니다. 협력사가 직접 데이터를 보고할 수 있도록 권한을 부여하는 것이 탈탄소 노력을 변화시킬 수 있습니다.</p><h3>주요 포인트</h3><ul><li>Scope 3 정확도의 핵심은 1차 데이터</li><li>협력사 보고 역량 강화의 중요성</li><li>추정치 → 실측치 전환의 효과</li></ul><p>원문: <a href="https://ecovadis.com/blog/scope-3-decarbonization-primary-data/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 405,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: EU 지속가능성 규제가 비EU 기업에 미치는 영향',
      author: '관리자',
      date: '2024.11.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2024년 말이 다가오는 가운데 EU의 CSRD가 EU 외 기업에도 새로운 기업 투명성 시대를 열고 있습니다. 비EU 기업의 최선의 대응 방향을 분석한 에코바디스 칼럼입니다.</p><h3>주요 포인트</h3><ul><li>CSRD의 비EU 기업 적용 범위 확대</li><li>한국·미국 등 글로벌 기업 영향</li><li>선제적 대응 전략 5가지 제시</li></ul><p>원문: <a href="https://ecovadis.com/blog/how-are-eu-sustainability-regulations-affecting-non-eu-companies-and-whats-the-best-course-of-action/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 406,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, COP16 이후 민간부문 생물다양성 행동 가속 촉구',
      author: '관리자',
      date: '2024.11.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>UN 생물다양성협약 제16차 당사국총회(COP16)가 생물다양성 손실 중단·역전 약속을 보여준 무대였다는 평가와 함께, 에코바디스는 민간부문의 행동 가속화를 촉구했습니다.</p><h3>주요 포인트</h3><ul><li>COP16 성과와 한계 평가</li><li>민간부문 생물다양성 행동 가속 필요</li><li>TNFD·SBTN 활용 실무 가이드</li></ul><p>원문: <a href="https://ecovadis.com/blog/ecovadis-calls-for-accelerated-private-sector-action-on-biodiversity-after-cop16/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 407,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 글로벌 기업·협력사의 Scope 3 탈탄소 협력 가속화',
      author: '관리자',
      date: '2024.10.11',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2024 Carbon Action Report가 에코바디스 네트워크 내 기업의 진척을 분석했습니다. 글로벌 기업이 저탄소 가치사슬을 구축할 시간이 줄어들고 있다는 경고입니다.</p><h3>주요 포인트</h3><ul><li>2024 Carbon Action Report 핵심 인사이트</li><li>글로벌 기업·협력사 협력 모델 진화</li><li>저탄소 가치사슬 구축 가속화 필요</li></ul><p>원문: <a href="https://ecovadis.com/blog/accelerating-scope-3-decarbonization-how-global-businesses-and-suppliers-are-collaborating-for-a-net-zero-future/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 408,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, Carbon Action Manager에 CBAM 기능 추가',
      author: '관리자',
      date: '2024.09.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Carbon Action Manager에 추가된 CBAM 기능을 통해 기업이 협력사 네트워크 전반의 탄소 데이터를 식별·평가·수집·협업·보고·개선할 수 있게 됐습니다.</p><h3>주요 포인트</h3><ul><li>EU CBAM 대응 위한 통합 솔루션</li><li>협력사 탄소 데이터 자동 수집</li><li>국경세 보고·개선 워크플로우 일원화</li></ul><p>원문: <a href="https://ecovadis.com/blog/introducing-the-carbon-border-adjustment-mechanism-cbam-enhancement-for-carbon-action-manager/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 409,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, GHG 배출 추정 간소화하는 \'Carbon Estimator\' 출시',
      author: '관리자',
      date: '2024.09.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스가 Carbon Action Manager에 추가된 'Carbon Estimator'를 통해 대형 기업과 협력사의 탈탄소 협업을 강화한다고 발표했습니다. GHG 배출 추정의 진입장벽을 크게 낮추는 도구입니다.</p><h3>주요 포인트</h3><ul><li>중소 협력사도 쉽게 사용하는 추정 도구</li><li>기본 데이터 입력만으로 자동 추정</li><li>탈탄소 협업 진입장벽 대폭 완화</li></ul><p>원문: <a href="https://ecovadis.com/blog/introducing-the-carbon-estimator-a-new-tool-that-makes-ghg-emissions-estimation-simple-enough-for-every-business/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 410,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, Nicole Sherwin을 신임 Chief Impact Officer로 승진',
      author: '관리자',
      date: '2024.05.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스가 Nicole Sherwin을 신임 Chief Impact Officer로 승진 임명했다고 발표했습니다. 최고 수준의 지속가능성 관행 이행과 사내 Purpose Committee 운영을 책임집니다.</p><h3>주요 포인트</h3><ul><li>에코바디스 자체 임팩트 리더십 강화</li><li>Purpose Committee 등 거버넌스 운영</li><li>플랫폼 가치와 일관된 내부 문화 조성</li></ul><p>원문: <a href="https://ecovadis.com/blog/our-newest-chief-impact-officer-nicole-sherwin/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 411,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 공정 임금이란 무엇이며 왜 비즈니스 우선순위인가',
      author: '관리자',
      date: '2024.04.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>도덕적 이유 외에도 공정하고 지속가능한 임금 지급이 비즈니스의 핵심 우선순위가 되어야 하는 이유를 분석한 에코바디스 칼럼입니다. Living Wage 개념과 글로벌 트렌드를 다룹니다.</p><h3>주요 포인트</h3><ul><li>Living Wage 개념과 측정 방법</li><li>임금 격차의 비즈니스 리스크</li><li>공급망 노동 인권의 핵심 지표</li></ul><p>원문: <a href="https://ecovadis.com/blog/toward-fair-compensation-what-is-a-living-wage-and-why-it-is-a-business-priority/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 412,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, 영국 ESG 평가·데이터 제공자 행동강령 서명',
      author: '관리자',
      date: '2024.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>국제자본시장협회(ICMA)가 시장에서 점점 더 중요해지는 ESG 평가·데이터 제공자를 위한 자율 행동강령을 발표했고, 에코바디스가 이에 서명했다고 발표했습니다.</p><h3>주요 포인트</h3><ul><li>ICMA 행동강령 자율 가입</li><li>ESG 평가 시장의 신뢰성·투명성 강화</li><li>업계 표준화 기여 의지</li></ul><p>원문: <a href="https://ecovadis.com/blog/ecovadis-endorses-the-uk-code-of-conduct-for-esg-ratings-and-data-providers/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 413,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: EU 신규 ESG 평가 규제 환영',
      author: '관리자',
      date: '2024.03.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU가 ESG 평가·데이터 시장의 명확성과 무결성을 증진하기 위해 추진하는 신규 규제를 에코바디스가 환영한다고 밝혔습니다. 시장 표준화는 평가 산업의 신뢰 회복에 기여할 것입니다.</p><h3>주요 포인트</h3><ul><li>EU의 ESG 평가 시장 규제 도입 환영</li><li>평가 시장의 표준화·신뢰성 제고</li><li>이해상충 방지 등 거버넌스 강화</li></ul><p>원문: <a href="https://ecovadis.com/blog/new-esg-ratings-regulation-in-the-european-union/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 414,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, Carbon Action Manager 정식 출범',
      author: '관리자',
      date: '2024.03.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Sustain 2024 행사에서 에코바디스가 기존 Carbon Action Module을 발전시킨 'EcoVadis Carbon Action Manager'를 정식 출범한다고 발표했습니다. 협력사 탄소 관리 통합 솔루션입니다.</p><h3>주요 포인트</h3><ul><li>Carbon Action Manager 정식 출범</li><li>협력사 탄소 데이터 통합 관리</li><li>대형 기업의 Scope 3 추적 효율화</li></ul><p>원문: <a href="https://ecovadis.com/blog/introducing-the-ecovadis-carbon-action-manager/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 415,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스: 2024 지속가능 조달 바로미터 핵심 인사이트',
      author: '관리자',
      date: '2024.03.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Sustainable Procurement Barometer 2024가 지속가능 성장과 회복력으로 비즈니스를 안내하는 실행 가능한 인사이트를 제시했습니다. 조달 부문의 ESG 진척을 정량화한 보고서입니다.</p><h3>주요 포인트</h3><ul><li>2024 지속가능 조달 진척 정량 분석</li><li>업계·지역별 격차와 모범 사례</li><li>실행 가능한 조달 전략 가이드</li></ul><p>원문: <a href="https://ecovadis.com/blog/unlocking-the-power-of-sustainable-procurement-insights-from-the-2024-barometer/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 416,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '에코바디스, 협력사 ESG 인텔리전스 솔루션 \'Vitals\' 출시',
      author: '관리자',
      date: '2024.01.11',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에코바디스가 EcoVadis IQ Plus에 추가된 'Vitals' 모듈을 출시했습니다. 협력사 ESG 인텔리전스를 강화해 공급망 리스크와 규제 요건에 대응할 가시성을 제공합니다.</p><h3>주요 포인트</h3><ul><li>협력사 ESG 정보 통합 인텔리전스</li><li>공급망 리스크·규제 가시성 강화</li><li>대규모 협력사 모니터링 효율화</li></ul><p>원문: <a href="https://ecovadis.com/blog/introducing-vitals/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 178,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EU 옴부즈만, 집행위 지속가능성 보고 규정 절차 결함 지적',
      author: '관리자',
      date: '2025.11.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU 옴부즈만 테레사 안진호는 EU 집행위가 지속가능성 보고 규정을 완화하는 과정에서 절차상 다수의 미흡함을 발견했다고 발표했습니다. 이번 조사는 옴니버스 패키지의 일환으로 진행된 CSRD·CSDDD 완화 과정의 투명성과 적법성에 대한 의문을 제기합니다.</p><h3>주요 포인트</h3><ul><li>EU 옴부즈만, 집행위의 절차 위반 가능성 공식 지적</li><li>CSRD·CSDDD 완화 추진 과정의 투명성 부족 문제 부각</li><li>지속가능성 규제 체계의 신뢰성 회복을 위한 제도 개선 압박 증대</li></ul><p>원문: <a href="https://www.esgtoday.com/eu-watchdog-says-commission-failed-to-follow-procedures-in-cutting-sustainability-reporting-rules/?utm_source=rss&utm_medium=rss&utm_campaign=eu-watchdog-says-commission-failed-to-follow-procedures-in-cutting-sustainability-reporting-rules" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 179,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Knight Frank, 영국 부동산용 2.38억 달러 그린에너지 계약 체결',
      author: '관리자',
      date: '2025.11.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 부동산 컨설팅 기업 나이트프랭크가 영국 내 자사 운영 부동산에 재생에너지를 공급받는 3년 장기 PPA를 체결했습니다. 총 계약 규모는 약 2억 3,800만 달러로, 부동산 관리·임대 사업의 탈탄소 전환을 본격화하는 행보입니다.</p><h3>주요 포인트</h3><ul><li>3년 장기 재생에너지 구매계약(PPA) 체결로 안정적 그린전력 확보</li><li>영국 자산 포트폴리오 전반에 걸친 탄소배출 감축 효과</li><li>대형 부동산 사업자 차원의 ESG 모범 사례로 평가</li></ul><p>원문: <a href="https://www.esgtoday.com/knight-frank-signs-238-million-green-energy-deal-for-uk-properties/?utm_source=rss&utm_medium=rss&utm_campaign=knight-frank-signs-238-million-green-energy-deal-for-uk-properties" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 180,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '모닝스타 서스테이널리틱스, 기후·자연 솔루션 책임자에 조디 탭스콧 선임',
      author: '관리자',
      date: '2025.11.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>ESG 평가·데이터·리서치 제공기업 모닝스타 서스테이널리틱스가 신규 기후·자연 솔루션 책임자로 조디 탭스콧을 임명했습니다. 자연자본 및 생물다양성 평가 수요 확대에 대응하기 위한 조직 강화의 일환입니다.</p><h3>주요 포인트</h3><ul><li>기후·자연 통합 평가 역량 확대를 위한 리더십 보강</li><li>자연자본·TNFD 등 생물다양성 공시 수요 증가에 대응</li><li>ESG 평가시장에서 자연 관련 솔루션의 중요도 상승 시사</li></ul><p>원문: <a href="https://www.esgtoday.com/morningstar-sustainalytics-appoints-jodie-tapscott-as-head-of-climate-and-nature-solutions/?utm_source=rss&utm_medium=rss&utm_campaign=morningstar-sustainalytics-appoints-jodie-tapscott-as-head-of-climate-and-nature-solutions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 181,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '레고, 종이 기반 친환경 포장재 전환 절반 이상 진행',
      author: '관리자',
      date: '2025.11.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>레고 그룹은 브릭 포장재를 비닐에서 종이 기반 친환경 소재로 전환하는 프로젝트가 절반을 넘어섰다고 밝혔습니다. 글로벌 장난감 산업의 플라스틱 절감 전환을 보여주는 대표 사례로 주목받고 있습니다.</p><h3>주요 포인트</h3><ul><li>레고, 종이 포장재 전환율 50% 돌파 발표</li><li>일회용 플라스틱 절감을 위한 다년간 전환 계획 추진</li><li>완구 산업 전반의 친환경 패키징 흐름 가속화</li></ul><p>원문: <a href="https://www.esgtoday.com/lego-passes-halfway-point-in-transition-to-paper-based-packaging-for-bricks/?utm_source=rss&utm_medium=rss&utm_campaign=lego-passes-halfway-point-in-transition-to-paper-based-packaging-for-bricks" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 182,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Reverion, 구글·H&M 등과 4,100만 달러 탄소제거 계약 체결',
      author: '관리자',
      date: '2025.11.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>독일 기후 스타트업 Reverion이 탄소제거 구매자 연합 Frontier 등을 통해 구글, H&M 등 다수 기업과 총 4,100만 달러 규모의 탄소제거 오프테이크 계약을 체결했습니다. 바이오가스 기반 영구 탄소제거 기술의 상업화 신호탄으로 평가됩니다.</p><h3>주요 포인트</h3><ul><li>구글·H&M 등 글로벌 기업의 영구 탄소제거 수요 가시화</li><li>고정형 바이오가스 발전·CCS 결합 기술의 상용화 진전</li><li>총 4,100만 달러 규모로 스타트업 성장 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/reverion-signs-41-million-in-carbon-removal-agreements-with-google-hm-others/?utm_source=rss&utm_medium=rss&utm_campaign=reverion-signs-41-million-in-carbon-removal-agreements-with-google-hm-others" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 183,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '페라리, 셸과 이탈리아 사업 전력 100% 재생에너지 공급 계약',
      author: '관리자',
      date: '2025.11.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에너지 기업 셸이 페라리와 10년 장기 기업 PPA를 체결해 이탈리아 내 페라리 시설 전력을 재생에너지로 공급한다고 발표했습니다. 럭셔리 자동차 브랜드의 본격적인 사업장 단위 탈탄소 전환 사례입니다.</p><h3>주요 포인트</h3><ul><li>10년 장기 PPA로 안정적 재생전력 공급 구조 확보</li><li>이탈리아 본거지 시설의 100% 재생에너지화 추진</li><li>럭셔리·자동차 산업의 SBTi 목표 이행 흐름 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/ferrari-signs-deal-with-shell-to-provide-renewable-power-to-cover-energy-needs-in-italy/?utm_source=rss&utm_medium=rss&utm_campaign=ferrari-signs-deal-with-shell-to-provide-renewable-power-to-cover-energy-needs-in-italy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 184,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'KKR, 청정에너지 플랫폼 Greenvolt에 1.7억 달러 투자',
      author: '관리자',
      date: '2025.07.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 사모펀드 KKR이 포르투갈 청정에너지 개발사 Greenvolt에 1억 5천만 유로(약 1억 7,100만 달러) 규모의 자본 증자에 참여한다고 발표했습니다. 유럽 분산형 재생에너지 시장 확장을 위한 중요한 자본 조달입니다.</p><h3>주요 포인트</h3><ul><li>KKR, 청정에너지 플랫폼 성장 자금 1.7억 달러 공급</li><li>유럽 분산형 태양광·풍력 사업 확장 기반 마련</li><li>대형 PE의 재생에너지 인프라 투자 확대 흐름</li></ul><p>원문: <a href="https://www.esgtoday.com/kkr-commits-170-million-to-grow-clean-energy-platform-greenvolt/?utm_source=rss&utm_medium=rss&utm_campaign=kkr-commits-170-million-to-grow-clean-energy-platform-greenvolt" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 185,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Planted Solar, 토지 효율형 태양광 배포 위해 1,200만 달러 조달',
      author: '관리자',
      date: '2025.07.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>태양광 배포 솔루션 기업 Planted Solar가 시리즈 A 라운드에서 1,200만 달러를 조달했다고 발표했습니다. 동일 면적 대비 더 많은 발전 용량을 가능케 하는 자동화 설치 기술 확장에 사용될 예정입니다.</p><h3>주요 포인트</h3><ul><li>토지 사용 최소화하는 고밀도 태양광 배치 기술</li><li>자동화·로보틱스 활용한 설치 비용 절감</li><li>1,200만 달러 자금으로 미국 시장 확장 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/planted-solar-raises-12-million-to-enable-faster-solar-deployment-on-less-land/?utm_source=rss&utm_medium=rss&utm_campaign=planted-solar-raises-12-million-to-enable-faster-solar-deployment-on-less-land" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 186,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '누빈, 지속가능 상업용 부동산 대출 펀드로 7.85억 달러 조성',
      author: '관리자',
      date: '2025.07.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>투자운용사 누빈(Nuveen)과 자회사 누빈 그린 캐피털이 지속가능 상업용 부동산 금융 펀드 1차 클로징에서 7억 8,500만 달러를 조성했습니다. C-PACE 등 친환경 건축 금융 솔루션에 투자됩니다.</p><h3>주요 포인트</h3><ul><li>지속가능 부동산 대출 시장 성장 대응 펀드 조성</li><li>C-PACE 중심 친환경 건축 자금 공급 확대</li><li>기관 투자자의 그린빌딩 금융 수요 견조</li></ul><p>원문: <a href="https://www.esgtoday.com/nuveen-raises-785-million-for-sustainable-commercial-real-estate-lending-fund/?utm_source=rss&utm_medium=rss&utm_campaign=nuveen-raises-785-million-for-sustainable-commercial-real-estate-lending-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 187,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '호주, 청정에너지 금융 지원제도 2030년까지 40GW로 확대',
      author: '관리자',
      date: '2025.07.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>호주 정부가 핵심 청정에너지 금융 지원제도인 CIS(Capacity Investment Scheme)의 규모를 2030년까지 40GW로 대폭 확대한다고 발표했습니다. 재생에너지 비중을 빠르게 끌어올리기 위한 정책적 가속화입니다.</p><h3>주요 포인트</h3><ul><li>CIS 목표를 40GW로 상향, 기존 대비 대폭 확대</li><li>풍력·태양광·저장장치 신규 사업 가속</li><li>2030년 호주 재생에너지 비중 82% 목표 뒷받침</li></ul><p>원문: <a href="https://www.esgtoday.com/australia-boosts-clean-energy-financing-scheme-to-40-gw-by-2030/?utm_source=rss&utm_medium=rss&utm_campaign=australia-boosts-clean-energy-financing-scheme-to-40-gw-by-2030" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 188,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '150여 기업·투자자, EU 지속가능성 보고·실사 규정 유지 촉구',
      author: '관리자',
      date: '2025.07.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>150개 이상 기업과 투자자를 포함한 198개 기관 연합이 EU의 지속가능성 보고(CSRD) 및 공급망 실사(CSDDD) 규정을 실효성 있게 유지해야 한다고 EU 집행위에 공개 서한을 보냈습니다. 옴니버스 패키지의 과도한 완화에 대한 우려가 배경입니다.</p><h3>주요 포인트</h3><ul><li>CSRD·CSDDD 완화 반대 기업 연합체 결성</li><li>지속가능성 정보의 비교 가능성·신뢰성 확보 강조</li><li>EU 정책의 글로벌 규제 영향력 유지 호소</li></ul><p>원문: <a href="https://www.esgtoday.com/companies-investors-campaign-to-keep-meaningful-eu-sustainability-reporting-and-due-diligence-requirements/?utm_source=rss&utm_medium=rss&utm_campaign=companies-investors-campaign-to-keep-meaningful-eu-sustainability-reporting-and-due-diligence-requirements" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 189,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Eni·Azimut, 1억 유로 청정에너지 기술 벤처펀드 출범',
      author: '관리자',
      date: '2025.07.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이탈리아 에너지 기업 Eni의 벤처캐피털 부문 Eni Next와 자산운용사 Azimut이 손잡고 1억 유로 규모의 청정에너지 기술 펀드를 출범했습니다. 초기 단계 기후 기술 스타트업에 집중 투자합니다.</p><h3>주요 포인트</h3><ul><li>전략적 협력으로 청정기술 투자 자본 확보</li><li>수소·배터리·CCUS 등 핵심 기후기술 영역 타겟</li><li>유럽 기후테크 생태계 자본 공급 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/eni-azimut-launch-e100-million-clean-energy-tech-venture-fund/?utm_source=rss&utm_medium=rss&utm_campaign=eni-azimut-launch-e100-million-clean-energy-tech-venture-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 190,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트, 폐기물 발전 CCS로 110만 톤 CO₂ 제거 계약',
      author: '관리자',
      date: '2025.06.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>마이크로소프트가 노르웨이 오슬로의 발전·열공급사 Hafslund Celsio와 폐기물 에너지화 시설에 적용되는 탄소 포집을 통해 110만 톤의 CO₂를 제거하는 계약을 체결했습니다. 도시형 CCS의 대표 사례로 평가됩니다.</p><h3>주요 포인트</h3><ul><li>마이크로소프트, 영구 탄소제거 포트폴리오 확장</li><li>폐기물 에너지화에 CCS 결합한 도시형 솔루션</li><li>북유럽 CCS 인프라의 상용화 진전</li></ul><p>원문: <a href="https://www.esgtoday.com/microsoft-signs-deal-to-remove-1-1-million-tons-of-co2-through-waste-to-energy-carbon-capture/?utm_source=rss&utm_medium=rss&utm_campaign=microsoft-signs-deal-to-remove-1-1-million-tons-of-co2-through-waste-to-energy-carbon-capture" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 191,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '노르웨이, 2035년까지 온실가스 70~75% 감축 목표 설정',
      author: '관리자',
      date: '2025.06.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>노르웨이 정부가 2035년까지 1990년 대비 온실가스 배출량을 70~75% 절대 감축하는 신규 기후 목표를 발표했습니다. 파리협정 NDC 강화 흐름에 부합하는 야심찬 목표입니다.</p><h3>주요 포인트</h3><ul><li>2035년 70~75% 감축 목표 공식화</li><li>2050 탄소중립 경로의 중간 마일스톤 명확화</li><li>유럽 주요국 가운데 가장 강한 수준의 NDC</li></ul><p>원문: <a href="https://www.esgtoday.com/norway-sets-goal-to-reduce-ghg-emissions-by-70-75-by-2035/?utm_source=rss&utm_medium=rss&utm_campaign=norway-sets-goal-to-reduce-ghg-emissions-by-70-75-by-2035" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 192,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG Today 주간 리뷰: UK 지속가능성 보고기준 발표 등',
      author: '관리자',
      date: '2025.06.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 ESG 동향에서는 영국이 자체 지속가능성·기후 보고 기준을 새로 공개했고, GRI가 기후 공시 기준 개정안을 발표했습니다. 글로벌 공시 표준화 진전과 지역별 정합성 확보 노력이 동시에 이뤄졌습니다.</p><h3>주요 포인트</h3><ul><li>영국 SRS(Sustainability Reporting Standards) 공식 공개</li><li>GRI 기후 기준 개정으로 ISSB와의 정합성 강화</li><li>각국 규제와 글로벌 표준의 인터로퍼러빌리티 진전</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-220/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-220" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 193,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '메타, 美 데이터센터에 800MW 재생에너지 추가 확보',
      author: '관리자',
      date: '2025.06.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>메타와 청정에너지 개발사 Invenergy가 약 800MW 규모의 신규 재생에너지 PPA를 체결했다고 발표했습니다. AI 인프라 확장에 따른 전력 수요 급증에 대응하는 전략입니다.</p><h3>주요 포인트</h3><ul><li>AI 데이터센터 전력 수요 대응 위한 대규모 PPA</li><li>풍력·태양광 통합 패키지로 24/7 매칭 강화</li><li>빅테크의 청정전력 확보 경쟁 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/meta-secures-nearly-800-mw-of-renewable-energy-to-power-u-s-data-centers/?utm_source=rss&utm_medium=rss&utm_campaign=meta-secures-nearly-800-mw-of-renewable-energy-to-power-u-s-data-centers" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 195,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG Today 주간 리뷰 216: 절차 완화 반대 기업 다수',
      author: '관리자',
      date: '2025.06.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 ESG 뉴스에서는 옴니버스 절차 완화에 대한 기업들의 부정적 인식이 조사 결과로 확인됐고, 다수 기업이 기존 보고 체계 유지를 선호하는 것으로 나타났습니다.</p><h3>주요 포인트</h3><ul><li>설문 결과 기업 다수가 규제 완화에 부정적</li><li>이미 구축한 보고 체계 일관성 유지 선호</li><li>EU 정책 결정에 산업계 의견 반영 필요성 제기</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-216/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-216" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 196,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '구글, 美 농가 물 절약 위해 애그테크 프로젝트 지원',
      author: '관리자',
      date: '2025.05.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>구글이 애그테크 솔루션 기업 Arable과 협업해 미국 농가의 물 사용 효율화를 통해 20억 리터의 물을 보전하는 프로젝트에 자금을 투입한다고 발표했습니다. 기업의 워터 포지티브 전략의 일환입니다.</p><h3>주요 포인트</h3><ul><li>구글의 워터 포지티브 목표 이행 가속화</li><li>정밀 농업 기술로 농업 용수 사용 최적화</li><li>20억 리터 물 절약, 데이터센터 사용량 보전 효과</li></ul><p>원문: <a href="https://www.esgtoday.com/google-backs-agtech-projects-to-save-2-billion-liters-of-water-on-u-s-farms/?utm_source=rss&utm_medium=rss&utm_campaign=google-backs-agtech-projects-to-save-2-billion-liters-of-water-on-u-s-farms" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 197,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트, Indigo로부터 토양 탄소크레딧 6만 톤 구매',
      author: '관리자',
      date: '2025.05.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능 농업 솔루션 기업 Indigo Ag와 마이크로소프트가 두 번째 탄소제거 계약을 체결해 토양 기반 탄소크레딧 6만 톤을 거래했습니다. 자연 기반 탄소제거의 신뢰성 확보 흐름을 보여주는 사례입니다.</p><h3>주요 포인트</h3><ul><li>토양 탄소 크레딧의 기업 수요 지속 확대</li><li>지역사회 농가 참여형 친환경 농업 모델</li><li>자연 기반 탄소제거의 검증 체계 발전</li></ul><p>원문: <a href="https://www.esgtoday.com/microsoft-purchases-60000-soil-carbon-credits-from-sustainable-agriculture-solutions-provider-indigo/?utm_source=rss&utm_medium=rss&utm_campaign=microsoft-purchases-60000-soil-carbon-credits-from-sustainable-agriculture-solutions-provider-indigo" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 198,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'OMV, 유럽 최대 규모 그린수소 생산시설 건설 결정',
      author: '관리자',
      date: '2025.05.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>오스트리아 빈 본사의 OMV가 유럽 최대급 그린수소 시설 건설을 위한 최종 투자 결정을 내렸다고 발표했습니다. 정유·화학 공정의 탈탄소를 위한 대규모 인프라 투자입니다.</p><h3>주요 포인트</h3><ul><li>유럽 최대급 그린수소 생산시설 FID 완료</li><li>자체 정유·화학 공정 그린수소 직접 활용</li><li>EU REPowerEU 수소 목표 이행 가속화</li></ul><p>원문: <a href="https://www.esgtoday.com/omv-to-build-one-of-largest-green-hydrogen-plants-in-europe/?utm_source=rss&utm_medium=rss&utm_campaign=omv-to-build-one-of-largest-green-hydrogen-plants-in-europe" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 199,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Socialsuite, AI 기반 이중 중요성 평가 솔루션 출시',
      author: '관리자',
      date: '2025.05.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능성 리스크 관리 기술 기업 Socialsuite가 CSRD 대응을 위한 AI 기반 이중 중요성(Double Materiality) 평가 솔루션을 출시했습니다. 산업 영향과 재무 영향을 동시에 분석합니다.</p><h3>주요 포인트</h3><ul><li>CSRD 핵심 요구사항인 이중 중요성 자동화</li><li>AI로 산업·기업 특화 리스크 매핑 효율화</li><li>중소·중견기업 공시 부담 완화 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/socialsuite-launches-ai-powered-double-materiality-assessment-solution/?utm_source=rss&utm_medium=rss&utm_campaign=socialsuite-launches-ai-powered-double-materiality-assessment-solution" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 200,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'H&M 투자 Syre, 베트남에 기가스케일 의류 재활용 공장 건설',
      author: '관리자',
      date: '2025.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>순환경제 스타트업 Syre가 베트남 빈푹성과 기가스케일 의류 재활용 공장 건설 협약을 체결했습니다. 폐섬유에서 새 폴리에스터 원사를 만드는 화학적 재활용 시설로 H&M이 주요 투자자입니다.</p><h3>주요 포인트</h3><ul><li>섬유 to 섬유 재활용 상용화 본격화</li><li>아시아 최대 의류 생산 거점 베트남에 입지</li><li>패션 산업 순환경제 전환 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/hm-backed-syre-to-build-gigascale-textile-to-textile-recycling-plant-in-vietnam/?utm_source=rss&utm_medium=rss&utm_campaign=hm-backed-syre-to-build-gigascale-textile-to-textile-recycling-plant-in-vietnam" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 201,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트, 웨스트버지니아서 335MW 풍력 PPA 체결',
      author: '관리자',
      date: '2025.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>청정에너지 개발사 Clearway가 마이크로소프트와 미국 웨스트버지니아의 풍력 발전 사업에 대한 장기 PPA를 체결했다고 발표했습니다. 총 용량 335MW 규모로 데이터센터 전력 매칭에 활용됩니다.</p><h3>주요 포인트</h3><ul><li>335MW 규모 신규 풍력 PPA로 청정전력 확보</li><li>미국 동부 그리드 청정전력 비중 확대 기여</li><li>빅테크의 다지역 PPA 포트폴리오 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/microsoft-signs-335-mw-wind-power-purchase-agreement-in-west-virginia/?utm_source=rss&utm_medium=rss&utm_campaign=microsoft-signs-335-mw-wind-power-purchase-agreement-in-west-virginia" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 202,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'DePoly, 재활용 어려운 플라스틱을 원료화 위해 2,300만 달러 조달',
      author: '관리자',
      date: '2025.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>화학적 재활용 스타트업 DePoly가 2,300만 달러를 조달했다고 발표했습니다. 재활용이 어려운 PET 등 플라스틱을 원료 단계 화학 물질로 되돌리는 기술 상용화에 사용될 예정입니다.</p><h3>주요 포인트</h3><ul><li>화학적 재활용으로 난재활용 플라스틱 처리</li><li>2,300만 달러 자금으로 파일럿 → 상용 확장</li><li>EU 플라스틱 재활용 비중 의무화에 부합</li></ul><p>원문: <a href="https://www.esgtoday.com/depoly-raises-23-million-to-turn-hard-to-recycle-plastics-into-new-raw-materials/?utm_source=rss&utm_medium=rss&utm_campaign=depoly-raises-23-million-to-turn-hard-to-recycle-plastics-into-new-raw-materials" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 203,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Stonepeak, Repsol 美 태양광 포트폴리오에 3.4억 달러 투자',
      author: '관리자',
      date: '2025.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대체투자운용사 Stonepeak이 스페인 에너지 기업 Repsol의 미국 태양광·저장장치 포트폴리오 지분 46.3%를 3억 4천만 달러에 인수했다고 발표했습니다. 미국 분산형 청정에너지 자산에 대한 기관 투자가 견조하게 이어지는 흐름입니다.</p><h3>주요 포인트</h3><ul><li>Repsol 자산의 절반 가까운 지분을 Stonepeak이 확보</li><li>미국 태양광·ESS 결합 자산의 가치 증대</li><li>인프라 펀드의 청정에너지 자산 편입 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/stonepeak-acquires-340-million-stake-in-u-s-solar-storage-portfolio-from-repsol/?utm_source=rss&utm_medium=rss&utm_campaign=stonepeak-acquires-340-million-stake-in-u-s-solar-storage-portfolio-from-repsol" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 204,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'L&G, 신흥국 자연 보전 위해 2.35억 달러 전략 출범',
      author: '관리자',
      date: '2025.03.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>영국 금융 그룹 Legal & General이 신흥시장의 자연보전과 지속가능 개발을 결합한 신규 투자 전략을 2억 3,500만 달러 규모로 출범했다고 밝혔습니다. 자연자본 보호와 ESG 재무 수익을 동시에 추구하는 모델입니다.</p><h3>주요 포인트</h3><ul><li>자연 보전·지속가능 개발 결합형 신흥국 투자 상품</li><li>2.35억 달러 규모로 시작, 점진적 확대 계획</li><li>자연 기반 솔루션에 대한 기관 자본 유입 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/lg-launches-235-million-emerging-markets-nature-conservation-and-sustainable-development-strategy/?utm_source=rss&utm_medium=rss&utm_campaign=lg-launches-235-million-emerging-markets-nature-conservation-and-sustainable-development-strategy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 205,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '메타, 산림 관리 기반 10년 탄소제거 계약 체결',
      author: '관리자',
      date: '2025.03.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>산림 투자·관리 기업 EFM이 페이스북·인스타그램·왓츠앱 모회사 메타와 10년 장기 산림 기반 탄소제거 계약을 체결했다고 발표했습니다. 자연 기반 탄소제거(NCS) 시장의 성숙을 보여주는 사례입니다.</p><h3>주요 포인트</h3><ul><li>장기 계약으로 안정적인 NCS 크레딧 공급 확보</li><li>지속가능한 산림 관리 기법 확산 효과</li><li>빅테크의 자연 기반 탄소제거 수요 지속</li></ul><p>원문: <a href="https://www.esgtoday.com/meta-signs-ten-year-forestry-management-carbon-removal-deal/?utm_source=rss&utm_medium=rss&utm_campaign=meta-signs-ten-year-forestry-management-carbon-removal-deal" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 206,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG Today 주간 리뷰 208: EU 보고규정 시행 연기 승인',
      author: '관리자',
      date: '2025.03.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 주요 ESG 뉴스에서는 EU 이사회가 지속가능성 보고 규정의 시행 연기안을 승인했고, ING가 동종 은행 중 최초의 결정을 내리는 등 다수 굵직한 변화가 있었습니다.</p><h3>주요 포인트</h3><ul><li>EU 이사회, CSRD 등 시행 연기안 공식 승인</li><li>ING의 새 정책 결정으로 금융권 동향 변화 시사</li><li>글로벌 ESG 표준화 흐름과 정치적 압력 충돌</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-208/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-208" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 207,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '탄소회계·보고 솔루션 Persefoni, 2,300만 달러 추가 조달',
      author: '관리자',
      date: '2025.03.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능성 관리 소프트웨어 Persefoni가 2,300만 달러를 추가로 조달했다고 발표했습니다. CSRD·SEC 기후공시 등 글로벌 보고 의무 확대로 솔루션 수요가 빠르게 늘고 있습니다.</p><h3>주요 포인트</h3><ul><li>탄소회계 SaaS 시장의 자본 유입 지속</li><li>제품·고객 확장 위한 운영 자금 확보</li><li>공시 규제 강화에 따른 시장 성장 모멘텀</li></ul><p>원문: <a href="https://www.esgtoday.com/carbon-accounting-and-reporting-software-provider-persefoni-raises-23-million/?utm_source=rss&utm_medium=rss&utm_campaign=carbon-accounting-and-reporting-software-provider-persefoni-raises-23-million" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 208,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '토탈·에퀴노르·셸, 탄소저장 프로젝트 7억 달러 추가 투자',
      author: '관리자',
      date: '2025.03.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에너지 메이저 TotalEnergies, Equinor, Shell이 노르웨이 Northern Lights CCS 프로젝트 확장을 위해 75억 노르웨이크로네(약 7억 1,400만 달러)를 공동 투자한다고 발표했습니다. 유럽 CCS 인프라 핵심 사업입니다.</p><h3>주요 포인트</h3><ul><li>유럽 최대 해저 CCS 사업 용량 대폭 확장</li><li>3사 공동 투자로 사업 안정성 확보</li><li>EU CCS 정책 가속화에 부합하는 인프라 투자</li></ul><p>원문: <a href="https://www.esgtoday.com/totalenergies-equinor-shell-to-invest-over-700-million-to-expand-carbon-storage-project/?utm_source=rss&utm_medium=rss&utm_campaign=totalenergies-equinor-shell-to-invest-over-700-million-to-expand-carbon-storage-project" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 209,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Equifax, 금융배출량 계산기 출시',
      author: '관리자',
      date: '2025.03.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>데이터·분석 기업 Equifax UK가 금융기관 대출·투자 포트폴리오의 탄소배출량을 측정하는 'Financed Emissions Calculator'를 출시했습니다. PCAF 표준 기반으로 금융권 Scope 3 산정을 지원합니다.</p><h3>주요 포인트</h3><ul><li>은행·자산운용사용 PCAF 호환 산정 도구</li><li>Equifax 보유 데이터 활용한 정밀 추정</li><li>금융권 NZBA·SBTi 이행 실무 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/equifax-launches-financed-emissions-calculator/?utm_source=rss&utm_medium=rss&utm_campaign=equifax-launches-financed-emissions-calculator" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 210,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Measurabl, EMEA 디렉터로 Aislinn McCarry 임명',
      author: '관리자',
      date: '2025.02.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>부동산 ESG 데이터 기술 기업 Measurabl이 Aislinn McCarry를 EMEA 디렉터로 임명했다고 발표했습니다. 유럽 부동산 시장의 ESG 데이터 수요 확대에 대응하기 위한 조직 강화입니다.</p><h3>주요 포인트</h3><ul><li>EMEA 시장 확장을 위한 리더십 보강</li><li>부동산 운영 단계 ESG 데이터 수요 증가 대응</li><li>유럽 EPBD·SFDR 등 규제 환경 적응 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/real-estate-sustainability-data-provider-measurabl-appoints-aislinn-mccarry-as-director-of-emea/?utm_source=rss&utm_medium=rss&utm_campaign=real-estate-sustainability-data-provider-measurabl-appoints-aislinn-mccarry-as-director-of-emea" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 211,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '블랙스톤, 에너지전환 PE펀드로 56억 달러 조성',
      author: '관리자',
      date: '2025.02.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대체자산운용사 블랙스톤이 에너지전환에 특화된 사모펀드를 56억 달러 규모로 클로징했다고 발표했습니다. 청정에너지 인프라·전력망·핵심 광물 등에 폭넓게 투자할 계획입니다.</p><h3>주요 포인트</h3><ul><li>대형 PE의 에너지전환 자본 모집 사상 최대급</li><li>그리드·저장장치·EV 핵심 광물 등 다각화 투자</li><li>인플레이션감축법(IRA) 모멘텀 활용 전략</li></ul><p>원문: <a href="https://www.esgtoday.com/blackstone-raises-5-6-billion-for-energy-transition-focused-private-equity-fund/?utm_source=rss&utm_medium=rss&utm_campaign=blackstone-raises-5-6-billion-for-energy-transition-focused-private-equity-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 212,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '유나이티드 항공, 탄소제거 기업 Heirloom에 투자',
      author: '관리자',
      date: '2025.02.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유나이티드 항공이 자사 지속가능 비행 펀드(UAV)를 통해 직접공기포집(DAC) 스타트업 Heirloom에 투자했다고 발표했습니다. SAF 외에도 영구 탄소제거 솔루션을 항공산업이 직접 확보하려는 흐름입니다.</p><h3>주요 포인트</h3><ul><li>항공산업의 영구 탄소제거 수요 가시화</li><li>탄산칼슘 기반 DAC 기술의 상업화 진전</li><li>UAV 펀드의 기후기술 포트폴리오 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/united-airlines-backs-carbon-removal-tech-company-heirloom/?utm_source=rss&utm_medium=rss&utm_campaign=united-airlines-backs-carbon-removal-tech-company-heirloom" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 213,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트, 저투자 지역 재생에너지 배포 계약 체결',
      author: '관리자',
      date: '2025.02.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>마이크로소프트가 탄소솔루션 기업 Clearloop과 협업해 미국 내 재생에너지 투자가 부족한 지역에 청정전력을 배포하는 계약을 체결했습니다. 환경 정의(Just Transition) 관점이 강조된 사례입니다.</p><h3>주요 포인트</h3><ul><li>저소득·저투자 지역에 청정에너지 직접 공급</li><li>전력 형평성과 탈탄소를 결합한 임팩트 모델</li><li>커뮤니티 솔라 확산을 위한 기업 자본 동원</li></ul><p>원문: <a href="https://www.esgtoday.com/microsoft-signs-deal-to-deploy-renewable-energy-in-underinvested-communities/?utm_source=rss&utm_medium=rss&utm_campaign=microsoft-signs-deal-to-deploy-renewable-energy-in-underinvested-communities" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 214,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EU, 청정 산업 수요 견인 위한 \'Clean Industrial Deal\' 발표',
      author: '관리자',
      date: '2025.02.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU 집행위가 청정 제품 수요를 자극하고 산업 탈탄소를 가속하기 위한 'Clean Industrial Deal'을 공식 발표했습니다. 보조금·공공조달·전력 가격 안정 등 다층적 정책 패키지로 구성됩니다.</p><h3>주요 포인트</h3><ul><li>청정 철강·시멘트 등 신규 시장 창출 수단 마련</li><li>전력 가격 인하·연결망 확대 인프라 투자</li><li>중국·미국 대비 EU 산업 경쟁력 회복 목표</li></ul><p>원문: <a href="https://www.esgtoday.com/eu-launches-strategy-to-drive-demand-for-clean-products-decarbonize-industry/?utm_source=rss&utm_medium=rss&utm_campaign=eu-launches-strategy-to-drive-demand-for-clean-products-decarbonize-industry" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 215,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EU, CSRD 보고 의무에서 기업 80% 면제 추진',
      author: '관리자',
      date: '2025.02.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU 집행위가 첫 번째 옴니버스 패키지를 발표하며 CSRD 적용 대상 기업 중 약 80%를 면제하는 안을 제시했습니다. 중소·중견기업 부담 완화가 명분이지만 ESG 정보의 비교 가능성 약화 우려가 큽니다.</p><h3>주요 포인트</h3><ul><li>대상 기업 대폭 축소로 적용 범위 재조정</li><li>업계 안도와 시민사회 반발 동시 확산</li><li>EU 지속가능성 표준의 글로벌 영향력 변화</li></ul><p>원문: <a href="https://www.esgtoday.com/eu-to-exempt-80-of-companies-from-csrd-sustainability-reporting-requirements/?utm_source=rss&utm_medium=rss&utm_campaign=eu-to-exempt-80-of-companies-from-csrd-sustainability-reporting-requirements" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 216,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '블랙록, EMEA 지속가능 솔루션 책임자에 Louise Kooy-Henckel 임명',
      author: '관리자',
      date: '2025.02.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 자산운용사 블랙록이 EMEA 지속가능·전환 솔루션 책임자로 Louise Kooy-Henckel을 임명했다고 발표했습니다. 미국 정치 변화 속에서도 유럽 지속가능 투자 시장은 견조하다는 신호입니다.</p><h3>주요 포인트</h3><ul><li>EMEA 지속가능 투자 사업 강화 위한 인사</li><li>유럽 SFDR·MiFID 규제 대응 역량 결집</li><li>전환금융 솔루션 시장 성장에 대비</li></ul><p>원문: <a href="https://www.esgtoday.com/blackrock-appoints-louise-kooy-henckel-as-emea-head-of-sustainable-and-transition-solutions/?utm_source=rss&utm_medium=rss&utm_campaign=blackrock-appoints-louise-kooy-henckel-as-emea-head-of-sustainable-and-transition-solutions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 217,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Hydrostor, 압축공기 저장기술 사업화 위해 2억 달러 조달',
      author: '관리자',
      date: '2025.02.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>장시간 에너지 저장 솔루션 기업 Hydrostor가 2억 달러 규모의 자금 조달을 완료했다고 발표했습니다. 12시간 이상 저장 가능한 압축공기 저장(CAES) 시설 상용화를 가속합니다.</p><h3>주요 포인트</h3><ul><li>리튬이온을 보완할 장시간 저장 기술 진전</li><li>호주·미국 대형 CAES 사업 가속</li><li>그리드 안정화에 필요한 자본 유치 성공</li></ul><p>원문: <a href="https://www.esgtoday.com/hydrostor-raises-200-million-to-store-energy-using-compressed-air-technology/?utm_source=rss&utm_medium=rss&utm_campaign=hydrostor-raises-200-million-to-store-energy-using-compressed-air-technology" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 218,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Ramboll, IBM과 지속가능성 전략·보고 솔루션 협력',
      author: '관리자',
      date: '2025.02.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>덴마크의 엔지니어링·컨설팅 기업 Ramboll과 IBM이 지속가능성 전략 수립 및 보고 솔루션을 공동 제공하기 위해 협력 관계를 맺었습니다. 컨설팅과 IT 솔루션의 결합을 통한 통합 서비스가 핵심입니다.</p><h3>주요 포인트</h3><ul><li>전략·데이터·보고를 잇는 통합 솔루션 제공</li><li>IBM Envizi 플랫폼과 Ramboll 전문성 결합</li><li>대기업 ESG 전사 통합관리 수요 대응</li></ul><p>원문: <a href="https://www.esgtoday.com/ramboll-ibm-partner-to-offer-sustainability-strategy-and-reporting-solutions/?utm_source=rss&utm_medium=rss&utm_campaign=ramboll-ibm-partner-to-offer-sustainability-strategy-and-reporting-solutions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 219,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ACCURE, 배터리 안전 AI 플랫폼 위해 1,600만 달러 조달',
      author: '관리자',
      date: '2025.02.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>배터리 기술 스타트업 ACCURE Battery Intelligence가 1,600만 달러를 조달했다고 발표했습니다. AI 기반 배터리 모니터링·진단 플랫폼 확장에 사용될 예정으로, EV·ESS 안전성 향상에 기여합니다.</p><h3>주요 포인트</h3><ul><li>AI로 배터리 화재·열폭주 사전 감지</li><li>EV·전력저장장치 등 산업 전반 적용 확대</li><li>1,600만 달러로 글로벌 시장 진출 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/accure-raises-16-million-to-scale-ai-based-platform-to-make-batteries-safer-and-more-reliable/?utm_source=rss&utm_medium=rss&utm_campaign=accure-raises-16-million-to-scale-ai-based-platform-to-make-batteries-safer-and-more-reliable" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 220,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트, EDP와 美 태양광 389MW PPA 체결',
      author: '관리자',
      date: '2025.02.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EDP Renewables North America가 마이크로소프트와 미국 신규 태양광 3개 사업 총 389MW의 전력공급계약(PPA)을 체결했다고 밝혔습니다. 데이터센터 24/7 청정에너지 매칭에 활용됩니다.</p><h3>주요 포인트</h3><ul><li>미국 신규 태양광 389MW 확보</li><li>다지역 분산 공급으로 그리드 신뢰도 향상</li><li>빅테크의 청정전력 PPA 포트폴리오 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/microsoft-purchases-389-mw-of-renewable-energy-from-new-u-s-solar-projects-with-edp/?utm_source=rss&utm_medium=rss&utm_campaign=microsoft-purchases-389-mw-of-renewable-energy-from-new-u-s-solar-projects-with-edp" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 221,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Arcadia, 청정에너지 조달 플랫폼 RPD Energy 인수',
      author: '관리자',
      date: '2025.02.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에너지 관리 플랫폼 Arcadia가 미국 중견기업 대상 재생전력 조달 서비스를 제공하는 RPD Energy를 인수한다고 발표했습니다. 기업용 청정에너지 조달 시장 통합 흐름이 가속화되고 있습니다.</p><h3>주요 포인트</h3><ul><li>중견기업용 재생전력 조달 서비스 확보</li><li>플랫폼·중개·운영 통합한 종합 솔루션</li><li>미국 기업 청정에너지 조달 수요 견조</li></ul><p>원문: <a href="https://www.esgtoday.com/arcadia-acquires-clean-energy-procurement-platform-rpd-energy/?utm_source=rss&utm_medium=rss&utm_campaign=arcadia-acquires-clean-energy-procurement-platform-rpd-energy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 222,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '모건스탠리, 넷제로 은행연합 탈퇴…넷제로 약속은 유지',
      author: '관리자',
      date: '2025.01.03',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>모건스탠리가 동종 대형은행에 이어 넷제로 은행연합(NZBA)에서 탈퇴했다고 발표했습니다. 다만 자체 넷제로 목표는 유지하겠다는 입장으로 미국 정치 환경 변화의 영향을 받은 결정입니다.</p><h3>주요 포인트</h3><ul><li>월가 대형은행의 NZBA 연쇄 이탈 흐름</li><li>공식 단체 가입은 해소하되 자체 목표는 유지</li><li>금융권 기후 협력의 정치적 부담 증대</li></ul><p>원문: <a href="https://www.esgtoday.com/morgan-stanley-joins-peers-in-leaving-climate-group-maintains-commitment-to-net-zero/?utm_source=rss&utm_medium=rss&utm_campaign=morgan-stanley-joins-peers-in-leaving-climate-group-maintains-commitment-to-net-zero" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 223,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '에퀴노르, 뉴욕 해상풍력 사업에 30억 달러 금융 확보',
      author: '관리자',
      date: '2025.01.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>노르웨이 에너지 기업 Equinor가 뉴욕주 해상풍력 사업을 위한 30억 달러 규모의 프로젝트 파이낸스를 확보했다고 발표했습니다. 미국 해상풍력 사업의 자본조달 가능성을 보여주는 사례입니다.</p><h3>주요 포인트</h3><ul><li>美 해상풍력 대형 PF 성공 사례</li><li>뉴욕주 청정에너지 목표 이행 핵심 자산</li><li>인플레이션·금리 압력 속 자금 조달 성과</li></ul><p>원문: <a href="https://www.esgtoday.com/equinor-lands-3-billion-financing-package-for-new-york-offshore-wind-project/?utm_source=rss&utm_medium=rss&utm_campaign=equinor-lands-3-billion-financing-package-for-new-york-offshore-wind-project" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 224,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '씨티·BofA, 골드만·웰스파고 이어 NZBA 탈퇴',
      author: '관리자',
      date: '2025.01.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>씨티그룹과 뱅크오브아메리카가 골드만삭스·웰스파고에 이어 넷제로 은행연합(NZBA)을 탈퇴하기로 결정했습니다. 미국 6대 은행 가운데 다수가 단체에서 빠지면서 NZBA의 영향력에 의문이 제기됩니다.</p><h3>주요 포인트</h3><ul><li>美 6대 은행 다수의 NZBA 연쇄 이탈</li><li>반-ESG 정치 압력의 직접적 영향</li><li>금융권 기후 협력 메커니즘 재편 가능성</li></ul><p>원문: <a href="https://www.esgtoday.com/citi-bofa-join-goldman-sachs-and-wells-fargo-in-exiting-net-zero-banking-group/?utm_source=rss&utm_medium=rss&utm_campaign=citi-bofa-join-goldman-sachs-and-wells-fargo-in-exiting-net-zero-banking-group" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 225,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '뉴욕주, 기후 적응 인프라 비용 750억 달러 정유사에 부과',
      author: '관리자',
      date: '2024.12.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>뉴욕주 캐시 호컬 주지사가 'Climate Change Superfund Act'에 서명했습니다. 향후 25년에 걸쳐 750억 달러를 정유·가스 기업으로부터 거둬 기후 적응 인프라에 투입하는 법안입니다.</p><h3>주요 포인트</h3><ul><li>오염자 부담 원칙 적용한 첫 대형 입법</li><li>해수면 상승 등 기후 적응 자금 확보</li><li>업계의 법적 도전 가능성 예상</li></ul><p>원문: <a href="https://www.esgtoday.com/new-york-to-charge-oil-companies-75-billion-to-pay-for-infrastructure-to-cope-with-climate-change/?utm_source=rss&utm_medium=rss&utm_campaign=new-york-to-charge-oil-companies-75-billion-to-pay-for-infrastructure-to-cope-with-climate-change" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 226,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '웰스파고, 기후 중심 은행연합(NZBA)에서 탈퇴',
      author: '관리자',
      date: '2024.12.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>웰스파고가 넷제로 은행연합(NZBA)에서 탈퇴한다고 발표했습니다. 골드만삭스에 이어 두 번째 미국 대형은행의 이탈로, 미국 정치 환경 변화가 글로벌 기후 협력 단체에 미치는 영향을 보여줍니다.</p><h3>주요 포인트</h3><ul><li>美 대형은행 NZBA 이탈 본격화 신호</li><li>주별 반-ESG 입법 압력 영향</li><li>유럽·아시아 회원사 영향 제한적 전망</li></ul><p>원문: <a href="https://www.esgtoday.com/wells-fargo-leaves-climate-focused-banking-initiative/?utm_source=rss&utm_medium=rss&utm_campaign=wells-fargo-leaves-climate-focused-banking-initiative" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 227,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Fervo Energy, 지열 사업 확장 위해 2.55억 달러 조달',
      author: '관리자',
      date: '2024.12.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지열 에너지 개발사 Fervo Energy가 2억 5,500만 달러를 조달했다고 발표했습니다. 차세대 강화 지열(EGS) 기술을 활용해 미국 서부에 대형 지열 발전소를 건설하는 데 사용될 예정입니다.</p><h3>주요 포인트</h3><ul><li>차세대 EGS 기술 상용화 진전</li><li>구글 등 데이터센터 매칭 수요 증가</li><li>안정적 베이스로드 청정전원으로 주목</li></ul><p>원문: <a href="https://www.esgtoday.com/fervo-energy-raises-255-million-to-deploy-geothermal-power-projects/?utm_source=rss&utm_medium=rss&utm_campaign=fervo-energy-raises-255-million-to-deploy-geothermal-power-projects" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 228,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG Today 주간 리뷰 196: 바이든 행정부 신규 기후목표 설정',
      author: '관리자',
      date: '2024.12.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 ESG 뉴스에서는 정권 교체를 앞둔 바이든 행정부가 미국의 새 기후 목표를 발표했고, 다수 굵직한 ESG 정책·자본 동향이 이어졌습니다. 글로벌 기후 정책의 분기점에 해당하는 한 주였습니다.</p><h3>주요 포인트</h3><ul><li>美 신규 NDC 공식 발표</li><li>유럽 옴니버스 패키지 논의 본격화</li><li>주요 기업의 기후 공시·전환 계획 업데이트</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-196/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-196" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 229,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '월마트, 2025·2030 기후 목표 미달 예상',
      author: '관리자',
      date: '2024.12.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>월마트가 자체 중간 기후 목표 달성이 어렵다고 인정했습니다. 자사 운영과 공급망 배출 감축 모두 당초 계획보다 진척이 더디다는 평가로, 글로벌 유통기업의 SBTi 이행 어려움을 보여줍니다.</p><h3>주요 포인트</h3><ul><li>2025·2030 임시 목표 모두 미달 가능성</li><li>공급망(Scope 3) 감축의 구조적 난이도 노출</li><li>대형 유통기업 기후 목표 재정비 흐름</li></ul><p>원문: <a href="https://www.esgtoday.com/walmart-to-miss-2025-2030-climate-targets/?utm_source=rss&utm_medium=rss&utm_campaign=walmart-to-miss-2025-2030-climate-targets" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 230,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EV 인프라 기업 JET Charge, 4,500만 달러 조달',
      author: '관리자',
      date: '2024.12.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>호주 기반 EV 충전 인프라 기업 JET Charge가 7,200만 호주달러(약 4,500만 달러)를 조달했다고 발표했습니다. 호주·뉴질랜드 충전 네트워크 확장에 사용될 예정입니다.</p><h3>주요 포인트</h3><ul><li>호주·뉴질랜드 EV 충전 시장 자본 유입</li><li>OCPP 기반 개방형 충전 솔루션 확장</li><li>4,500만 달러로 R&D·서비스 인프라 확충</li></ul><p>원문: <a href="https://www.esgtoday.com/ev-infrastructure-provider-jet-charge-raises-45-million/?utm_source=rss&utm_medium=rss&utm_campaign=ev-infrastructure-provider-jet-charge-raises-45-million" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 231,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '빌 게이츠 펀드, 캐나다 탄소제거 스타트업 Deep Sky에 4천만 달러 투자',
      author: '관리자',
      date: '2024.12.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>탄소제거 프로젝트 개발사 Deep Sky가 빌 게이츠가 후원하는 Climate Solutions Fund로부터 4천만 달러 투자를 유치했다고 발표했습니다. DAC 다중 기술 통합 플랫폼 구축이 목표입니다.</p><h3>주요 포인트</h3><ul><li>Deep Sky의 'Carbon Removal Hub' 사업 가속</li><li>다양한 DAC 기술 검증·확장 거점 마련</li><li>4천만 달러 자본으로 캐나다 첫 사이트 건설</li></ul><p>원문: <a href="https://www.esgtoday.com/bill-gates-backed-climate-solutions-fund-invests-40-million-in-canadian-carbon-removal-startup-deep-sky/?utm_source=rss&utm_medium=rss&utm_campaign=bill-gates-backed-climate-solutions-fund-invests-40-million-in-canadian-carbon-removal-startup-deep-sky" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 232,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '퇴임 앞둔 바이든 행정부, 美 2035 기후 목표 발표',
      author: '관리자',
      date: '2024.12.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>바이든 행정부가 임기 막바지에 미국의 2035년 온실가스 감축 목표를 발표했습니다. 2005년 대비 61~66% 감축이라는 야심찬 수치이지만, 정권 교체로 실현 가능성에 의문이 제기됩니다.</p><h3>주요 포인트</h3><ul><li>美 신규 NDC, 2005년 대비 61~66% 감축 제시</li><li>차기 행정부의 정책 지속성에 대한 불확실성</li><li>주·기업 차원의 자율적 이행 중요성 부각</li></ul><p>원문: <a href="https://www.esgtoday.com/outgoing-biden-administration-sets-new-2035-u-s-climate-goal/?utm_source=rss&utm_medium=rss&utm_campaign=outgoing-biden-administration-sets-new-2035-u-s-climate-goal" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 233,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Frontier, 구글·H&M·Stripe 등에 8천만 달러 신규 탄소제거 계약 중개',
      author: '관리자',
      date: '2024.12.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>탄소제거 구매자 연합 Frontier가 구글, H&M, Stripe 등을 위해 신규 8천만 달러 규모의 오프테이크 계약을 중개했다고 발표했습니다. 영구 탄소제거 시장의 양적 성장이 가시화되고 있습니다.</p><h3>주요 포인트</h3><ul><li>다수 영구 탄소제거 기술에 분산 발주</li><li>Frontier의 누적 발주 규모 의미있는 도약</li><li>구매자 연합 모델의 시장 형성 효과 확인</li></ul><p>원문: <a href="https://www.esgtoday.com/carbon-removal-coalition-frontier-facilitates-80-million-in-new-offtake-agreements-for-google-hm-stripe-and-others/?utm_source=rss&utm_medium=rss&utm_campaign=carbon-removal-coalition-frontier-facilitates-80-million-in-new-offtake-agreements-for-google-hm-stripe-and-others" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 234,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '액센추어, 넷제로 인프라 강화 위해 IQT Group 인수',
      author: '관리자',
      date: '2024.12.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 컨설팅 기업 액센추어가 이탈리아 엔지니어링 서비스 기업 IQT Group을 인수한다고 발표했습니다. 청정에너지·전력망·산업 탈탄소 영역의 실행 역량을 통합하기 위한 행보입니다.</p><h3>주요 포인트</h3><ul><li>액센추어의 넷제로 컨설팅·실행 역량 강화</li><li>유럽 청정 인프라 사업 기회 선점</li><li>전략-기술-실행 통합 서비스 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/accenture-acquires-iqt-group-to-target-net-zero-infrastructure-opportunities/?utm_source=rss&utm_medium=rss&utm_campaign=accenture-acquires-iqt-group-to-target-net-zero-infrastructure-opportunities" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 235,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG Today 주간 리뷰 191: 캐나다 정유·가스 배출 감축 의무화',
      author: '관리자',
      date: '2024.11.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 주요 ESG 동향에서는 캐나다가 정유·가스 산업의 배출 감축을 의무화하는 정책을 발표했고, 다수 기업의 청정에너지 투자 결정이 잇따랐습니다.</p><h3>주요 포인트</h3><ul><li>캐나다 정유·가스 부문 배출 상한제 도입</li><li>주요 기업의 신규 청정에너지 투자 발표</li><li>정책·시장 양방향에서 탈탄소 모멘텀 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-191/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-191" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 236,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Archer, 일본서 최대 5억 달러 규모 전기 항공기 공급 계약',
      author: '관리자',
      date: '2024.11.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>전기 항공 모빌리티 기업 Archer가 일본항공(JAL), 스미토모상사와 협력해 최대 5억 달러 규모의 eVTOL 항공기 공급 계약을 체결했습니다. 일본 도심항공모빌리티(UAM) 시장 진출의 발판입니다.</p><h3>주요 포인트</h3><ul><li>일본 UAM 시장 진출 위한 대형 계약</li><li>JAL·스미토모와 운항·인프라 파트너십</li><li>아시아 지역 eVTOL 사업 확장 모멘텀</li></ul><p>원문: <a href="https://www.esgtoday.com/archer-lands-up-to-500-million-purchase-deal-for-electric-aircraft-in-japan/?utm_source=rss&utm_medium=rss&utm_campaign=archer-lands-up-to-500-million-purchase-deal-for-electric-aircraft-in-japan" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 237,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '호주 규제당국, 신규 지속가능성 보고에 "실용적 접근" 약속',
      author: '관리자',
      date: '2024.11.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>호주 증권투자위원회(ASIC)가 새로 도입되는 지속가능성 보고 의무에 대해 '실용적' 시행 접근을 약속했습니다. 첫 보고 주기 동안 형식적 위반 단속보다 실질 개선을 우선하겠다는 입장입니다.</p><h3>주요 포인트</h3><ul><li>도입 초기 형식적 위반에 관대한 시행 시그널</li><li>기업의 자발적 역량 확보 시간 확보</li><li>호주 ISSB 호환 보고 체계 안착 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/australia-regulator-pledges-pragmatic-approach-to-enforcing-new-sustainability-reporting-requirements/?utm_source=rss&utm_medium=rss&utm_campaign=australia-regulator-pledges-pragmatic-approach-to-enforcing-new-sustainability-reporting-requirements" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 238,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '생고뱅·Boralex, 프랑스서 20년 PPA로 신규 재생에너지 3개 사업 추진',
      author: '관리자',
      date: '2024.11.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>건축자재 기업 생고뱅이 프랑스에서 Boralex와 20년 장기 PPA를 체결해 신규 풍력·태양광 3개 사업 개발을 가능하게 했다고 발표했습니다. 산업 수요가 신규 재생에너지 자산 건설을 견인하는 사례입니다.</p><h3>주요 포인트</h3><ul><li>20년 장기 PPA로 신규 재생에너지 사업 자금화</li><li>프랑스 산업의 직접 그린전력 조달 모델</li><li>생고뱅 SBTi 목표 이행에 핵심 자산 확보</li></ul><p>원문: <a href="https://www.esgtoday.com/saint-gobain-boralex-sign-20-year-ppa-enabling-development-of-three-new-renewable-energy-projects-in-france/?utm_source=rss&utm_medium=rss&utm_campaign=saint-gobain-boralex-sign-20-year-ppa-enabling-development-of-three-new-renewable-energy-projects-in-france" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 239,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'NatureFinance, 투자자·은행용 자연 영향 평가 도구 출시',
      author: '관리자',
      date: '2024.11.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>그린 금융 비영리 기관 NatureFinance가 투자·대출 포트폴리오의 자연 영향을 정량적으로 평가하는 'NatureAlign' 도구를 출시했습니다. TNFD 공시 본격화를 앞두고 실무 활용도가 기대됩니다.</p><h3>주요 포인트</h3><ul><li>투자자·은행 포트폴리오의 자연자본 노출도 평가</li><li>TNFD·SBTN 공시 작성 실무 지원</li><li>금융권 자연자본 리스크 인식 확산</li></ul><p>원문: <a href="https://www.esgtoday.com/naturefinance-launches-green-finance-tool-to-help-investors-banks-assess-portfolio-nature-impact/?utm_source=rss&utm_medium=rss&utm_campaign=naturefinance-launches-green-finance-tool-to-help-investors-banks-assess-portfolio-nature-impact" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 240,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'H&M, 텍사스 신규 태양광 건설 PPA 체결',
      author: '관리자',
      date: '2024.11.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>H&M 그룹이 미국 텍사스에 신규 태양광 사업 건설을 가능하게 하는 가상 전력공급계약(VPPA)을 체결했다고 발표했습니다. 의류 산업 글로벌 공급망의 재생전력 매칭 노력의 일환입니다.</p><h3>주요 포인트</h3><ul><li>VPPA로 신규 태양광 자산 건설 견인</li><li>H&M 텍사스 매장 전력 환산 매칭</li><li>패션 산업의 청정전력 조달 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/hm-signs-solar-ppa-enabling-new-renewable-energy-construction-in-texas/?utm_source=rss&utm_medium=rss&utm_campaign=hm-signs-solar-ppa-enabling-new-renewable-energy-construction-in-texas" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 241,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'KPMG, 美 지속가능성 부문 책임자에 Maura Hodge 임명',
      author: '관리자',
      date: '2024.10.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 회계·컨설팅 기업 KPMG가 미국 지속가능성 컨설팅 사업의 책임자로 Maura Hodge를 임명했다고 발표했습니다. CSRD 등 글로벌 공시 영향을 받는 미국 다국적 기업 수요 대응 강화입니다.</p><h3>주요 포인트</h3><ul><li>美 지속가능성 자문·검증 사업 리더십 보강</li><li>글로벌 공시 표준 통합 흐름 대응 가속</li><li>KPMG의 ESG 어슈어런스 시장 입지 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/kpmg-appoints-maura-hodge-to-lead-us-sustainability-practice/?utm_source=rss&utm_medium=rss&utm_campaign=kpmg-appoints-maura-hodge-to-lead-us-sustainability-practice" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 242,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ASDA, 협력사 금융 금리를 ESG 성과에 연동',
      author: '관리자',
      date: '2024.10.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>영국 슈퍼마켓 ASDA가 협력사 운영자금 금리를 탈탄소·ESG 보고 성과에 연동하는 신규 지속가능 공급망 금융 프로그램을 시작했다고 밝혔습니다. 공급망 ESG 인센티브 사례로 주목됩니다.</p><h3>주요 포인트</h3><ul><li>협력사 친환경 성과에 따른 금리 우대</li><li>공급망 단계 Scope 3 감축 유인 강화</li><li>리테일 공급망 금융 모델의 새로운 사례</li></ul><p>원문: <a href="https://www.esgtoday.com/asda-ties-financing-rates-for-suppliers-to-decarbonization-esg-reporting-and-performance/?utm_source=rss&utm_medium=rss&utm_campaign=asda-ties-financing-rates-for-suppliers-to-decarbonization-esg-reporting-and-performance" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 243,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GeoPura, 그린수소 발전기 함대 확장에 2,200만 파운드 조달',
      author: '관리자',
      date: '2024.10.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>청정전력 솔루션 기업 GeoPura가 2,200만 파운드(약 2,930만 달러)를 조달해 그린수소 기반 발전기 함대를 확장한다고 발표했습니다. 디젤 발전기를 대체하는 이동형 청정 발전 솔루션입니다.</p><h3>주요 포인트</h3><ul><li>건설현장·이벤트용 무공해 발전기 보급 확대</li><li>그린수소 보급 가시화에 기여</li><li>2,200만 파운드 자본으로 영국 사업 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/geopura-raises-22-million-to-build-out-green-hydrogen-power-unit-fleet/?utm_source=rss&utm_medium=rss&utm_campaign=geopura-raises-22-million-to-build-out-green-hydrogen-power-unit-fleet" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 244,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'TPG·GIC, 건물 에너지관리 플랫폼 Techem을 74억 달러에 인수',
      author: '관리자',
      date: '2024.10.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>TPG의 임팩트 투자 플랫폼 TPG Rise Climate와 싱가포르 국부펀드 GIC가 독일 건물 에너지 관리·탈탄소 솔루션 기업 Techem을 74억 달러에 인수한다고 발표했습니다.</p><h3>주요 포인트</h3><ul><li>유럽 최대 규모 건물 탈탄소 플랫폼 인수</li><li>임팩트 PE의 인프라급 투자 사례</li><li>건물 에너지 효율화 시장의 자본 집중</li></ul><p>원문: <a href="https://www.esgtoday.com/tpg-rise-climate-gic-acquire-building-decarbonization-and-energy-management-platform-techem-for-7-4-billion/?utm_source=rss&utm_medium=rss&utm_campaign=tpg-rise-climate-gic-acquire-building-decarbonization-and-energy-management-platform-techem-for-7-4-billion" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 245,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Atlas Metrics, ESG 보고 SaaS 위해 1,220만 유로 조달',
      author: '관리자',
      date: '2024.09.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>ESG 데이터 관리 스타트업 Atlas Metrics가 1,220만 유로를 추가로 조달했다고 발표했습니다. CSRD 시행을 앞두고 중소·중견기업의 보고 자동화 수요가 빠르게 성장하고 있습니다.</p><h3>주요 포인트</h3><ul><li>CSRD 대응 SaaS 시장의 자본 유입 지속</li><li>중견기업 ESG 보고 자동화 수요 증가</li><li>유럽 핵심 시장 침투 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-reporting-software-startup-atlas-metrics-raises-e12-2-million/?utm_source=rss&utm_medium=rss&utm_campaign=esg-reporting-software-startup-atlas-metrics-raises-e12-2-million" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 246,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: AI 기반 솔루션으로 CSRD 대응 간소화',
      author: '관리자',
      date: '2024.09.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GreenBiz가 AI 솔루션을 활용한 CSRD 컴플라이언스 간소화 방안을 다루는 웨비나를 개최했습니다. 데이터 수집·검증·보고서 작성의 자동화 사례가 공유됐습니다.</p><h3>주요 포인트</h3><ul><li>CSRD 대응 AI 자동화 베스트 프랙티스 공유</li><li>데이터 품질 관리·이중 중요성 평가 효율화</li><li>중견기업 실무자 대상 실용 콘텐츠</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/csrd-made-easy-compliance-opportunity-ai-enabled-sustainability-solutions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 247,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: COP16 생물다양성 회의 핵심 전략',
      author: '관리자',
      date: '2024.09.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GreenBiz가 COP16 생물다양성 회의를 앞두고 기업의 효과적 참여 전략을 논의하는 웨비나를 개최했습니다. 자연자본·생물다양성 공시(TNFD) 흐름의 실무적 함의를 다뤘습니다.</p><h3>주요 포인트</h3><ul><li>COP16 주요 의제와 기업 영향 정리</li><li>TNFD 적용 사례 공유</li><li>생물다양성 전략의 비즈니스 통합 방안</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/countdown-cop-16-key-strategies-engaging-biodiversity-conference" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 248,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Novata, 비상장 기업용 ESG 데이터·보고 솔루션 출시',
      author: '관리자',
      date: '2024.09.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>비상장(PE) 시장 ESG 데이터 솔루션 기업 Novata가 'Novata for Companies'를 새로 출시했다고 밝혔습니다. 사모펀드 포트폴리오 기업이 LP 보고를 효율화할 수 있도록 지원합니다.</p><h3>주요 포인트</h3><ul><li>PE 포트폴리오사 ESG 보고 자동화</li><li>LP 보고와 규제 보고 동시 충족</li><li>Novata의 비상장 시장 입지 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/novata-launches-esg-data-and-reporting-solutions-for-private-companies/?utm_source=rss&utm_medium=rss&utm_campaign=novata-launches-esg-data-and-reporting-solutions-for-private-companies" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 249,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Euronext, ESG 벤치마킹 도구·중소기업 CSRD 자문 서비스 출시',
      author: '관리자',
      date: '2024.09.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽 시장 인프라 사업자 Euronext가 ESG 벤치마킹 도구와 중소기업용 CSRD 보고 자문 솔루션 등 신규 ESG 서비스를 출시했습니다. 거래소가 보고 인프라까지 확장하는 흐름입니다.</p><h3>주요 포인트</h3><ul><li>거래소 발 ESG 데이터 인프라 확장</li><li>중소기업 CSRD 대응 부담 완화 솔루션</li><li>유럽 자본시장 ESG 통합 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/euronext-launches-new-esg-benchmarking-tool-sme-csrd-sustainability-reporting-advisory-solution/?utm_source=rss&utm_medium=rss&utm_campaign=euronext-launches-new-esg-benchmarking-tool-sme-csrd-sustainability-reporting-advisory-solution" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 250,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG Today 주간 리뷰 183: MS, 클라우드·AI 협력사 탈탄소 팀 출범',
      author: '관리자',
      date: '2024.09.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 ESG 뉴스에서는 마이크로소프트가 클라우드·AI 협력사 탈탄소 전담 조직을 신설했고, 다수 기업의 ESG 전략·자본 동향이 이어졌습니다.</p><h3>주요 포인트</h3><ul><li>마이크로소프트 공급망 탈탄소 조직 신설</li><li>다양한 산업의 청정에너지 투자 발표</li><li>글로벌 ESG 정책 환경의 변화 지속</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-183/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-183" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 251,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'BNP파리바AM, ESG 통합한 일본·美 시장 ETF 출시',
      author: '관리자',
      date: '2024.09.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>BNP파리바 자산운용이 ESG를 능동적으로 통합한 일본·미국 시장 ETF 2종을 신규 출시했습니다. 인덱스 기반 패시브 운용에 ESG 스크리닝과 가중치 조정을 결합한 모델입니다.</p><h3>주요 포인트</h3><ul><li>액티브 ESG 통합형 신규 ETF 라인업</li><li>일본·미국 코어 시장 노출 + ESG 차별화</li><li>유럽 SFDR 기준 부합 상품군 확대</li></ul><p>원문: <a href="https://www.esgtoday.com/bnp-paribas-am-launches-new-indexing-based-etfs-with-active-esg-integration/?utm_source=rss&utm_medium=rss&utm_campaign=bnp-paribas-am-launches-new-indexing-based-etfs-with-active-esg-integration" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 252,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Mantel, 산업 탄소 포집 기술 위해 3천만 달러 조달',
      author: '관리자',
      date: '2024.09.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>탄소 포집 스타트업 Mantel이 시리즈 A에서 3천만 달러를 조달했다고 발표했습니다. 시멘트·철강 등 고온 산업 공정에서 사용 가능한 용융염 기반 포집 기술을 상용화합니다.</p><h3>주요 포인트</h3><ul><li>고온 산업 공정 적용 가능한 포집 기술</li><li>시멘트·철강 등 난감축 부문 솔루션</li><li>3천만 달러로 파일럿 → 상용 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/cleantech-startup-mantel-raises-30-million-to-scale-industrial-carbon-capture-solution/?utm_source=rss&utm_medium=rss&utm_campaign=cleantech-startup-mantel-raises-30-million-to-scale-industrial-carbon-capture-solution" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 253,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'TPG, 데이터센터 시장 겨냥해 산업 배출저감 기업 Miratech 인수',
      author: '관리자',
      date: '2024.09.05',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>TPG의 임팩트 투자 플랫폼 TPG Rise Climate가 산업 배출 저감 기술 기업 Miratech을 인수한다고 발표했습니다. AI 데이터센터의 전력 수요 급증에 따른 백업·예비 발전기 배출 저감 솔루션 수요를 겨냥한 행보입니다.</p><h3>주요 포인트</h3><ul><li>발전기 배출저감 기술의 데이터센터 시장 확장</li><li>NOx·SOx 등 대기오염물질 저감 솔루션</li><li>임팩트 PE의 기후기술 인수 사례</li></ul><p>원문: <a href="https://www.esgtoday.com/tpg-acquires-industrial-emissions-reduction-tech-company-miratech-to-address-growing-data-center-opportunity/?utm_source=rss&utm_medium=rss&utm_campaign=tpg-acquires-industrial-emissions-reduction-tech-company-miratech-to-address-growing-data-center-opportunity" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 254,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 2030 목표 달성 위한 운영·가치사슬 탈탄소',
      author: '관리자',
      date: '2024.09.05',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GreenBiz가 2030 탈탄소 목표를 향한 진척 부진을 진단하는 웨비나를 개최했습니다. 공개 목표를 세운 기업의 1/5 만이 목표를 달성·초과한다는 ENGIE 보고서를 토대로 가속화 전략을 다뤘습니다.</p><h3>주요 포인트</h3><ul><li>2030 목표 진척 현황 진단</li><li>운영·가치사슬 통합 감축 전략</li><li>실행 가속을 위한 우선순위 도출</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/how-stay-track-2030-decarbonize-your-operations-and-value-chain" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 255,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: CSRD·IFRS·SEC 대응 기후 전환계획 마스터링',
      author: '관리자',
      date: '2024.08.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GreenBiz가 CSRD, IFRS S2, SEC 기후공시 등 다양한 글로벌 규제에 모두 대응하는 기후 전환 계획 작성 노하우를 공유하는 웨비나를 진행했습니다. 다중 규제 환경에서의 효율적 보고가 주제입니다.</p><h3>주요 포인트</h3><ul><li>다중 규제 호환 전환계획 작성법</li><li>핵심 데이터 매핑·자동화 전략</li><li>실무자 대상 사례 중심 콘텐츠</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/mastering-climate-transition-plans-csrd-ifrs-sec-compliance" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 256,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 신규 탄소시장 규정과 수익 극대화',
      author: '관리자',
      date: '2024.08.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GreenBiz가 2024년 잇따라 발표된 신규 탄소시장 가이드라인을 분석하고 기업·투자자 관점의 수익 극대화 방안을 다룬 웨비나를 진행했습니다. ICVCM·VCMI 통합 흐름을 다뤘습니다.</p><h3>주요 포인트</h3><ul><li>ICVCM·VCMI 가이드라인 핵심 정리</li><li>신뢰성 있는 크레딧 선정 기준</li><li>구매·매도 양방향 전략 인사이트</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/navigate-new-carbon-market-rules-maximize-returns" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 257,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Sora Fuel, 저비용 SAF 생산 위해 600만 달러 조달',
      author: '관리자',
      date: '2024.08.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능 항공유(SAF) 스타트업 Sora Fuel이 600만 달러를 조달했다고 발표했습니다. 물·공기·재생전력만으로 SAF를 생산하는 e-fuel 기술 상용화에 집중합니다.</p><h3>주요 포인트</h3><ul><li>물·공기 기반 e-fuel SAF 기술 검증</li><li>저비용 합성연료 잠재력 부각</li><li>600만 달러로 파일럿 규모 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/sora-fuel-raises-6-million-to-produce-low-cost-saf-from-water-air-and-renewable-energy/?utm_source=rss&utm_medium=rss&utm_campaign=sora-fuel-raises-6-million-to-produce-low-cost-saf-from-water-air-and-renewable-energy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 258,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Quinbrook, 에너지전환 인프라 펀드 30억 달러 조성',
      author: '관리자',
      date: '2024.08.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>재생에너지 인프라 투자사 Quinbrook Infrastructure Partners가 에너지 전환 인프라 펀드에서 30억 달러를 조성했다고 발표했습니다. 미국·영국·호주 청정에너지·저장장치·데이터센터 인프라에 투자합니다.</p><h3>주요 포인트</h3><ul><li>30억 달러 규모 에너지 전환 인프라 펀드 클로징</li><li>3개 핵심 시장 분산 투자 전략</li><li>그리드·저장·데이터센터 통합 접근</li></ul><p>원문: <a href="https://www.esgtoday.com/quinbrook-raises-3-billion-for-energy-transition-infrastructure-fund/?utm_source=rss&utm_medium=rss&utm_campaign=quinbrook-raises-3-billion-for-energy-transition-infrastructure-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 259,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Stanley Capital·골드만삭스, 수질 솔루션 SePRO에 투자',
      author: '관리자',
      date: '2024.08.05',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>수질 환경 복원 솔루션 기업 SePRO가 Stanley Capital과 골드만삭스 자산운용으로부터 다수 지분 투자를 받았다고 발표했습니다. 수질 관리 시장의 자본 유입을 보여주는 사례입니다.</p><h3>주요 포인트</h3><ul><li>수질·환경 복원 시장에 대형 자본 유입</li><li>북미 호수·저수지 관리 솔루션 확장</li><li>수자원 ESG 투자 카테고리 부상</li></ul><p>원문: <a href="https://www.esgtoday.com/stanley-capital-goldman-sachs-invest-in-water-quality-solutions-provider-sepro/?utm_source=rss&utm_medium=rss&utm_campaign=stanley-capital-goldman-sachs-invest-in-water-quality-solutions-provider-sepro" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 260,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'MUFG, 신규 지속가능 금융 프레임워크 발표',
      author: '관리자',
      date: '2024.08.05',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>일본 미쓰비시UFJ금융그룹(MUFG)이 새로운 지속가능 금융 프레임워크를 공개했습니다. 그린·소셜·지속가능성 채권의 적격 자산 기준과 보고 체계를 명시합니다.</p><h3>주요 포인트</h3><ul><li>일본 메가뱅크의 지속가능 금융 체계 강화</li><li>적격 자산·보고 기준 표준화</li><li>아시아 지속가능 채권 시장 확장 신호</li></ul><p>원문: <a href="https://www.esgtoday.com/mufg-releases-new-sustainable-finance-framework/?utm_source=rss&utm_medium=rss&utm_campaign=mufg-releases-new-sustainable-finance-framework" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 261,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 4명의 기후테크 창업가에게 배우는 교훈',
      author: '관리자',
      date: '2024.07.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GreenBiz가 기후테크 창업가 4인의 사업 경험을 공유하는 웨비나를 진행했습니다. Chris Wedding이 진행하며 자금조달·시장 진입·인재 확보 등 실전 인사이트를 다뤘습니다.</p><h3>주요 포인트</h3><ul><li>창업 단계별 핵심 의사결정 사례</li><li>기후테크 자본 조달 노하우</li><li>창업가 네트워킹 콘텐츠</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/lessons-learned-four-climate-tech-entrepreneurs" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 262,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '전문가들 "산림·제약 산업이 지속가능 전환 가장 잘 관리"',
      author: '관리자',
      date: '2024.07.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GlobeScan/ERM 설문에 따르면 산림 제품 및 생명과학 산업이 지속가능성 전환을 가장 효과적으로 관리하는 산업으로 평가됐습니다. 은행·전력·자동차 산업은 가장 큰 개선을 보였습니다.</p><h3>주요 포인트</h3><ul><li>산업별 지속가능 전환 관리 평가</li><li>가장 빠르게 개선된 산업: 은행·전력·자동차</li><li>지표·자본·이해관계자 압력의 영향</li></ul><p>원문: <a href="https://www.greenbiz.com/article/experts-view-forest-products-life-sciences-sectors-most-effectively-managing-sustainability" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 263,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Stripe, 2020년 100만 달러 → 2024년 10억 달러 탄소제거 운영',
      author: '관리자',
      date: '2024.07.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2020년 100만 달러로 시작한 Stripe의 탄소제거 프로그램이 4년 만에 10억 달러 규모로 성장했습니다. Frontier 등 구매자 연합을 통해 영구 탄소제거 시장 형성을 주도해온 결과입니다.</p><h3>주요 포인트</h3><ul><li>구매자 연합 모델의 시장 형성 효과</li><li>1억 → 10억 달러 규모 확장 추이</li><li>Stripe Climate 운영자 인터뷰 기반</li></ul><p>원문: <a href="https://www.greenbiz.com/article/stripe-pledged-1-million-carbon-removal-2020-now-it-manages-1-billion" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 264,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 새 ESG 컴플라이언스 시대 대응법',
      author: '관리자',
      date: '2024.07.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GreenBiz가 자율적 보고 시대의 종언과 다중 규제 시대의 도래를 다루는 웨비나를 진행했습니다. 신규 미국·유럽 규정에 직면한 실무자에게 항법지도를 제공하는 콘텐츠입니다.</p><h3>주요 포인트</h3><ul><li>자발적 → 의무적 보고 패러다임 전환</li><li>다중 규제 환경 항법 가이드</li><li>실무자 친화적 사례 콘텐츠</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/how-your-team-can-navigate-new-era-esg-compliance" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 265,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '차트 3개로 보는 탄소제거 시장 현황',
      author: '관리자',
      date: '2024.07.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>탄소제거 산업이 향후 6년 동안 파리협정 목표를 달성하기 위해 필요한 수준에 비해 크게 뒤처져 있다는 분석 기사입니다. 자본·기술·정책 격차가 모두 가시화되고 있습니다.</p><h3>주요 포인트</h3><ul><li>2030 목표 대비 산업 진척도 부진</li><li>자본·기술·정책 모두에서 격차 확인</li><li>시장 가속화를 위한 정책 신호 필요</li></ul><p>원문: <a href="https://www.greenbiz.com/article/state-carbon-removal-3-charts" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 266,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '이번 주 기후 정책 4대 이슈',
      author: '관리자',
      date: '2024.07.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>오하이오 대법원의 태양광 관련 판결 가능성과 캘리포니아 수소 허브 연방 자금 지원 등 미국 기후 정책의 핵심 이슈 4건을 정리한 분석입니다. 주별 입법·법원 판결의 영향이 부각되고 있습니다.</p><h3>주요 포인트</h3><ul><li>오하이오 태양광 판결, 미국 신재생 사업 영향</li><li>캘리포니아 수소 허브 연방 자금 확보</li><li>주별 정책의 산업 영향력 증대</li></ul><p>원문: <a href="https://www.greenbiz.com/article/week-climate-policy-4-stories-you-should-follow-2" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 267,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '뉴욕시, 다양성 기후테크 창업자 지원에서 선두',
      author: '관리자',
      date: '2024.07.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>뉴욕시가 소외계층 출신 기후테크 창업자에 대한 자본·네트워크 접근성을 개선하며 다양성 기후 창업 생태계의 리더로 부상하고 있습니다. 시 차원의 액셀러레이터·펀드 매칭 프로그램이 핵심입니다.</p><h3>주요 포인트</h3><ul><li>다양성 기후 창업가용 자본·네트워킹 지원</li><li>시·민간 협력 액셀러레이터 모델</li><li>지역 기후 생태계 형성의 모범 사례</li></ul><p>원문: <a href="https://www.greenbiz.com/article/nyc-leader-supporting-diverse-climate-tech-founders" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 268,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: Watershed 등 10억 달러 탄소 스타트업 소개',
      author: '관리자',
      date: '2024.07.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Airbnb·블랙록·핀터레스트·캔바 등이 사용하는 탄소회계 스타트업 Watershed의 성장 이야기를 다룬 GreenBiz 웨비나입니다. 기업 탄소 회계 SaaS의 시장 형성 사례로 평가됩니다.</p><h3>주요 포인트</h3><ul><li>탄소 회계 SaaS 시장 리더 사례</li><li>대형 고객 기반 확보 전략</li><li>10억 달러 가치 평가의 시사점</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/get-know-1-billion-carbon-startup-works-airbnb-blackrock-and-pinterest" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 269,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'CO2 AI, 생성형 AI 기반 제품 배출량 평가 솔루션 출시',
      author: '관리자',
      date: '2024.07.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능성 플랫폼 CO2 AI가 'Product Footprinting'이라는 생성형 AI 기반 제품 배출량 산정 솔루션을 출시했다고 발표했습니다. 복잡한 LCA 작업을 자동화하는 것이 목표입니다.</p><h3>주요 포인트</h3><ul><li>LCA 자동화로 산정 시간 단축</li><li>제품·SKU 단위 배출량 추정</li><li>Scope 3 감축 의사결정 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/co2-ai-launches-generative-ai-powered-product-emissions-assessment-solution/?utm_source=rss&utm_medium=rss&utm_campaign=co2-ai-launches-generative-ai-powered-product-emissions-assessment-solution" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 270,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Vodafone Business, 신규 CSRD 지속가능성 보고 솔루션 출시',
      author: '관리자',
      date: '2024.07.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>보다폰 비즈니스가 CSRD 대응을 지원하는 신규 'Sustainability Reporting Solution'을 출시했다고 발표했습니다. 통신·IT 인프라와 ESG 데이터를 결합한 종합 솔루션입니다.</p><h3>주요 포인트</h3><ul><li>통신사 발 ESG 솔루션 시장 진입</li><li>IoT 데이터 활용한 배출량 산정</li><li>CSRD 통합 보고 자동화 기능</li></ul><p>원문: <a href="https://www.esgtoday.com/vodafone-business-launches-new-csrd-sustainability-reporting-solution/?utm_source=rss&utm_medium=rss&utm_campaign=vodafone-business-launches-new-csrd-sustainability-reporting-solution" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 271,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG Today 주간 리뷰 175: ISSB, 기후 전환계획 표준화 추진',
      author: '관리자',
      date: '2024.06.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 주요 ESG 뉴스에서는 ISSB가 기후 전환계획·온실가스 보고의 표준화를 추진하기로 했고, 다양한 기업의 청정에너지 투자가 이어졌습니다.</p><h3>주요 포인트</h3><ul><li>ISSB 기후 전환계획 표준화 추진 결정</li><li>GHG 보고 일관성 강화 흐름</li><li>다양한 청정에너지 자본 동향</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-175/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-175" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 272,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Rondo Energy, 산업 탈탄소 사업에 8천만 달러 추가 확보',
      author: '관리자',
      date: '2024.06.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>제로카본 산업열 솔루션 기업 Rondo Energy가 7,500만 유로(약 8천만 달러)의 추가 자금을 확보했다고 발표했습니다. 열저장 배터리 기술로 산업 공정의 탈탄소를 가능케 합니다.</p><h3>주요 포인트</h3><ul><li>전기 → 고온 산업열 저장 솔루션</li><li>시멘트·비료·식음료 산업 탈탄소 적용</li><li>8천만 달러로 신규 프로젝트 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/cleantech-startup-rondo-energy-secures-80-million-funding-for-new-industrial-decarbonization-projects/?utm_source=rss&utm_medium=rss&utm_campaign=cleantech-startup-rondo-energy-secures-80-million-funding-for-new-industrial-decarbonization-projects" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 273,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ISO, 글로벌 넷제로 표준 개발 착수',
      author: '관리자',
      date: '2024.06.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>국제표준화기구(ISO)가 'International Net Zero Standard' 개발에 본격 착수한다고 발표했습니다. 기업의 넷제로 주장에 일관된 글로벌 기준을 제시하는 것이 목표입니다.</p><h3>주요 포인트</h3><ul><li>SBTi 외 글로벌 넷제로 검증 표준 등장 예고</li><li>그린워싱 방지를 위한 검증 체계 정합성</li><li>기업 넷제로 주장의 신뢰성 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/iso-to-launch-international-net-zero-standard/?utm_source=rss&utm_medium=rss&utm_campaign=iso-to-launch-international-net-zero-standard" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 274,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '기후 리스크 평가 플랫폼 Climate X, 1,800만 달러 조달',
      author: '관리자',
      date: '2024.06.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기후 리스크 인텔리전스 기업 Climate X가 1,800만 달러를 조달했다고 발표했습니다. 자산 단위 물리적 기후 리스크 평가 솔루션의 글로벌 확장에 사용됩니다.</p><h3>주요 포인트</h3><ul><li>자산 단위 물리적 기후 리스크 SaaS 성장</li><li>금융·부동산 산업 수요 견조</li><li>1,800만 달러로 글로벌 확장 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/climate-risk-assessment-platform-climate-x-raises-18-million/?utm_source=rss&utm_medium=rss&utm_campaign=climate-risk-assessment-platform-climate-x-raises-18-million" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 275,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아마존·구글·MS·뉴코, Duke Energy와 청정에너지 리스크 분담 모델',
      author: '관리자',
      date: '2024.05.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>아마존·구글·마이크로소프트·철강기업 뉴코가 듀크에너지와 함께 청정에너지 투자에 새로운 리스크 분담 모델을 도입했다고 발표했습니다. 대규모 산업 고객이 신규 자산 건설을 견인하는 모델입니다.</p><h3>주요 포인트</h3><ul><li>대형 산업 고객의 청정전력 직접 견인</li><li>유틸리티-기업 협력 신규 PPA 구조</li><li>그리드 신규 자산 건설 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/amazon-google-microsoft-nucor-pioneer-new-clean-energy-investment-risk-sharing-models-with-duke-energy/?utm_source=rss&utm_medium=rss&utm_campaign=amazon-google-microsoft-nucor-pioneer-new-clean-energy-investment-risk-sharing-models-with-duke-energy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 276,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Claros Tech, PFAS \'영구화학물\' 분해 솔루션 위해 2,200만 달러 조달',
      author: '관리자',
      date: '2024.05.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능 소재 스타트업 Claros Technologies가 PFAS '영구 화학물질' 분해 솔루션 상용화를 위해 2,200만 달러를 조달했습니다. PFAS 규제 강화에 따른 시장 수요 급증이 배경입니다.</p><h3>주요 포인트</h3><ul><li>PFAS 분해 기술의 상용화 진전</li><li>美·EU PFAS 규제 강화 대응</li><li>2,200만 달러 자본으로 시설 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/green-materials-startup-claros-technologies-raises-22-million-for-pfas-forever-chemical-destruction-solution/?utm_source=rss&utm_medium=rss&utm_campaign=green-materials-startup-claros-technologies-raises-22-million-for-pfas-forever-chemical-destruction-solution" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 277,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '임팩트 투자사 Lightrock, 신규 글로벌 스몰캡 전략 출범',
      author: '관리자',
      date: '2024.05.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능성 중심 사모펀드 Lightrock이 첫 공모형 주식 펀드인 글로벌 스몰캡 전략을 출범한다고 발표했습니다. 임팩트 PE의 공모시장 진출 사례로 주목됩니다.</p><h3>주요 포인트</h3><ul><li>임팩트 PE의 공모형 펀드 출시</li><li>지속가능 스몰캡 글로벌 분산 전략</li><li>임팩트 투자 자산군 확대 흐름</li></ul><p>원문: <a href="https://www.esgtoday.com/impact-investor-lightrock-launches-new-global-small-cap-strategy/?utm_source=rss&utm_medium=rss&utm_campaign=impact-investor-lightrock-launches-new-global-small-cap-strategy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 278,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Candriam, 신규 지속가능 신흥국 주식 펀드 출시',
      author: '관리자',
      date: '2024.05.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능성 중심 자산운용사 Candriam이 'Sustainable Equity Emerging Markets' 펀드를 새로 출시했다고 발표했습니다. 신흥국 ESG 통합 투자에 대한 기관 수요 확대에 맞춰 라인업을 보강한 것입니다.</p><h3>주요 포인트</h3><ul><li>신흥국 ESG 통합 액티브 펀드 출시</li><li>SFDR 8조 분류 등 EU 규제 부합</li><li>신흥국 시장 ESG 투자 옵션 확대</li></ul><p>원문: <a href="https://www.esgtoday.com/candriam-launches-new-sustainable-equity-emerging-markets-fund/?utm_source=rss&utm_medium=rss&utm_campaign=candriam-launches-new-sustainable-equity-emerging-markets-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 279,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Pernod Ricard, ecoSPIRITS와 글로벌 지속가능 패키징 협약',
      author: '관리자',
      date: '2024.05.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>주류 기업 Pernod Ricard와 순환경제 솔루션 ecoSPIRITS가 글로벌 지속가능 패키징 협약을 체결했습니다. 일회용 유리병을 재사용 가능한 시스템으로 전환해 패키징 폐기물을 대폭 줄이는 것이 목표입니다.</p><h3>주요 포인트</h3><ul><li>주류 산업 일회용 패키징 → 재사용 시스템 전환</li><li>호텔·바 채널 중심 글로벌 확장</li><li>Pernod Ricard 환경 목표 이행 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/pernod-ricard-signs-global-sustainable-packaging-agreement-with-circular-economy-startup-ecospirits/?utm_source=rss&utm_medium=rss&utm_campaign=pernod-ricard-signs-global-sustainable-packaging-agreement-with-circular-economy-startup-ecospirits" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 280,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Normative, 탄소감축 행동 매핑·공급사 데이터 통합 도구 출시',
      author: '관리자',
      date: '2024.05.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>탄소회계 SaaS 기업 Normative가 탄소 감축 액션을 시뮬레이션하고 공급사 배출 데이터를 통합하는 신규 기능을 발표했습니다. 데이터 기반 감축 의사결정을 지원합니다.</p><h3>주요 포인트</h3><ul><li>감축 액션 시나리오 시뮬레이션 기능</li><li>공급사 데이터 자동 통합·검증</li><li>Scope 3 감축 실행 지원 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/normative-launches-new-tools-to-map-carbon-reduction-actions-integrate-supplier-emissions-data/?utm_source=rss&utm_medium=rss&utm_campaign=normative-launches-new-tools-to-map-carbon-reduction-actions-integrate-supplier-emissions-data" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 281,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'BCG, Twelve로부터 CO₂ 기반 SAF 구매 계약 체결',
      author: '관리자',
      date: '2024.05.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>보스턴컨설팅그룹(BCG)이 CO₂ 기반 e-SAF를 생산하는 Twelve와 SAF 인증서(SAFc) 구매 계약을 체결했습니다. 컨설팅 업계 출장 항공 배출의 Scope 3 감축에 활용됩니다.</p><h3>주요 포인트</h3><ul><li>컨설팅 업계 항공 출장 배출 감축 사례</li><li>e-fuel 기반 SAF 인증서 시장 성장</li><li>BCG 자체 넷제로 이행 가속</li></ul><p>원문: <a href="https://www.esgtoday.com/bcg-signs-purchase-deal-with-twelve-for-sustainable-aviation-fuel-made-from-co2/?utm_source=rss&utm_medium=rss&utm_campaign=bcg-signs-purchase-deal-with-twelve-for-sustainable-aviation-fuel-made-from-co2" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 282,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ERM·Workiva, 지속가능성 보고 솔루션·서비스 협력',
      author: '관리자',
      date: '2024.05.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능성 컨설팅 ERM과 비즈니스 데이터·보고 솔루션 Workiva가 통합 지속가능성 보고 서비스를 공동 제공하는 파트너십을 체결했습니다. 자문과 플랫폼을 결합한 종합 솔루션입니다.</p><h3>주요 포인트</h3><ul><li>컨설팅·플랫폼 결합형 보고 솔루션</li><li>CSRD·ISSB 호환 자료 작성 지원</li><li>대기업 ESG 보고 일원화 트렌드</li></ul><p>원문: <a href="https://www.esgtoday.com/erm-workiva-partner-to-provide-sustainability-reporting-solutions-and-services/?utm_source=rss&utm_medium=rss&utm_campaign=erm-workiva-partner-to-provide-sustainability-reporting-solutions-and-services" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 283,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Pernod Ricard, 과학기반 배출 감축 목표 채택',
      author: '관리자',
      date: '2024.05.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>주류 기업 Pernod Ricard가 과학기반 단·장기 배출 감축 목표를 새로 발표하고 SBTi 검증을 추진합니다. 농업 원료에 의존하는 산업의 Scope 3 감축이 핵심 과제입니다.</p><h3>주요 포인트</h3><ul><li>SBTi 검증 추진하는 신규 단·장기 목표</li><li>농업 공급망의 Scope 3 감축 강화</li><li>주류 산업의 SBTi 채택 확산</li></ul><p>원문: <a href="https://www.esgtoday.com/pernod-ricard-commits-to-science-based-emissions-reduction-goals/?utm_source=rss&utm_medium=rss&utm_campaign=pernod-ricard-commits-to-science-based-emissions-reduction-goals" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 284,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Norrsken VC, 임팩트 솔루션 펀드로 3.45억 달러 조성',
      author: '관리자',
      date: '2024.05.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>스웨덴 기반 임팩트 벤처 투자사 Norrsken VC가 3억 2천만 유로(약 3억 4,500만 달러) 규모의 임팩트 솔루션 펀드를 조성했다고 발표했습니다. 유럽 임팩트 VC 자본 모집 흐름이 강세입니다.</p><h3>주요 포인트</h3><ul><li>유럽 임팩트 VC 시장 자본 유입 지속</li><li>기후·헬스·교육 솔루션에 분산 투자</li><li>3.45억 달러 펀드로 시리즈 A·B 집중</li></ul><p>원문: <a href="https://www.esgtoday.com/norrsken-vc-raises-345-million-for-impact-solutions-venture-fund/?utm_source=rss&utm_medium=rss&utm_campaign=norrsken-vc-raises-345-million-for-impact-solutions-venture-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 285,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트, Scope 3 배출 30% 증가 대응 이니셔티브 출범',
      author: '관리자',
      date: '2024.05.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>마이크로소프트가 2020년 대비 Scope 3 배출이 30% 증가한 데 대응하기 위한 이니셔티브를 출범했습니다. AI·클라우드 데이터센터 확장이 배출 증가의 주된 요인으로 지목되고 있습니다.</p><h3>주요 포인트</h3><ul><li>AI 인프라 확장이 배출 증가의 핵심 동인</li><li>공급망 협력사 탈탄소 프로그램 강화</li><li>2030 카본 네거티브 목표 이행 압박</li></ul><p>원문: <a href="https://www.greenbiz.com/article/microsoft-launches-initiative-counter-30-rise-scope-3-emissions-2020" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 286,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '기후 정책 전망: 美 첫 고속철도 마침내 첫 삽',
      author: '관리자',
      date: '2024.05.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 핵심 기후 정책 동향에서는 미국 첫 진정한 고속철도 사업이 캘리포니아·네바다 구간에서 본격 착공한 것이 부각됐습니다. 교통 부문 탈탄소의 상징적 진전입니다.</p><h3>주요 포인트</h3><ul><li>美 고속철 첫 본격 착공</li><li>교통 부문 탈탄소 인프라 진전</li><li>주별 청정에너지 정책 동향 정리</li></ul><p>원문: <a href="https://www.greenbiz.com/article/climate-policy-outlook-high-speed-rail-finally-breaks-ground-us" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 287,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Lowe\'s, 협력사 교육으로 Scope 3 배출 감축',
      author: '관리자',
      date: '2024.05.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미국 홈인프라 기업 Lowe's가 협력사 교육 프로그램을 통해 배출 보고에 참여하는 협력사 수를 두 배로 늘렸다고 발표했습니다. 공급망 ESG 인사이트 확보 사례로 평가됩니다.</p><h3>주요 포인트</h3><ul><li>협력사 교육으로 ESG 데이터 가시성 확보</li><li>Scope 3 산정 정확도 향상</li><li>대형 유통사의 공급망 인게이지먼트 모범</li></ul><p>원문: <a href="https://www.greenbiz.com/article/how-lowes-using-supplier-education-tackle-scope-3-emissions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 288,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'SBTi 기업 넷제로 표준 업데이트 일정 공개',
      author: '관리자',
      date: '2024.05.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>표준 설정 기관 SBTi가 'Corporate Net Zero Standard' 업데이트 일정을 공개했습니다. 이해관계자 피드백, 기후과학 업데이트, Scope 3 목표 설정 관련 도전 과제를 반영할 예정입니다.</p><h3>주요 포인트</h3><ul><li>SBTi 표준 업데이트 진행 일정 공식화</li><li>Scope 3 목표 설정 방법론 재검토</li><li>최신 IPCC 과학 반영한 강화 흐름</li></ul><p>원문: <a href="https://www.greenbiz.com/article/heres-timeline-sbtis-corporate-net-zero-update" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 289,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '이번 주 기후 정책: USDA 인증·EPA 발전소 규정 소송',
      author: '관리자',
      date: '2024.05.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 미국 기후 정책 동향에서는 USDA가 친환경성이 의심되는 소고기 제품에 기후 인증을 부여한 것이 논란이 됐고, 25개 주가 EPA의 발전소 배출 규정에 소송을 제기했습니다.</p><h3>주요 포인트</h3><ul><li>USDA 기후 인증 라벨링 신뢰성 논란</li><li>25개 주의 EPA 발전소 규정 소송</li><li>美 기후 정책의 정치적·법적 도전 가시화</li></ul><p>원문: <a href="https://www.greenbiz.com/article/week-climate-policy-4-updates-you-need-know-3" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 291,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '기업, 항공 배출 대응 위해 SAF 인증서 구매 확대',
      author: '관리자',
      date: '2024.05.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>점점 더 많은 기업이 출장·물류 항공 배출의 Scope 3 감축을 위해 SAF 인증서(SAFc)를 구매하고 있습니다. 다만 비판자들은 새로운 형태의 그린워싱 가능성을 우려합니다.</p><h3>주요 포인트</h3><ul><li>SAFc 시장의 빠른 성장</li><li>책임 회계·검증 기준 정립의 필요성</li><li>그린워싱 우려와 시장 형성의 균형</li></ul><p>원문: <a href="https://www.greenbiz.com/article/corporations-buy-sustainable-fuel-certificates-address-air-travel-emissions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 292,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 영구 탄소제거 전략',
      author: '관리자',
      date: '2024.05.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GreenBiz가 글로벌 기후 목표 달성에 점점 더 중요해지는 영구 탄소제거 솔루션 전략을 다루는 웨비나를 진행했습니다. 자발적 탄소시장의 고품질·내구성 공급 부족 문제를 짚었습니다.</p><h3>주요 포인트</h3><ul><li>VCM 고품질 공급 부족 문제 진단</li><li>영구 탄소제거 포트폴리오 전략</li><li>구매자 동맹·표준화의 시장 영향</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/future-proof-carbon-removal-strategies-make-impact" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 293,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '보고서 "바이오매스·포집탄소·플라스틱 폐기물로 화학 산업 탈화석화 가능"',
      author: '관리자',
      date: '2024.05.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>화학 산업이 화석연료 원료에서 벗어나 저탄소·지속가능 대체 원료로 전환하는 방안을 제시한 정책 브리핑이 발표됐습니다. 바이오매스·포집 CO₂·플라스틱 폐기물이 핵심 대안입니다.</p><h3>주요 포인트</h3><ul><li>화학 산업 원료 전환 정책 권고</li><li>바이오·재활용 원료의 잠재력 정량화</li><li>EU 화학 산업 탈탄소 정책 연계</li></ul><p>원문: <a href="https://www.greenbiz.com/article/biomass-captured-carbon-and-plastic-waste-can-help-defossilize-chemicals-report-says" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 294,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 이케아의 지속가능성 책임자 인터뷰',
      author: '관리자',
      date: '2024.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지난 한 해 이케아 매장을 방문한 7억 명의 소비자에게 지속가능 소비 습관을 유도하는 전략을 책임지는 임원과의 대담을 다룬 GreenBiz 웨비나입니다. 식물 기반 식품, 친환경 제품 등이 사례로 등장합니다.</p><h3>주요 포인트</h3><ul><li>대형 유통사의 소비 습관 변화 유도 전략</li><li>식물기반 식품·친환경 제품 라인업</li><li>지속가능 소비 인사이트 공유</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/meet-woman-making-ikea-more-sustainable" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 295,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 차세대 산림 복원 사업 가속화',
      author: '관리자',
      date: '2024.04.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>전 세계 9억 헥타르의 산림 복원 가능 부지에서 21세기 중반까지 750기가톤의 CO₂를 제거할 잠재력을 다룬 GreenBiz 웨비나입니다. 일자리 창출과 서식지 복원 효과도 기대됩니다.</p><h3>주요 포인트</h3><ul><li>9억 헥타르 산림 복원 잠재력 정량화</li><li>고품질 NCS 사업 설계 가이드</li><li>지역 사회·생태계 동반 효과</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/catalyzing-next-generation-reforestation-projects" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 296,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 벤처 자본 외 기후 솔루션 자금 조달',
      author: '관리자',
      date: '2024.04.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>경제 불확실성과 자금조달 환경 변화 속에서 벤처 캐피털 외 기후 스타트업의 다양한 자금 조달 옵션을 다룬 GreenBiz 웨비나입니다. 부채·정부 지원·전략 투자 등 폭넓은 대안이 소개됩니다.</p><h3>주요 포인트</h3><ul><li>VC 외 다각화된 자금 조달 채널</li><li>정부 보조금·세제 인센티브 활용법</li><li>전략적 투자자·기업 파트너십 사례</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/capitalizing-climate-solutions-innovative-financing-beyond-venture-funding" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 297,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '이번 주 기후 정책: EPA, \'그린뱅크\' 200억 달러 수혜자 발표',
      author: '관리자',
      date: '2024.04.05',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EPA가 그린뱅크 펀드(Greenhouse Gas Reduction Fund) 200억 달러의 수혜 기관을 발표했고, 버지니아주가 탈탄소 지원을 위해 연방 자금 신청서를 제출하는 등 미국 기후 정책의 핵심 진전이 있었습니다.</p><h3>주요 포인트</h3><ul><li>그린뱅크 200억 달러 첫 수혜자 확정</li><li>주별 탈탄소 자금 활용 본격화</li><li>美 기후 정책 시장 형성 효과 가시화</li></ul><p>원문: <a href="https://www.greenbiz.com/article/week-climate-policy-4-updates-you-need-know" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 298,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EPA, \'그린뱅크\' 200억 달러 첫 수혜자 발표',
      author: '관리자',
      date: '2024.04.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Climate United, Power Forward, Coalition for Green Capital 등 3개 단체가 EPA의 Greenhouse Gas Reduction Fund로부터 총 200억 달러 자금을 받게 됐다고 발표됐습니다. 미국 청정에너지 금융 인프라가 한 단계 도약합니다.</p><h3>주요 포인트</h3><ul><li>3개 컨소시엄에 200억 달러 분배</li><li>저소득 지역 청정에너지 금융 강화</li><li>美 그린뱅크 모델의 본격 가동</li></ul><p>원문: <a href="https://www.greenbiz.com/article/epa-announces-awards-20-billion-green-bank" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 300,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'M&A에서 ESG 비중 상승…US Steel 사례 주목',
      author: '관리자',
      date: '2024.04.03',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>일본제철의 141억 달러 규모 US Steel 인수 제안이 '탈탄소 가속 가능성'을 전략적 이점으로 명시하는 등 ESG가 M&A 평가에서 점점 중요한 요소로 부상하고 있습니다.</p><h3>주요 포인트</h3><ul><li>M&A 거래에서 탈탄소 시너지 명시화</li><li>ESG가 인수 결정의 정당화 근거</li><li>철강 등 중공업 거래의 새로운 평가 축</li></ul><p>원문: <a href="https://www.greenbiz.com/article/esg-rising-ma-factor-just-ask-us-steel" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 301,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '순환 공급망: 임팩트 극대화를 위한 9개 핵심 영역',
      author: '관리자',
      date: '2024.04.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>순환 공급망을 구축하면 자원 소비와 매출 성장의 연결고리를 끊을 수 있다는 분석 기사입니다. 핵심 9개 집중 영역을 통해 실행 가능한 로드맵을 제시합니다.</p><h3>주요 포인트</h3><ul><li>자원 소비-매출 디커플링 가능성</li><li>9개 핵심 실행 영역 정리</li><li>실행 가능한 순환경제 로드맵</li></ul><p>원문: <a href="https://www.greenbiz.com/article/circular-supply-chains-9-focus-areas-maximize-impact" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 302,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '지속가능 분야 의식적 리더가 되는 4가지 방법',
      author: '관리자',
      date: '2024.04.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>의식적 리더십(Conscious Leadership)의 핵심은 인간과 지구 모두를 위한 행동에 있다는 통찰을 다룬 GreenBiz 칼럼입니다. 4가지 실천 방법을 제시합니다.</p><h3>주요 포인트</h3><ul><li>의식적 리더십의 4가지 실천 방안</li><li>장기 지향적 의사결정 프레임</li><li>이해관계자 중심 리더십 모델</li></ul><p>원문: <a href="https://www.greenbiz.com/article/4-ways-become-conscious-leader-sustainability" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 303,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '이번 주 기후 정책 4대 이슈',
      author: '관리자',
      date: '2024.04.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>청정에너지 제조 자금 지원, 기후 변화의 국가 안보 영향에 대한 웨비나 등 이번 주 주목해야 할 4가지 핵심 기후 정책 동향을 정리한 분석 기사입니다.</p><h3>주요 포인트</h3><ul><li>청정에너지 제조 자금 흐름</li><li>기후-국가안보 연계 논의 확산</li><li>주별 청정에너지 정책 진전</li></ul><p>원문: <a href="https://www.greenbiz.com/article/week-climate-policy-4-stories-you-should-follow-0" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 304,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG Today 주간 리뷰 163: 美 산업 탈탄소에 60억 달러 투자',
      author: '관리자',
      date: '2024.03.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 ESG 주요 뉴스에서는 바이든 행정부가 산업 탈탄소 사업에 60억 달러를 투자한다는 발표가 있었고, 마이크로소프트 등 주요 기업의 청정에너지 투자가 이어졌습니다.</p><h3>주요 포인트</h3><ul><li>미국 산업 탈탄소 60억 달러 자금 지원</li><li>주요 빅테크의 PPA·전환 투자</li><li>다양한 ESG 정책·시장 동향</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-163/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-163" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 305,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '히트펌프 스타트업 Evari, 750만 달러 시드 조달',
      author: '관리자',
      date: '2024.03.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>히트펌프 기술 스타트업 Evari가 시드 라운드에서 750만 달러를 조달했다고 발표했습니다. 가정·상업용 히트펌프 보급 가속을 위한 기술 솔루션을 개발 중입니다.</p><h3>주요 포인트</h3><ul><li>히트펌프 보급 확대 위한 기술 혁신</li><li>건물 부문 탈탄소 핵심 솔루션 자본 유입</li><li>750만 달러로 초기 사업 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/heat-pump-tech-startup-evari-raises-7-5-million/?utm_source=rss&utm_medium=rss&utm_campaign=heat-pump-tech-startup-evari-raises-7-5-million" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 306,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '유틸리티 ESS 기업 Lightshift, Greenbacker로부터 1억 달러 유치',
      author: '관리자',
      date: '2024.03.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유틸리티급 배터리 저장 기업 Lightshift Energy가 청정에너지 투자사 Greenbacker로부터 1억 달러 자금을 확보했다고 발표했습니다. 미국 유틸리티 ESS 자산 개발에 사용됩니다.</p><h3>주요 포인트</h3><ul><li>美 유틸리티 ESS 자산 개발 가속</li><li>1억 달러 자본으로 사업 파이프라인 확장</li><li>그리드 안정·청정전력 통합 효과</li></ul><p>원문: <a href="https://www.esgtoday.com/utility-scale-energy-storage-provider-lightshift-raises-100-million-from-climate-focused-investor-greenbacker/?utm_source=rss&utm_medium=rss&utm_campaign=utility-scale-energy-storage-provider-lightshift-raises-100-million-from-climate-focused-investor-greenbacker" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 307,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '미시시피주, BlackRock에 ESG 투자 관련 거액 벌금 추진',
      author: '관리자',
      date: '2024.03.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미시시피주 국무부 장관이 BlackRock에 대해 ESG 투자 관행을 둘러싸고 영업중단·과징금 절차를 시작했다고 발표했습니다. 미국 일부 주의 반-ESG 정치 흐름의 직접적 영향입니다.</p><h3>주요 포인트</h3><ul><li>주별 반-ESG 행정조치 본격화</li><li>BlackRock 등 대형 운용사 압박 가시화</li><li>美 정치 환경의 ESG 시장 영향</li></ul><p>원문: <a href="https://www.esgtoday.com/mississippi-seeks-multimillion-dollar-penalty-against-blackrock-over-esg-investing/?utm_source=rss&utm_medium=rss&utm_campaign=mississippi-seeks-multimillion-dollar-penalty-against-blackrock-over-esg-investing" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 308,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트, 텍사스 신규 태양광에서 400MW PPA 체결',
      author: '관리자',
      date: '2024.03.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>청정에너지 개발사 Leeward Renewable Energy가 마이크로소프트와 텍사스 신규 태양광 사업 2건에 대해 총 400MW 규모의 PPA 2건을 체결했다고 발표했습니다. 데이터센터 전력 매칭이 목적입니다.</p><h3>주요 포인트</h3><ul><li>400MW 규모 신규 태양광 PPA 확보</li><li>데이터센터 24/7 청정전력 매칭</li><li>텍사스 ERCOT 그리드 청정 전원 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/microsoft-signs-400-mw-renewable-energy-purchase-deals-from-new-texas-solar-projects/?utm_source=rss&utm_medium=rss&utm_campaign=microsoft-signs-400-mw-renewable-energy-purchase-deals-from-new-texas-solar-projects" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 309,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'WASE, 폐기물 에너지화 기술 위해 1천만 달러 조달',
      author: '관리자',
      date: '2024.03.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>청정연료 기술 스타트업 WASE가 850만 파운드(약 1,070만 달러)를 조달했다고 발표했습니다. 폐기물에서 바이오메탄을 생산하는 혐기성 분해 기술 상용화를 추진합니다.</p><h3>주요 포인트</h3><ul><li>혐기성 분해 기반 바이오메탄 생산 기술</li><li>식음료·물처리 산업의 자원 회수 솔루션</li><li>1천만 달러 자본으로 사업 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/clean-fuel-startup-wase-raises-over-10-million-to-scale-waste-to-energy-solution/?utm_source=rss&utm_medium=rss&utm_campaign=clean-fuel-startup-wase-raises-over-10-million-to-scale-waste-to-energy-solution" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 310,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'watttron, 지속가능 패키징 솔루션 위해 1,300만 달러 조달',
      author: '관리자',
      date: '2024.03.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지능형 가열 시스템 스타트업 watttron이 1,200만 유로(약 1,300만 달러)를 조달했다고 발표했습니다. 플라스틱 사용량을 30~40% 감축할 수 있는 정밀 가열 패키징 기술이 핵심입니다.</p><h3>주요 포인트</h3><ul><li>패키징 플라스틱 사용량 최대 40% 절감</li><li>정밀 가열 기술의 산업 적용 확대</li><li>유럽 패키징 규제 강화에 부합</li></ul><p>원문: <a href="https://www.esgtoday.com/watttron-raises-13-million-for-sustainable-packaging-solutions/?utm_source=rss&utm_medium=rss&utm_campaign=watttron-raises-13-million-for-sustainable-packaging-solutions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 311,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: Scope 3 트렌드·도전·공시 인사이트',
      author: '관리자',
      date: '2024.03.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>복잡한 Scope 3 배출 관리에 어려움을 겪는 실무자를 위한 GreenBiz 웨비나로, 트렌드·핵심 도전 과제·공시 동향을 종합적으로 다룹니다. 가치사슬 전반의 간접 배출 관리가 주제입니다.</p><h3>주요 포인트</h3><ul><li>Scope 3 관리 핵심 도전 과제 정리</li><li>공시 흐름과 데이터 품질 개선 방안</li><li>실무자 사례 중심 인사이트</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/trends-challenges-disclosures-scope-3-readiness-insights" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 312,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 2024 자발적 탄소시장 기회와 책임',
      author: '관리자',
      date: '2024.03.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2024년 자발적 탄소시장(VCM)의 변화와 기업의 대응 방향을 다룬 GreenBiz 웨비나입니다. CORSIA 시한, 신규 탄소 국경세, 6.2조 모멘텀, VCMI Scope 3 클레임, ISO 표준 등 주요 변화가 포함됩니다.</p><h3>주요 포인트</h3><ul><li>2024 VCM 핵심 변화 종합 정리</li><li>CORSIA·CBAM 등 정책 시한 점검</li><li>VCMI·ISO 표준의 시장 영향</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/how-corporates-should-navigate-opportunities-and-liability-vcm-2024" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 313,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 생성형 AI의 ESG 활용 사례',
      author: '관리자',
      date: '2024.03.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>생성형 AI가 지속가능성·ESG 영역에 가져올 약속(더 나은 답변·시간 절약·매출 견인)을 실제 사례 기반으로 검증하는 GreenBiz 웨비나입니다.</p><h3>주요 포인트</h3><ul><li>생성형 AI의 ESG 실무 활용 사례 공유</li><li>보고서 작성·데이터 분석 자동화 현황</li><li>도입 시 고려사항·리스크 점검</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/concept-reality-real-life-sustainability-and-esg-case-studies-realizing-promise-generative" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 314,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'AT&T, Occidental 자회사 1PointFive와 탄소제거 계약 체결',
      author: '관리자',
      date: '2024.03.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Occidental(Oxy)의 직접공기포집(DAC) 자회사 1PointFive가 AT&T와 탄소제거 계약을 체결했다고 발표했습니다. 통신 산업의 영구 탄소제거 활용 사례로 주목됩니다.</p><h3>주요 포인트</h3><ul><li>통신 산업의 영구 탄소제거 수요 가시화</li><li>대규모 DAC 시설의 첫 상업 고객 사례</li><li>1PointFive의 상업 운영 본격화</li></ul><p>원문: <a href="https://www.esgtoday.com/att-signs-carbon-removal-agreement-with-1pointfive/?utm_source=rss&utm_medium=rss&utm_campaign=att-signs-carbon-removal-agreement-with-1pointfive" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 315,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Stonepeak, Ørsted 풍력 포트폴리오에 3억 달러 투자',
      author: '관리자',
      date: '2024.03.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대체투자운용사 Stonepeak이 글로벌 에너지 개발사 Ørsted로부터 3억 달러 규모의 풍력 포트폴리오 지분을 인수한다고 발표했습니다. 인프라 자본의 청정에너지 자산 편입 흐름이 지속됩니다.</p><h3>주요 포인트</h3><ul><li>인프라 펀드의 청정에너지 자산 인수 사례</li><li>Ørsted의 자본 회수 + 신규 사업 자금 확보</li><li>3억 달러 규모 거래로 시장 신뢰도 입증</li></ul><p>원문: <a href="https://www.esgtoday.com/stonepeak-acquires-300-million-stake-in-wind-energy-portfolio-from-orsted/?utm_source=rss&utm_medium=rss&utm_campaign=stonepeak-acquires-300-million-stake-in-wind-energy-portfolio-from-orsted" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 316,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Low Carbon, 신임 CEO에 Annabel Wiscarson 임명',
      author: '관리자',
      date: '2024.03.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 재생에너지 기업 Low Carbon이 Annabel Wiscarson을 신임 CEO로 임명했다고 발표했습니다. 유럽 재생에너지 개발 사업 확장을 위한 리더십 교체입니다.</p><h3>주요 포인트</h3><ul><li>Low Carbon의 글로벌 사업 확장 가속</li><li>풍부한 재생에너지·인프라 경력 보유</li><li>유럽 발 재생 사업 모멘텀 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/low-carbon-investment-management-appoints-annabel-wiscarson-as-new-ceo/?utm_source=rss&utm_medium=rss&utm_campaign=low-carbon-investment-management-appoints-annabel-wiscarson-as-new-ceo" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 317,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'BlackRock, Excelsior로부터 38개 프로젝트 태양광·ESS 포트폴리오 인수',
      author: '관리자',
      date: '2024.03.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>재생에너지 인프라 투자사 Excelsior Energy Capital이 BlackRock에 38개 프로젝트로 구성된 태양광·저장장치 포트폴리오를 매각한다고 발표했습니다. 인프라 펀드의 청정에너지 자산 활성 거래 사례입니다.</p><h3>주요 포인트</h3><ul><li>다중 자산 청정에너지 포트폴리오 거래</li><li>BlackRock 인프라 펀드의 자산 확장</li><li>태양광·ESS 통합 자산의 가치 재평가</li></ul><p>원문: <a href="https://www.esgtoday.com/blackrock-acquires-38-project-solar-and-storage-portfolio-from-excelsior-energy-capital/?utm_source=rss&utm_medium=rss&utm_campaign=blackrock-acquires-38-project-solar-and-storage-portfolio-from-excelsior-energy-capital" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 318,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '이번 주 기후 정책 6대 업데이트',
      author: '관리자',
      date: '2024.03.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미국 하원이 원자력 진흥 법안을 통과시켰고, SEC가 기후공시 규정에서 Scope 3 보고 요건을 제외할 계획이라는 등 이번 주 주목할 6가지 기후 정책 동향이 정리됐습니다.</p><h3>주요 포인트</h3><ul><li>美 하원 원자력 법안 통과</li><li>SEC, Scope 3 보고 요건 제외 추진</li><li>주별·연방 차원 정책 흐름 종합</li></ul><p>원문: <a href="https://www.greenbiz.com/article/week-climate-policy-6-updates-you-need-know" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 319,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '기업 지속가능성 업스킬링 전략 수립을 위한 5단계',
      author: '관리자',
      date: '2024.02.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기업의 지속가능성 교육 전략 수립을 위한 5가지 실행 단계를 제시한 GreenBiz 칼럼입니다. 기업 우선순위, 예산, 자원에 맞춘 맞춤형 접근법이 핵심입니다.</p><h3>주요 포인트</h3><ul><li>기업 맞춤형 ESG 교육 전략 수립 5단계</li><li>역량 격차 진단·우선순위 도출 방법</li><li>실행 가능한 단계별 액션 플랜</li></ul><p>원문: <a href="https://www.greenbiz.com/article/5-steps-create-sustainability-upskilling-strategy-your-company" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 320,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '美 바이오경제 9,500억 달러…연방 정책의 견인 효과',
      author: '관리자',
      date: '2024.02.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미국 바이오경제가 9,500억 달러 규모로 성장했으며 연방 정책이 핵심 동력 역할을 했다는 분석입니다. 바이오 기반 산업의 탈탄소 전환이 다음 과제로 떠오릅니다.</p><h3>주요 포인트</h3><ul><li>美 바이오경제 9,500억 달러 규모 도달</li><li>핵심 연방 정책의 산업 견인 효과</li><li>바이오 산업의 탈탄소화 다음 단계</li></ul><p>원문: <a href="https://www.greenbiz.com/article/us-bioeconomy-worth-950-billion-and-growing-thanks-these-federal-policies" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 321,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'BlackRock·JPM·State Street, 기후 행동 의지 어떻게 보일까',
      author: '관리자',
      date: '2024.02.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미국 대형 자산운용사들이 청정에너지 전환에 대한 기업의 행동을 견인할 책임이 있다는 칼럼입니다. 의결권 행사를 통한 기후 의지 표현이 한 가지 방법으로 제시됩니다.</p><h3>주요 포인트</h3><ul><li>대형 운용사의 의결권 영향력 활용 가능성</li><li>기후 친화적 프록시 보팅 확대 필요</li><li>주주 행동주의의 시장 영향력</li></ul><p>원문: <a href="https://www.greenbiz.com/article/how-blackrock-jpmorgan-and-state-street-can-show-theyre-committed-climate-action" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 322,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 다각화된 탄소제거 포트폴리오로 기후행동 가속',
      author: '관리자',
      date: '2024.02.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>CSO와 임원진이 예산 최적화·리스크 완화 속에서 넷제로 전략을 수립하는 데 다각화된 탄소제거 포트폴리오 활용 방안을 다룬 GreenBiz 웨비나입니다.</p><h3>주요 포인트</h3><ul><li>CSO 시각의 탄소제거 포트폴리오 설계</li><li>예산·리스크 균형 잡힌 접근법</li><li>다각화 전략의 구체적 사례</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/accelerating-climate-action-diversified-carbon-removal-portfolios" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 323,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '신임 CSO의 첫 90일에 해야 할 일',
      author: '관리자',
      date: '2024.02.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Apollo·James Hardie·Insulet 3개 기업의 CSO들이 신임 CSO에게 추천하는 첫 90일 액션 플랜을 공유한 GreenBiz 칼럼입니다. 피해야 할 함정도 함께 다룹니다.</p><h3>주요 포인트</h3><ul><li>실무 CSO들의 첫 90일 베스트 프랙티스</li><li>이해관계자 매핑·우선순위 도출</li><li>CSO 역할의 핵심 함정 회피 가이드</li></ul><p>원문: <a href="https://www.greenbiz.com/article/what-do-first-90-days-chief-sustainability-officer" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 324,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'PepsiCo·ADM, 농가와 협력해 농업 배출 감축',
      author: '관리자',
      date: '2024.02.26',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>PepsiCo와 ADM이 농가와 협력해 재생농업을 확산함으로써 농업 부문 배출을 줄이고 있다는 사례 분석입니다. 농가가 경제적 가치를 인식할 때 재생농업이 성공할 수 있다는 결론입니다.</p><h3>주요 포인트</h3><ul><li>대형 식품·곡물 기업의 재생농업 견인</li><li>농가 경제 인센티브의 중요성</li><li>식품 산업 Scope 3 감축 사례</li></ul><p>원문: <a href="https://www.greenbiz.com/article/how-pepsico-and-adm-work-farmers-cut-agricultural-emissions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 325,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '이번 주 기후 정책 5대 업데이트',
      author: '관리자',
      date: '2024.02.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>시카고가 ExxonMobil을 상대로 소송을 제기했고, 유럽 임원들은 새로운 산업 딜을 요구했으며, 상원은 수질 미세플라스틱 검증을 추진하는 등 이번 주 주요 기후 정책 5건이 정리됐습니다.</p><h3>주요 포인트</h3><ul><li>시카고시의 ExxonMobil 기후 책임 소송</li><li>유럽 산업 정책의 재정비 요구</li><li>美 상원 미세플라스틱 의제화</li></ul><p>원문: <a href="https://www.greenbiz.com/article/5-climate-policy-updates-you-need-know-week" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 326,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '승수 효과: 효과적 파트너십을 위한 5가지 팁',
      author: '관리자',
      date: '2024.02.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능성 임팩트를 확장하기 위해 조직 간 협력의 중요성을 강조한 GreenBiz 칼럼입니다. 공동 목표를 향한 파트너십 구축의 5가지 팁을 제시합니다.</p><h3>주요 포인트</h3><ul><li>조직 간 파트너십을 통한 임팩트 확장</li><li>효과적 협력의 5가지 핵심 요소</li><li>스케일업의 승수 효과 사례</li></ul><p>원문: <a href="https://www.greenbiz.com/article/multiplier-effect-5-tips-create-effective-partnerships" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 327,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '그린허싱 멈추려면 지속가능성을 전략적 성장 결정으로',
      author: '관리자',
      date: '2024.02.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>최근 늘어난 '그린허싱'(친환경 활동을 의도적으로 숨기는 행위)을 멈추려면 지속가능성을 전략적 성장 결정으로 자리매김해야 한다는 분석입니다. 목적의식의 역할도 강조됩니다.</p><h3>주요 포인트</h3><ul><li>그린허싱 현상의 원인과 해법 진단</li><li>지속가능성 = 성장 전략의 통합 필요성</li><li>목적 기반 커뮤니케이션의 가치</li></ul><p>원문: <a href="https://www.greenbiz.com/article/want-stop-greenhushing-make-sustainability-strategic-growth-decision" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 328,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Comcast, 10억 달러 그린본드 발행에서 얻은 교훈',
      author: '관리자',
      date: '2024.02.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2023년 글로벌 지속가능성 채권 시장이 9,400억 달러에 근접한 가운데, Comcast가 10억 달러 규모 그린본드를 발행하며 얻은 교훈을 정리한 GreenBiz 분석입니다. 2024년에도 시장 확장이 예상됩니다.</p><h3>주요 포인트</h3><ul><li>지속가능성 채권 시장 9,400억 달러 규모로 성장</li><li>Comcast 그린본드 발행 사례·교훈 공유</li><li>2024년 추가 성장 전망</li></ul><p>원문: <a href="https://www.greenbiz.com/article/what-comcast-learned-issuing-its-1-billion-green-bond" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 329,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EPA, 공급망에서 제외 추진하는 신규 \'영구 화학물질\' 9종 발표',
      author: '관리자',
      date: '2024.02.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>美 환경보호청(EPA)이 공급망에서 사용 중단을 추진하는 PFAS '영구 화학물질' 9종을 신규로 지정해 발표했습니다. 제조·화학 산업이 새로운 사업 환경에 대응하기 시작했습니다.</p><h3>주요 포인트</h3><ul><li>PFAS 규제 대상 9종 추가 지정</li><li>제조·화학 공급망 변화 가속화</li><li>대체 소재·기술 시장 성장 모멘텀</li></ul><p>원문: <a href="https://www.greenbiz.com/article/epa-named-9-new-forever-chemicals-it-wants-out-supply-chains" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 330,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '美 유틸리티·기업, 그리드 탈탄소 가속도에 고전',
      author: '관리자',
      date: '2024.02.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>전력 수요 폭증 속에서 미국 유틸리티와 기업이 그리드 탈탄소를 어떻게 가속할지 새로운 PPA·인증 메커니즘을 모색하고 있다는 분석입니다. 24/7 청정전력 매칭이 핵심 주제입니다.</p><h3>주요 포인트</h3><ul><li>전력 수요 급증 속 그리드 탈탄소 압박</li><li>24/7 청정전력 매칭 메커니즘 진화</li><li>유틸리티-기업 협력 모델 혁신</li></ul><p>원문: <a href="https://www.greenbiz.com/article/pace-growth-breaking-us-utilities-corporations-grapple-grid-decarbonization" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 331,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'HSBC·구글, 10억 달러 기후테크 금융 공동 배포',
      author: '관리자',
      date: '2024.02.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>HSBC와 구글이 손잡고 10억 달러 규모의 기후테크 금융 프로그램을 시작한다고 발표했습니다. 글로벌 기업의 탈탄소 솔루션 도입을 가속화하는 것이 목표입니다.</p><h3>주요 포인트</h3><ul><li>10억 달러 규모 기후테크 금융 협력</li><li>은행·빅테크의 결합 자본 동원</li><li>탈탄소 솔루션 보급 가속화</li></ul><p>원문: <a href="https://www.greenbiz.com/article/hsbc-google-team-deploy-1-billion-climate-tech-financing" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 332,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'SEC 기후 규정 중요할까…투자자는 여전히 공시 요구',
      author: '관리자',
      date: '2024.02.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>ESG 보고에 대한 정치적 공격에도 불구하고 투자자들은 일관된 비교 가능한 지속가능성 정보를 계속 요구하고 있습니다. SEC 기후 규정의 향배보다 시장 자체의 수요가 결정적이라는 분석입니다.</p><h3>주요 포인트</h3><ul><li>정치적 공세에도 투자자 ESG 공시 수요 견조</li><li>시장 동력의 SEC 의존도 약화</li><li>일관성·비교가능성에 대한 시장 압력</li></ul><p>원문: <a href="https://www.greenbiz.com/article/does-sec-climate-rule-really-matter-investors-will-still-demand-disclosure" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 333,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 2024 지속가능성 보고에서 빠진 핵심 영역',
      author: '관리자',
      date: '2024.02.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GHG 배출 보고가 지배해온 지속가능성 공시 환경이 변화하고 있다는 분석을 다룬 GreenBiz 웨비나입니다. 규제·투자자가 ESG 이슈의 통합적 성격을 인식하면서 새로운 보고 영역이 떠오릅니다.</p><h3>주요 포인트</h3><ul><li>GHG 외 보고 영역 확장 흐름</li><li>물·생물다양성·인권 등 통합 공시</li><li>2024 보고 우선순위 가이드</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/whats-missing-your-sustainability-reporting-focus-areas-2024" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 334,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Delta·Prologis·PepsiCo, 사내 지속가능성 동의 확보 노하우',
      author: '관리자',
      date: '2024.02.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대형 기업이 내부적으로 지속가능성 이니셔티브에 대한 동의를 확보하는 방법을 Delta·Prologis·PepsiCo 사례로 정리한 GreenBiz 칼럼입니다. 고객 가치 강조가 핵심 전략입니다.</p><h3>주요 포인트</h3><ul><li>내부 동의 확보의 가장 효과적인 메시지</li><li>고객 가치 중심 환경 이니셔티브</li><li>실무자가 활용 가능한 사례 노하우</li></ul><p>원문: <a href="https://www.greenbiz.com/article/delta-prologis-and-pepsico-art-winning-corporate-buy-sustainability" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 335,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '기후 변화에 대해 언제 웃을까: 코미디언이 말하는 지속가능성',
      author: '관리자',
      date: '2024.02.12',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>코미디언 Stuart Goldsmith가 스탠드업 코미디가 기후 위기 완화 활동가들에게 제공할 수 있는 전략을 다룬 GreenBiz 칼럼입니다. 유머가 지속가능성 커뮤니케이션에 미치는 영향을 다룹니다.</p><h3>주요 포인트</h3><ul><li>지속가능성 커뮤니케이션의 유머 활용</li><li>스탠드업이 주는 인사이트</li><li>심리적 회복력과 메시지 전달</li></ul><p>원문: <a href="https://www.greenbiz.com/article/when-laugh-about-climate-change" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 336,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 약속과 운영 현실 격차 좁히는 지속가능 가치 창출',
      author: '관리자',
      date: '2024.02.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기업 지속가능성이 핵심 우선순위로 부상했지만 많은 기업이 약속에서 가치를 도출하지 못하고 있다는 진단을 다룬 GreenBiz 웨비나입니다. Robert Eccles 교수와 Alison Taylor의 신규 연구를 바탕으로 합니다.</p><h3>주요 포인트</h3><ul><li>지속가능성 약속 ↔ 운영 격차 진단</li><li>가치 창출형 ESG 통합 모델</li><li>학계·실무 융합 연구 결과 공유</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/sustainable-value-creation-closing-gap-between-commitments-and-operational-realities" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 337,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'BloombergNEF: 2023 청정에너지 투자 1.8조 달러…여전히 부족',
      author: '관리자',
      date: '2024.02.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2023년 글로벌 청정에너지 투자가 17% 증가해 1조 8천억 달러에 달했지만 여전히 넷제로 경로에는 미치지 못한다는 BloombergNEF 보고서가 발표됐습니다. 자본 흐름의 가속이 필요합니다.</p><h3>주요 포인트</h3><ul><li>2023 청정에너지 투자 1.8조 달러로 17% 성장</li><li>넷제로 경로 대비 여전히 부족</li><li>지역·기술별 자본 격차 가시화</li></ul><p>원문: <a href="https://www.esgtoday.com/clean-energy-investment-surges-to-1-8-trillion-in-2023-but-still-not-on-track-for-net-zero-bloombergnef/?utm_source=rss&utm_medium=rss&utm_campaign=clean-energy-investment-surges-to-1-8-trillion-in-2023-but-still-not-on-track-for-net-zero-bloombergnef" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 338,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Generate Capital, 지속가능 인프라 투자 위해 15억 달러 조달',
      author: '관리자',
      date: '2024.02.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능 인프라 개발사 Generate Capital이 15억 달러를 조달했다고 발표했습니다. 분산형 청정에너지·물·교통·폐기물 인프라에 투자하는 통합 플랫폼 모델이 핵심입니다.</p><h3>주요 포인트</h3><ul><li>15억 달러 자본으로 인프라 사업 가속</li><li>다영역 청정 인프라 통합 플랫폼</li><li>중간 규모 자산의 자본 매칭</li></ul><p>원문: <a href="https://www.esgtoday.com/generate-capital-raises-1-5-billion-for-sustainable-infrastructure-investments/?utm_source=rss&utm_medium=rss&utm_campaign=generate-capital-raises-1-5-billion-for-sustainable-infrastructure-investments" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 339,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Allianz, 넷제로 전환 진척 추적 대시보드 출시',
      author: '관리자',
      date: '2024.01.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 보험·투자 그룹 Allianz가 'SAMEpath'라는 넷제로 전환 추적·요건 관리 도구를 출시했습니다. 산업·기업별 넷제로 경로의 가시성을 높이는 것이 목적입니다.</p><h3>주요 포인트</h3><ul><li>산업·기업 단위 넷제로 진척 추적</li><li>보험사의 자체 포트폴리오 관리 도구</li><li>피보험자 전환 인게이지먼트 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/allianz-launches-dashboard-tracking-net-zero-transition-progress-and-requirements/?utm_source=rss&utm_medium=rss&utm_campaign=allianz-launches-dashboard-tracking-net-zero-transition-progress-and-requirements" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 340,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Crux, 청정에너지 세제 혜택 플랫폼 위해 1,800만 달러 조달',
      author: '관리자',
      date: '2024.01.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능 핀테크 스타트업 Crux가 시리즈 A에서 1,820만 달러를 조달했다고 발표했습니다. IRA에 따라 양도 가능한 청정에너지 세액공제 거래 플랫폼이 핵심 사업입니다.</p><h3>주요 포인트</h3><ul><li>IRA 양도형 세액공제 거래 시장 형성</li><li>플랫폼 기반 매수자·매도자 매칭</li><li>1,800만 달러 자본으로 시장 점유율 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/sustainable-fintech-startup-crux-raises-18-million-for-clean-energy-tax-credit-platform/?utm_source=rss&utm_medium=rss&utm_campaign=sustainable-fintech-startup-crux-raises-18-million-for-clean-energy-tax-credit-platform" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 341,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Diligent·Manifest Climate, AI 기반 기후 리스크 관리 솔루션 협력',
      author: '관리자',
      date: '2024.01.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>거버넌스·리스크·컴플라이언스(GRC) SaaS 기업 Diligent와 Manifest Climate이 AI 기반 기후 리스크 관리 솔루션 공동 제공을 위한 파트너십을 발표했습니다.</p><h3>주요 포인트</h3><ul><li>GRC + AI 기후 리스크 솔루션 결합</li><li>이사회용 통합 보고·분석 도구</li><li>대형 기업 거버넌스 시장 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/diligent-manifest-climate-partner-to-offer-ai-driven-climate-risk-management-solutions/?utm_source=rss&utm_medium=rss&utm_campaign=diligent-manifest-climate-partner-to-offer-ai-driven-climate-risk-management-solutions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 342,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아마존, Engie와 473MW 해상풍력 PPA 체결',
      author: '관리자',
      date: '2024.01.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>전력회사 Engie가 아마존과 473MW 규모 해상풍력 기업 PPA(CPPA)를 체결했다고 발표했습니다. 빅테크의 데이터센터 청정전력 확보 사례 가운데 해상풍력의 비중이 점차 늘고 있습니다.</p><h3>주요 포인트</h3><ul><li>473MW 해상풍력 CPPA로 청정전력 확보</li><li>빅테크의 해상풍력 PPA 비중 확대</li><li>유럽 해상풍력 시장 모멘텀 유지</li></ul><p>원문: <a href="https://www.esgtoday.com/amazon-signs-purchase-agreement-for-473-mw-of-offshore-wind-energy-with-engie/?utm_source=rss&utm_medium=rss&utm_campaign=amazon-signs-purchase-agreement-for-473-mw-of-offshore-wind-energy-with-engie" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 343,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GreenBiz 웨비나: 산림·기후·자연 통합 기업 목표 설정',
      author: '관리자',
      date: '2024.01.25',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>1.5도·30 by 30 목표 달성을 위해 기업이 공급망 전반에서 행동을 가속해야 한다는 GreenBiz 웨비나입니다. 산림·기후·자연의 다양한 목표 설정·회계·공시 이니셔티브를 정리합니다.</p><h3>주요 포인트</h3><ul><li>산림·기후·자연 통합 목표 설정 가이드</li><li>SBTi-FLAG·SBTN 비교 정리</li><li>실무자 친화적 사례 콘텐츠</li></ul><p>원문: <a href="https://www.greenbiz.com/webcast/aligning-corporate-targets-forests-climate-and-nature" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 344,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '글로벌 의류 붐, 기후의 위협',
      author: '관리자',
      date: '2024.01.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 의류 산업의 빠른 성장이 환경에 미치는 영향을 다룬 GreenBiz 분석입니다. 산업의 파괴적 환경 영향을 어떻게 줄일지에 대한 진단·해법을 다룹니다.</p><h3>주요 포인트</h3><ul><li>의류 산업의 환경 발자국 정량화</li><li>섬유 재활용·생산 공정 혁신 필요성</li><li>소비자·산업 양방향 변화 압력</li></ul><p>원문: <a href="https://www.greenbiz.com/article/worlds-clothing-boom-climate-changer" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 345,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '올해는 넷제로를 추구하지 마라: 역설의 메시지',
      author: '관리자',
      date: '2024.01.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기후 변화에 진정한 영향을 끼치고 싶다면 단기적 넷제로 달성에만 매달리지 말라는 역설적 메시지를 담은 GreenBiz 칼럼입니다. 실질 감축 우선 전략을 강조합니다.</p><h3>주요 포인트</h3><ul><li>넷제로 라벨보다 실질 감축 우선</li><li>장기 전환 전략의 중요성</li><li>과대광고된 목표의 함정 경계</li></ul><p>원문: <a href="https://www.greenbiz.com/article/why-you-shouldnt-go-net-zero-year" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 346,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '지속가능성 소셜미디어 인플루언서의 효과적 커뮤니케이션 3가지',
      author: '관리자',
      date: '2024.01.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>틱톡·인스타그램·유튜브 등에서 대규모 팔로워 대상 지속가능성 콘텐츠를 만드는 인플루언서들의 효과적 커뮤니케이션 전략 3가지를 GreenBiz가 정리했습니다.</p><h3>주요 포인트</h3><ul><li>지속가능성 인플루언서의 영향력 확대</li><li>효과적 콘텐츠의 3가지 핵심 요소</li><li>다양한 플랫폼별 커뮤니케이션 사례</li></ul><p>원문: <a href="https://www.greenbiz.com/article/3-effective-ways-social-media-influencers-communicate-about-sustainability" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 347,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '조직에 지속가능성을 내재화하는 4가지 핵심 단계',
      author: '관리자',
      date: '2024.01.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능성 전략을 회사 전체에 통합하면 ESG 목표 달성을 가속화할 수 있다는 GreenBiz 칼럼입니다. 조직 내재화를 위한 4가지 핵심 단계를 제시합니다.</p><h3>주요 포인트</h3><ul><li>지속가능성 내재화 4단계 액션 플랜</li><li>전사적 통합의 효과·사례</li><li>실행 가능한 단계별 가이드</li></ul><p>원문: <a href="https://www.greenbiz.com/article/4-critical-steps-embed-sustainability-your-organization" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 348,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '애팔래치아 제조사, 청정에너지 경제 진입 위한 그랜트 모집',
      author: '관리자',
      date: '2024.01.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>애팔래치아 지역 협력 단체가 1,000개 이상의 중소·중견 제조사를 청정에너지 산업 공급망에 참여시키기 위한 그랜트를 운영합니다. 지역 산업 전환의 모범 사례입니다.</p><h3>주요 포인트</h3><ul><li>지역 제조 생태계의 청정에너지 전환 지원</li><li>1,000+ 중소 제조사 대상 자금 매칭</li><li>지역 일자리·산업 다각화 효과</li></ul><p>원문: <a href="https://www.greenbiz.com/article/grant-seeks-recruit-appalachian-manufacturers-clean-energy-economy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 349,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '보험사, 탄소 크레딧 신뢰 회복 위한 신상품 출시',
      author: '관리자',
      date: '2024.01.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>탄소 시장 신뢰가 흔들리는 가운데 Cloverly 등 보험사가 사기·무효화 발생 시 매수자에게 보상하는 보험형 탄소 크레딧을 출시하고 있습니다. 시장 신뢰 회복의 시도입니다.</p><h3>주요 포인트</h3><ul><li>보험형 탄소 크레딧 등장으로 매수자 보호</li><li>VCM 신뢰성 회복 메커니즘 진화</li><li>금융·보험 결합 솔루션 사례</li></ul><p>원문: <a href="https://www.greenbiz.com/article/insurers-hope-new-policies-covering-carbon-credits-will-restore-trust-battered-market" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 350,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'General Mills 재생농업 약속 5년…진척은?',
      author: '관리자',
      date: '2024.01.18',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>General Mills가 2030년까지 100만 에이커에서 재생농업을 추진하겠다는 약속을 한 지 5년이 지나, 그 진척과 성과를 평가한 GreenBiz 분석입니다. 시스템 변화 사례로 주목됩니다.</p><h3>주요 포인트</h3><ul><li>대형 식품기업 재생농업 5년차 진척 평가</li><li>100만 에이커 목표 달성 진행률</li><li>식품 산업 시스템 변화 사례</li></ul><p>원문: <a href="https://www.greenbiz.com/article/5-years-how-does-general-mills-regenerative-agriculture-commitment-measure" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 351,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Macquarie, Enel 그리스 재생에너지 사업 50% 지분 인수',
      author: '관리자',
      date: '2024.01.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>호주 자산운용사 Macquarie Asset Management가 Enel Green Power 그리스 사업의 50% 지분을 2억 5천만 유로에 인수한다고 발표했습니다. 남유럽 재생에너지 시장의 자본 활성화를 보여주는 거래입니다.</p><h3>주요 포인트</h3><ul><li>Enel의 자본 회수 + Macquarie의 자산 확보</li><li>그리스 재생에너지 시장 모멘텀</li><li>Macquarie의 유럽 청정에너지 자산 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/macquarie-acquires-50-stake-in-enels-greek-renewables-unit-for-e250-million/?utm_source=rss&utm_medium=rss&utm_campaign=macquarie-acquires-50-stake-in-enels-greek-renewables-unit-for-e250-million" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 352,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'TotalEnergies, Adani Green과 인도 재생에너지에 3억 달러 투자',
      author: '관리자',
      date: '2024.01.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>인도 재생에너지 개발사 Adani Green Energy(AGEL)가 TotalEnergies로부터 3억 달러 규모의 합작 투자를 받았다고 발표했습니다. 글로벌 자본의 인도 청정에너지 시장 진출 흐름이 강화되고 있습니다.</p><h3>주요 포인트</h3><ul><li>인도 재생에너지 시장의 외자 유치</li><li>TotalEnergies-Adani 합작 모델 확장</li><li>3억 달러로 신규 사업 자금화</li></ul><p>원문: <a href="https://www.esgtoday.com/totalenergies-invests-300-million-in-india-focused-renewables-jv-with-adani-green-energy/?utm_source=rss&utm_medium=rss&utm_campaign=totalenergies-invests-300-million-in-india-focused-renewables-jv-with-adani-green-energy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 163,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '토탈에너지스, 필리핀에 3억 달러 규모 태양광 발전소 건설',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>프랑스 에너지 대기업 토탈에너지스(TotalEnergies)가 재생에너지 개발사 넥스트노스(Nextnorth)와 협력하여 필리핀에 440MWp 규모의 태양광 발전소를 건설합니다. 약 3억 달러가 투입되는 이번 프로젝트는 필리핀 이사벨라 주에 위치하며, 최근 금융 조달을 완료하고 본격적인 착공 단계에 진입했습니다. 완공 시 연간 약 700GWh의 청정 에너지를 생산하여 필리핀의 에너지 전환 및 탄소 중립 목표 달성에 크게 기여할 전망입니다.</p><h3>주요 포인트</h3><ul><li>토탈에너지스와 넥스트노스의 합작을 통한 440MWp 규모 대형 태양광 프로젝트 추진</li><li>총 3억 달러 규모의 투자 및 금융 조달 완료로 사업 가속화</li><li>필리핀의 재생에너지 비중 확대 목표 지원 및 동남아시아 시장 내 영향력 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/totalenergies-to-build-300-million-solar-project-in-the-philippines/?utm_source=rss&utm_medium=rss&utm_campaign=totalenergies-to-build-300-million-solar-project-in-the-philippines" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 165,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '1985년 5월 4일, 세계 정상들의 기후 변화 해결 약속',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>1985년 5월 4일, 세계 주요국 정상들은 기후 변화 문제를 해결하겠다고 공식적으로 약속했습니다. 당시 대기 중 이산화탄소 농도는 약 346ppm이었으며, 이는 기후 위기에 대한 국제적 논의가 이미 약 40년 전부터 시작되었음을 보여줍니다. 하지만 이러한 약속에도 불구하고 지구 온난화는 가속화되어 현재 이산화탄소 농도는 당시보다 훨씬 높은 수준에 도달했습니다.</p><h3>주요 포인트</h3><ul><li>1985년 G7 정상회의에서 기후 변화 대응을 위한 국제적 공조를 처음으로 공식화함</li><li>당시 대기 중 이산화탄소 농도는 현재(약 420ppm 이상)보다 현저히 낮은 346ppm 수준</li><li>수십 년 전의 약속과 현재의 심화된 기후 위기 상황 사이의 괴리를 시사함</li></ul><p>원문: <a href="https://www.reddit.com/r/climate/comments/1t3d8qe/on_this_day_in_history_may_4_1985_world_leaders/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 166,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '케냐, 아프리카 광물 가치사슬 구축 위해 지역 협력 추진',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>윌리엄 루토 케냐 대통령은 자국 자원의 부가가치를 높이기 위해 원광석 수출 중단을 선언하며, 아프리카 국가들 간의 긴밀한 협력을 촉구했습니다. 이는 아프리카가 단순히 원자재 공급처에 머물지 않고 가공 및 제조를 포함한 독자적인 광물 가치사슬을 구축하려는 전략적 움직임입니다. 케냐는 이를 통해 역내 산업화와 경제 성장을 도모하고 글로벌 녹색 에너지 전환 시장에서의 영향력을 확대하고자 합니다.</p><h3>주요 포인트</h3><ul><li>원광석 수출 금지: 케냐는 부가가치 창출을 위해 가공되지 않은 상태의 광물 수출을 제한하기로 했습니다.</li><li>역내 조정 및 협력: 아프리카 국가들이 개별적으로 경쟁하기보다 통합된 공급망을 구축하여 협력할 것을 강조했습니다.</li><li>경제적 가치 제고: 광물 가공 시설 확충을 통해 일자리를 창출하고 자원 보유국의 이익을 극대화하는 것이 목표입니다.</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/30/kenya-seeks-regional-coordination-to-build-african-mineral-value-chains/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 167,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아마존, 모든 기업에 물류 네트워크 전면 개방',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>아마존이 자사 플랫폼 입점 여부와 관계없이 모든 기업이 이용할 수 있도록 물류 네트워크를 전면 개방했습니다. '아마존 공급망 서비스'는 화물 운송, 보관, 유통, 라스트마일 배송을 아우르는 통합 솔루션을 제공합니다. 현재 3M과 랜드엔드(Lands' End) 등 글로벌 기업들이 이미 이 서비스를 도입하여 활용 중입니다. 이는 아마존이 구축한 방대한 인프라를 외부 수익원으로 전환하고 물류 시장에서의 영향력을 확대하려는 전략입니다.</p><h3>주요 포인트</h3><ul><li>아마존 미입점 판매자도 화물 운송 및 배송 서비스 이용 가능</li><li>재고 관리부터 최종 배송까지 전 과정을 통합 관리하는 엔드투엔드 솔루션 제공</li><li>기존 물류 인프라의 효율성을 극대화하여 수익성 강화 및 시장 점유율 확대 도모</li></ul><p>원문: <a href="https://www.supplychaindive.com/news/amazon-opens-logistics-network-to-all-businesses/819178/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 168,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EU 산림파괴 방지법 간소화로 기업 비용 75% 절감',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽연합 집행위원회가 EU 산림파괴 방지법(EUDR)의 이행 방안을 간소화하여 기업의 행정 비용을 최대 75%까지 절감하겠다고 발표했습니다. 이번 조치는 기업들이 공급망 내 산림 파괴 여부를 확인하는 과정에서 겪는 과도한 부담을 줄이기 위해 마련되었습니다. 특히 '위험 없음' 국가 분류를 도입하여 해당 지역 제품에 대한 실사 의무를 대폭 완화할 예정입니다. 이를 통해 규제 준수의 효율성을 높이면서도 글로벌 산림 보호라는 본래의 목적을 달성하고자 합니다.</p><h3>주요 포인트</h3><ul><li>행정 비용 절감: 규제 간소화를 통해 기업의 관련 비용이 기존 대비 약 75% 감소할 것으로 예상됩니다.</li><li>위험 등급제 도입: 국가별 산림 파괴 위험도를 분류하여, '위험 없음' 지역은 간소화된 실사 절차를 적용받습니다.</li><li>중소기업 지원 및 디지털화: 중소기업을 위한 전용 가이드라인과 디지털 신고 시스템을 구축하여 이행 편의성을 높입니다.</li></ul><p>원문: <a href="https://www.esgtoday.com/eu-commission-says-simplification-of-eudr-deforestation-law-will-cut-costs-for-companies-by-75/?utm_source=rss&utm_medium=rss&utm_campaign=eu-commission-says-simplification-of-eudr-deforestation-law-will-cut-costs-for-companies-by-75" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 170,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '볼리비아 열대우림 파괴와 메노나이트 종파의 콩 재배',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>볼리비아의 중요한 열대우림이 메노나이트(Mennonites) 종파의 대규모 농경지 확장으로 인해 심각한 파괴 위기에 처해 있습니다. 이들은 종교적 신념에 따라 고립된 생활을 유지하면서도, 현대적인 대규모 기계식 농법을 도입하여 콩을 재배하며 산림을 개간하고 있습니다. 이러한 활동은 생물 다양성 손실과 탄소 배출을 가속화하며 지구 환경에 큰 위협이 되고 있습니다.</p><h3>주요 포인트</h3><ul><li>메노나이트 공동체의 확장이 볼리비아 산림 파괴의 주요 원인 중 하나로 지목됨</li><li>전 세계적인 콩 수요 증가가 이들의 공격적인 토지 개간과 농업 확장을 부추김</li><li>정부의 규제 미비와 토지 소유권 문제로 인해 보호 구역 내 산림 훼손이 지속됨</li></ul><p>원문: <a href="https://www.reddit.com/r/climate/comments/1t3hb18/these_tropical_forests_are_critically_important/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 171,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '튀르키예 COP31 의장국-IEA, 청정에너지 전환 위해 협력',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>튀르키예의 COP31 의장국과 국제에너지기구(IEA)가 글로벌 청정에너지 전환을 가속화하기 위해 전략적 파트너십을 체결했습니다. 양측은 기후 변화 대응을 위한 실질적인 해결책을 마련하고 에너지 안보를 강화하는 데 협력하기로 합의했습니다. 특히 개발도상국의 에너지 접근성 향상과 탄소 배출 감축을 위한 구체적인 로드맵을 제시할 계획입니다.</p><h3>주요 포인트</h3><ul><li>청정 조리(Clean Cooking) 보급 및 폐기물 부문 배출량 감축 추진</li><li>청정에너지 전환을 지원하기 위한 새로운 금융 메커니즘 구축</li><li>에너지 효율 개선 및 재생에너지 투자 확대를 위한 정책 공조</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/30/turkiyes-cop31-presidency-and-iea-join-forces-on-clean-energy-push/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 172,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'IBM, 엑셀 기반 온실가스 배출량 계산 솔루션 출시',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>IBM은 엑셀 환경에서 온실가스(GHG) 배출량을 간편하게 계산할 수 있는 'IBM Envizi Emissions Calculations in Excel' 솔루션을 출시했습니다. 이 도구는 IBM Envizi의 검증된 계산 엔진과 방대한 배출 계수 라이브러리를 엑셀과 직접 연결하여 데이터 관리의 효율성을 극대화합니다. 이를 통해 기업들은 기존 스프레드시트 방식의 유연성을 유지하면서도 수동 작업에 따른 오류를 줄이고 공시 기준에 부합하는 신뢰성 높은 데이터를 확보할 수 있습니다.</p><h3>주요 포인트</h3><ul><li>엑셀 내에서 IBM Envizi의 강력한 계산 엔진 및 최신 배출 계수 라이브러리 즉시 활용</li><li>수동 계산 오류를 최소화하고 데이터의 투명성과 감사 가능성을 높여 ESG 공시 대응 강화</li><li>스프레드시트 중심의 보고 체계에서 전문 ESG 데이터 관리 플랫폼으로 전환하려는 기업을 위한 가교 역할 수행</li></ul><p>원문: <a href="https://www.esgtoday.com/ibm-launches-ghg-emissions-calculation-solution-for-spreadsheet-users/?utm_source=rss&utm_medium=rss&utm_campaign=ibm-launches-ghg-emissions-calculation-solution-for-spreadsheet-users" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 175,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '산타마르타 정상회의, 화석연료 전환 본격화',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>콜롬비아 산타마르타에서 열린 정상회의에서 약 60개국이 화석연료 의존도를 낮추기 위한 구체적인 로드맵 개발에 착수했습니다. 이번 회의는 석탄, 석유, 가스에서 벗어나 경제 구조를 재편하고 국제 무역을 친환경적으로 전환하는 데 중점을 둡니다. 참가국들은 에너지 전환 과정에서 발생할 수 있는 경제적 충격을 완화하고 지속 가능한 성장을 도모하기 위한 국제적 협력을 강화하기로 했습니다.</p><h3>주요 포인트</h3><ul><li>60여 개국 참여: 화석연료 탈피를 위한 국가별 맞춤형 로드맵 수립 지원</li><li>경제 및 무역 혁신: 화석연료 중심의 경제 구조를 녹색 무역 체제로 전환</li><li>글로벌 협력 강화: 기후 위기 대응을 위한 기술 공유 및 금융 지원 방안 논의</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/30/santa-marta-summit-kick-starts-work-on-key-steps-for-fossil-fuel-transition/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 176,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '산림 파괴가 질병 확산의 문을 여는 이유',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>농업을 위한 산림 벌채는 단순한 환경 문제를 넘어 생물 다양성과 공중보건에 심각한 위협이 되고 있습니다. 숲이 파괴됨에 따라 야생동물의 서식지가 줄어들고 인간과의 접촉이 빈번해지면서 새로운 전염병의 발생 가능성이 커지고 있습니다. 이는 생태계의 균형을 무너뜨려 인류 전체의 안전을 위협하는 결과를 초래합니다.</p><h3>주요 포인트</h3><ul><li>농업 확장을 위한 산림 벌채가 공중보건의 새로운 위협으로 부상</li><li>서식지 파괴로 인한 야생동물과 인간 간의 접촉 및 질병 전파 증가</li><li>생물 다양성 보존이 전염병 예방을 위한 핵심적인 방어 기제임</li></ul><p>원문: <a href="https://www.reddit.com/r/sustainability/comments/1t02w5x/how_deforestation_opens_the_door_for_diseases/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 177,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '강력한 엘니뇨 예고, 온난화로 예측 불가능해진 영향',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지구 온난화가 가속화됨에 따라 강력한 엘니뇨 현상이 발생할 가능성이 높아지고 있습니다. 하지만 지구가 뜨거워지면서 과거의 엘니뇨 데이터는 더 이상 미래를 예측하는 신뢰할 수 있는 지표가 되지 못하고 있습니다. 기온 상승이 자연적인 기상 현상과 결합하여 전 세계적으로 전례 없는 기후 변화를 초래할 것으로 우려됩니다.</p><h3>주요 포인트</h3><ul><li>강력한 엘니뇨 발생 가능성이 제기되고 있으나, 온난화로 인해 그 영향력과 양상이 변하고 있습니다.</li><li>지구의 평균 기온이 이미 높아진 상태라 과거의 기상 패턴을 통한 예측이 더 이상 유효하지 않습니다.</li><li>엘니뇨와 온난화의 상호작용은 기상 이변의 강도를 증폭시켜 예측 불가능한 피해를 줄 수 있습니다.</li></ul><p>원문: <a href="https://www.reddit.com/r/climate/comments/1t3h9t6/a_strong_el_niño_may_be_coming_global_warming_is/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 158,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '암스테르담, 육류 및 화석 연료 공공 광고 금지',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>암스테르담 시가 기후 위기 대응을 위해 육류와 화석 연료 제품의 공공 광고를 금지하는 획기적인 조치를 취했습니다. 그동안 육류 소비는 기후 변화의 주요 원인임에도 불구하고 해결책 논의에서 자주 간과되어 왔으나, 이번 정책을 통해 그 중요성이 부각되었습니다. 이번 결정은 축산업이 환경에 미치는 영향과 기후 위기의 시급성을 대중에게 알리는 데 중점을 두고 있습니다. 이는 다른 도시와 국가들이 벤치마킹할 수 있는 선도적인 정책 사례로 평가받고 있습니다.</p><h3>주요 포인트</h3><ul><li>육류 소비 감축을 기후 위기 대응의 핵심 전략으로 설정</li><li>축산업의 환경적 영향에 대한 대중의 인식 제고 및 경각심 고취</li><li>타 지자체 및 국가에서 도입 가능한 복제 가능한 정책 모델 제시</li></ul><p>원문: <a href="https://www.reddit.com/r/sustainability/comments/1t3bn2w/amsterdam_bans_public_adverts_for_meat_and_fossil/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 159,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '포드, 13억 달러 관세 환급 기대에도 공급망 압박 지속',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>포드는 과거 지불한 관세에 대해 약 13억 달러의 환급을 예상하고 있으나, 여전히 공급망 및 원자재 가격 변동으로 인한 도전에 직면해 있습니다. 특히 2026년에는 새로운 관세 정책의 영향으로 약 10억 달러의 추가 비용 부담이 발생할 것으로 전망됩니다. 회사는 이러한 비용 압박을 상쇄하기 위해 공급망 효율화와 원가 절감 전략에 집중하고 있습니다.</p><h3>주요 포인트</h3><ul><li>과거 수입 부품에 대해 지불했던 관세 중 약 13억 달러의 환급을 기대함</li><li>2026년부터 강화되는 관세 규정으로 인해 약 10억 달러 규모의 타격 예상</li><li>원자재 가격 상승 및 공급망 불안정성이 지속적인 경영 리스크로 작용</li></ul><p>원문: <a href="https://www.supplychaindive.com/news/ford-expects-13b-tariff-refund-but-supply-chain-pressure-remains/819136/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 160,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ADB, 아시아 핵심 광물 공급망 확대를 위한 금융 지원 시설 출범',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>아시아개발은행(ADB)은 아시아·태평양 지역의 핵심 광물 공급망을 강화하기 위해 '핵심 광물-제조 금융 파트너십 시설(CMF)'을 출범했습니다. 이 이니셔티브는 청정에너지 전환에 필수적인 리튬, 코발트, 니켈 등의 광물 채굴부터 제조 단계까지의 자금 조달을 지원합니다. 이를 통해 개발도상국의 지속 가능한 광물 자원 개발을 촉진하고 글로벌 공급망의 안정성을 높이는 것을 목표로 합니다.</p><h3>주요 포인트</h3><ul><li>전기차 및 재생에너지 기술에 필수적인 핵심 광물 공급망 구축 지원</li><li>민간 및 공공 자본 유입을 통한 대규모 프로젝트 자금난 해소</li><li>환경적·사회적 책임을 준수하는 지속 가능한 광업 관행 장려</li></ul><p>원문: <a href="https://www.esgtoday.com/adb-launches-financing-initiative-to-scale-critical-mineral-supply-chains-in-asia/?utm_source=rss&utm_medium=rss&utm_campaign=adb-launches-financing-initiative-to-scale-critical-mineral-supply-chains-in-asia" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 161,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '2026년 말 친환경 해운 핵심 회담 개최',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>전 세계 정부들이 친환경 해운 조치를 최종 확정하기 위해 2026년 말 3주간의 집중 회담을 개최하기로 합의했습니다. 이번 회담은 글로벌 해운 산업의 탈탄소화 목표를 실현하기 위한 결정적인 계기가 될 것으로 전망됩니다. 각국 대표들은 연료 표준 설정 및 탄소 가격 책정과 같은 구체적인 기술적·경제적 이행 방안을 마무리 짓는 데 집중할 예정입니다.</p><h3>주요 포인트</h3><ul><li>친환경 해운 조치 도입을 위한 3주간의 집중 협상 일정 합의</li><li>해운 산업 탈탄소화를 위한 연료 표준 및 탄소세 등 핵심 규제 논의</li><li>국제해사기구(IMO)의 온실가스 감축 목표 달성을 위한 중대한 분수령</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/05/01/key-green-shipping-talks-to-be-held-in-late-2026/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 162,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '해수면 상승 위기, 뉴올리언스 \'지금 당장 이주 시작해야\'',
      author: '관리자',
      date: '2026.05.04',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>최근 발표된 연구에 따르면 해수면 상승으로 인해 루이지애나주의 문화적 중심지인 뉴올리언스가 이번 세기 말 이전에 멕시코만에 둘러싸일 위기에 처해 있습니다. 전문가들은 이미 '돌아올 수 없는 지점'에 도달했으므로 도시 이주 계획을 즉시 시작해야 한다고 경고하고 있습니다. 기후 변화로 인한 지형 변화가 가속화됨에 따라 단순한 방어벽 구축을 넘어선 근본적인 대책이 시급한 상황입니다.</p><h3>주요 포인트</h3><ul><li>해수면 상승으로 인해 뉴올리언스가 21세기 내에 고립되거나 침수될 가능성 제기</li><li>연구진은 도시 보존을 위한 방어보다 선제적인 이주 계획 수립이 필요하다고 강조</li><li>기후 위기가 루이지애나의 문화적 유산과 거주 지역에 실존적 위협을 가함</li></ul><p>원문: <a href="https://www.reddit.com/r/climate/comments/1t3clqy/point_of_no_return_new_orleans_relocation_must/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 153,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG 주간 리뷰: 기업 80% 이상 기후 목표 고수',
      author: '관리자',
      date: '2026.05.03',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>PwC의 최신 조사에 따르면 전 세계 기업의 80% 이상이 경제적 불확실성 속에서도 기후 변화 대응 목표를 유지하거나 오히려 강화하고 있는 것으로 나타났습니다. 이번 주 ESG 분야에서는 유럽연합(EU)의 공급망 실사 지침(CSDDD)을 둘러싼 규제 동향과 기업들의 지속 가능한 비즈니스 전략 전환이 주요 화두로 떠올랐습니다. 기업들은 탄소 중립 달성을 위해 실질적인 감축 조치를 이행하며 투자자들의 투명성 요구에 대응하고 있습니다.</p><h3>주요 포인트</h3><ul><li>PwC 조사 결과, 대다수 기업이 기후 목표를 경영 전략의 핵심으로 유지하며 철회하지 않음</li><li>EU 공급망 실사 지침(CSDDD)의 최종 승인 과정과 규제 범위에 대한 논의 지속</li><li>글로벌 공시 표준화에 따른 기업들의 ESG 데이터 관리 및 탄소 배출 감축 노력 가속화</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-259/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-259" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 154,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'UN 탄소 시장, 소외된 공동체 보호 실패 우려',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>UN 탄소 시장 내 지속가능발전 도구가 원주민과 지역 공동체를 토지 침해 및 인권 유린으로부터 보호하는 데 실패할 가능성이 높다는 보고서가 발표되었습니다. Carbon Market Watch와 Land Matrix Initiative의 공동 조사 결과, 해당 도구는 소외된 공동체의 권리를 보장하기에 역부족인 것으로 나타났습니다. 이는 탄소 프로젝트가 환경적 이득을 추구하는 과정에서 오히려 사회적 부작용을 초래할 수 있음을 시사합니다.</p><h3>주요 포인트</h3><ul><li>UN 탄소 시장의 지속가능성 도구가 원주민 권리 보호에 취약함</li><li>탄소 배출권 프로젝트로 인한 토지 강탈 및 인권 침해 우려 제기</li><li>소외된 공동체를 위한 실질적인 보호 장치 마련 및 제도 개선 시급</li></ul><p>원문: <a href="https://carbonmarketwatch.org/2026/04/30/losing-ground-un-carbon-market-will-likely-fail-to-protect-marginalised-communities-report/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 155,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '유럽의 결함 있는 탄소 제거 방식과 기후 위기',
      author: '관리자',
      date: '2026.04.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽의 탄소 제거 정책이 석유 및 가스 기업들의 이해관계에 의해 왜곡되고 있다는 비판이 제기되었습니다. Carbon Market Watch의 보고서에 따르면, 거대 화석 연료 기업들이 자발적 탄소 시장의 의사 결정 기구에 막대한 영향력을 행사하고 있습니다. 이들은 저품질 탄소 크레딧 시장에 대규모로 투자하며 실질적인 배출 감축보다는 규제 회피 수단으로 활용하고 있어, 유럽의 기후 목표 달성을 위협하고 있습니다.</p><h3>주요 포인트</h3><ul><li>화석 연료 기업들의 자발적 탄소 시장(VCM) 의사 결정 개입 및 영향력 확대</li><li>실효성이 낮은 저품질 탄소 크레딧의 대량 유통과 이를 이용한 그린워싱 우려</li><li>유럽 탄소 제거 정책 프레임워크 내의 구조적 결함과 불확실성 문제 지적</li></ul><p>원문: <a href="https://carbonmarketwatch.org/2026/04/29/leaning-on-uncertainty-how-europes-flawed-approach-to-carbon-removals-threatens-the-climate/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 156,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'SDV 전환, 자동차 공급망의 새로운 도전 과제',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>SDV(소프트웨어 중심 자동차)는 무선 업데이트가 가능한 플랫폼을 통해 자동차 산업을 혁신하고 있으나, 이는 동시에 공급망에 상당한 부담을 주고 있습니다. 무디스의 분석에 따르면, SDV로의 전환은 초기 개발 비용을 높이고 기존 제조사와 부품 공급업체 간의 협력 관계를 변화시키고 있습니다. 특히 고성능 반도체와 소프트웨어 인력 확보가 핵심 경쟁력으로 부상하며 공급망의 복잡성이 심화되고 있습니다.</p><h3>주요 포인트</h3><ul><li>소프트웨어 및 고성능 연산 칩 도입에 따른 생산 및 R&D 비용 상승</li><li>전통적인 하드웨어 공급업체와 완성차 업체 간의 기술 주도권 및 수익 배분 갈등</li><li>소프트웨어 업데이트(OTA) 기능을 유지하기 위한 지속적인 공급망 관리 필요성</li></ul><p>원문: <a href="https://www.supplychaindive.com/news/software-defined-vehicles-test-auto-supply-chains-moodys/818553/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 157,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '타겟, 재고 효율성 높이는 신규 공급망 시설 도입',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미국 유통업체 타겟(Target)이 재고 관리 효율을 극대화하기 위해 휴스턴에 새로운 형태의 '리시브 센터(Receive Center)'를 가동했습니다. 이 시설은 제품을 하류 유통 지점으로 보내기 전 대량의 재고를 보관하는 완충 역할을 수행하여 공급망의 유연성을 높입니다. 이를 통해 타겟은 수요 변화에 기민하게 대응하고 매장 내 품절 현상을 줄이는 등 전반적인 물류 운영을 최적화할 계획입니다.</p><h3>주요 포인트</h3><ul><li>휴스턴에 첫 리시브 센터를 설립하여 대규모 재고 보유 역량 강화</li><li>하류 물류 센터 및 매장으로 가기 전 재고를 관리하는 전략적 완충 지점 확보</li><li>공급망 현대화를 통해 운영 효율성을 높이고 고객 수요에 대한 대응력 개선</li></ul><p>원문: <a href="https://www.supplychaindive.com/news/target-launches-new-kind-of-supply-chain-facility/818848/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 148,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'G7 석탄 발전 퇴출 합의와 글로벌 기후 동향',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>G7 국가들이 2030년대 초반까지 석탄 발전을 단계적으로 폐지하기로 합의하며 탈화석연료를 향한 구체적인 경로를 설정했습니다. 중국은 청정 기술 분야에서 기록적인 성장세를 보이고 있으나 서구권과의 무역 갈등이 심화되는 양상입니다. 또한, 전 세계 산림 손실 속도가 다소 둔화되었다는 데이터가 발표되었으나 2030년 목표 달성을 위해서는 더 강력한 조치가 필요한 상황입니다.</p><h3>주요 포인트</h3><ul><li>G7 에너지·기후 장관들의 2030년대 상반기 내 석탄 발전소 폐쇄 합의</li><li>중국의 청정 에너지 기술 급증과 이에 따른 글로벌 무역 긴장 상태</li><li>글로벌 산림 손실의 완만한 감소세 및 2030년 산림 파괴 중단 목표와의 격차</li></ul><p>원문: <a href="https://www.carbonbrief.org/debriefed-1-may-2026-countries-chart-path-away-from-fossil-fuels-chinas-clean-tech-surge-global-forest-loss-slows/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 149,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '산타마르타 정상회의: 화석연료 탈피를 위한 첫 이행 로드맵',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>콜롬비아 산타마르타에서 화석연료로부터의 전환을 논의하기 위한 세계 최초의 정상회의가 개최되었습니다. 이번 회의는 COP28의 합의 사항을 구체적인 실행 계획으로 옮기기 위해 마련되었으며, 참가국들은 화석연료 의존도를 낮추기 위한 국가별 로드맵을 개발하기로 합의했습니다. 특히 에너지 전환 과정에서 발생할 수 있는 경제적 충격을 완화하고 노동자를 보호하는 '정의로운 전환'이 주요 의제로 다뤄졌습니다.</p><h3>주요 포인트</h3><ul><li>COP28의 '화석연료로부터의 전환' 합의를 실천하기 위해 소집된 최초의 국제 정상회의</li><li>참가국들이 화석연료 생산 및 소비를 단계적으로 줄이기 위한 국가별 이행 계획 수립에 착수</li><li>개발도상국을 위한 금융 지원 메커니즘과 에너지 전환에 따른 공정한 노동 시장 변화 강조</li></ul><p>원문: <a href="https://www.carbonbrief.org/santa-marta-key-outcomes-from-first-summit-on-transitioning-away-from-fossil-fuels/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 150,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '중국 화석연료 통제 강화 및 클린테크 수출 급증',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중국 정부는 2024-2025년 에너지 절약 및 탄소 감축 실행 계획을 통해 화석 연료 소비에 대한 엄격한 통제와 탄소 배출 관리 체계로의 전환을 선언했습니다. 이와 함께 엘니뇨 현상에 따른 극단적인 기상 이변 가능성에 대비하며 기후 변화 대응력을 높이고 있습니다. 또한 태양광, 배터리, 전기차 등 이른바 '신 3대 산업'의 수출이 급증한 배경과 글로벌 시장에 미치는 영향을 분석했습니다.</p><h3>주요 포인트</h3><ul><li>화석 연료 소비의 엄격한 제한 및 탄소 배출량 중심의 '이중 제어' 관리 시스템 도입 가속화</li><li>엘니뇨에서 라니냐로의 전환기에 따른 홍수 및 폭염 등 극단적 기상 현상에 대한 경고와 대비</li><li>국내 과잉 생산과 글로벌 녹색 전환 수요가 맞물린 클린테크 제품의 폭발적인 수출 성장과 무역 역학 관계</li></ul><p>원문: <a href="https://www.carbonbrief.org/china-briefing-30-april-2024-fossil-fuel-strict-controls-el-nino-approaches-why-cleantech-exports-have-surged/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 151,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '기상 이변 예측, 여전히 전통적 모델이 AI보다 우수',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>인공지능(AI) 기상 모델이 속도와 효율성 면에서는 뛰어나지만, 기록적인 기상 이변을 예측하는 데는 여전히 전통적인 물리 기반 모델이 더 우수한 성능을 보인다는 연구 결과가 발표되었습니다. AI 모델은 과거 데이터를 기반으로 학습하기 때문에 데이터 범위를 벗어난 전례 없는 기상 현상을 포착하는 데 한계가 있습니다. 반면 물리 법칙에 기반한 전통적 수치 예보 모델은 미지의 기후 시나리오를 시뮬레이션하는 데 더 강점을 보입니다.</p><h3>주요 포인트</h3><ul><li>AI 모델은 과거 통계에 의존하므로 기록을 경신하는 폭염이나 폭풍 예측에 취약함</li><li>전통적 모델은 물리적 메커니즘을 직접 계산하여 '학습되지 않은' 극단적 상황도 예측 가능함</li><li>AI는 연산 속도가 빠르고 비용이 저렴하여, 향후 두 모델을 결합한 하이브리드 방식이 유망함</li></ul><p>원문: <a href="https://www.carbonbrief.org/traditional-models-still-outperform-ai-for-extreme-weather-forecasts/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 152,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '2026년 세계 석탄 수요, 이란 위기에도 큰 폭의 반등 없을 것',
      author: '관리자',
      date: '2026.04.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이란 위기로 인한 에너지 안보 우려에도 불구하고, 2026년까지 전 세계적인 석탄 회귀 현상은 미미할 것으로 전망됩니다. 재생에너지의 급격한 확산과 원자력 발전의 회복이 석탄 수요를 억제하는 주요 요인으로 작용하고 있습니다. 특히 중국의 에너지 구조 변화가 글로벌 석탄 소비 감소에 결정적인 역할을 할 것으로 보입니다.</p><h3>주요 포인트</h3><ul><li>이란 위기 등 지정학적 불안에도 불구하고 전 세계 석탄 발전 비중은 지속적으로 감소 추세임</li><li>태양광 및 풍력 등 재생에너지 설치량의 기록적인 증가가 석탄의 빈자리를 대체 중임</li><li>중국의 청정 에너지 전환 가속화가 글로벌 석탄 수요의 정점 통과를 견인하고 있음</li></ul><p>원문: <a href="https://www.carbonbrief.org/world-will-not-see-significant-return-to-coal-in-2026-despite-iran-crisis/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 143,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '프랑스, 2050년 화석연료 퇴출 로드맵 발표',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>프랑스 정부가 2050년 탄소 중립 달성을 위한 '에너지-기후 전략(SFEC)' 로드맵을 발표했습니다. 이번 계획은 에너지 소비 절감과 원자력 및 재생에너지 생산 확대를 통해 화석연료 의존도를 단계적으로 낮추는 것을 골자로 합니다. 2030년까지 화석연료 비중을 현재 60%에서 42%로 줄이고, 2050년에는 완전히 퇴출하는 것을 목표로 설정했습니다. 이를 위해 건물 에너지 효율 개선, 교통 및 산업 부문의 탈탄소화 등 구체적인 실행 방안이 포함되었습니다.</p><h3>주요 포인트</h3><ul><li>2050년까지 화석연료 사용 0% 달성 및 탄소 중립 목표 명시</li><li>원자력 발전(신규 EPR2 원자로 건설)과 재생에너지(태양광, 해상풍력)의 병행 확대</li><li>에너지 효율성 제고를 위한 건물 개보수 및 산업 공정의 탈탄소화 추진</li></ul><p>원문: <a href="https://www.esgtoday.com/france-unveils-roadmap-to-quit-fossil-fuels-by-2050/?utm_source=rss&utm_medium=rss&utm_campaign=france-unveils-roadmap-to-quit-fossil-fuels-by-2050" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 144,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'CIP, 오르스테드 육상 부문 인수로 \'페리구스 에너지\' 출범',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에너지 인프라 투자 운용사인 코펜하겐 인프라스트럭처 파트너스(CIP)가 새로운 유럽 재생에너지 플랫폼인 '페리구스 에너지(Perigus Energy)'를 출범했습니다. 이번 발표는 오르스테드(Ørsted)의 프랑스, 독일, 영국 내 육상 풍력 및 태양광 사업 인수를 완료한 데 따른 후속 조치입니다. 페리구스 에너지는 유럽 전역에서 재생에너지 프로젝트의 개발, 건설 및 운영을 통합 관리하며 지역 에너지 전환을 가속화할 계획입니다.</p><h3>주요 포인트</h3><ul><li>오르스테드의 유럽 육상 재생에너지 자산 인수 완료 및 신규 플랫폼 '페리구스 에너지' 설립</li><li>프랑스, 독일, 영국을 중심으로 약 12GW 규모의 풍력 및 태양광 프로젝트 파이프라인 확보</li><li>CIP의 플래그십 펀드를 통해 유럽 내 재생에너지 자산의 개발부터 운영까지 전 단계 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/cip-launches-new-european-renewable-energy-platform-following-orsted-acquisition/?utm_source=rss&utm_medium=rss&utm_campaign=cip-launches-new-european-renewable-energy-platform-following-orsted-acquisition" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 145,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '엔지, 딥스카이와 DAC 탄소 제거 계약 체결',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>프랑스 에너지 기업 엔지(Engie)가 캐나다의 탄소 제거 프로젝트 개발사인 딥스카이(Deep Sky)와 직접공기포집(DAC) 기술을 활용한 탄소 제거 크레딧 구매 계약을 체결했습니다. 이번 협력은 엔지의 첫 번째 DAC 거래로, 2045년 넷제로 목표 달성을 위한 전략적 행보의 일환입니다. 딥스카이는 캐나다 퀘벡에 구축 중인 '딥스카이 Labs' 시설을 통해 대기 중 이산화탄소를 포집하고 영구적으로 격리하여 크레딧을 발행할 계획입니다.</p><h3>주요 포인트</h3><ul><li>엔지의 첫 번째 직접공기포집(DAC) 기반 탄소 제거 크레딧 구매 계약</li><li>캐나다 퀘벡의 '딥스카이 Labs' 프로젝트를 통한 탄소 포집 및 영구 격리</li><li>2045년까지 탄소 중립을 목표로 하는 엔지의 탈탄소화 포트폴리오 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/engie-signs-dac-carbon-removal-deal-with-deep-sky/?utm_source=rss&utm_medium=rss&utm_campaign=engie-signs-dac-carbon-removal-deal-with-deep-sky" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 146,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '솔라리아, 재생에너지 및 데이터센터 확장을 위해 3억 유로 조달',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>스페인의 재생에너지 개발 기업 솔라리아(Solaria)가 재생에너지, 에너지 저장 장치(ESS), 데이터센터 인프라 구축을 위해 3억 유로(약 4,500억 원)의 자금을 조달했습니다. 이번 자금은 솔라리아가 단순 태양광 발전 기업을 넘어 종합 인프라 플랫폼으로 도약하는 데 사용될 예정입니다. 특히 AI 산업 성장에 따른 데이터센터의 전력 수요 급증에 대응하여 친환경 에너지 솔루션을 제공하는 것이 핵심 목표입니다.</p><h3>주요 포인트</h3><ul><li>재생에너지 및 데이터센터 인프라 확장을 위한 3억 유로 규모의 자금 확보</li><li>태양광 발전을 넘어 에너지 저장(ESS) 및 데이터센터를 포함한 비즈니스 모델 다각화</li><li>AI 및 디지털화로 인한 급격한 전력 수요 증가에 대응하는 전략적 행보</li></ul><p>원문: <a href="https://www.esgtoday.com/solaria-raises-e300-million-to-build-out-renewables-storage-data-center-infrastructure-platform/?utm_source=rss&utm_medium=rss&utm_campaign=solaria-raises-e300-million-to-build-out-renewables-storage-data-center-infrastructure-platform" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 147,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '보잉, 바이오차·암석풍화 탄소 제거권 2만 톤 구매',
      author: '관리자',
      date: '2026.05.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>보잉이 탄소 제거 마켓플레이스인 슈퍼크리티컬(Supercritical)을 통해 2만 톤 규모의 탄소 제거 크레딧 포트폴리오를 구매했습니다. 이번 포트폴리오는 바이오차(Biochar)와 강화 암석 풍화(ERW) 기술을 활용한 프로젝트들로 구성되어 있습니다. 이는 보잉의 2050년 넷제로(Net Zero) 달성 전략의 일환으로, 초기 단계인 탄소 제거 기술의 상용화를 지원하기 위한 결정입니다. 슈퍼크리티컬은 엄격한 실사를 거쳐 신뢰도가 높은 고품질 프로젝트만을 선별하여 보잉에 제공했습니다.</p><h3>주요 포인트</h3><ul><li>바이오차 및 강화 암석 풍화(ERW) 등 혁신적인 탄소 제거 기술 도입</li><li>2050년 탄소 중립 목표 달성을 위한 보잉의 지속가능성 투자 확대</li><li>슈퍼크리티컬과의 협력을 통한 고품질 탄소 제거 시장의 확장 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/boeing-buys-20000-ton-portfolio-of-biochar-erw-carbon-removals/?utm_source=rss&utm_medium=rss&utm_campaign=boeing-buys-20000-ton-portfolio-of-biochar-erw-carbon-removals" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 138,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '옥토퍼스, 美 재조림 탄소 제거 프로젝트에 5억 달러 투자',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>재생에너지 투자사인 옥토퍼스 에너지 제너레이션이 자연 기반 솔루션 기업 리빙 카본(Living Carbon)과 협력하여 미국 내 재조림 프로젝트에 5억 달러를 투자합니다. 이번 파트너십은 광합성 효율을 높여 일반 나무보다 더 빠르게 성장하고 더 많은 탄소를 흡수하는 바이오 공학 나무를 심는 것을 골자로 합니다. 이를 통해 버려진 농지와 산업 부지를 복원하고 고품질의 탄소 제거 크레딧을 생성하여 기후 변화 대응을 가속화할 전망입니다.</p><h3>주요 포인트</h3><ul><li>옥토퍼스 에너지, 리빙 카본과 5억 달러 규모의 대규모 재조림 파트너십 체결</li><li>광합성 강화 기술을 적용한 나무를 활용해 탄소 흡수 효율 및 속도 극대화</li><li>미국 전역의 유휴 부지 복원 및 신뢰도 높은 탄소 제거 크레딧 공급 확대</li></ul><p>원문: <a href="https://www.esgtoday.com/octopus-invests-500-million-in-u-s-reforestation-based-carbon-removal-projects/?utm_source=rss&utm_medium=rss&utm_campaign=octopus-invests-500-million-in-u-s-reforestation-based-carbon-removal-projects" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 139,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '뉴욕시 연기금, 블랙록·피델리티 기후 대응 미흡 지적',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>뉴욕시 연기금은 블랙록과 피델리티 등 주요 자산운용사들이 기후 변화 대응 기대치에 충분히 부합하지 않는다는 보고서를 발표했습니다. 보고서에 따르면 이들 운용사는 기후 관련 주주 제안에 대한 찬성률이 낮아졌으며, 이는 연기금의 2040년 넷제로 목표 달성에 걸림돌이 되고 있습니다. 브래드 랜더 뉴욕시 감사관은 자산운용사들이 실질적인 탈탄소화 전략을 이행해야 한다고 촉구했습니다.</p><h3>주요 포인트</h3><ul><li>블랙록과 피델리티의 기후 관련 주주 제안 지지율이 최근 몇 년간 크게 하락했습니다.</li><li>뉴욕시 연기금은 2040년까지 포트폴리오 넷제로를 목표로 하며, 운용사들의 정렬된 행동을 요구하고 있습니다.</li><li>아문디 등 유럽계 운용사와 달리 미국 대형 운용사들의 기후 공약 이행이 퇴보하고 있다는 분석입니다.</li></ul><p>원문: <a href="https://www.esgtoday.com/nyc-pension-funds-say-blackrock-fidelity-not-aligned-with-climate-expectations/?utm_source=rss&utm_medium=rss&utm_campaign=nyc-pension-funds-say-blackrock-fidelity-not-aligned-with-climate-expectations" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 140,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ERM, 루이즈 피어스 지속가능성 및 리스크 글로벌 리더 임명',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>세계적인 지속가능성 전문 컨설팅 기업 ERM이 루이즈 피어스(Louise Pearce)를 지속가능성 및 리스크 부문의 새로운 글로벌 리더로 임명했습니다. 피어스는 ERM에서 25년 이상 근무한 베테랑으로, 기업들이 복잡한 ESG 규제와 기후 리스크에 대응할 수 있도록 지원하는 역할을 맡게 됩니다. 그녀는 고객사의 지속가능성 전략 수립과 실행을 총괄하며 ERM의 글로벌 성장을 견인할 예정입니다.</p><h3>주요 포인트</h3><ul><li>ERM, 루이즈 피어스를 지속가능성 및 리스크 부문 글로벌 총괄로 선임</li><li>25년 이상의 전문성을 바탕으로 기업의 기후 변화 및 ESG 리스크 대응 지원</li><li>글로벌 규제 강화에 따른 고객사의 지속가능한 비즈니스 전환 및 전략 실행 가속화</li></ul><p>원문: <a href="https://www.esgtoday.com/erm-appoints-louise-pearce-as-global-leader-of-sustainability-and-risk/?utm_source=rss&utm_medium=rss&utm_campaign=erm-appoints-louise-pearce-as-global-leader-of-sustainability-and-risk" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 141,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '스코샤은행·RBC, 금융 배출량 감축 목표 철회',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>캐나다의 주요 은행인 스코샤은행(Scotiabank)과 캐나다 왕립은행(RBC)이 2030년까지 석유 및 가스 부문의 금융 배출량을 감축하겠다던 기존 목표를 철회했습니다. 이들은 절대적인 배출량 감축 대신 탄소 집약도 기반의 목표로 전환하거나 고객사와의 협력을 통한 전환 지원에 집중하겠다는 방침입니다. 이러한 변화는 에너지 안보와 현실적인 전환 속도를 고려한 결정으로 풀이되나, 기후 대응 후퇴라는 비판도 제기되고 있습니다.</p><h3>주요 포인트</h3><ul><li>스코샤은행과 RBC가 석유·가스 포트폴리오에 대한 2030년 금융 배출량 감축 목표를 공식적으로 폐기함.</li><li>절대적 배출량 감축 목표 대신 '배출 집약도' 중심의 지표를 도입하여 에너지 기업의 효율성 개선을 유도하는 방향으로 선회함.</li><li>은행 측은 에너지 안보 유지와 고객사의 저탄소 전환을 실질적으로 지원하기 위해 유연한 접근 방식이 필요하다고 주장함.</li></ul><p>원문: <a href="https://www.esgtoday.com/scotiabank-rbc-drop-financed-emissions-goals/?utm_source=rss&utm_medium=rss&utm_campaign=scotiabank-rbc-drop-financed-emissions-goals" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 142,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ROSI, 태양광 패널 재활용 확대를 위해 2,300만 달러 투자 유치',
      author: '관리자',
      date: '2026.04.30',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>프랑스의 클린테크 기업 ROSI가 태양광 패널 재활용 역량을 확대하기 위해 2,000만 유로(약 2,300만 달러) 이상의 자금을 조달했습니다. 이번 투자는 수명이 다한 태양광 패널에서 실리콘, 은, 구리 등 고순도 원자재를 회수하는 ROSI의 독자적인 기술력을 강화하고 상업적 규모를 키우는 데 사용될 예정입니다. ROSI는 이를 통해 태양광 산업의 순환 경제를 구축하고 급증하는 폐패널 문제 해결에 앞장설 계획입니다.</p><h3>주요 포인트</h3><ul><li>2,000만 유로 이상의 자금 확보를 통한 글로벌 재활용 시설 확충</li><li>폐태양광 패널에서 은, 구리, 고순도 실리콘을 효율적으로 추출하는 혁신 기술 보유</li><li>이토추 상사 및 유럽혁신위원회(EIC) 기금 등 주요 전략적 투자자 참여</li></ul><p>원문: <a href="https://www.esgtoday.com/rosi-raises-23-million-to-scale-solar-panel-recycling-capacity/?utm_source=rss&utm_medium=rss&utm_campaign=rosi-raises-23-million-to-scale-solar-panel-recycling-capacity" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 133,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '펩시코, 유럽 운영 및 공급망 위한 10년 청정에너지 계약 체결',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>펩시코(PepsiCo)가 유럽 내 자사 운영 시설과 주요 공급업체에 재생 에너지를 공급하기 위해 향후 10년간의 청정에너지 구매 계약을 체결했습니다. 이번 협약에는 향료 기업 지보단(Givaudan)과 포장재 기업 스머핏 웨스트락(Smurfit WestRock)이 공동 참여하여 공급망 전체의 탄소 발자국을 줄이는 데 협력하기로 했습니다. 이는 2040년까지 넷제로를 달성하려는 펩시코의 지속가능성 전략인 'pep+'의 일환으로, 특히 공급망에서 발생하는 스코프 3(Scope 3) 배출량을 감축하는 데 중점을 두고 있습니다.</p><h3>주요 포인트</h3><ul><li>유럽 내 운영 시설 및 공급망을 아우르는 10년 장기 재생에너지 구매 계약(PPA) 체결</li><li>지보단, 스머핏 웨스트락 등 주요 파트너사와의 협력을 통한 공급망 탄소 배출량 공동 감축</li><li>2040년 넷제로 달성 및 재생에너지 전환 가속화를 위한 'pep+' 전략의 핵심 조치</li></ul><p>원문: <a href="https://www.esgtoday.com/pepsico-signs-10-year-clean-energy-deal for-operations-and-suppliers-in-europe/?utm_source=rss&utm_medium=rss&utm_campaign=pepsico-signs-10-year-clean-energy-deal-for-operations-and-suppliers-in-europe" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 134,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'IBM, 기존 시스템 연동 온실가스 배출량 계산 API 출시',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>IBM이 기존 기업 시스템에 온실가스(GHG) 배출량 계산 기능을 직접 통합할 수 있는 'IBM Envizi Emissions API'를 정식 출시했습니다. 이 솔루션은 ERP, 공급망 관리 등 다양한 소프트웨어와 연동되어 데이터 입력 시 자동으로 배출량을 산출해 줍니다. 이를 통해 기업은 별도의 복잡한 데이터 이관 없이도 실시간으로 탄소 발자국을 관리하고 공시 요구에 대응할 수 있습니다.</p><h3>주요 포인트</h3><ul><li>IBM Envizi의 검증된 계산 엔진을 API 형태로 제공하여 시스템 간 유연한 통합 지원</li><li>Scope 1, 2, 3 전반에 걸친 온실가스 배출량 자동 계산 및 데이터 가시성 확보</li><li>기존 비즈니스 워크플로우 내에서 탄소 배출 데이터를 즉각적으로 확인 및 분석 가능</li></ul><p>원문: <a href="https://www.esgtoday.com/ibm-launches-solution-to-embed-ghg-emissions-calculations-into-existing-systems/?utm_source=rss&utm_medium=rss&utm_campaign=ibm-launches-solution-to-embed-ghg-emissions-calculations-into-existing-systems" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 135,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '블랙스톤, 재생에너지 기업 유로윈드에 20억 유로 투자',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 자산운용사 블랙스톤이 덴마크의 재생에너지 개발 기업인 유로윈드 에너지(Eurowind Energy)에 최대 20억 유로(약 3조 원)를 투자합니다. 이번 투자는 블랙스톤의 인프라 및 에너지 전환 펀드를 통해 진행되며, 유로윈드의 풍력, 태양광 및 에너지 저장 장치 포트폴리오 확장을 지원하는 것이 목적입니다. 유로윈드는 현재 유럽과 미국 전역에서 25GW 이상의 개발 파이프라인을 보유하고 있으며, 이번 자본 확충을 통해 글로벌 시장에서의 성장을 가속화할 계획입니다. 블랙스톤은 이번 파트너십이 전 세계적인 에너지 전환을 지원하는 중요한 이정표가 될 것으로 보고 있습니다.</p><h3>주요 포인트</h3><ul><li>블랙스톤, 유로윈드 에너지에 최대 20억 유로 규모의 대규모 자본 투자 발표</li><li>유럽 및 미국 내 육상 풍력, 태양광, PV 및 에너지 저장 프로젝트 개발 가속화</li><li>25GW 이상의 파이프라인을 기반으로 재생에너지 시장 내 리더십 강화 및 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/blackstone-invests-e2-billion-in-european-renewables-developer-eurowind/?utm_source=rss&utm_medium=rss&utm_campaign=blackstone-invests-e2-billion-in-european-renewables-developer-eurowind" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 136,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'PwC: 기업 82%, 기후 목표 유지 및 공급망 탈탄소화 가속',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>PwC의 최신 조사 결과에 따르면, 전 세계 기업의 82%가 기후 변화 대응 목표를 유지하거나 더욱 가속화하고 있는 것으로 나타났습니다. 이러한 탈탄소화 노력은 기업의 직접적인 운영 범위를 넘어 공급망 전체로 빠르게 확대되고 있으며, 많은 기업이 협력사와의 협업을 강화하고 있습니다. 기업들은 규제 준수, 비용 절감, 리스크 관리를 주요 동력으로 삼고 있으나, 데이터 품질 확보와 공급망의 복잡성은 여전히 해결해야 할 과제로 꼽힙니다.</p><h3>주요 포인트</h3><ul><li>전 세계 기업의 82%가 기존 기후 목표를 고수하거나 달성 속도를 높이는 추세</li><li>탈탄소화의 초점이 기업 내부에서 공급망(Scope 3) 전체로 광범위하게 확산</li><li>강화되는 글로벌 규제와 경제적 이익이 기업의 기후 행동을 이끄는 핵심 동력</li></ul><p>원문: <a href="https://www.esgtoday.com/82-of-companies-maintaining-or-accelerating-climate-goals-as-decarbonization-efforts-extend-to-supply-chain-pwc/?utm_source=rss&utm_medium=rss&utm_campaign=82-of-companies-maintaining-or-accelerating-climate-goals-as-decarbonization-efforts-extend-to-supply-chain-pwc" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 137,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '캘리포니아 스코프 3 공시의 명확한 시작이 필요한 이유',
      author: '관리자',
      date: '2026.04.29',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>캘리포니아의 기후 기업 데이터 책임법(SB 253)은 기업의 공급망 전체 탄소 배출량인 스코프 3 공시를 의무화하고 있습니다. 최근 시행 시기에 대한 논의가 활발한 가운데, 저자는 기후 리스크의 정확한 파악을 위해 스코프 3 보고가 반드시 필요하다고 주장합니다. 기업들이 혼란 없이 대비할 수 있도록 명확한 일정과 기준을 제시하는 것이 제도 성공의 핵심입니다.</p><h3>주요 포인트</h3><ul><li>스코프 3는 기업 탄소 발자국의 대부분을 차지하며 기후 리스크를 이해하는 데 필수적인 지표임</li><li>제도 시행의 지연보다는 명확한 시작일 설정을 통해 기업의 준비 기간과 예측 가능성을 확보해야 함</li><li>글로벌 표준(ISSB, EU CSRD)과의 정합성을 유지하여 기업의 공시 부담을 줄이고 데이터 일관성을 높여야 함</li><li>초기 보고 단계에서 발생할 수 있는 오류에 대해 기업을 보호하는 '세이프 하버' 규정 도입이 중요함</li></ul><p>원문: <a href="https://www.esgtoday.com/why-californias-scope-3-reporting-needs-a-clear-start/?utm_source=rss&utm_medium=rss&utm_campaign=why-californias-scope-3-reporting-needs-a-clear-start" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 128,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'BTG 팩추얼 TIG, 산림 복원 위해 12억 달러 조달',
      author: '관리자',
      date: '2026.04.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>BTG 팩추얼 팀버랜드 인베스트먼트 그룹(TIG)이 라틴 아메리카의 산림 재조림 및 복원 전략을 위해 12억 4천만 달러의 자금을 조달했습니다. 이 전략은 브라질, 우루과이, 칠레의 퇴화된 토지를 복원하고 생물 다양성을 보호하며 고품질 탄소 배출권을 생성하는 것을 목표로 합니다. 이번 펀딩에는 영국 국제투자공사(BII)와 캐나다 연금투자위원회(CPP Investments) 등 주요 글로벌 기관 투자자들이 대거 참여했습니다. 이를 통해 향후 15년 동안 약 3,500만 톤의 이산화탄소를 격리할 수 있을 것으로 기대됩니다.</p><h3>주요 포인트</h3><ul><li>라틴 아메리카 내 퇴화된 토지 복원 및 지속 가능한 임업 관리 추진</li><li>글로벌 기관 투자자들의 대규모 참여를 통한 기후 변화 대응 자금 확보</li><li>생물 다양성 보존과 함께 약 3,500만 톤 규모의 탄소 격리 목표</li></ul><p>원문: <a href="https://www.esgtoday.com/btg-pactual-tig-raises-over-1-2-billion-for-reforestation-and-restoration-strategy/?utm_source=rss&utm_medium=rss&utm_campaign=btg-pactual-tig-raises-over-1-2-billion-for-reforestation-and-restoration-strategy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 129,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '영 FCA, ESG 평가기관 대상 보고 요건 시범 운영',
      author: '관리자',
      date: '2026.04.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>영국 금융감독청(FCA)이 ESG 평가 및 데이터 제공업체를 대상으로 보고 요건을 테스트하는 시범 운영(Pilot) 프로그램을 시작합니다. 이번 조치는 ESG 평가 시장을 FCA의 규제 범위에 포함시키려는 영국 정부의 결정에 따른 것으로, 평가 프로세스의 투명성과 신뢰성을 높이는 것이 목적입니다. 참여 기업들은 향후 도입될 정식 규제에 대비하여 자발적 행동 강령에 따른 보고 체계를 미리 점검하게 됩니다.</p><h3>주요 포인트</h3><ul><li>영국 정부의 ESG 평가 시장 규제 공식화에 따른 선제적 대응</li><li>2023년 발표된 자발적 행동 강령(Code of Conduct)을 기반으로 한 보고 체계 구축</li><li>평가 방법론의 투명성 제고 및 잠재적 이해상충 방지를 통한 시장 무결성 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/fca-to-pilot-reporting-requirements-for-esg-ratings-providers/?utm_source=rss&utm_medium=rss&utm_campaign=fca-to-pilot-reporting-requirements-for-esg-ratings-providers" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 130,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아크메아, 기후 및 자연 전환 계획 발표',
      author: '관리자',
      date: '2026.04.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>네덜란드의 보험 및 금융 서비스 그룹인 아크메아(Achmea)가 기후 변화 대응과 자연 보호를 통합한 '기후 및 자연 전환 계획'을 발표했습니다. 이 계획은 2050년까지 투자 및 보험 포트폴리오 전반에서 넷제로를 달성하고, 생물다양성 손실을 막아 '자연 긍정(Nature Positive)'을 실현하는 것을 목표로 합니다. 아크메아는 이를 위해 화석 연료 투자 단계적 폐지, 녹색 금융 확대, 기업 관여 활동 강화 등 구체적인 로드맵을 제시했습니다.</p><h3>주요 포인트</h3><ul><li>2050년까지 투자 및 보험 포트폴리오의 온실가스 순배출 제로(Net Zero) 달성 목표</li><li>2030년까지 기업 채권 및 주식 포트폴리오의 탄소 발자국을 2019년 대비 50% 감축</li><li>생물다양성 보호와 산림 파괴 방지를 위해 투자 대상 기업과의 소통 및 정책 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/achmea-publishes-climate-and-nature-transition-plan/?utm_source=rss&utm_medium=rss&utm_campaign=achmea-publishes-climate-and-nature-transition-plan" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 131,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '美 23개 주, 신용평가사 ESG 활용에 경고 서한 발송',
      author: '관리자',
      date: '2026.04.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미국 23개 주의 검찰총장 연합이 무디스, S&P, 피치 등 세계 3대 신용평가사에 ESG 요소를 신용등급 산정에 활용하는 것에 대해 경고 서한을 보냈습니다. 이들은 ESG 지표가 객관적인 재무 위험 평가보다는 특정 정치적 의제를 추진하는 도구로 오용될 수 있다는 우려를 표명했습니다. 특히 ESG 평가 방식의 불투명성과 일관성 부족이 소비자 보호법 위반 소지가 있음을 지적하며 신용평가사의 중립성을 강력히 요구했습니다.</p><h3>주요 포인트</h3><ul><li>3대 신용평가사에 ESG 평가 기준의 투명성 및 법적 준수 여부 확인 요구</li><li>ESG 요소가 재무적 실질성보다 정치적 목적으로 활용될 가능성에 대한 경고</li><li>미국 내 보수 성향 주들을 중심으로 확산되는 ESG 반대(Anti-ESG) 움직임의 일환</li></ul><p>원문: <a href="https://www.esgtoday.com/multi-state-coalition-warns-moodys-sp-fitch-over-use-of-esg-in-credit-ratings/?utm_source=rss&utm_medium=rss&utm_campaign=multi-state-coalition-warns-moodys-sp-fitch-over-use-of-esg-in-credit-ratings" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 132,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '온실가스 프로토콜, 초대 CEO로 팀 모힌 선임',
      author: '관리자',
      date: '2026.04.28',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>온실가스 배출량 산정 표준을 제공하는 온실가스 프로토콜(GHG Protocol)이 초대 CEO로 지속가능성 전략 전문가인 팀 모힌(Tim Mohin)을 임명했습니다. 팀 모힌은 과거 GRI(글로벌 리포팅 이니셔티브)의 수장을 역임했으며, 인텔과 애플 등 글로벌 기업에서 ESG 전략을 이끈 베테랑입니다. 이번 인사는 전 세계적으로 강화되는 탄소 공시 규제에 대응하여 조직의 거버넌스를 강화하고 표준을 현대화하기 위한 전략적 결정입니다.</p><h3>주요 포인트</h3><ul><li>GRI 전 CEO 출신인 팀 모힌을 초대 CEO로 영입하여 리더십 및 전문성 강화</li><li>글로벌 공시 규제 확대에 따라 신뢰할 수 있는 온실가스 산정 표준의 중요성 증대</li><li>WRI와 WBCSD의 협력 하에 조직 운영 체계를 개편하고 표준 업데이트 가속화</li></ul><p>원문: <a href="https://www.esgtoday.com/ghg-protocol-appoints-tim-mohin-as-first-ceo/?utm_source=rss&utm_medium=rss&utm_campaign=ghg-protocol-appoints-tim-mohin-as-first-ceo" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 123,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '빌 게이츠의 테라파워, 미국 최초 차세대 원자로 착공',
      author: '관리자',
      date: '2026.04.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>빌 게이츠가 설립한 원자력 기술 기업 테라파워가 와이오밍주 케머러에서 미국 최초의 상용 차세대 원자로인 '나트륨(Natrium)' 원자로 건설에 공식 착수했습니다. 이 원자로는 액체 나트륨을 냉각재로 사용하며, 용융염 에너지 저장 시스템을 통합해 재생 에너지의 변동성에 맞춰 전력 출력을 조절할 수 있는 유연성을 갖췄습니다. 이번 프로젝트는 탄소 배출 없는 안정적인 기저 부하 전력을 제공함으로써 미국의 에너지 전환과 탈탄소화 목표 달성에 중요한 이정표가 될 전망입니다.</p><h3>주요 포인트</h3><ul><li>미국 내 최초의 상용 차세대 원자로 건설 프로젝트로, 기존 원전보다 안전하고 효율적인 에너지 생산 지향</li><li>나트륨 냉각 기술과 에너지 저장 시스템을 결합하여 전력망의 유연성과 안정성을 동시에 확보</li><li>노후 석탄 화력 발전소 부지를 활용함으로써 지역 경제 활성화와 청정 에너지로의 전환 모델 제시</li></ul><p>원문: <a href="https://www.esgtoday.com/bill-gates-terrapower-starts-construction-on-first-u-s-advanced-nuclear-reactor/?utm_source=rss&utm_medium=rss&utm_campaign=bill-gates-terrapower-starts-construction-on-first-u-s-advanced-nuclear-reactor" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 124,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '슈나이더 일렉트릭, 기후 리스크 관리 솔루션 출시',
      author: '관리자',
      date: '2026.04.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>슈나이더 일렉트릭의 컨설팅 부문인 SE 어드바이저리 서비스가 기업의 기후 리스크 관리를 지원하는 '기후를 위한 리소스 어드바이저 플러스(Resource Advisor+ for Climate)'를 출시했습니다. 이 솔루션은 기후 변화로 인한 물리적 위험과 저탄소 경제 전환에 따른 전환 위험을 통합적으로 분석하고 관리할 수 있도록 설계되었습니다. 특히 CSRD 및 SEC와 같은 글로벌 기후 공시 규제가 강화되는 상황에서 기업들이 데이터에 기반한 의사결정을 내리고 비즈니스 회복탄력성을 확보할 수 있도록 돕습니다.</p><h3>주요 포인트</h3><ul><li>물리적 및 전환적 기후 리스크의 식별, 정량화 및 통합 관리 지원</li><li>CSRD, SEC 등 강화되는 글로벌 기후 관련 공시 규제에 대한 대응력 강화</li><li>데이터 기반 시나리오 분석을 통한 재무적 영향 평가 및 전략적 의사결정 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/schneider-electric-launches-new-climate-risk-assessment-and-management-solution/?utm_source=rss&utm_medium=rss&utm_campaign=schneider-electric-launches-new-climate-risk-assessment-and-management-solution" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 125,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '메타, 우주 태양광으로 데이터 센터 야간 전력 공급 추진',
      author: '관리자',
      date: '2026.04.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>메타(Meta)가 위성 스타트업 오버뷰 에너지(Overview Energy)와 협력하여 우주 기반 태양광 에너지를 데이터 센터에 공급하는 계약을 체결했습니다. 이 기술은 우주에서 수집한 태양 에너지를 지상으로 전송하여, 기존 지상 태양광 발전의 한계였던 야간 전력 공급 문제를 해결하는 것을 목표로 합니다. 메타는 이를 통해 2030년 넷제로 달성 및 24시간 무탄소 에너지 운영이라는 지속가능성 목표를 가속화할 방침입니다.</p><h3>주요 포인트</h3><ul><li>우주 기반 태양광 발전(SBSP)을 통한 야간 및 상시 청정 에너지 확보</li><li>지상 태양광의 간헐성 문제를 극복하여 데이터 센터의 안정적인 전력 운영 지원</li><li>메타의 2030년 가치 사슬 전반 넷제로 및 24/7 무탄소 에너지 목표 달성 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/meta-signs-deal-to-power-data-centers-at-night-with-solar-energy-from-space/?utm_source=rss&utm_medium=rss&utm_campaign=meta-signs-deal-to-power-data-centers-at-night-with-solar-energy-from-space" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 126,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '세계은행, 아마존 탄소 제거 연계 1억 2천만 달러 채권 발행',
      author: '관리자',
      date: '2026.04.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>세계은행이 브라질 아마존의 생태계 복원을 지원하기 위해 1억 2,000만 달러 규모의 '생태계 복원 채권'을 발행했습니다. 이 채권은 투자자들이 정기적인 이자 수익의 일부를 포기하는 대신, 재조림 프로젝트를 통해 생성되는 탄소 제거 크레딧(CRU)의 판매 수익을 배당받는 혁신적인 구조를 가지고 있습니다. 이를 통해 민간 자본을 환경 보호 프로젝트에 효과적으로 유입시키고 기후 변화 대응을 가속화할 것으로 기대됩니다.</p><h3>주요 포인트</h3><ul><li>브라질 아마존 지역의 대규모 재조림 및 생태계 복원 프로젝트를 지원하기 위한 9년 만기 채권입니다.</li><li>브라질 스타트업 '몸박(Mombak)'이 프로젝트를 수행하며, 생성된 탄소 제거 크레딧은 마이크로소프트 등과의 구매 계약을 통해 수익을 창출합니다.</li><li>세계은행이 원금을 보장하는 구조로 설계되어 민간 투자자의 리스크를 낮추면서 생물다양성 보존 및 탄소 제거에 기여합니다.</li></ul><p>원문: <a href="https://www.esgtoday.com/world-bank-launches-120-million-ecosystem-restoration-bond-backed-by-amazon-carbon-removal-deal/?utm_source=rss&utm_medium=rss&utm_campaign=world-bank-launches-120-million-ecosystem-restoration-bond-backed-by-amazon-carbon-removal-deal" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 127,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아문디, 30억 유로 규모 EU 지원 그린본드 펀드 운용',
      author: '관리자',
      date: '2026.04.27',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽 최대 자산운용사 아문디(Amundi)가 신흥 시장의 녹색 전환을 지원하기 위한 최대 30억 유로 규모의 '글로벌 그린본드 이니셔티브(GGBI)' 펀드 운용사로 선정되었습니다. 이 펀드는 유럽연합(EU)과 주요 개발금융기관의 지원을 받는 혼합 금융(Blended Finance) 구조를 통해 민간 자본을 유치하는 것을 목표로 합니다. 공공 자금으로 투자 위험을 낮춰 신흥국의 기후 대응 및 지속 가능한 인프라 구축에 필요한 자금을 공급할 예정입니다. 이는 EU의 '글로벌 게이트웨이' 전략의 핵심 프로젝트 중 하나로 평가받습니다.</p><h3>주요 포인트</h3><ul><li>신흥국 및 개발도상국의 녹색 채권 발행 지원을 위해 최대 30억 유로 규모로 조성</li><li>EU와 개발금융기관이 위험을 분담하는 혼합 금융 방식을 통해 민간 투자 유치 촉진</li><li>에너지 전환 및 기후 회복력 강화를 위한 신흥 시장의 자본 접근성 확대 목표</li></ul><p>원문: <a href="https://www.esgtoday.com/amundi-to-manage-new-e3-billion-eu-backed-green-bond-blended-finance-fund/?utm_source=rss&utm_medium=rss&utm_campaign=amundi-to-manage-new-e3-billion-eu-backed-green-bond-blended-finance-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 120,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '영국, 가스-전기 요금 연동 해제 및 청정 에너지 확대',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>영국 정부는 천연가스 가격이 전체 전기 요금을 좌우하는 현재의 시장 구조를 개편하여 소비자 부담을 줄이고 청정 에너지로의 전환을 가속화할 계획입니다. '전력 시장 구조 검토(REMA)'를 통해 저렴한 재생에너지의 혜택이 실제 요금 인하로 이어지도록 하는 다양한 방안을 추진 중입니다. 이는 에너지 안보를 강화하고 2035년까지 탈탄소 전력 시스템을 구축하려는 국가 전략의 핵심입니다.</p><h3>주요 포인트</h3><ul><li>가스 가격이 전기 요금을 결정하는 현행 한계가격 결정 방식의 개편 추진</li><li>전력 생산 및 소비 위치에 따라 요금을 차등화하는 지역별 요금제 도입 검토</li><li>차액결제계약(CfD) 확대를 통한 재생에너지 투자 유인 및 가격 안정화 도모</li></ul><p>원문: <a href="https://www.carbonbrief.org/qa-how-the-uk-government-aims-to-break-link-between-gas-and-electricity-prices/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 121,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '청정 에너지, 사상 처음으로 화석 연료 발전 감소 견인',
      author: '관리자',
      date: '2026.04.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2025년 재생에너지가 석탄을 제치고 세계 최대의 전력 공급원이 될 것으로 전망됩니다. 이는 청정 에너지의 성장세가 전 세계 전력 수요 증가폭을 앞지르기 시작했음을 의미하며, 화석 연료 발전이 사상 처음으로 구조적 감소 단계에 진입하는 역사적 전환점이 될 것입니다. 국제에너지기구(IEA)에 따르면 향후 3년간 늘어나는 전력 수요는 재생에너지와 원자력 등 저탄소 에너지원만으로도 충분히 충당 가능할 것으로 보입니다.</p><h3>주요 포인트</h3><ul><li>2025년 재생에너지가 석탄을 추월해 세계 최대 전력원으로 부상</li><li>청정 에너지 공급 확대가 화석 연료 발전을 밀어내는 '역전 현상' 발생</li><li>저탄소 에너지원이 2026년까지 전 세계 전력 수요 증가분 전체를 감당할 전망</li></ul><p>원문: <a href="https://www.carbonbrief.org/clean-energy-pushes-fossil-fuel-power-into-reverse-for-first-time-ever/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 122,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '과학자들, 화석연료 신규 확장 중단 촉구',
      author: '관리자',
      date: '2026.04.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>콜롬비아에서 개최된 화석연료 전환 정상회의에서 과학자들은 기후 위기 대응을 위해 화석연료의 신규 확장을 즉각 중단해야 한다는 권고안을 제시했습니다. 이번 회의는 화석연료 생산국들이 모여 에너지 전환을 논의하는 첫 사례로, 석탄, 석유, 가스 프로젝트의 추가 개발 금지를 핵심 과제로 다루었습니다. 전문가들은 지구 온난화를 제한하기 위해 기존 화석연료 인프라의 단계적 폐쇄와 재생에너지로의 신속한 전환이 필수적이라고 강조했습니다.</p><h3>주요 포인트</h3><ul><li>화석연료 신규 탐사 및 생산 시설 확장의 즉각적인 중단 권고</li><li>파리 협정 목표에 부합하는 화석연료 퇴출을 위한 국제적 협력 체계 구축</li><li>개발도상국의 에너지 전환을 돕기 위한 재정 지원 및 기술 이전의 중요성 강조</li></ul><p>원문: <a href="https://www.carbonbrief.org/revealed-scientists-tell-colombia-fossil-fuel-transition-summit-to-halt-new-expansion/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 115,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '알리안츠GI, 독일 배터리 저장 플랫폼 GESI 지분 과반 인수',
      author: '관리자',
      date: '2026.04.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 자산운용사 알리안츠 글로벌 인베스터스(AllianzGI)가 독일의 배터리 에너지 저장 시스템(BESS) 플랫폼인 GESI의 지분 51%를 인수했습니다. 이번 투자는 알리안츠GI의 인프라 주식 전략의 일환으로, 재생 에너지로의 전환을 지원하고 전력망의 유연성을 확보하기 위해 추진되었습니다. GESI는 독일 내 대규모 배터리 저장 시설을 개발 및 운영하며, 풍력 및 태양광 발전의 변동성을 보완하는 역할을 수행합니다. 알리안츠GI는 이번 인수를 통해 지속 가능한 에너지 인프라 포트폴리오를 더욱 강화할 방침입니다.</p><h3>주요 포인트</h3><ul><li>알리안츠GI, 독일 GESI 지분 51%를 확보하며 대주주 지위 획득</li><li>에너지 전환 가속화를 위한 대규모 배터리 에너지 저장 시스템(BESS) 투자 확대</li><li>전력망 안정성 및 재생 에너지 활용도 제고를 위한 전략적 인프라 구축</li></ul><p>원문: <a href="https://www.esgtoday.com/allianzgi-acquires-majority-stake-in-battery-storage-platform-gesi/?utm_source=rss&utm_medium=rss&utm_campaign=allianzgi-acquires-majority-stake-in-battery-storage-platform-gesi" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 116,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '유럽 에너지 위기 대응과 재생에너지의 석탄 추월',
      author: '관리자',
      date: '2026.04.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽연합(EU)은 과거 에너지 위기 대응 사례를 분석하며 향후 가스 수요 감축과 재생에너지 전환 가속화를 골자로 한 에너지 안보 계획을 점검하고 있습니다. 전 세계적으로, 특히 G7 국가들을 중심으로 재생에너지 발전량이 석탄을 추월하는 역사적인 전환점이 관측되며 에너지 전환이 가속화되고 있습니다. 또한 콜롬비아에서는 화석 연료 사용을 단계적으로 폐지하기 위한 국제적 협력을 논의하는 정상회의가 개최되어 기후 위기 대응을 위한 연대를 강화했습니다.</p><h3>주요 포인트</h3><ul><li>EU의 에너지 안보 강화를 위한 가스 의존도 탈피 및 공급망 다변화 전략 점검</li><li>G7 국가들의 전력 생산에서 재생에너지가 석탄 비중을 넘어서는 에너지 전환의 진전</li><li>화석연료 비확산 조약(Fossil Fuel Non-Proliferation Treaty) 추진을 위한 콜롬비아 정상회의 개최</li></ul><p>원문: <a href="https://www.carbonbrief.org/debriefed-24-april-2024-europes-energy-crisis-plan-renewables-overtake-coal-colombias-fossil-fuel-summit/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 117,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '중국 지도부, 화석 연료 \'엄격 통제\' 및 녹색 전환 가속화',
      author: '관리자',
      date: '2026.04.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중국 정부는 지구의 날을 맞아 화석 연료 소비를 엄격히 통제하고 경제 전반의 녹색 전환을 가속화하기 위한 새로운 정책 지침을 발표했습니다. 이번 지침은 기존의 에너지 소비 총량 관리 체계에서 탄소 배출 총량 관리 체계로의 근본적인 전환을 명시하고 있습니다. 중국은 2030년까지 비화석 에너지 소비 비중을 확대하고 탄소 배출 정점을 달성하기 위한 구체적인 로드맵을 재확인했습니다. 이는 중국이 기후 목표 달성을 위해 에너지 구조를 대대적으로 개편하겠다는 강력한 의지를 표명한 것입니다.</p><h3>주요 포인트</h3><ul><li>석탄, 석유 등 화석 연료 소비에 대한 단계적 감축 및 엄격한 통제 체계 구축</li><li>에너지 효율 중심에서 탄소 배출량 중심으로 국가 관리 지표의 패러다임 전환</li><li>태양광, 풍력 등 재생 에너지와 원자력 발전의 비중을 획기적으로 확대</li></ul><p>원문: <a href="https://www.carbonbrief.org/qa-chinas-leadership-calls-for-strict-control-of-fossil-fuels/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 118,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '대서양 해류(AMOC) 붕괴 위기: 지구 온난화의 경고',
      author: '관리자',
      date: '2026.04.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대서양 거대 순환 해류인 AMOC는 전 지구의 열을 재분배하여 기후 균형을 유지하는 핵심적인 시스템입니다. 그러나 지구 온난화로 인한 빙하 해빙과 담수 유입 증가로 인해 이 해류의 순환 동력이 역대 최저 수준으로 약화되었습니다. 최근 과학계는 AMOC가 예상보다 빨리 붕괴 임계점에 도달할 수 있으며, 이는 전 지구적 기후 체계에 돌이킬 수 없는 재앙을 초래할 수 있다고 경고합니다.</p><h3>주요 포인트</h3><ul><li>AMOC는 따뜻한 표층수를 북쪽으로, 차가운 심층수를 남쪽으로 운반하는 '거대 컨베이어 벨트' 역할을 함</li><li>지구 온난화에 따른 북대서양 염도 감소가 해류 순환을 방해하여 현재 1,000년 만에 가장 약해진 상태임</li><li>해류 붕괴 시 유럽의 급격한 기온 하강, 북미 동해안 해수면 상승, 열대 지역 강수 패턴 변화 등 심각한 피해 예상</li></ul><p>원문: <a href="https://www.carbonbrief.org/amoc-is-global-warming-tipping-key-atlantic-ocean-currents-towards-collapse/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 119,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EU, 화석 연료 가격 충격 대비 44개 행동 전략 발표',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽연합(EU) 집행위원회는 중동 분쟁 등으로 인한 화석 연료 가격 변동성으로부터 시민들을 보호하기 위해 44가지 행동 과제를 담은 새로운 전략을 발표했습니다. 이 전략은 에너지 안보를 강화하고 화석 연료에 대한 의존도를 낮추어 외부의 가격 충격이 유럽 경제에 미치는 영향을 최소화하는 데 중점을 둡니다. 재생 에너지 확대와 에너지 효율 개선을 통해 장기적인 에너지 자립을 달성하고 기후 목표를 달성하겠다는 의지를 담고 있습니다. 특히 취약 계층을 보호하기 위한 지원책과 전력 시장 구조 개편을 통한 가격 안정화 방안이 포함되었습니다.</p><h3>주요 포인트</h3><ul><li>화석 연료 가격 급등에 대비한 44개의 구체적인 대응 조치 마련</li><li>히트펌프 보급 및 건물 개보수를 통한 에너지 효율 극대화</li><li>재생 에너지 전환 가속화를 통한 가스 및 석유 의존도 탈피</li><li>전력 가격과 가스 가격의 연동성을 낮추어 소비자 부담 완화</li></ul><p>원문: <a href="https://www.carbonbrief.org/iran-war-eu-strategy-sets-out-44-actions-to-limit-fossil-fuel-price-shocks/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 111,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아마존 지원 원전 기업 X-에너지, IPO로 10억 달러 조달',
      author: '관리자',
      date: '2026.04.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>아마존이 지원하는 차세대 원자력 기술 기업 X-에너지가 기업공개(IPO)를 통해 10억 달러 이상의 자금을 조달하는 데 성공했습니다. 이번에 확보된 자금은 소형모듈원전(SMR) 기술의 상용화와 프로젝트 배치를 가속화하는 데 투입될 예정입니다. 특히 AI 및 데이터 센터 운영에 필요한 막대한 전력을 탄소 배출 없이 공급하기 위한 대안으로 X-에너지의 기술이 주목받고 있습니다. 이번 성과는 청정 에너지 전환을 위한 민간 부문의 강력한 투자 의지를 보여줍니다.</p><h3>주요 포인트</h3><ul><li>X-에너지, IPO를 통해 10억 달러 이상의 대규모 자본 확충</li><li>차세대 소형모듈원전(SMR) 기술의 상용화 및 시장 진출 가속화</li><li>아마존 등 빅테크 기업의 무탄소 에너지 수요 충족을 위한 전략적 행보</li></ul><p>원문: <a href="https://www.esgtoday.com/amazon-backed-nuclear-tech-company-x-energy-raises-over-1-billion-in-ipo/?utm_source=rss&utm_medium=rss&utm_campaign=amazon-backed-nuclear-tech-company-x-energy-raises-over-1-billion-in-ipo" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 112,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '액센츄어, EMEA 지속가능성 서비스 총괄에 옌스 라우에 선임',
      author: '관리자',
      date: '2026.04.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 전문 서비스 기업 액센츄어가 옌스 라우에(Jens Laue)를 유럽·중동·아프리카(EMEA) 지역의 지속가능성 서비스 총괄로 임명했습니다. 라우에는 고객사가 지속가능성을 비즈니스 전략, 운영 및 가치 사슬 전반에 통합할 수 있도록 지원하는 역할을 수행하게 됩니다. 이번 인사는 기업들이 ESG 규제 대응을 넘어 실질적인 비즈니스 가치를 창출할 수 있도록 돕기 위한 액센츄어의 전략적 역량 강화의 일환입니다.</p><h3>주요 포인트</h3><ul><li>옌스 라우에를 EMEA 지역 지속가능성 서비스 부문의 새로운 리더로 선임</li><li>KPMG 독일 ESG 자문 총괄 출신으로, 20년 이상의 풍부한 컨설팅 경험 보유</li><li>고객사의 넷제로 달성 및 순환경제 전환 등 지속가능한 비즈니스 모델 구축 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/accenture-appoints-jens-laue-as-sustainability-services-lead-for-emea/?utm_source=rss&utm_medium=rss&utm_campaign=accenture-appoints-jens-laue-as-sustainability-services-lead-for-emea" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 113,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '데케이드 에너지, 물류 전기화 위해 2,200만 유로 투자 유치',
      author: '관리자',
      date: '2026.04.24',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>파리에 본사를 둔 물류 전기화 전문 기업 데케이드 에너지(Decade Energy)가 2,200만 유로(약 320억 원) 규모의 시리즈 A 투자 유치를 완료했습니다. 이번 투자금은 물류 기업들의 전기차 전환을 지원하는 인프라 플랫폼 확장과 기술 고도화에 사용될 예정입니다. 데케이드 에너지는 충전 인프라 설계부터 설치, 에너지 관리 및 금융 솔루션까지 통합적으로 제공하여 상용차의 탄소 배출 감축을 돕습니다. 특히 '서비스형 충전(CaaS)' 모델을 통해 기업들이 초기 비용 부담 없이 전기차 플릿(Fleet)을 운영할 수 있도록 지원합니다.</p><h3>주요 포인트</h3><ul><li>2,200만 유로 규모의 시리즈 A 투자 유치 성공</li><li>물류 기업을 위한 통합 전기화 인프라 및 에너지 관리 플랫폼 제공</li><li>유럽 전역으로 서비스 확장 및 탄소 중립 물류 생태계 구축 가속화</li></ul><p>원문: <a href="https://www.esgtoday.com/decade-energy-raises-e22-million-to-scale-fleet-electrification-infrastructure-platform/?utm_source=rss&utm_medium=rss&utm_campaign=decade-energy-raises-e22-million-to-scale-fleet-electrification-infrastructure-platform" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 114,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GM, 미국 내 모든 사업장 100% 재생에너지 전력 확보',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>GM이 미국 내 모든 제조 시설 및 사무실에 필요한 전력을 100% 재생에너지로 조달하는 이정표를 달성했습니다. 이는 당초 2050년으로 설정했던 목표를 25년 앞당긴 것이며, 2021년에 수정한 2030년 목표보다도 5년이나 빠른 성과입니다. GM은 현재 미국 11개 주에서 17개의 재생에너지 프로젝트를 통해 총 2.35GW 규모의 전력을 확보하고 있습니다. 이번 성과를 발판 삼아 2035년까지 전 세계 모든 사업장의 전력을 100% 재생에너지로 전환할 계획입니다.</p><h3>주요 포인트</h3><ul><li>당초 2050년 목표를 25년 조기 달성하며 업계 내 지속가능성 리더십 강화</li><li>자동차 업계 최대 규모인 2.35GW의 재생에너지 포트폴리오(11개 주, 17개 프로젝트) 구축</li><li>에너지 효율 개선, 직접 구매(PPA), 에너지 저장 시스템을 결합한 탄력적인 전력망 전략 추진</li></ul><p>원문: <a href="https://www.esgtoday.com/gm-achieves-100-renewable-energy-powered-electricity-in-u-s/?utm_source=rss&utm_medium=rss&utm_campaign=gm-achieves-100-renewable-energy-powered-electricity-in-u-s" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 106,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '라임 락 뉴 에너지, 에너지 전환 펀드 6억 4천만 달러 유치',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>성장 중심의 사모펀드 투자사인 라임 락 뉴 에너지(LRNE)가 두 번째 에너지 전환 펀드인 'LRNE II'를 6억 4,000만 달러 규모로 최종 마감했습니다. 이 펀드는 북미 지역의 에너지 전환을 가속화하는 성장 단계 기업들에 자본을 제공하는 것을 목표로 합니다. 재생 에너지, 에너지 효율성, 그리드 현대화 등 탈탄소화에 기여하는 기술과 서비스를 보유한 기업에 집중 투자할 계획입니다.</p><h3>주요 포인트</h3><ul><li>목표액을 초과 달성하여 총 6억 4,000만 달러 규모로 펀드 조성 완료</li><li>북미 지역의 에너지 전환 및 탈탄소화 관련 성장 단계 기업에 집중 투자</li><li>2019년 설립 이후 두 번째 펀드로, 1호 펀드(3억 7,500만 달러) 대비 규모 대폭 확대</li></ul><p>원문: <a href="https://www.esgtoday.com/lime-rock-new-energy-raises-640-million-for-energy-transition-private-equity-fund/?utm_source=rss&utm_medium=rss&utm_campaign=lime-rock-new-energy-raises-640-million-for-energy-transition-private-equity-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 107,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '메타, 데이터 센터용 1GW 에너지 저장 계약 체결',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>메타(Meta)는 장기 에너지 저장 기술 전문 기업인 눈 에너지(Noon Energy)와 최대 1GW 규모의 에너지 저장 용량을 확보하는 계약을 체결했습니다. 이번 협력은 메타의 데이터 센터에 재생 에너지를 안정적으로 공급하고, 24시간 무탄소 에너지(CFE) 목표를 달성하기 위한 전략적 행보입니다. 눈 에너지의 혁신적인 탄소-산소 배터리 기술은 기존 리튬 이온 배터리보다 훨씬 긴 시간 동안 에너지를 저장할 수 있어 재생 에너지의 간헐성 문제를 해결하는 데 기여할 전망입니다.</p><h3>주요 포인트</h3><ul><li>눈 에너지와 1GW 규모의 초장기 에너지 저장 장치(LDES) 공급 계약 체결</li><li>탄소-산소 배터리 기술을 활용해 재생 에너지의 간헐성 극복 및 24/7 무탄소 전력 공급 추진</li><li>AI 구동 등으로 급증하는 데이터 센터의 전력 수요를 친환경적으로 충족하기 위한 지속 가능한 인프라 확보</li></ul><p>원문: <a href="https://www.esgtoday.com/meta-signs-1-gw-energy-storage-deal-to-power-data-centers/?utm_source=rss&utm_medium=rss&utm_campaign=meta-signs-1-gw-energy-storage-deal-to-power-data-centers" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 108,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'bp 주주들, 기후 공시 축소 시도 압도적 부결',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>영국 에너지 기업 bp의 연례 주주총회에서 기후 변화 보고 빈도를 줄이려는 사측의 제안이 주주들의 압도적인 반대로 부결되었습니다. bp 이사회는 기후 전략 보고를 매년에서 3년 주기로 변경하려 했으나, 주주들은 투명성 유지를 선택하며 이를 거부했습니다. 또한, 파리 협정에 부합하는 배출량 감축 목표 설정을 요구하는 행동주의 주주들의 제안도 함께 부결되었습니다. 이번 결과는 에너지 전환 과정에서도 기후 관련 공시의 연속성과 책임 경영을 중시하는 투자자들의 의지를 명확히 보여줍니다.</p><h3>주요 포인트</h3><ul><li>기후 보고 주기를 1년에서 3년으로 연장하려던 bp 이사회의 제안이 약 84%의 반대로 부결됨</li><li>행동주의 투자자 그룹 'Follow This'가 제안한 Scope 3 감축 목표 강화 안건도 낮은 찬성률로 부결</li><li>주주들은 bp의 사업 전략 변화와 무관하게 기후 데이터에 대한 정기적이고 투명한 공개를 강력히 요구</li></ul><p>원문: <a href="https://www.esgtoday.com/bp-shareholders-defeat-resolution-aimed-at-reducing-climate-disclosures/?utm_source=rss&utm_medium=rss&utm_campaign=bp-shareholders-defeat-resolution-aimed-at-reducing-climate-disclosures" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 109,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아마존, 인도 벼 농사 탄소 감축 위해 68만 톤 탄소 크레딧 계약',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>아마존이 인도 벼 농사에서 발생하는 온실가스 배출을 줄이기 위해 68만 5천 톤 규모의 탄소 크레딧 구매 계약을 체결했습니다. 이번 프로젝트는 국제쌀연구소(IRRI) 및 자연보호협회(TNC)와 협력하여 인도 농민들에게 지속 가능한 농업 기술을 보급하는 데 중점을 둡니다. 이를 통해 쌀 생산 과정의 메탄 배출을 줄이고 농가의 수익성을 높이는 등 환경적·경제적 가치를 동시에 창출할 계획입니다.</p><h3>주요 포인트</h3><ul><li>향후 10년간 68만 5천 톤 규모의 탄소 크레딧을 확보하는 장기 오프테이크 계약 체결</li><li>논물 관리(AWD) 기술 도입을 통해 지구 온난화 지수가 높은 메탄 배출을 획기적으로 감축</li><li>인도 내 수만 명의 농민을 대상으로 교육과 기술을 지원하여 농업 생산성 및 소득 증대 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/amazon-signs-685000-ton-carbon-credit-deal-to-reduce-emissions-from-rice-farming-in-india/?utm_source=rss&utm_medium=rss&utm_campaign=amazon-signs-685000-ton-carbon-credit-deal-to-reduce-emissions-from-rice-farming-in-india" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 110,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EU, 화석연료 탈피 위해 \'야심찬\' 전기화 목표 설정',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽연합 집행위원회(EC)는 화석연료 의존도를 낮추고 탄소 중립을 가속화하기 위한 'AccelerateEU' 전략을 발표했습니다. 이 전략은 현재 약 23% 수준인 최종 에너지 소비 내 전력 비중을 2030년까지 35%, 2040년까지 50%로 대폭 확대하는 것을 목표로 합니다. 이를 위해 산업 공정의 전기화, 히트펌프 보급, 전기차 인프라 확충 및 전력망 현대화에 집중적인 투자가 이루어질 예정입니다.</p><h3>주요 포인트</h3><ul><li>2040년까지 최종 에너지 소비의 절반(50%)을 전력으로 전환하는 야심찬 목표 제시</li><li>산업용 보일러 및 건물 난방의 전기화, 전기차 충전망 확대를 통한 탈탄소화 가속</li><li>재생에너지 수용성 제고를 위한 전력망 현대화 및 디지털화 추진</li></ul><p>원문: <a href="https://www.esgtoday.com/eu-to-set-ambitious-electrification-target-to-accelerate-transition-away-from-fossil-fuels/?utm_source=rss&utm_medium=rss&utm_campaign=eu-to-set-ambitious-electrification-target-to-accelerate-transition-away-from-fossil-fuels" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 101,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'DSV·유나이티드·MS·필립스66, 지속가능 항공유(SAF) 협력 체결',
      author: '관리자',
      date: '2026.04.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 물류 기업 DSV가 유나이티드 항공, 마이크로소프트, 필립스 66와 협력하여 지속가능 항공유(SAF) 구매 및 사용을 위한 파트너십을 체결했습니다. 이번 협약은 필립스 66가 생산한 SAF를 유나이티드 항공이 운항에 사용하고, 이를 통해 DSV와 마이크로소프트의 항공 화물 운송 과정에서 발생하는 탄소 배출을 줄이는 것을 목표로 합니다. 이는 항공 산업의 탈탄소화를 가속화하기 위한 다자간 협력 모델로, 기업의 공급망 내 탄소 발자국 감축에 기여할 전망입니다.</p><h3>주요 포인트</h3><ul><li>DSV, 유나이티드 항공, 마이크로소프트, 필립스 66 간의 지속가능 항공유(SAF) 공급 및 구매 협력</li><li>필립스 66의 정유 시설에서 생산된 SAF를 활용해 기존 항공유 대비 탄소 배출량 대폭 절감</li><li>마이크로소프트 등 기업 고객의 Scope 3(공급망) 탄소 배출 감축 목표 달성 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/dsv-united-airlines-microsoft-and-phillips-66-ink-sustainable-aviation-fuel-deal/?utm_source=rss&utm_medium=rss&utm_campaign=dsv-united-airlines-microsoft-and-phillips-66-ink-sustainable-aviation-fuel-deal" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 102,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '워터셰드, 지속가능성 데이터 정리를 위한 AI 에이전트 출시',
      author: '관리자',
      date: '2026.04.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기후 솔루션 기업 워터셰드(Watershed)가 기업의 복잡하고 파편화된 지속가능성 데이터를 효율적으로 관리할 수 있는 새로운 AI 에이전트를 출시했습니다. 이 도구는 유틸리티 청구서나 공급업체 송장 등 다양한 형식의 데이터를 자동으로 추출하고 분류하여 데이터의 정확성을 높입니다. 이를 통해 기업은 탄소 배출량 측정 및 공시 준비에 소요되는 시간과 비용을 획기적으로 줄일 수 있습니다.</p><h3>주요 포인트</h3><ul><li>파편화된 비정형 데이터를 정형화된 지속가능성 데이터로 자동 변환</li><li>CSRD, SEC 등 강화되는 글로벌 ESG 공시 규제 대응 지원</li><li>데이터 추출 및 공급망 매핑 등 수작업 중심의 프로세스를 AI로 자동화</li></ul><p>원문: <a href="https://www.esgtoday.com/watershed-launches-new-ai-agents-to-clean-messy-sustainability-data/?utm_source=rss&utm_medium=rss&utm_campaign=watershed-launches-new-ai-agents-to-clean-messy-sustainability-data" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 103,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '쉘, 신규 석유·가스 시추 및 배출량 관련 기후 소송 직면',
      author: '관리자',
      date: '2026.04.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>환경 단체인 '지구의 친구들 네덜란드(Milieudefensie)'가 글로벌 에너지 기업 쉘(Shell)을 상대로 새로운 기후 소송을 제기했습니다. 이번 소송은 쉘이 2021년 법원의 탄소 감축 명령에도 불구하고 신규 석유 및 가스 시추 프로젝트에 지속적으로 투자하고 있다는 점을 문제 삼고 있습니다. 단체는 쉘의 이러한 행보가 파리 협정의 목표 달성을 방해하며 기업의 사회적 주의 의무를 위반하는 것이라고 주장하고 있습니다.</p><h3>주요 포인트</h3><ul><li>환경 단체, 쉘의 신규 화석 연료 탐사 및 개발 중단 강력 촉구</li><li>2021년 1심 판결인 '2030년까지 탄소 배출 45% 감축' 명령 이행 여부 논란</li><li>쉘의 지속적인 화석 연료 투자가 기후 위기 대응에 미치는 부정적 영향 강조</li></ul><p>원문: <a href="https://www.esgtoday.com/shell-faces-new-climate-lawsuit-over-oil-gas-drilling-emissions/?utm_source=rss&utm_medium=rss&utm_campaign=shell-faces-new-climate-lawsuit-over-oil-gas-drilling-emissions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 104,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '위성 영상 활용 산림 파괴 추적과 ESG 규제 대응',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>최근 EU 산림벌채 규정(EUDR) 등 글로벌 환경 규제가 강화되면서 기업 공급망 내의 산림 파괴 여부를 입증하는 것이 필수적인 과제가 되었습니다. 위성 영상 기술과 AI 분석은 광범위한 지역의 토지 이용 변화를 실시간으로 추적하여 객관적이고 신뢰할 수 있는 데이터를 제공합니다. 이를 통해 기업은 ESG 공시 의무를 준수하고 공급망 투명성을 확보하여 환경적 리스크를 선제적으로 관리할 수 있습니다.</p><h3>주요 포인트</h3><ul><li>EUDR 등 엄격해지는 환경 규제 준수를 위한 위성 기반 모니터링의 중요성 증대</li><li>원격 탐사 기술을 활용한 과거 데이터 비교 및 실시간 산림 훼손 탐지 가능</li><li>정확한 데이터 기반의 ESG 리포팅을 통한 기업 신뢰도 및 투자 가치 제고</li></ul><p>원문: <a href="https://www.esgtoday.com/tracking-deforestation-and-land-use-change-with-satellite-imagery-implications-for-esg-compliance/?utm_source=rss&utm_medium=rss&utm_campaign=tracking-deforestation-and-land-use-change-with-satellite-imagery-implications-for-esg-compliance" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 105,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '글로벌 식량 위기, BECCS 배출 및 영국 태양광 논란',
      author: '관리자',
      date: '2026.04.22',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기후 변화와 분쟁으로 인해 전 세계 식량 시스템이 '대재앙' 수준의 위기에 직면해 있다는 경고가 나왔습니다. 이와 함께 탄소 제거 기술인 BECCS의 실제 배출량 문제와 영국의 태양광 발전소 건설을 둘러싼 토지 이용 갈등이 주요 ESG 쟁점으로 떠올랐습니다. 이번 리포트는 식량 안보, 에너지 전환, 그리고 탄소 중립 기술 간의 복잡한 이해관계를 다룹니다.</p><h3>주요 포인트</h3><ul><li>기후 위기와 지정학적 갈등이 결합되어 글로벌 식량 공급망의 취약성 및 기아 위험 심화</li><li>BECCS(바이오에너지 탄소 포집 및 저장) 기술의 실제 온실가스 감축 효과와 지속 가능성에 대한 의문 제기</li><li>영국 내 식량 생산용 토지의 태양광 발전소 전환을 둘러싼 농민과 에너지 개발자 간의 토지 이용 갈등</li></ul><p>원문: <a href="https://www.carbonbrief.org/cropped-22-april-2026-global-food-catastrophe-beccs-emissions-uk-solar-farm-controversy/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 96,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'Exergy3, 산업용 열 탈탄소화 위해 1,350만 달러 투자 유치',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에든버러 대학교에서 분사한 클린테크 스타트업 엑서지3(Exergy3)가 1,000만 파운드(약 1,350만 달러) 규모의 시드 투자를 유치했습니다. 이 회사는 남는 재생 에너지를 고온의 열로 변환하여 저장하는 혁신적인 열에너지 저장(TES) 기술을 보유하고 있습니다. 이번 투자금은 산업 공정에서 발생하는 탄소 배출을 줄이기 위한 기술 상용화와 시장 확장에 사용될 예정입니다.</p><h3>주요 포인트</h3><ul><li>최대 1,200°C의 고온 열을 공급하여 화석 연료 보일러를 대체하는 초고온 열에너지 저장 시스템 개발</li><li>전력망에서 버려지는 잉여 재생 에너지를 활용함으로써 에너지 비용 절감 및 탄소 배출 제로 달성 지원</li><li>에너지 임팩트 파트너스(EIP)가 주도한 이번 투자를 통해 기술 상용화 및 대규모 산업 현장 적용 가속화</li></ul><p>원문: <a href="https://www.esgtoday.com/exergy3-raises-13-5-million-to-decarbonize-industrial-heat-with-unused-renewable-energy/?utm_source=rss&utm_medium=rss&utm_campaign=exergy3-raises-13-5-million-to-decarbonize-industrial-heat-with-unused-renewable-energy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 97,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '에펠 인베스트먼트, 신규 단기 그린본드 펀드 출시',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>파리에 본사를 둔 자산운용사 에펠 인베스트먼트 그룹이 '에펠 단기 그린본드(Eiffel Short Term Green Bonds)' 펀드를 출시했습니다. 이 펀드는 금리 변동 리스크를 관리하면서도 환경 프로젝트에 자금을 지원하기 위해 만기가 짧은 녹색 채권에 집중 투자합니다. 특히 유럽 지속가능금융공시규제(SFDR)의 가장 엄격한 기준인 제9조(Article 9) 등급을 획득하여 높은 지속가능성을 입증했습니다.</p><h3>주요 포인트</h3><ul><li>SFDR 제9조 등급을 획득하여 최고 수준의 ESG 투자 기준 충족</li><li>단기 채권 포트폴리오 구성을 통해 금리 변동성에 따른 투자 위험 최소화</li><li>에너지 전환 및 기후 변화 대응 프로젝트를 위한 실질적인 자금 조달 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/eiffel-launches-new-short-term-green-bond-fund/?utm_source=rss&utm_medium=rss&utm_campaign=eiffel-launches-new-short-term-green-bond-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 98,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '기업들, 기후 행동 유지하며 넷제로 메시지 재구성 중',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>대다수의 기업이 기후 변화 대응 조치를 지속하고 있으나, 넷제로 관련 소통 방식은 전략적으로 수정하고 있습니다. 최근 조사에 따르면 기업들은 넷제로라는 용어 대신 '회복력'과 '비즈니스 가치'를 강조하는 방향으로 메시지를 재구성하고 있습니다. 이는 규제 강화와 외부의 비판적 시선을 의식한 결과로 보이지만, 실제 기후 목표 달성을 위한 내부적인 노력과 예산은 여전히 유지되고 있는 것으로 나타났습니다.</p><h3>주요 포인트</h3><ul><li>기업들이 넷제로 소통 시 '회복력'과 '경제적 이익'을 강조하는 방향으로 선회</li><li>규제 리스크와 감시를 피하기 위해 기후 성과를 대외적으로 알리지 않는 '그린허싱' 현상 관찰</li><li>소통 방식의 변화와 무관하게 대다수 기업은 기존의 기후 행동 계획과 예산을 유지</li></ul><p>원문: <a href="https://www.esgtoday.com/most-businesses-maintaining-climate-action-but-reframing-messaging-on-net-zero-survey/?utm_source=rss&utm_medium=rss&utm_campaign=most-businesses-maintaining-climate-action-but-reframing-messaging-on-net-zero-survey" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 99,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마즈-ofi, 코코아 공급망 탄소 감축 프로젝트 착수',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 식품 기업 마즈(Mars)와 원료 공급사 ofi가 코코아 공급망의 탄소 발자국을 줄이기 위한 대규모 협력 프로젝트를 시작했습니다. 이번 프로젝트는 코트디부아르의 코코아 농가를 대상으로 기후 스마트 농업 기술과 혼농임업을 도입하여 환경 영향을 최소화하는 데 목적이 있습니다. 이를 통해 마즈는 2050년까지 전체 가치 사슬에서 넷제로를 달성하겠다는 지속가능성 목표를 가속화할 방침입니다.</p><h3>주요 포인트</h3><ul><li>코트디부아르 농가 15,000명을 대상으로 지속 가능한 농법 교육 및 묘목 지원</li><li>혼농임업 및 산림 복원을 통해 생물 다양성 보존과 탄소 흡수원 강화</li><li>농가의 기후 변화 대응력을 높이기 위한 재정적 인센티브 및 기술적 지원 제공</li></ul><p>원문: <a href="https://www.esgtoday.com/mars-ofi-partner-to-cut-carbon-footprint-of-cocoa-supply-chain/?utm_source=rss&utm_medium=rss&utm_campaign=mars-ofi-partner-to-cut-carbon-footprint-of-cocoa-supply-chain" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 100,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '맹그로브 시스템즈, 바이오차 탄소 제거 플랫폼 \'그레인 에코시스템\' 인수',
      author: '관리자',
      date: '2026.04.21',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>탄소 제거 측정·보고·검증(dMRV) 플랫폼인 맹그로브 시스템즈가 바이오차 탄소 제거 전문 플랫폼 그레인 에코시스템을 인수했습니다. 이번 인수를 통해 맹그로브 시스템즈는 바이오차 프로젝트 개발자가 탄소 배출권을 보다 효율적으로 생성하고 관리할 수 있는 통합 솔루션을 제공할 계획입니다. 양사의 기술 결합은 탄소 제거 데이터의 투명성을 높이고 복잡한 인증 과정을 간소화하여 탄소 시장의 신뢰도를 높이는 데 기여할 것으로 기대됩니다.</p><h3>주요 포인트</h3><ul><li>맹그로브 시스템즈의 dMRV 기술과 그레인 에코시스템의 바이오차 관리 역량 통합</li><li>바이오차 프로젝트의 데이터 수집부터 탄소 배출권 발행까지의 전 과정 디지털화 및 가속화</li><li>탄소 제거 시장의 확장성과 투명성 확보를 위한 전략적 행보</li></ul><p>원문: <a href="https://www.esgtoday.com/mangrove-systems-acquires-biochar-carbon-removal-platform-grain-ecosystem/?utm_source=rss&utm_medium=rss&utm_campaign=mangrove-systems-acquires-biochar-carbon-removal-platform-grain-ecosystem" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 91,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ISSB 실무진, 자연 관련 공시를 독립 기준 대신 \'실무 지침\'으로 권고',
      author: '관리자',
      date: '2026.04.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>국제지속가능성기준위원회(ISSB) 실무진은 자연 및 생물다양성 관련 공시를 위해 별도의 독립된 표준을 제정하는 대신, 비강제적인 '실무 지침(Practice Statement)'을 개발할 것을 권고했습니다. 이는 기업들이 기존의 IFRS S1(일반 요구사항)을 자연 관련 위험과 기회에 효과적으로 적용할 수 있도록 돕기 위한 결정입니다. 실무진은 독립 표준 개발에 소요되는 시간을 줄이고, 기업들이 이미 존재하는 프레임워크를 활용해 신속하게 공시를 시작할 수 있도록 지원하고자 합니다.</p><h3>주요 포인트</h3><ul><li>자연 관련 공시를 위한 별도의 강제적 표준 대신 비강제적 실무 지침 제안</li><li>기업이 IFRS S1을 기반으로 생물다양성 및 생태계 관련 정보를 공시하도록 유도</li><li>자연 관련 재무정보 공개 협의체(TNFD)의 권고안을 적극 활용하여 지침 마련</li></ul><p>원문: <a href="https://www.esgtoday.com/issb-staff-recommend-non-mandatory-nature-reporting-statement-instead-of-standalone-standard/?utm_source=rss&utm_medium=rss&utm_campaign=issb-staff-recommend-non-mandatory-nature-reporting-statement-instead-of-standalone-standard" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 92,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '리뉴어블 메탈스, 배터리 재활용 확대를 위해 1,200만 달러 유치',
      author: '관리자',
      date: '2026.04.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>호주의 배터리 재활용 스타트업 리뉴어블 메탈스(Renewable Metals)가 1,200만 달러 규모의 시리즈 A 투자 유치에 성공했습니다. 이번 투자 라운드는 빌 게이츠가 설립한 브레이크스루 에너지 벤처스(BEV)와 바이레슨트 벤처스가 주도했습니다. 리뉴어블 메탈스는 독자적인 알칼리 기반 공정을 통해 리튬이온 배터리에서 핵심 광물을 높은 효율로 회수하며, 이번 투자금은 서호주 퍼스에 데모 플랜트를 건설하는 데 사용될 예정입니다.</p><h3>주요 포인트</h3><ul><li>빌 게이츠의 BEV 등이 참여한 1,200만 달러 규모의 투자를 통해 기술 상용화 및 시설 확대 추진</li><li>기존의 제련이나 산 침출 방식보다 비용이 저렴하고 폐기물 발생이 적은 친환경 알칼리 공법 활용</li><li>'블랙 매스' 공정 없이 배터리에서 직접 리튬, 니켈, 코발트 등 핵심 금속을 95% 이상 회수 가능</li></ul><p>원문: <a href="https://www.esgtoday.com/renewable-metals-raises-12-million-to-scale-battery-recycling-platform/?utm_source=rss&utm_medium=rss&utm_campaign=renewable-metals-raises-12-million-to-scale-battery-recycling-platform" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 93,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '하이네켄, 신임 글로벌 지속가능성 총괄 선임',
      author: '관리자',
      date: '2026.04.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 맥주 기업 하이네켄이 이케아(IKEA)의 기후 및 자연 부문 책임자였던 사이먼 헨젤-토마스를 신임 글로벌 지속가능성 총괄로 임명했습니다. 그는 하이네켄의 ESG 전략인 '더 나은 세상 양조(Brew a Better World) 2030'의 실행을 주도하며 전 세계적인 지속가능성 목표 달성에 힘쓸 예정입니다. 헨젤-토마스는 20년 이상의 지속가능성 분야 경험을 바탕으로 하이네켄의 환경 및 사회적 가치 창출을 이끌 것으로 기대됩니다.</p><h3>주요 포인트</h3><ul><li>이케아에서 기후 및 자연 전략을 총괄했던 베테랑 전문가 영입</li><li>하이네켄의 2030 탄소 중립 및 자원 순환 목표 달성 가속화</li><li>공급망 전반의 지속가능성 강화 및 사회적 책임 경영 확대</li></ul><p>원문: <a href="https://www.esgtoday.com/heineken-appoints-simon-henzell-thomas-as-new-global-sustainability-director/?utm_source=rss&utm_medium=rss&utm_campaign=heineken-appoints-simon-henzell-thomas-as-new-global-sustainability-director" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 94,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '델타항공, 2030년 SAF 10% 사용 목표 재확인',
      author: '관리자',
      date: '2026.04.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>델타항공은 최근 일부 언론에서 보도된 '지속가능항공유(SAF) 목표 폐기' 설을 공식 부인하며, 2030년까지 전체 연료의 10%를 SAF로 대체하겠다는 기존 목표를 재확인했습니다. 델타항공은 2050년 넷제로 달성을 위해 SAF가 핵심적인 역할을 할 것이라고 강조하며, 공급망 확보를 위한 노력을 지속하고 있습니다. 이번 발표는 항공 산업의 탈탄소화 의지를 다시 한번 공고히 한 것으로 평가받습니다.</p><h3>주요 포인트</h3><ul><li>2030년까지 항공유의 10%를 SAF로 전환한다는 기존 목표 유지 및 확인</li><li>일부 외신에서 제기된 목표 철회 보도에 대해 공식적으로 반박</li><li>공급 부족 및 높은 비용 문제 해결을 위해 파트너십 강화 및 정책 지원 촉구</li></ul><p>원문: <a href="https://www.esgtoday.com/delta-confirms-commitment-to-10-saf-by-2030-countering-media-reports/?utm_source=rss&utm_medium=rss&utm_campaign=delta-confirms-commitment-to-10-saf-by-2030-countering-media-reports" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 95,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '애플, 공급망 재생에너지 확대로 탄소 2,600만 톤 감축',
      author: '관리자',
      date: '2026.04.20',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>애플은 공급망 내 재생에너지 사용을 대폭 확대하여 누적 2,600만 톤 이상의 탄소 배출을 방지했다고 발표했습니다. 현재 320개 이상의 공급업체가 2030년까지 애플 제품 생산에 100% 재생에너지를 사용하기로 약속했으며, 이는 애플 직접 제조 지출의 95%에 달하는 규모입니다. 현재 공급망 전반에서 16.5기가와트(GW)의 재생에너지가 가동 중이며, 이를 통해 작년 한 해에만 1,850만 톤의 배출량을 줄였습니다. 이는 2030년까지 전체 가치 사슬에서 탄소 중립을 달성하려는 애플의 목표에 중요한 이정표가 될 전망입니다.</p><h3>주요 포인트</h3><ul><li>320개 이상의 공급업체가 2030년까지 100% 재생에너지 사용 서약 완료</li><li>공급망 내 16.5GW 규모의 재생에너지 가동으로 연간 2,550만 MWh 청정 전력 생산</li><li>애플 직접 제조 지출의 95%를 차지하는 파트너사들이 탄소 감축 활동에 동참</li></ul><p>원문: <a href="https://www.esgtoday.com/apple-avoids-over-26-million-tons-of-emissions-through-use-of-clean-energy-in-supply-chain/?utm_source=rss&utm_medium=rss&utm_campaign=apple-avoids-over-26-million-tons-of-emissions-through-use-of-clean-energy-in-supply-chain" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 86,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG 주간 리뷰: 마이크로소프트 역대급 탄소 제거 계약 및 EU 실사법 승인',
      author: '관리자',
      date: '2026.04.19',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 ESG 주요 소식으로 마이크로소프트가 역대 최대 규모인 800만 톤의 자연 기반 탄소 제거 크레딧 구매 계약을 체결하며 기후 목표 달성에 박차를 가했습니다. 또한 유럽연합(EU) 이사회는 기업의 공급망 내 인권 및 환경 보호 책임을 강화하는 '기업 지속가능성 실사 지침(CSDDD)'을 최종 승인했습니다. 이와 함께 블랙록과 테마섹의 합작사가 탈탄소화 기술 투자를 위해 14억 달러 규모의 대형 펀드를 조성하는 등 지속가능 금융 시장의 활기도 이어졌습니다.</p><h3>주요 포인트</h3><ul><li>마이크로소프트, BTG 팩추얼과 2043년까지 800만 톤 규모의 세계 최대 탄소 제거 구매 계약 체결</li><li>EU 이사회, 대기업의 공급망 실사를 의무화하는 CSDDD 최종 채택으로 법적 구속력 확보</li><li>블랙록과 테마섹의 '데카보나이제이션 파트너스', 탈탄소 솔루션 투자를 위한 14억 달러 펀드 조성</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-257/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-257" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 87,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '미국 압박에 흔들리는 세계은행 기후 계획',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>세계은행의 기후 변화 대응 계획이 미국의 압박으로 인해 중대한 위기에 직면했습니다. 미국은 기존의 친환경 목표를 폐기하고 화석 연료에 대한 지원을 확대하라는 요구를 이어가고 있습니다. 이로 인해 비공개로 진행되던 기후 의제 협상이 중단되었으며, 국제 사회의 기후 위기 대응 노력에 큰 차질이 예상됩니다.</p><h3>주요 포인트</h3><ul><li>미국의 친환경 목표 폐기 및 화석 연료 지원 확대 압박</li><li>세계은행 내부 기후 의제 협상의 전면 중단 및 교착 상태</li><li>글로벌 기후 금융 정책의 불확실성 증대와 환경 단체의 우려</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/16/us-pressure-puts-world-banks-climate-plan-at-risk/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 88,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '미·중 희토류 경쟁 속 브라질 국영 개발 기업 설립 추진',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>브라질의 친정부 의원들이 친환경 기술의 핵심인 희토류 채굴을 국가 경제 발전의 동력으로 삼기 위해 국영 기업 설립을 추진하고 있습니다. 미국과 중국이 희토류 공급망 확보를 위해 치열하게 경쟁하는 가운데, 브라질은 자국의 풍부한 자원을 활용해 전략적 이점을 극대화하려 합니다. 이는 단순한 자원 수출을 넘어 가공 및 제조 단계까지 아우르는 산업화를 목표로 하고 있습니다.</p><h3>주요 포인트</h3><ul><li>브라질 의원들이 희토류 산업의 국가적 통제와 개발을 위한 국영 기업 설립 법안을 제안했습니다.</li><li>미국과 중국의 글로벌 공급망 패권 다툼 사이에서 브라질의 자원 주권과 경제적 이익을 강화하려는 의도입니다.</li><li>희토류를 단순 채굴하는 것에 그치지 않고, 자국 내 가공 산업 육성을 통해 경제 발전과 기술 혁신의 기회로 활용하고자 합니다.</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/16/as-us-and-china-seek-rare-earths-brazilian-lawmakers-push-for-state-owned-developer/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 89,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EU 탄소세, 데이터 부족으로 효율적 기업에 불이익 우려',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>EU의 탄소국경조정제도(CBAM)가 본격화되면서 수입업체들이 새로운 비용 부담에 직면하고 있습니다. 현재 많은 기업들은 실제 탄소 배출량을 줄이는 것보다 정확한 배출 데이터를 확보하는 과정에서 더 큰 비용 절감 기회를 찾고 있는 상황입니다. 만약 생산 공정이 효율적이더라도 관련 데이터가 부족하면 높은 표준 배출량이 적용되어 오히려 더 많은 세금을 낼 위험이 있습니다. 이는 제도의 본래 취지와 달리 효율적인 생산자에게 불이익을 줄 수 있다는 우려를 낳고 있습니다.</p><h3>주요 포인트</h3><ul><li>CBAM 비용 절감의 핵심이 친환경 생산 전환보다 데이터 확보 여부에 좌우됨</li><li>정확한 데이터 부재 시 불리한 표준값(Default values)이 적용되어 효율적 기업이 손해를 볼 가능성</li><li>공급망 전반의 탄소 배출 데이터 투명성 확보가 기업 경쟁력의 필수 요소로 부상</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/16/eu-carbon-tax-risks-penalising-efficient-producers-over-data-gaps/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 90,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'IEA, 이란 전쟁 여파로 석유 수요 전망치 대폭 하향',
      author: '관리자',
      date: '2026.04.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>국제에너지기구(IEA)가 이란 전쟁으로 인한 글로벌 에너지 시장의 혼란을 반영하여 석유 수요 전망치를 전쟁 전보다 하루 약 100만 배럴 하향 조정했습니다. 고유가 상황 속에서 각국 정부와 소비자들이 에너지 사용을 줄이면서 수요 감소가 고착화될 조짐을 보이고 있습니다. 이러한 변화는 장기적으로 지구 온난화를 유발하는 온실가스 배출 전망을 낮추는 데 기여할 것으로 분석됩니다.</p><h3>주요 포인트</h3><ul><li>이란 전쟁으로 인한 에너지 시장 불안정 및 유가 급등에 따른 수요 위축</li><li>IEA, 석유 수요 전망치를 전쟁 이전 대비 일일 약 100만 배럴 삭감</li><li>정부와 소비자의 에너지 절감 노력이 탄소 배출 감소로 이어질 가능성</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/15/iea-slashes-pre-war-oil-demand-forecast-by-nearly-a-million-barrels-per-day/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 81,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '지속가능성 공시, 불완전한 데이터라도 시작이 중요하다',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>최근 지속가능성 공시 규제가 강화되면서 완벽한 데이터에 대한 압박이 커지고 있으나, 현실적으로 비재무 데이터는 추정치와 외부 의존도가 높아 완벽할 수 없습니다. 전문가들은 완벽한 데이터를 기다리기보다 현재 가용한 정보를 바탕으로 공시를 시작하고 점진적으로 품질을 개선해 나가는 과정이 더 중요하다고 강조합니다. 데이터의 한계를 투명하게 공개하고 체계적인 관리 프로세스를 구축하는 것이 공시의 신뢰성을 확보하는 현실적인 방안입니다.</p><h3>주요 포인트</h3><ul><li>지속가능성 데이터는 재무 데이터와 달리 측정 방식의 복잡성으로 인해 본질적으로 불완전할 수 있음을 인정해야 합니다.</li><li>불완전한 데이터라도 기업의 ESG 성과를 파악하고 의사결정을 내리는 데 유용한 기초 자료가 되며, 공시 반복을 통해 정확도를 높일 수 있습니다.</li><li>데이터의 출처와 한계를 명확히 밝히는 투명성이 중요하며, 재무 전문가의 분석 역량을 활용해 비재무 정보의 신뢰성을 보완해야 합니다.</li></ul><p>원문: <a href="https://www.esgtoday.com/sustainability-reporting-is-built-on-imperfect-data-and-thats-okay/?utm_source=rss&utm_medium=rss&utm_campaign=sustainability-reporting-is-built-on-imperfect-data-and-thats-okay" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 82,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '골드만삭스 지원 LRQA, \'파트너 아프리카\' 인수',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>런던에 본사를 둔 글로벌 인증 서비스 기업 LRQA가 아프리카의 책임 경영 및 윤리적 소싱 자문 기관인 '파트너 아프리카(Partner Africa)'를 인수했습니다. 이번 인수는 글로벌 공급망의 투명성과 인권 실사에 대한 수요가 급증하는 가운데, LRQA의 ESG 자문 역량을 아프리카 전역으로 확대하기 위해 추진되었습니다. 파트너 아프리카는 아프리카 40개국 이상에서 활동하며 노동 조건 개선과 지속 가능한 무역을 지원해온 전문성을 보유하고 있습니다.</p><h3>주요 포인트</h3><ul><li>LRQA의 글로벌 공급망 실사 및 ESG 자문 서비스 포트폴리오 강화</li><li>아프리카 40개국 이상을 아우르는 윤리적 소싱 및 인권 보호 전문성 확보</li><li>골드만삭스 자산운용의 지원을 바탕으로 한 LRQA의 전략적 시장 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/goldman-sachs-backed-lrqa-acquires-responsible-sourcing-advisory-partner-africa/?utm_source=rss&utm_medium=rss&utm_campaign=goldman-sachs-backed-lrqa-acquires-responsible-sourcing-advisory-partner-africa" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 83,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '헝가리 오르반의 선거 패배와 기후·에너지 정책 전망',
      author: '관리자',
      date: '2026.04.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>헝가리 유럽의회 선거에서 페테르 머저르가 이끄는 야당이 집권 여당인 피데스(Fidesz)에 큰 타격을 입히며 정치 지형이 변화하고 있습니다. 오르반 정부는 그동안 친러시아 에너지 정책과 EU 기후 정책에 회의적인 태도를 보여왔으나, 이번 선거 결과로 인해 정책 변화의 압박을 받게 되었습니다. 새로운 정치 세력의 등장은 헝가리의 에너지 안보와 EU 그린딜 이행에 있어 중대한 전환점이 될 것으로 전망됩니다.</p><h3>주요 포인트</h3><ul><li>페테르 머저르의 티사(Tisza) 당이 부상하며 오르반 총리의 장기 독주 체제에 강력한 제동을 걸었습니다.</li><li>러시아산 화석 연료 및 원자력에 의존해온 기존 에너지 정책의 투명성과 방향성에 대한 비판이 거세질 것으로 보입니다.</li><li>헝가리가 EU의 기후 목표에 더 협조적인 태도로 돌아설 경우, 유럽 공동의 탄소 중립 달성 속도가 빨라질 수 있습니다.</li></ul><p>원문: <a href="https://www.carbonbrief.org/qa-what-magyars-defeat-of-orban-in-hungary-means-for-climate-and-energy/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 84,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '중국 브리핑: 전력망 대규모 투자 및 석유화학 친환경 전략',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중국은 재생에너지 통합을 위해 전력망 현대화에 수십조 원을 투자하고, 석유화학 산업의 탄소 배출을 줄이기 위한 새로운 가이드라인을 발표했습니다. 국가전망공사는 초고압 송전망 확충에 집중하고 있으며, 산업계 전반의 저효율 설비 감축을 추진 중입니다. 또한, UN 공해 조약 비준을 통해 글로벌 해양 보전 분야에서도 영향력을 넓히고 있습니다.</p><h3>주요 포인트</h3><ul><li>국가전망공사, 전력망 확충 및 현대화에 5,000억 위안(약 95조 원) 이상 투자 계획 발표</li><li>석유화학 및 화학 산업의 과잉 생산 억제와 고부가가치·친환경 공정으로의 전환 지침 마련</li><li>UN 공해 조약(BBNJ) 비준 절차 착수를 통한 국제 해양 거버넌스 참여 및 영향력 확대</li></ul><p>원문: <a href="https://www.carbonbrief.org/china-briefing-16-april-2026-billions-for-grid-petrochemical-plan-chinas-high-seas-bid/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 85,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '트럼프 너머를 보라: 미국 기후 행동의 진실',
      author: '관리자',
      date: '2026.04.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>클라크 대학교 기후 대학의 루 레너드 학장은 워싱턴의 정치적 공격이 미국 사회 전반의 기후 변화 대응 노력을 멈추지 못했다고 강조합니다. 그는 연방 정부의 정책 변화와 상관없이 주 정부, 도시, 기업들이 여전히 탄소 감축 목표를 향해 나아가고 있다고 설명합니다. 특히 경제적 이익과 기술 발전이 기후 행동의 강력한 동력이 되고 있어, 정치적 수사보다는 실질적인 현장의 변화에 주목해야 한다고 조언합니다.</p><h3>주요 포인트</h3><ul><li>연방 정부의 기후 정책 후퇴 시도에도 불구하고 지방 정부와 민간 부문의 실질적인 기후 행동은 지속되고 있음</li><li>재생 에너지의 경제성 확보와 기술 혁신이 정치적 외풍을 견디는 핵심 동력으로 작용함</li><li>미국의 기후 대응 역량을 평가할 때 백악관의 행보뿐만 아니라 사회 전반의 다층적인 노력을 종합적으로 고려해야 함</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/17/qa-look-beyond-trump-for-the-full-story-on-us-climate-action-says-university-dean/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 78,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'BTG 팍투알, 남미 산림 복원 위해 3억 7천만 달러 조달',
      author: '관리자',
      date: '2026.04.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>BTG 팍투알 산림투자그룹(TIG)이 라틴아메리카의 황폐화된 토지 복원과 지속 가능한 산림 관리를 위해 3억 7,000만 달러의 자금을 조달했습니다. 이 전략은 브라질 등지의 퇴화된 목초지를 매입하여 자생림을 복원하고 상업용 산림을 조성하는 것을 목표로 합니다. 이를 통해 탄소 격리와 생물다양성 보존이라는 환경적 가치와 경제적 수익을 동시에 창출할 계획입니다.</p><h3>주요 포인트</h3><ul><li>영국 국제투자공사(BII) 등 주요 기관 투자자들이 참여하여 총 10억 달러 목표 중 초기 자금을 확보했습니다.</li><li>약 135,000 헥타르의 토지를 대상으로 자생림 복원 및 지속 가능한 목재 생산용 산림 조성을 추진합니다.</li><li>수백만 톤의 이산화탄소를 흡수하고 수천 개의 일자리를 창출하여 지역 경제와 기후 위기 대응에 기여할 전망입니다.</li></ul><p>원문: <a href="https://www.esgtoday.com/btg-pactual-tig-raises-370-million-for-latin-america-timberland-strategy/?utm_source=rss&utm_medium=rss&utm_campaign=btg-pactual-tig-raises-370-million-for-latin-america-timberland-strategy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 79,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마스트 리포레스트레이션, 美 재조림 탄소 크레딧 6주 만에 완판',
      author: '관리자',
      date: '2026.04.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>산불 피해 복구 전문 기업 마스트 리포레스트레이션(Mast Reforestation)이 미국 몬태나주에서 진행한 '쉽 크리크(Sheep Creek)' 재조림 프로젝트의 탄소 제거 크레딧을 출시 6주 만에 전량 판매했습니다. 이번 프로젝트는 산불로 파괴된 사유지를 복구하여 탄소를 흡수하는 자연 기반 솔루션으로, 고품질 탄소 크레딧에 대한 기업들의 강력한 수요를 입증했습니다. 마스트는 종자 채취부터 묘목 식재까지 전 과정을 수직 통합하여 산림 복구의 효율성을 극대화하고 있습니다.</p><h3>주요 포인트</h3><ul><li>몬태나주 산불 피해 지역 복구를 위한 재조림 탄소 크레딧 100% 판매 달성</li><li>제품 출시 후 단 6주 만에 완판되며 고품질 자연 기반 탄소 제거 시장의 높은 관심 증명</li><li>종자 확보, 묘목 재배, 식재를 아우르는 수직 통합 모델을 통해 복구 속도와 규모 확대</li></ul><p>원문: <a href="https://www.esgtoday.com/mast-reforestation-sells-out-carbon-credits-from-u-s-reforestation-project-in-6-weeks/?utm_source=rss&utm_medium=rss&utm_campaign=mast-reforestation-sells-out-carbon-credits-from-u-s-reforestation-project-in-6-weeks" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 80,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '화석연료 발전 감소와 슈퍼 엘니뇨 경고',
      author: '관리자',
      date: '2026.04.17',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에너지 싱크탱크 엠버(Ember)의 보고서에 따르면, 재생에너지의 급격한 성장으로 인해 전 세계 화석연료 발전 비중이 감소하고 있습니다. 한편, 과학자들은 기록적인 기온 상승에 이어 강력한 '슈퍼 엘니뇨'가 발생할 가능성을 경고하며 기후 위기의 심각성을 강조했습니다. 또한, 아프가니스탄은 극심한 기후 변화의 영향을 받고 있음에도 불구하고 정치적 상황으로 인해 국제적인 기후 금융 지원에서 소외되어 이중고를 겪고 있습니다.</p><h3>주요 포인트</h3><ul><li>재생에너지 확대에 따른 전 세계 화석연료 발전량의 유의미한 감소 추세</li><li>역대급 고온 현상과 결합된 '슈퍼 엘니뇨' 발생 가능성에 대한 과학계의 경고</li><li>기후 위기 취약국인 아프가니스탄의 인도적 위기와 국제 지원 단절 문제</li></ul><p>원문: <a href="https://www.carbonbrief.org/debriefed-17-april-2024-fossil-fuel-power-slumps-super-el-nino-warning-afghanistans-climate-struggle/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 74,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '엑소매드 그린-슈퍼크리티컬, 50만 톤 규모 바이오차 탄소 제거 협약',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>탄소 제거 기업 엑소매드 그린과 탄소 제거 마켓플레이스 슈퍼크리티컬이 50만 톤 규모의 바이오차(Biochar) 탄소 제거권 공급 계약을 체결했습니다. 이번 협약은 바이오차 산업 역사상 최대 규모 중 하나로, 기업들이 기후 목표를 달성할 수 있도록 고품질의 탄소 제거 크레딧을 제공하는 것을 목표로 합니다. 엑소매드 그린은 볼리비아의 지속 가능한 목재 폐기물을 활용해 탄소를 수백 년간 격리하는 동시에 토양 질을 개선하는 바이오차를 생산합니다.</p><h3>주요 포인트</h3><ul><li>역대 최대 규모 중 하나인 50만 톤의 바이오차 탄소 제거 크레딧 거래</li><li>볼리비아 내 지속 가능한 산림 폐기물을 활용한 친환경 바이오차 생산 방식 채택</li><li>기업들의 넷제로(Net Zero) 달성을 위한 고품질 탄소 제거 솔루션 공급 확대</li></ul><p>원문: <a href="https://www.esgtoday.com/exomad-green-supercritical-sign-500000-ton-biochar-carbon-removal-agreement/?utm_source=rss&utm_medium=rss&utm_campaign=exomad-green-supercritical-sign-500000-ton-biochar-carbon-removal-agreement" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 75,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '글래스 루이스, 투자자용 기후 전략 평가 솔루션 출시',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 의결권 자문사 글래스 루이스가 투자자들이 기업의 기후 전환 계획과 이행 성과를 정밀하게 평가할 수 있도록 돕는 '기후 전략 평가(Climate Strategy Assessment)' 솔루션을 출시했습니다. 이 솔루션은 기업의 탄소 감축 목표, 기후 거버넌스, 공시 수준을 분석하여 데이터 기반의 통찰력을 제공합니다. 이를 통해 투자자들은 '기후에 대한 주주투표(Say on Climate)' 등 의결권 행사 시 보다 객관적이고 정보에 입각한 의사결정을 내릴 수 있게 되었습니다.</p><h3>주요 포인트</h3><ul><li>기업의 기후 전환 계획 및 넷제로 목표 달성 가능성에 대한 정량적·정성적 분석 제공</li><li>TCFD 및 ISSB 등 글로벌 공시 표준을 반영하여 투자자에게 일관된 평가 프레임워크 지원</li><li>의결권 행사 및 기업 관여(Engagement) 전략 수립을 위한 전문적인 벤치마크 데이터 활용 가능</li></ul><p>원문: <a href="https://www.esgtoday.com/glass-lewis-launches-new-climate-strategy-assessment-solution-for-investors/?utm_source=rss&utm_medium=rss&utm_campaign=glass-lewis-launches-new-climate-strategy-assessment-solution-for-investors" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 76,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아마존, 호주 데이터 센터용 대규모 재생에너지 계약 체결',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>아마존이 호주 내 데이터 센터와 운영 시설에 전력을 공급하기 위해 9개의 새로운 전력 구매 계약(PPA)을 체결했습니다. 이번 계약을 통해 확보한 약 1GW 규모의 청정에너지는 아마존의 호주 내 재생에너지 용량을 기존 대비 대폭 확대할 전망입니다. 아마존은 이를 통해 2025년까지 전 세계 운영 전력의 100%를 재생에너지로 전환하겠다는 목표에 한 걸음 더 다가섰습니다.</p><h3>주요 포인트</h3><ul><li>호주 뉴사우스웨일스, 퀸즐랜드, 빅토리아주 전역에서 총 1GW 규모의 신규 태양광 및 풍력 프로젝트 확보</li><li>2025년까지 기업 운영 전력 100%를 재생에너지로 충당하겠다는 조기 목표 달성 가속화</li><li>세계 최대의 재생에너지 구매 기업으로서 호주 전력망의 탄소 집약도 감소 및 에너지 전환 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/amazon-signs-new-series-of-clean-energy-deals-to-power-data-centers-in-australia/?utm_source=rss&utm_medium=rss&utm_campaign=amazon-signs-new-series-of-clean-energy-deals-to-power-data-centers-in-australia" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 77,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EBA, 은행권 ESG 감독 보고 요건 대폭 간소화 제안',
      author: '관리자',
      date: '2026.04.16',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽은행감독청(EBA)이 은행들의 ESG 관련 감독 보고 및 공시 요건을 대폭 간소화하는 방안을 발표했습니다. 이번 제안은 EU의 보고 부담을 25% 감축하려는 목표의 일환으로, 중복되는 공시 항목을 통합하고 데이터 요구 사항을 줄이는 데 중점을 둡니다. 이를 통해 은행권의 행정적 부담을 완화하고 최신 EU 지속가능성 표준과의 정합성을 높일 계획입니다.</p><h3>주요 포인트</h3><ul><li>Pillar 3 공시와 감독 보고 체계의 통합 및 간소화 추진</li><li>중소형 금융기관(SNCI)에 대한 비례성 원칙 적용 및 보고 요건 완화</li><li>CSRD 및 ESRS 등 최신 EU 규제 체계와 일치하도록 보고 템플릿 재정비</li></ul><p>원문: <a href="https://www.esgtoday.com/eba-proposes-major-simplification-for-esg-supervisory-reporting-requirements-for-banks/?utm_source=rss&utm_medium=rss&utm_campaign=eba-proposes-major-simplification-for-esg-supervisory-reporting-requirements-for-banks" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 69,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '리비안, 폐배터리 재활용 시스템으로 전기차 공장 가동',
      author: '관리자',
      date: '2026.04.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미국 전기차 제조사 리비안(Rivian)이 배터리 재활용 전문 기업 레드우드 머티리얼즈(Redwood Materials)와 협력하여 일리노이주 제조 공장에 재활용 배터리를 활용한 에너지 저장 시스템(ESS)을 도입합니다. 이번 파트너십은 공장 운영에 필요한 재생 에너지를 효율적으로 관리하고 전력망의 안정성을 확보하는 것을 목표로 합니다. 양사는 배터리 수명이 다한 소재를 회수하여 다시 에너지 저장 장치로 재탄생시킴으로써 배터리 산업의 순환 경제 모델을 실현하고자 합니다.</p><h3>주요 포인트</h3><ul><li>리비안 일리노이 공장에 레드우드 머티리얼즈의 재활용 배터리 기반 ESS 구축</li><li>재생 에너지 활용 극대화 및 피크 시간대 전력 수요 관리로 운영 효율성 제고</li><li>배터리 소재의 폐쇄 루프(Closed-loop) 시스템 구축을 통한 제조 과정의 탄소 발자국 감축</li></ul><p>원문: <a href="https://www.esgtoday.com/rivian-partners-with-redwood-materials-to-power-ev-plant-with-recycled-batteries/?utm_source=rss&utm_medium=rss&utm_campaign=rivian-partners-with-redwood-materials-to-power-ev-plant-with-recycled-batteries" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 70,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ISS, \'반(反)경영진 투표 권고\' 규제한 인디애나주에 소송 제기',
      author: '관리자',
      date: '2026.04.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>세계적인 의결권 자문사 ISS가 인디애나주의 새로운 '반(反) ESG' 성격의 법률에 대해 위헌 소송을 제기했습니다. 해당 법률은 자문사가 기업 경영진의 의사에 반하는 투표를 권고할 경우 이를 별도로 공시하도록 강제하는 내용을 담고 있습니다. ISS는 이 법이 수정헌법 제1조에 명시된 표현의 자유를 침해하며, 규정 자체가 모호하여 정상적인 자문 활동을 방해한다고 주장합니다. 이번 소송은 미국 내 공화당 주도 주정부들이 추진하는 ESG 규제 움직임에 대한 강력한 법적 대응으로 평가받고 있습니다.</p><h3>주요 포인트</h3><ul><li>인디애나주 하원 법안 1008호(HB 1008)의 위헌성 여부를 두고 법적 공방 시작</li><li>ISS, 해당 법률이 자문사의 독립적인 의결권 행사 권고를 부당하게 간섭한다고 비판</li><li>미국 내 ESG 투자 및 자문 활동을 둘러싼 정치적·법적 갈등 심화 양상</li></ul><p>원문: <a href="https://www.esgtoday.com/iss-sues-indiana-over-new-law-mandating-disclosures-for-proxy-advice-against-management/?utm_source=rss&utm_medium=rss&utm_campaign=iss-sues-indiana-over-new-law-mandating-disclosures-for-proxy-advice-against-management" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 71,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '헨켈, 2030 기후·순환성·공급망 지속가능성 목표 발표',
      author: '관리자',
      date: '2026.04.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 소비재 및 산업용 제품 기업 헨켈(Henkel)이 기후 보호와 순환 경제 강화를 위한 '2030+ 지속가능성 야망 프레임워크'의 신규 목표를 공개했습니다. 헨켈은 2045년까지 가치 사슬 전반에서 넷제로를 달성하고, 2030년까지 전 세계 사업장 전력을 100% 재생 에너지로 전환할 방침입니다. 또한 포장재의 재활용성을 높이고 공급망 내 책임 있는 원자재 조달을 확대하는 등 환경 및 사회적 책임을 통합적으로 관리할 계획입니다.</p><h3>주요 포인트</h3><ul><li>2045년까지 전 가치 사슬 넷제로 달성 및 2030년 재생 에너지 100% 전환</li><li>2025년까지 포장재 100% 재활용·재사용 설계 및 신규 플라스틱 사용 50% 감축</li><li>팜유 및 종재 등 핵심 원자재 100% 책임 조달 및 경영진 성별 균형 추진</li></ul><p>원문: <a href="https://www.esgtoday.com/henkel-unveils-new-2030-climate-circularity-supply-chain-sustainability-targets/?utm_source=rss&utm_medium=rss&utm_campaign=henkel-unveils-new-2030-climate-circularity-supply-chain-sustainability-targets" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 72,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'DHL-IAG 카고, 항공 탄소 감축 위해 5년 SAF 도입 계약 체결',
      author: '관리자',
      date: '2026.04.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 물류 기업 DHL과 IAG 카고가 항공 화물 운송 과정에서 발생하는 탄소 배출을 줄이기 위해 5년 기간의 지속가능항공유(SAF) 사용 계약을 체결했습니다. 이번 계약을 통해 DHL은 약 6,000만 리터의 SAF를 확보하게 되며, 이는 약 16만 톤의 이산화탄소 배출량을 감축하는 효과가 있을 것으로 기대됩니다. 이는 화물 운송업체와 항공사 그룹 간 체결된 역대 최대 규모의 SAF 계약 중 하나로, 양사의 지속가능성 목표 달성에 중요한 이정표가 될 전망입니다.</p><h3>주요 포인트</h3><ul><li>5년간 약 6,000만 리터의 SAF를 도입하여 항공 화물 탄소 배출량 16만 톤 감축 예정</li><li>폐식용유 및 음식물 쓰레기 등 폐기물 원료 기반의 SAF를 사용하여 기존 항공유 대비 탄소 배출 대폭 절감</li><li>DHL의 2030년까지 SAF 혼합 비중 30% 달성 목표 및 IAG의 지속가능 경영 전략의 일환</li></ul><p>원문: <a href="https://www.esgtoday.com/dhl-iag-cargo-sign-5-year-deal-to-use-sustainable-aviation-fuel-for-air-freight/?utm_source=rss&utm_medium=rss&utm_campaign=dhl-iag-cargo-sign-5-year-deal-to-use-sustainable-aviation-fuel-for-air-freight" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 73,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EFRAG, 지속가능성 보고 위원회 신임 의장에 케르스틴 로파타 임명',
      author: '관리자',
      date: '2026.04.15',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽 재무보고자문그룹(EFRAG)은 지속가능성 보고 위원회(SRB)의 신임 의장으로 케르스틴 로파타(Kerstin Lopatta) 교수를 임명했습니다. 로파타 의장은 이전 SRB 부의장으로서 유럽 지속가능성 공시 표준(ESRS) 개발에 핵심적인 역할을 수행해 왔으며, 패트릭 드 캠부르의 뒤를 이어 위원회를 이끌게 됩니다. 이번 인사는 EFRAG가 표준 수립 단계를 넘어 기업들의 실제 이행 지원과 부문별 표준 개발에 집중하는 중요한 전환기에 이루어졌습니다.</p><h3>주요 포인트</h3><ul><li>케르스틴 로파타, EFRAG 지속가능성 보고 위원회(SRB)의 신임 의장으로 선임</li><li>함부르크 대학교 교수이자 ESRS 개발에 참여해 온 지속가능성 보고 전문가</li><li>기업 지속가능성 보고 지침(CSRD) 이행을 위한 기술적 자문 및 표준화 작업 주도 예정</li></ul><p>원문: <a href="https://www.esgtoday.com/efrag-appoints-kerstin-lopatta-as-new-chair-of-sustainability-reporting-board/?utm_source=rss&utm_medium=rss&utm_campaign=efrag-appoints-kerstin-lopatta-as-new-chair-of-sustainability-reporting-board" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 64,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '엔비전, BBVA와 5억 달러 규모 녹색 에너지 금융 협약 체결',
      author: '관리자',
      date: '2026.04.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 녹색 기술 기업인 엔비전(Envision)이 스페인 은행 BBVA로부터 5억 달러 규모의 금융 지원을 확보했습니다. 이번 자금은 엔비전의 넷제로 기술 플랫폼을 전 세계적으로 확장하고 풍력 발전, 에너지 저장 시스템(ESS), 그린 수소 솔루션의 보급을 가속화하는 데 사용될 예정입니다. 양사는 이번 전략적 파트너십을 통해 글로벌 에너지 전환을 지원하고 지속 가능한 미래를 구축하는 데 협력하기로 했습니다.</p><h3>주요 포인트</h3><ul><li>BBVA, 엔비전의 글로벌 확장 지원을 위해 5억 달러 규모의 벤더 파이낸싱 제공</li><li>풍력, 에너지 저장, 그린 수소 등 핵심 넷제로 기술 솔루션의 고도화 및 보급 확대</li><li>전략적 협력을 통한 글로벌 에너지 전환 가속화 및 지속 가능성 목표 달성 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/envision-secures-500-million-financing-with-bbva-to-expand-green-energy-tech-platform/?utm_source=rss&utm_medium=rss&utm_campaign=envision-secures-500-million-financing-with-bbva-to-expand-green-energy-tech-platform" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 65,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아홀드 델레이즈, 제품 탄소 발자국 측정 시스템 도입',
      author: '관리자',
      date: '2026.04.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>네덜란드의 글로벌 식품 유통 기업 아홀드 델레이즈(Ahold Delhaize)가 개별 제품의 탄소 배출량을 측정하는 '제품 탄소 발자국(PCF)' 시스템을 도입한다고 발표했습니다. 이번 조치는 고객이 환경에 미치는 영향을 고려해 제품을 선택할 수 있도록 돕고, 기업의 공급망 전반에서 발생하는 탄소 배출량을 투명하게 관리하기 위해 추진되었습니다. 이를 통해 아홀드 델레이즈는 2050년 넷제로 목표 달성을 가속화하고 스코프 3(Scope 3) 배출량을 효과적으로 감축할 계획입니다.</p><h3>주요 포인트</h3><ul><li>개별 제품 단위의 탄소 배출량 측정 및 데이터 공개 시스템 구축</li><li>2050년 넷제로 달성을 위한 공급망 전반의 탄소 감축 전략 강화</li><li>자체 브랜드(PB) 상품부터 우선 적용하여 소비자에게 지속 가능한 선택지 제공</li></ul><p>원문: <a href="https://www.esgtoday.com/ahold-delhaize-to-introduce-product-carbon-footprinting/?utm_source=rss&utm_medium=rss&utm_campaign=ahold-delhaize-to-introduce-product-carbon-footprinting" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 66,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ISO-GHG 프로토콜, 제품 단위 온실가스 산정 표준 통합 추진',
      author: '관리자',
      date: '2026.04.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>국제표준화기구(ISO)와 온실가스 프로토콜(GHG Protocol)이 제품 수준의 온실가스 배출량 산정 및 보고를 위한 통합 표준을 개발하기 위해 공동 워킹그룹을 출범했습니다. 이번 협력은 기존의 다양한 산정 기준들 사이의 불일치를 해소하고, 전 세계적으로 통용되는 단일화된 방법론을 구축하는 것을 목표로 합니다. 이를 통해 기업들은 공급망 전반의 탄소 발자국을 보다 명확하게 측정하고 공시할 수 있게 될 전망입니다.</p><h3>주요 포인트</h3><ul><li>ISO와 GHG 프로토콜의 협력을 통한 제품 탄소 발자국 산정 표준의 글로벌 통합 추진</li><li>기존 ISO 14067과 GHG 프로토콜 제품 표준 간의 상호 운용성 및 일관성 강화</li><li>기업의 공시 복잡성 해소 및 글로벌 공급망 내 탄소 데이터의 투명성과 비교 가능성 제고</li></ul><p>원문: <a href="https://www.esgtoday.com/iso-ghg-protocol-launch-working-group-to-develop-product-level-ghg-accounting-standard/?utm_source=rss&utm_medium=rss&utm_campaign=iso-ghg-protocol-launch-working-group-to-develop-product-level-ghg-accounting-standard" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 67,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트 "탄소 제거 프로그램 중단 없이 지속될 것"',
      author: '관리자',
      date: '2026.04.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>마이크로소프트는 자사의 탄소 제거 프로그램이 종료되지 않았으며, 2030년 탄소 네거티브 목표 달성을 위해 핵심적인 역할을 계속 수행할 것이라고 공식 확인했습니다. 최근 프로그램 중단에 대한 우려가 제기되었으나, 회사는 고품질 탄소 제거 기술에 대한 투자를 오히려 강화하고 있다는 입장입니다. 마이크로소프트는 단순한 탄소 상쇄를 넘어 직접 공기 포집(DAC) 등 혁신적인 기술을 통해 실질적인 탄소 제거를 추진하고 있습니다.</p><h3>주요 포인트</h3><ul><li>2030년 탄소 네거티브 및 2050년 역사적 배출량 전량 제거 목표 재확인</li><li>직접 공기 포집(DAC) 및 바이오에너지 탄소 포집(BECCS) 등 고품질 탄소 제거(CDR) 시장 주도</li><li>대규모 탄소 제거 크레딧 구매 계약을 통해 관련 산업 생태계 확장 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/microsoft-says-its-carbon-removal-program-has-not-ended/?utm_source=rss&utm_medium=rss&utm_campaign=microsoft-says-its-carbon-removal-program-has-not-ended" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 68,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '메이커사이트, 지멘스의 탄소 발자국 플랫폼 SiGREEN 인수',
      author: '관리자',
      date: '2026.04.14',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>공급망 데이터 전문 기업 메이커사이트(Makersite)가 지멘스의 제품 탄소 발자국(PCF) 관리 플랫폼인 SiGREEN을 인수했습니다. 이번 인수를 통해 메이커사이트는 제품 수명 주기 전반에 걸친 탄소 배출 추적 역량을 강화하고, 기업들이 공급망 내 실제 데이터를 기반으로 정확한 탄소 발자국을 산출할 수 있도록 지원할 계획입니다. 지멘스는 플랫폼 매각 이후에도 메이커사이트의 전략적 파트너이자 고객으로 남아 협력을 지속할 예정입니다.</p><h3>주요 포인트</h3><ul><li>메이커사이트의 AI 기반 공급망 데이터와 SiGREEN의 탄소 추적 기술 결합</li><li>공급망 전체의 실제 배출 데이터를 활용한 제품 탄소 발자국(PCF) 측정의 정밀화</li><li>지멘스와의 파트너십 유지를 통한 산업용 지속가능성 솔루션 생태계 확장</li></ul><p>원문: <a href="https://www.esgtoday.com/makersite-acquires-product-carbon-footprint-platform-sigreen-from-siemens/?utm_source=rss&utm_medium=rss&utm_campaign=makersite-acquires-product-carbon-footprint-platform-sigreen-from-siemens" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 59,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '트리오도스 IM-퐁닥시옹, 3억 유로 규모 자연자본 펀드 출시',
      author: '관리자',
      date: '2026.04.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>임팩트 투자 운용사인 트리오도스 IM과 퐁닥시옹 자산운용(FAM)이 생물다양성 보존과 기후 회복력 강화를 위해 3억 유로 규모의 '트리오도스 퐁닥시옹 자연자본 펀드'를 출시했습니다. 이 펀드는 자연 생태계를 보호하고 복원하는 동시에 재무적 수익을 창출하는 프로젝트에 투자하는 것을 목표로 합니다. 주요 투자 분야는 지속 가능한 농업, 임업 및 자연 기반 솔루션이며, 이를 통해 전 세계적인 자연 자본 금융 격차를 해소하는 데 기여할 전망입니다.</p><h3>주요 포인트</h3><ul><li>네덜란드 트리오도스 IM과 캐나다 퐁닥시옹의 협력으로 조성된 3억 유로 규모의 임팩트 펀드</li><li>생물다양성 손실 방지, 토양 건강 회복 및 탄소 흡수원 보호를 위한 프로젝트에 집중 투자</li><li>지속 가능한 식량 시스템과 산림 경영 등 실질적인 자연 기반 솔루션 구축 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/triodos-im-fondaction-launch-new-e300-million-natural-capital-fund/?utm_source=rss&utm_medium=rss&utm_campaign=triodos-im-fondaction-launch-new-e300-million-natural-capital-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 60,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '롤스로이스, 영국 최초 소형 모듈형 원자로(SMR) 공급 계약 체결',
      author: '관리자',
      date: '2026.04.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>롤스로이스 SMR이 영국 정부 산하 기구인 '그레이트 브리티시 뉴클리어(GBN)'와 소형 모듈형 원자로(SMR) 공급을 위한 계약을 체결했습니다. 이번 협력은 영국의 2050년 넷제로 달성과 에너지 안보 강화를 위한 국가적 전략의 일환입니다. SMR은 기존 대형 원전보다 건설이 빠르고 비용 효율적이어서 차세대 청정 에너지 솔루션으로 평가받고 있습니다.</p><h3>주요 포인트</h3><ul><li>영국 정부의 SMR 기술 경쟁에서 롤스로이스 SMR이 선정되어 기술 도입 본격화</li><li>공장 제작형 모듈 방식을 통해 건설 기간 단축 및 경제성 확보</li><li>영국 내 수천 개의 고숙련 일자리 창출 및 원자력 발전 비중 확대 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/rolls-royce-signs-deal-with-uk-to-deliver-fleet-of-small-modular-nuclear-reactors/?utm_source=rss&utm_medium=rss&utm_campaign=rolls-royce-signs-deal-with-uk-to-deliver-fleet-of-small-modular-nuclear-reactors" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 61,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'JP모건, 8만 5천 톤 규모 산림 기반 탄소 제거 계약 체결',
      author: '관리자',
      date: '2026.04.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>JP모건 체이스가 기후 솔루션 기업 어뉴 클라이밋(Anew Climate) 및 오로라 서스테이너블 랜즈(Aurora Sustainable Lands)와 협력하여 8만 5천 톤 규모의 산림 기반 탄소 제거 크레딧을 구매하기로 했습니다. 이번 계약은 미국 내 대규모 산림 관리 개선(IFM) 프로젝트를 통해 생성된 탄소 제거량을 확보하는 것을 골자로 합니다. 이는 JP모건의 자체 운영 탄소 발자국을 상쇄하고 고품질 탄소 제거 시장을 지원하기 위한 전략적 행보입니다.</p><h3>주요 포인트</h3><ul><li>JP모건, 어뉴 클라이밋 및 오로라와 8만 5천 톤 규모의 탄소 제거 크레딧 구매 계약 체결</li><li>미국 내 170만 에이커 이상의 산림을 대상으로 하는 산림 관리 개선(IFM) 프로젝트 기반</li><li>기업의 탄소 중립 목표 달성 및 지속 가능한 산림 보존을 위한 금융권의 대규모 투자 사례</li></ul><p>원문: <a href="https://www.esgtoday.com/jpmorgan-signs-85000-ton-forest-based-carbon-removal-deal/?utm_source=rss&utm_medium=rss&utm_campaign=jpmorgan-signs-85000-ton-forest-based-carbon-removal-deal" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 62,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '임팩트 VC 에카, 탈탄소·건강 펀드에 1억 700만 달러 유치',
      author: '관리자',
      date: '2026.04.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>영국 기반의 임팩트 벤처캐피털 에카 벤처스(Eka Ventures)가 소비자 건강 및 탈탄소화 솔루션에 투자하기 위해 8,000만 파운드(약 1억 700만 달러) 규모의 펀드를 조성했습니다. 이 펀드는 지속 가능한 소비와 건강한 경제를 구축하려는 초기 단계의 기술 기업들을 지원하는 데 집중할 예정입니다. 에카 벤처스는 이번 자금을 통해 기후 변화 대응과 대중의 건강 증진을 동시에 달성하는 혁신적인 비즈니스 모델을 발굴할 계획입니다.</p><h3>주요 포인트</h3><ul><li>영국 비즈니스 은행(BBB) 등 주요 기관이 참여한 8,000만 파운드 규모 펀드 조성</li><li>탈탄소화, 소비자 건강, 지속 가능한 소비 시스템을 3대 핵심 투자 분야로 설정</li><li>시드(Seed) 및 시리즈 A 단계의 초기 기술 기업을 대상으로 집중 투자 진행</li></ul><p>원문: <a href="https://www.esgtoday.com/impact-vc-investor-eka-raises-107-million-for-fund-targeting-consumer-health-decarbonization-solutions/?utm_source=rss&utm_medium=rss&utm_campaign=impact-vc-investor-eka-raises-107-million-for-fund-targeting-consumer-health-decarbonization-solutions" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 63,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트, 탄소 제거 크레딧 구매 일시 중단',
      author: '관리자',
      date: '2026.04.13',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>마이크로소프트가 탄소 제거(CDR) 크레딧 공급업체들에게 신규 구매를 일시 중단한다고 통보한 것으로 알려졌습니다. 세계 최대의 탄소 제거 구매자 중 하나인 마이크로소프트의 이번 결정은 초기 단계인 탄소 제거 시장에 상당한 파장을 일으키고 있습니다. 이번 조치는 내부 전략 검토 및 기존 구매 물량 관리를 위한 것으로 풀이되나, 2030년 탄소 네거티브 달성이라는 장기 목표는 여전히 유지하고 있습니다.</p><h3>주요 포인트</h3><ul><li>탄소 제거(CDR) 크레딧 신규 구매 계약의 일시적 중단 통보</li><li>시장 선도 기업의 행보로 인한 탄소 제거 시장의 불확실성 증대</li><li>2030년 탄소 네거티브 목표 달성을 위한 장기적 의지는 지속</li></ul><p>원문: <a href="https://www.esgtoday.com/microsoft-pauses-carbon-removal-purchases-reports/?utm_source=rss&utm_medium=rss&utm_campaign=microsoft-pauses-carbon-removal-purchases-reports" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 55,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GEF, 39억 달러 확보... 이전 예산보다 10억 달러 감소',
      author: '관리자',
      date: '2026.04.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지구환경금융(GEF)이 자금 조달 마감 시한을 앞두고 39억 달러를 모금했으나, 이는 이전 예산 규모보다 10억 달러나 낮은 수준입니다. 주요 기부국들이 원조 예산을 삭감하면서 자연 보호 및 기후 변화 대응을 위한 재원 확보에 어려움을 겪고 있습니다. 이번 4개년 자금 지원 패키지는 오는 5월 말에 최종 확정될 예정입니다.</p><h3>주요 포인트</h3><ul><li>GEF 모금액 39억 달러 기록, 이전 예산 대비 10억 달러 감소</li><li>기부국들의 원조 예산 삭감으로 인한 환경 및 기후 금융 위축</li><li>5월 말 최종 확정될 4개년 자금 패키지와 향후 대응 과제</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/10/gef-raises-3bn-funding-deadline-1bn-below-previous-budget-nature-environment-finance/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 56,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '글로벌 로드맵을 통한 산림 파괴 중단 약속 이행 방안',
      author: '관리자',
      date: '2026.04.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>산림 파괴를 중단하겠다는 글로벌 약속을 실현하기 위해서는 강력한 정치적 의지와 더불어 각국의 노력을 통합하고 이행을 촉진할 수 있는 구체적인 경로가 필수적입니다. 브라질이 주도하는 국제 로드맵은 파편화된 노력을 결집하여 전 지구적 산림 보호 공약을 재활성화하는 핵심 동력이 될 수 있습니다. 이 로드맵은 2030년까지 산림 손실을 멈추기 위한 목표 달성에 있어 실질적인 실행 지침을 제공할 것으로 기대됩니다.</p><h3>주요 포인트</h3><ul><li>정치적 의지 결집과 통합된 이행 경로의 필요성 강조</li><li>브라질 주도 로드맵을 통한 글로벌 산림 보호 공약의 구체화 및 재건</li><li>단순한 선언을 넘어 실질적인 실행과 성과 도출을 위한 프레임워크 구축</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/10/how-a-brazil-led-roadmap-can-rescue-global-pledge-to-halt-deforestation/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 57,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '영국 수입 \'친환경\' 항공유, 아마존 삼림 파괴와 연관',
      author: '관리자',
      date: '2026.04.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>영국으로 수입되는 지속가능항공유(SAF)가 아마존 삼림 파괴와 연관되어 있다는 의혹이 제기되었습니다. 텍사스의 한 정유소가 유럽으로 수출하는 SAF의 원료인 쇠고기 기름(우지)이 불법 가축 구매로 벌금을 받은 육가공 업체와 연결된 것으로 나타났습니다. 이는 친환경 연료로 홍보되는 SAF의 공급망 투명성에 대한 우려를 낳고 있습니다. 이번 사례는 항공 산업의 탄소 중립 노력이 의도치 않게 환경 파괴를 부추길 수 있음을 시사합니다.</p><h3>주요 포인트</h3><ul><li>텍사스 정유소가 공급하는 SAF의 원료인 우지가 아마존 파괴와 연관된 브라질 육가공 업체에서 유래함</li><li>해당 육가공 업체는 불법 삼림 벌채 지역에서 가축을 구매한 혐의로 벌금을 부과받은 전력이 있음</li><li>친환경 항공유의 공급망 투명성 문제와 실제 환경 보호 효과에 대한 비판이 제기됨</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/10/uk-imports-of-green-jet-fuel-linked-to-amazon-deforestation/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 58,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '이탈리아, 가스 가격 상승으로 석탄 발전 퇴출 연기',
      author: '관리자',
      date: '2026.04.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이탈리아 정부가 천연가스 가격 급등에 따른 에너지 비용 부담을 완화하기 위해 당초 계획했던 석탄 발전 퇴출 시점을 연기하기로 결정했습니다. 분석가들은 이번 조치가 기후 위기 대응에 있어 부정적인 신호를 보낼 수 있다고 우려하고 있습니다. 다만, 이탈리아의 전체 에너지 믹스에서 석탄이 차지하는 비중이 매우 낮기 때문에 실질적인 환경적 영향은 제한적일 것으로 분석됩니다.</p><h3>주요 포인트</h3><ul><li>천연가스 가격 상승에 대응하여 에너지 안보와 비용 절감을 위해 석탄 발전 유지 결정</li><li>글로벌 탈탄소화 흐름에 역행한다는 비판과 함께 기후 정책의 신뢰도 저하 우려</li><li>이탈리아 에너지 구조상 석탄 비중이 미미하여 실제 탄소 배출에 미치는 타격은 크지 않을 전망</li></ul><p>원문: <a href="https://www.climatechangenews.com/2026/04/09/italy-pushes-coal-exit-back-after-gas-prices-rise/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 50,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'GHG 프로토콜, 스코프 3 보고 표준 개정 방향 공개',
      author: '관리자',
      date: '2026.04.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>온실가스 회계 표준 설정 기구인 GHG 프로토콜이 기업 가치사슬 전반의 배출량을 측정하는 '스코프 3(Scope 3)' 표준의 주요 개정 방향을 발표했습니다. 이번 개정은 급변하는 공시 환경에 맞춰 데이터의 정확성과 일관성을 높이고, 기업들이 간접 배출량을 보다 효과적으로 관리할 수 있도록 지원하는 데 중점을 둡니다. 4,000건 이상의 이해관계자 의견을 바탕으로 보고 요건을 명확히 하고 산정 방식의 복잡성을 해결할 계획입니다.</p><h3>주요 포인트</h3><ul><li>데이터 품질 개선 및 가치사슬 배출량 산정의 일관성 강화</li><li>스코프 3 보고 요건의 명확화 및 기업의 이행 부담 완화 방안 모색</li><li>2025년까지 개정 초안 마련 및 추가적인 이해관계자 협의 진행 예정</li></ul><p>원문: <a href="https://www.esgtoday.com/ghg-protocol-outlines-proposed-changes-to-scope-3-reporting-standard/?utm_source=rss&utm_medium=rss&utm_campaign=ghg-protocol-outlines-proposed-changes-to-scope-3-reporting-standard" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 51,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '감축을 넘어: 지속적인 배출 책임(OER)의 역할과 투자 방향',
      author: '관리자',
      date: '2026.04.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기업들이 탄소 중립을 넘어 '지속적인 배출 책임(OER)'이라는 새로운 기후 전략을 도입하고 있습니다. OER은 기업이 배출하는 탄소에 대해 내부적으로 비용을 책정하고, 그 자금을 단순한 상쇄를 넘어 광범위한 기후 솔루션에 투자하는 방식입니다. 이를 통해 기업은 배출량 감축과 동시에 자연 복원, 기술 혁신, 사회적 회복력 강화에 기여할 수 있습니다. 이는 기후 위기에 대한 기업의 책임을 실질적이고 시스템적인 변화로 연결하는 것을 목표로 합니다.</p><h3>주요 포인트</h3><ul><li>전통적인 탄소 상쇄의 한계를 극복하고 실질적인 기후 행동을 이끌어내기 위한 OER 모델의 중요성 강조</li><li>자연 기반 솔루션(NBS)과 혁신적인 탄소 제거 기술(CDR)에 대한 전략적 자금 지원</li><li>기후 취약 지역의 적응력 강화 및 지속 가능한 시스템 전환을 위한 정책 옹호 활동 포함</li></ul><p>원문: <a href="https://www.esgtoday.com/beyond-mitigation-what-can-ongoing-emissions-responsibility-fund/?utm_source=rss&utm_medium=rss&utm_campaign=beyond-mitigation-what-can-ongoing-emissions-responsibility-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 52,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '해양 폭염, 열대 저기압 경제적 피해 \'두 배\'로 키운다',
      author: '관리자',
      date: '2026.04.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>해양 폭염 지역을 통과하는 열대 저기압은 에너지를 급격히 흡수하여 강력해지며, 이로 인한 경제적 피해는 일반적인 경우보다 약 두 배 가까이 증가하는 것으로 나타났습니다. 최근 연구에 따르면 해수면 온도의 상승이 태풍의 급격한 강화를 유도하여 인프라 파괴와 복구 비용을 심화시킵니다. 기후 변화로 해양 폭염이 빈번해짐에 따라 열대 저기압에 의한 전 세계적 경제 손실 위험도 더욱 커지고 있습니다.</p><h3>주요 포인트</h3><ul><li>해양 폭염은 열대 저기압에 막대한 에너지를 공급하여 '급격한 강화' 현상을 일으킴</li><li>강화된 저기압은 상륙 시 파괴력을 높여 경제적 손실 규모를 약 2배 증폭시킴</li><li>기후 변화로 인한 해수 온도 상승이 자연재해의 경제적 파급력을 심화시키는 핵심 요인임</li></ul><p>원문: <a href="https://www.carbonbrief.org/marine-heatwaves-nearly-double-the-economic-damage-caused-by-tropical-cyclones/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 53,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '최악의 에너지 위기와 인도의 COP33 유치 철회',
      author: '관리자',
      date: '2026.04.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>Carbon Brief의 이번 주 브리핑은 '역대 최악'으로 묘사되는 심각한 글로벌 에너지 위기 상황을 집중 조명합니다. 인도는 2028년 개최 예정인 제33차 유엔기후변화협약 당사국총회(COP33) 유치 계획을 전격 철회하며 국제 사회의 이목을 끌었습니다. 또한, 기후 변화 메시지를 전달하는 새로운 방식으로서 드래그 아티스트들의 활동과 그 영향력을 다루고 있습니다. 이번 호는 기후 정책과 문화적 접근을 아우르는 주요 소식들을 전달합니다.</p><h3>주요 포인트</h3><ul><li>역대 최악의 수준으로 평가받는 글로벌 에너지 위기 심화</li><li>인도의 COP33 유치 신청 철회 및 국제 기후 정치의 변화</li><li>드래그 아티스트를 통한 기후 변화 소통의 새로운 가능성 제시</li></ul><p>원문: <a href="https://www.carbonbrief.org/debriefed-10-april-2026-worst-energy-crisis-ever-india-withdraws-cop33-bid-drag-artists-and-climate-change/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 54,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '카본 브리프, 2026년 기여 편집자 그룹 발표',
      author: '관리자',
      date: '2026.04.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기후 전문 매체 카본 브리프(Carbon Brief)가 2026년 활동할 새로운 기여 편집자(Contributing Editors) 그룹을 발표했습니다. 이 그룹은 기후 과학 및 정책 분야의 전문성을 갖춘 국제적인 학자들로 구성되어 편집팀의 보도 활동을 지원합니다. 이들은 기후 변화와 관련된 복잡한 이슈에 대해 심도 있는 분석과 과학적 정확성을 제공하는 중요한 역할을 맡게 됩니다.</p><h3>주요 포인트</h3><ul><li>글로벌 학계 전문가들로 구성된 2026년 기여 편집자 명단 공개</li><li>기후 과학, 에너지 정책 등 다양한 분야의 전문 지식을 통한 보도 품질 강화</li><li>보도의 신뢰성과 객관성을 높이기 위한 국제적 협력 및 검토 체계 구축</li></ul><p>원문: <a href="https://www.carbonbrief.org/introducing-carbon-briefs-2026-cohort-of-contributing-editors/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 46,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '스탠다드차타드 재단, 신임 글로벌 총괄에 날리니 타라케슈와르 임명',
      author: '관리자',
      date: '2026.04.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>영국계 글로벌 은행 스탠다드차타드(Standard Chartered)가 날리니 타라케슈와르를 스탠다드차타드 재단(SCF)의 신임 글로벌 총괄로 임명했습니다. 2014년부터 은행의 기업 홍보 및 마케팅 전략을 담당해온 타라케슈와르는 앞으로 재단의 전략적 방향과 글로벌 자선 프로그램을 총괄하게 됩니다. 스탠다드차타드 재단은 불평등 해소와 경제적 포용성 증진을 목표로 하며, 특히 청년층의 성장을 돕는 '퓨처메이커스' 이니셔티브에 집중하고 있습니다. 이번 인사를 통해 재단은 글로벌 커뮤니티 내 사회적 영향력을 더욱 강화할 방침입니다.</p><h3>주요 포인트</h3><ul><li>날리니 타라케슈와르, 카이루니사 달라의 후임으로 재단 글로벌 총괄 취임</li><li>청년 및 장애인, 여성의 교육과 경제적 자립을 돕는 '퓨처메이커스' 프로그램 주도</li><li>은행의 자선 활동 전문성을 높이고 글로벌 사회 공헌 전략 고도화 예정</li></ul><p>원문: <a href="https://www.esgtoday.com/standard-chartered-appoints-nalini-tarakeshwar-as-global-head-of-standard-chartered-foundation/?utm_source=rss&utm_medium=rss&utm_campaign=standard-chartered-appoints-nalini-tarakeshwar-as-global-head-of-standard-chartered-foundation" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 47,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '캐나다, 지속가능금융 분류체계 개발 위원회 출범',
      author: '관리자',
      date: '2026.04.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>캐나다의 기후 중심 투자자 이니셔티브인 BFP(Business Future Pathways)가 지속가능금융 분류체계(Taxonomy) 개발을 위한 독립 위원회를 구성하고 본격적인 활동에 나섰습니다. 이번 위원회는 투자자들이 녹색 및 전환 금융 활동을 명확히 식별할 수 있도록 돕는 표준 프레임워크를 마련하는 것을 목표로 합니다. 이는 캐나다의 2050년 넷제로 목표 달성을 지원하고 금융 시장의 투명성을 높이기 위한 핵심 조치로 평가받고 있습니다.</p><h3>주요 포인트</h3><ul><li>지속가능금융의 명확한 정의와 기준을 마련하기 위한 독립적인 분류체계 위원회 출범</li><li>녹색(Green) 투자뿐만 아니라 탄소 집약 산업의 저탄소 전환을 돕는 '전환 금융' 기준 정립에 주력</li><li>글로벌 표준과의 정합성을 고려하여 캐나다 경제 특성에 맞는 금융 프레임워크 구축</li></ul><p>원문: <a href="https://www.esgtoday.com/canada-launches-council-to-develop-sustainable-finance-taxonomy/?utm_source=rss&utm_medium=rss&utm_campaign=canada-launches-council-to-develop-sustainable-finance-taxonomy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 48,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '호주 에시컬, 6억 2,500만 호주 달러 규모 기후 펀드 출시',
      author: '관리자',
      date: '2026.04.10',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>지속가능 투자 전문 운용사인 호주 에시컬(Australian Ethical)이 6억 2,500만 호주 달러 규모의 '인프라 및 실물 자산 펀드'를 출시했습니다. 이 펀드는 재생 에너지, 사회적 인프라, 친환경 건물 등 저탄소 경제 전환을 지원하는 비상장 실물 자산에 집중 투자합니다. 이를 통해 일반 및 도매 투자자들에게 기관 투자자 수준의 비상장 시장 접근성을 제공하며 넷제로 전환을 가속화하는 것을 목표로 합니다.</p><h3>주요 포인트</h3><ul><li>재생 에너지, 친환경 건물, 지속 가능한 토지 이용 등 기후 솔루션 분야 중점 투자</li><li>비상장 인프라 및 실물 자산 확대를 통한 포트폴리오 다변화 및 수익성 강화</li><li>기존 연금 펀드 자산 일부를 이전하여 초기 규모를 확보하고 투자 기회 확대</li></ul><p>원문: <a href="https://www.esgtoday.com/australian-ethical-launches-a625-million-climate-focused-private-markets-fund/?utm_source=rss&utm_medium=rss&utm_campaign=australian-ethical-launches-a625-million-climate-focused-private-markets-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 49,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'SLR, 기후 분석 플랫폼 2곳 인수하며 역량 강화',
      author: '관리자',
      date: '2026.04.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>영국의 지속가능성 전문 컨설팅 기업 SLR이 기후 모델링 및 분석 플랫폼인 플래네트릭스(Planetrics)와 클라임시스템즈(ClimSystems)를 인수했다고 발표했습니다. 이번 인수는 기후 리스크에 대한 정밀한 데이터 분석 수요가 증가함에 따라, 고객들에게 보다 고도화된 기후 회복력 솔루션을 제공하기 위해 추진되었습니다. SLR은 이를 통해 금융 기관과 기업이 기후 변화로 인한 재무적 영향을 정확히 평가하고 대응할 수 있도록 지원할 예정입니다.</p><h3>주요 포인트</h3><ul><li>SLR, 기후 데이터 분석 전문성 확보를 위해 플래네트릭스와 클라임시스템즈 동시 인수</li><li>플래네트릭스는 기후 변화에 따른 자산 가치 변동 및 전환 리스크 분석에 특화된 툴 제공</li><li>클라임시스템즈는 고해상도 기후 모델링을 통해 물리적 리스크 평가 및 적응 전략 수립 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/slr-acquires-climate-analytics-platforms-planetrics-and-climsystems/?utm_source=rss&utm_medium=rss&utm_campaign=slr-acquires-climate-analytics-platforms-planetrics-and-climsystems" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 42,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아라 파트너스, 폐기물 업사이클링 기업 세드론에 5억 달러 투자',
      author: '관리자',
      date: '2026.04.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>산업 탈탄소화 전문 사모펀드 아라 파트너스(Ara Partners)가 폐기물 업사이클링 솔루션 기업 세드론 테크놀로지스(Sedron Technologies)에 최대 5억 달러를 투자합니다. 세드론은 가축 분뇨와 하수 슬러지 같은 액체 폐기물을 깨끗한 물과 고농축 비료로 전환하는 독자적인 '바코(Varcor)' 기술을 보유하고 있습니다. 이번 투자금은 북미 전역에 세드론의 폐기물 처리 시설을 확충하여 농업 및 지자체의 환경 발자국을 줄이고 탈탄소화를 가속화하는 데 사용될 예정입니다.</p><h3>주요 포인트</h3><ul><li>아라 파트너스, 세드론에 최대 5억 달러 규모의 전략적 투자 단행</li><li>세드론의 '바코' 기술로 폐기물을 자원화하여 수질 오염 방지 및 온실가스 감축</li><li>북미 지역 내 설비 확대를 통해 농업 및 산업 부문의 지속 가능한 폐기물 관리 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/ara-partners-invests-500-million-in-waste-upscaling-solutions-provider-sedron/?utm_source=rss&utm_medium=rss&utm_campaign=ara-partners-invests-500-million-in-waste-upscaling-solutions-provider-sedron" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 43,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '에너지 볼트, 850MW 규모 BESS 인수로 일본 시장 진출',
      author: '관리자',
      date: '2026.04.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에너지 저장 솔루션 전문 기업 에너지 볼트(Energy Vault)가 850MW 규모의 배터리 에너지 저장 장치(BESS) 프로젝트 포트폴리오를 인수하며 일본 시장에 본격 진출합니다. 이번 인수는 일본의 재생에너지 비중 확대에 따른 전력망 안정화 수요를 공략하기 위한 전략적 결정입니다. 에너지 볼트는 자사의 독자적인 에너지 관리 소프트웨어와 통합 플랫폼을 통해 일본 내 에너지 저장 인프라 구축을 가속화할 전망입니다.</p><h3>주요 포인트</h3><ul><li>850MW 규모의 대규모 BESS 프로젝트 포트폴리오 인수를 통한 일본 시장 본격 진입</li><li>일본 정부의 탄소 중립 정책 및 재생에너지 확대에 따른 에너지 저장 장치 수요 대응</li><li>에너지 볼트의 하드웨어 및 소프트웨어 통합 솔루션을 활용한 전력망 효율성 극대화</li></ul><p>원문: <a href="https://www.esgtoday.com/energy-vault-acquires-850-mw-bess-project-portfolio-to-enter-japans-energy-storage-market/?utm_source=rss&utm_medium=rss&utm_campaign=energy-vault-acquires-850-mw-bess-project-portfolio-to-enter-japans-energy-storage-market" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 44,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'JP모건, 10년 장기 바이오매스 탄소 제거 계약 체결',
      author: '관리자',
      date: '2026.04.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>JP모건체이스가 클린테크 스타트업 그래파이트(Graphyte)와 10년 동안 총 6만 톤 규모의 탄소 제거 구매 계약을 체결했습니다. 이번 계약은 그래파이트의 '카본 캐스팅' 기술을 통해 농업 및 임업 부산물을 처리하여 탄소를 영구적으로 격리하는 방식을 채택했습니다. JP모건은 이를 통해 자사의 탄소 중립 목표를 가속화하고 혁신적인 탄소 제거 기술의 상용화를 지원할 계획입니다.</p><h3>주요 포인트</h3><ul><li>그래파이트와 10년간 6만 톤 규모의 탄소 제거 크레딧 구매 계약 체결</li><li>바이오매스를 건조·압축해 지하에 저장하는 저비용 '카본 캐스팅' 기술 활용</li><li>초기 단계 탄소 제거 시장의 확장 및 JP모건의 넷제로 전략 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/jpmorgan-signs-10-year-biomass-based-carbon-removal-deal/?utm_source=rss&utm_medium=rss&utm_campaign=jpmorgan-signs-10-year-biomass-based-carbon-removal-deal" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 45,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '소라 퓨얼, 공기·물로 항공유 생산 위해 1,460만 달러 투자 유치',
      author: '관리자',
      date: '2026.04.09',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기후 테크 스타트업 소라 퓨얼(Sora Fuel)이 공기, 물, 재생 에너지를 활용해 지속가능 항공유(SAF)를 생산하는 기술로 1,460만 달러의 시드 투자를 유치했습니다. 이 회사는 탄소 포집과 연료 생산 과정을 통합한 혁신적인 전기화학적 공정을 통해 기존 방식보다 훨씬 저렴한 비용으로 항공유를 제조합니다. 이번 투자금은 기술 상용화를 위한 팀 확장과 시범 프로젝트 수행에 투입될 예정입니다.</p><h3>주요 포인트</h3><ul><li>공기 중 이산화탄소와 물을 결합해 탄소 중립적인 지속가능 항공유(SAF) 생산 기술 개발</li><li>엔진 벤처스와 시티라이트 주도로 1,460만 달러 규모의 시드 펀딩 성공</li><li>기존 직접 공기 포집(DAC) 기술 대비 에너지 효율을 극대화하고 비용을 획기적으로 절감</li></ul><p>원문: <a href="https://www.esgtoday.com/sora-fuel-raises-14-6-million-to-produce-jet-fuel-from-air-water-and-clean-energy/?utm_source=rss&utm_medium=rss&utm_campaign=sora-fuel-raises-14-6-million-to-produce-jet-fuel-from-air-water-and-clean-energy" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 37,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아파브, 지속가능성 서비스 플랫폼 \'아파브 임팩트\' 출시',
      author: '관리자',
      date: '2026.04.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>프랑스의 국제 위험 관리 그룹인 아파브(Apave)가 지속가능성 전문 서비스 플랫폼인 '아파브 임팩트(Apave Impact)'를 새롭게 출시했습니다. 이 플랫폼은 기업들이 복잡해지는 ESG 규제에 대응하고 환경 및 사회적 전환을 가속화할 수 있도록 통합적인 솔루션을 제공합니다. 아파브는 150년 이상의 위험 관리 경험을 바탕으로 고객사의 지속가능한 성장을 지원하며, 특히 유럽의 기업지속가능성보고지침(CSRD) 준수를 돕는 데 중점을 둡니다.</p><h3>주요 포인트</h3><ul><li>탈탄소화, 에너지 효율성, 사회적 책임 등 5가지 핵심 영역에 집중한 서비스 제공</li><li>CSRD 등 강화되는 글로벌 ESG 공시 규제에 대한 전문적인 컨설팅 및 검증 지원</li><li>기존의 위험 관리 전문성을 지속가능성 분야로 확장하여 기업의 실질적인 변화 유도</li></ul><p>원문: <a href="https://www.esgtoday.com/apave-launches-new-sustainability-services-platform/?utm_source=rss&utm_medium=rss&utm_campaign=apave-launches-new-sustainability-services-platform" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 38,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '스위스, 지속가능성 공시 및 실사법 제정 추진',
      author: '관리자',
      date: '2026.04.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>스위스 정부가 기업의 지속가능성 보고 및 공급망 실사 의무를 강화하는 새로운 법안을 발표했습니다. 이번 법안은 유럽연합(EU)의 CSRD 및 CSDDD 규정과 일치시키기 위한 것으로, 보고 대상 기업이 기존 약 500개에서 3,500개로 대폭 확대됩니다. 기업은 환경, 인권, 거버넌스 관련 영향을 공시해야 하며, 보고서에 대한 외부 감사가 의무화될 예정입니다.</p><h3>주요 포인트</h3><ul><li>EU의 CSRD 및 CSDDD 기준에 맞춘 규제 강화 및 국제적 정합성 확보</li><li>보고 대상 기업 확대 (대기업 및 일정 규모 이상의 금융기관 포함 약 3,500개사)</li><li>공급망 내 인권 침해 및 환경 파괴 위험에 대한 실사 의무 도입</li><li>지속가능성 보고서에 대한 독립적인 외부 기관의 인증(Assurance) 필수화</li></ul><p>원문: <a href="https://www.esgtoday.com/switzerland-proposes-new-sustainability-reporting-due-diligence-law/?utm_source=rss&utm_medium=rss&utm_campaign=switzerland-proposes-new-sustainability-reporting-due-diligence-law" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 39,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '이란 전쟁 분석: 글로벌 에너지 위기에 대한 60개국의 대응',
      author: '관리자',
      date: '2026.04.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미국·이스라엘과 이란 간의 전쟁이 발발한 지 한 달 만에 전 세계 최소 60개국이 에너지 위기에 대응하기 위한 긴급 조치를 시행했습니다. 각국은 에너지 안보를 확보하기 위해 화석 연료 공급을 일시적으로 확대하는 동시에, 장기적으로는 에너지 자립을 위한 재생 에너지 전환을 가속화하고 있습니다. 이번 분석은 지정학적 위기가 글로벌 에너지 시장과 탄소 중립 목표에 미치는 복합적인 영향을 심층적으로 다룹니다.</p><h3>주요 포인트</h3><ul><li>전 세계 60개국 이상이 전쟁으로 인한 에너지 공급망 불안정에 대응하여 정책적 변화를 시도함</li><li>단기적인 에너지 수급 불균형을 해소하기 위해 일부 국가에서 화석 연료 사용 및 생산이 일시적으로 증가함</li><li>에너지 안보 강화와 수입 의존도 감소를 위해 태양광, 풍력 등 청정 에너지로의 전환이 더욱 가속화됨</li></ul><p>원문: <a href="https://www.carbonbrief.org/iran-war-analysis-how-60-nations-have-responded-to-the-global-energy-crisis/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 40,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '이란 전쟁발 식량 가격 급등과 국제 자연 회의 결과',
      author: '관리자',
      date: '2026.04.08',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이란 전쟁으로 인한 지정학적 불안정이 글로벌 공급망에 타격을 주며 식량 가격을 급등시키고 있습니다. 이와 함께 생물다양성 보존을 위한 두 건의 주요 국제 자연 회의가 마무리되었으며, 영국에서는 멸종 위기였던 가장 키 큰 새인 두루미가 성공적으로 복원되었습니다. 기후, 토지, 식량 시스템이 교차하는 지점에서의 긴급한 현안들을 조명합니다.</p><h3>주요 포인트</h3><ul><li>이란 전쟁의 여파로 전 세계 식량 가격이 상승하며 식량 안보 위기 심화</li><li>생태계 보호 및 자연 복원을 위한 두 개의 주요 국제 협상 및 회의 종료</li><li>영국에서 가장 키가 큰 새인 두루미의 개체 수 회복과 보전 성공 사례</li></ul><p>원문: <a href="https://www.carbonbrief.org/cropped-8-april-2026-iran-war-drives-up-food-prices-two-nature-talks-conclude-return-of-uks-tallest-bird/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 41,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '중국 매체의 이란 에너지 위기 보도 분석',
      author: '관리자',
      date: '2026.04.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중국 언론은 호르무즈 해협 폐쇄 가능성에 따른 화석 연료 공급망 혼란과 이란의 에너지 위기를 집중 조명하고 있습니다. 중국은 세계 최대의 에너지 소비국으로서 중동 정세 불안이 자국의 에너지 안보에 미칠 영향을 우려하며 대응책을 모색 중입니다. 특히 서방의 제재를 비판하는 동시에, 장기적인 해결책으로 재생에너지 전환의 중요성을 강조하는 경향을 보입니다.</p><h3>주요 포인트</h3><ul><li>호르무즈 해협의 지정학적 리스크가 중국의 원유 수입 및 에너지 안보에 미치는 위협 분석</li><li>중국 관영 매체들의 서방 제재 비판 및 중동 지역 내 중국의 중재자 역할 강조</li><li>에너지 위기를 계기로 가속화되는 중국 내 재생에너지 및 저탄소 기술로의 전환 필요성 역설</li></ul><p>원문: <a href="https://www.carbonbrief.org/analysis-how-chinese-media-is-covering-the-iran-energy-crisis/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 33,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '아문디, 스위스 청정에너지 플랫폼 \'유데라\'에 전략적 투자',
      author: '관리자',
      date: '2026.04.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽 최대 자산운용사 아문디(Amundi)가 스위스의 상업 및 산업용(C&I) 청정에너지 솔루션 플랫폼인 유데라(Youdera)에 전략적 투자를 단행했습니다. 이번 투자는 아문디의 에너지 전환 전략의 일환으로, 유데라가 유럽 내 시장 점유율을 확대하고 기술 역량을 강화하는 데 사용될 예정입니다. 유데라는 기업 고객에게 초기 비용 부담 없이 태양광 발전 및 에너지 저장 시스템을 제공하는 '서비스형 에너지' 모델을 통해 유럽의 탈탄소화를 가속화하고 있습니다.</p><h3>주요 포인트</h3><ul><li>아문디, 에너지 전환(AET) 전략을 통해 유데라의 지분 확보 및 성장 지원</li><li>유데라는 독일, 스위스, 스페인, 포르투갈 등에서 상업용 태양광 및 EV 충전 솔루션 운영</li><li>전력구매계약(PPA) 기반 모델로 기업의 자본 지출 없이 재생에너지 도입 가능</li></ul><p>원문: <a href="https://www.esgtoday.com/amundi-invests-in-ci-focused-clean-energy-solutions-platform-youdera/?utm_source=rss&utm_medium=rss&utm_campaign=amundi-invests-in-ci-focused-clean-energy-solutions-platform-youdera" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 34,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '블랙스톤, 재생에너지 기업 수노텍에 투자',
      author: '관리자',
      date: '2026.04.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>세계 최대 대체 자산 운용사인 블랙스톤이 재생에너지 인프라 통합 기업인 수노텍(Sunotec)과 파트너십을 맺고 전략적 지분 투자를 단행했습니다. 수노텍은 유럽과 아프리카 전역에서 대규모 태양광 발전 프로젝트의 설계, 조달 및 건설(EPC)을 지원하는 선도적인 기업입니다. 이번 투자는 블랙스톤의 '택티컬 오퍼튜니티' 펀드를 통해 이루어졌으며, 수노텍의 글로벌 시장 확장과 기술 혁신을 가속화하는 데 사용될 예정입니다. 양사는 이번 협력을 통해 급증하는 글로벌 재생에너지 수요에 대응하고 지속 가능한 에너지 전환을 선도할 계획입니다.</p><h3>주요 포인트</h3><ul><li>블랙스톤, 수노텍에 대한 전략적 지분 투자 및 파트너십 발표</li><li>수노텍의 유럽 및 아프리카 태양광 인프라 시장 내 영향력 강화</li><li>글로벌 에너지 전환 가속화 및 재생에너지 공급망 확대 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/blackstone-backs-renewable-energy-infrastructure-platform-sunotec/?utm_source=rss&utm_medium=rss&utm_campaign=blackstone-backs-renewable-energy-infrastructure-platform-sunotec" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 35,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '마이크로소프트, 캐나다 BECCS 기반 탄소 제거 계약 체결',
      author: '관리자',
      date: '2026.04.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>마이크로소프트가 캐나다 사스카추완주의 메도우 레이크 부족 협의회(MLTC) 및 탄소 포집 기업 스반테와 15년 장기 탄소 제거 계약을 체결했습니다. 이번 협력은 바이오에너지 탄소 포집 및 저장(BECCS) 기술을 활용하여 바이오에너지 센터에서 발생하는 이산화탄소를 포집해 영구 저장하는 것을 골자로 합니다. 이는 2030년까지 탄소 네거티브 달성을 목표로 하는 마이크로소프트의 기후 전략에서 중요한 단계입니다.</p><h3>주요 포인트</h3><ul><li>캐나다 최초의 상업적 규모 BECCS 프로젝트를 통한 장기 탄소 제거 크레딧 확보</li><li>스반테의 혁신적인 고체 흡착제 기술을 적용해 연간 약 10만 톤의 이산화탄소 포집 예정</li><li>원주민 공동체인 MLTC가 소유한 바이오에너지 시설을 활용해 지역 경제와 환경 보호 동시 추구</li></ul><p>원문: <a href="https://www.esgtoday.com/microsoft-signs-15-year-beccs-based-carbon-removal-deal-in-canada/?utm_source=rss&utm_medium=rss&utm_campaign=microsoft-signs-15-year-beccs-based-carbon-removal-deal-in-canada" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 36,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'AWS, 클라우드 탄소 발자국 추적 솔루션 출시',
      author: '관리자',
      date: '2026.04.07',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>아마존웹서비스(AWS)가 고객들이 클라우드 서비스 이용 과정에서 발생하는 탄소 배출량을 측정하고 관리할 수 있는 새로운 솔루션을 출시했습니다. 이 도구는 사용자의 현재 배출량 데이터를 시각화하여 제공할 뿐만 아니라, 향후 사용량 변화에 따른 배출량 예측치도 함께 제시합니다. 이를 통해 기업들은 ESG 공시의 핵심인 공급망 내 간접 배출(Scope 3) 데이터를 더욱 효율적으로 관리할 수 있게 되었습니다.</p><h3>주요 포인트</h3><ul><li>클라우드 서비스 이용에 따른 탄소 배출량의 실시간 추적 및 분석 기능 제공</li><li>자체 데이터 센터 운영 대비 AWS 사용을 통해 절감된 탄소 배출량 비교 데이터 확인 가능</li><li>아마존의 2040년 탄소 중립 목표인 '기후 서약' 이행을 위한 고객 지원 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/aws-launches-solution-enabling-users-to-track-carbon-footprint-of-cloud-usage/?utm_source=rss&utm_medium=rss&utm_campaign=aws-launches-solution-enabling-users-to-track-carbon-footprint-of-cloud-usage" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 28,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '보잉, 4만 톤 규모 토양 기반 탄소 제거 계약 체결',
      author: '관리자',
      date: '2026.04.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 항공기 제조사 보잉(Boeing)이 자연 기반 탄소 제거 솔루션 기업인 그래스루츠 카본(Grassroots Carbon)과 4만 톤 규모의 탄소 제거 크레딧 구매 계약을 체결했습니다. 이번 파트너십은 재생 목축 방식을 통해 토양에 탄소를 저장하는 프로젝트를 지원하며, 보잉의 지속 가능성 목표 달성을 돕습니다. 보잉은 이번 계약을 통해 고품질의 탄소 제거 기술 생태계를 강화하고 기후 변화 대응에 기여할 방침입니다.</p><h3>주요 포인트</h3><ul><li>보잉과 그래스루츠 카본 간의 4만 톤 규모 다년 탄소 제거 계약</li><li>재생 목축 및 토양 관리 방식을 활용한 자연 기반 탄소 격리 솔루션</li><li>항공 산업의 넷제로 달성을 위한 보잉의 전략적 탄소 크레딧 확보</li></ul><p>원문: <a href="https://www.esgtoday.com/boeing-signs-40000-ton-soil-based-carbon-removal-deal-with-grassroots-carbon/?utm_source=rss&utm_medium=rss&utm_campaign=boeing-signs-40000-ton-soil-based-carbon-removal-deal-with-grassroots-carbon" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 29,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '토탈에너지스-마스다르, 22억 달러 규모 아시아 재생에너지 합작법인 설립',
      author: '관리자',
      date: '2026.04.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>프랑스 에너지 대기업 토탈에너지스와 아랍에미리트의 재생에너지 기업 마스다르가 아시아 지역 재생에너지 플랫폼을 통합하여 22억 달러 규모의 새로운 합작법인(JV)을 설립하기로 합의했습니다. 이번 파트너십을 통해 양사는 아시아-태평양 지역에서 태양광, 풍력, 에너지 저장 장치(ESS) 프로젝트 개발을 가속화할 계획입니다. 양사는 합작법인의 지분을 각각 50%씩 보유하며, 이를 통해 2030년까지 각사의 재생에너지 용량 목표 달성을 추진합니다.</p><h3>주요 포인트</h3><ul><li>토탈에너지스와 마스다르가 아시아 재생에너지 시장 공략을 위해 50:50 지분의 합작법인을 설립함.</li><li>기업 가치 22억 달러 규모의 이번 협력은 아태 지역 내 태양광 및 풍력 발전 역량 강화를 목표로 함.</li><li>양사는 2030년까지 각각 100GW의 재생에너지 발전 용량 확보라는 야심찬 목표를 공유하고 있음.</li></ul><p>원문: <a href="https://www.esgtoday.com/totalenergies-masdar-merge-asia-renewables-platforms-in-new-2-2-billion-jv/?utm_source=rss&utm_medium=rss&utm_campaign=totalenergies-masdar-merge-asia-renewables-platforms-in-new-2-2-billion-jv" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 30,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '서큘레이트 캐피털, 아시아 순환경제 펀드 2억 2천만 달러 유치',
      author: '관리자',
      date: '2026.04.06',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>싱가포르 기반의 투자 운용사 서큘레이트 캐피털이 아시아 지역의 플라스틱 폐기물 문제 해결과 순환경제 구축을 위해 2억 2,000만 달러 규모의 자금을 조달했습니다. 이 펀드는 남남동아시아의 플라스틱 가치 사슬 내 혁신 기업과 중소기업에 투자하여 해양 플라스틱 오염을 방지하는 데 집중합니다. 펩시코, P&G, 코카콜라 등 다수의 글로벌 기업들이 투자자로 참여하여 지속 가능한 미래를 위한 협력을 강화했습니다.</p><h3>주요 포인트</h3><ul><li>아시아 지역의 해양 플라스틱 유출 방지 및 재활용 인프라 구축을 위한 대규모 자금 확보</li><li>플라스틱 가치 사슬 전반의 스타트업 및 중소기업을 대상으로 한 전략적 투자 진행</li><li>글로벌 소비재 및 화학 기업들이 주요 투자자로 참여하여 순환경제 생태계 조성 지원</li></ul><p>원문: <a href="https://www.esgtoday.com/circulate-capital-raises-220-million-for-asia-focused-circular-economy-fund/?utm_source=rss&utm_medium=rss&utm_campaign=circulate-capital-raises-220-million-for-asia-focused-circular-economy-fund" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 31,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '중국 브리핑: 전기차 수익 급증 및 풍력 기업 입찰 거부',
      author: '관리자',
      date: '2026.04.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>중국 최대 전기차 업체 BYD가 치열한 가격 경쟁 속에서도 전년 대비 80% 이상의 순이익 성장을 기록하며 시장 지배력을 강화했습니다. 한편, 중국의 풍력 터빈 제조사 밍양 스마트 에너지는 안보 및 공급망 우려로 인해 스코틀랜드 해상 풍력 프로젝트 입찰에서 제외되었습니다. 또한 이란과 이스라엘 간의 갈등 고조가 국제 유가와 중국의 에너지 안보에 미칠 영향에 대해 주목하고 있습니다.</p><h3>주요 포인트</h3><ul><li>BYD의 2023년 순이익이 약 300억 위안을 기록하며 사상 최고치를 경신했고, 샤오미가 첫 전기차를 출시하며 시장 경쟁이 심화되었습니다.</li><li>스코틀랜드 당국은 국가 안보와 공급망 신뢰성을 이유로 중국 기업의 핵심 에너지 인프라 사업 참여를 제한했습니다.</li><li>중동의 지정학적 불안정으로 인한 유가 상승 가능성이 중국의 에너지 수급 전략과 탄소 중립 목표 이행에 새로운 변수로 부상했습니다.</li></ul><p>원문: <a href="https://www.carbonbrief.org/china-briefing-2-april-2026-ev-profits-rise-ming-yang-rejected-iran-war/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 32,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '차기 IPCC 보고서 일정을 둘러싼 국가 간 갈등과 쟁점',
      author: '관리자',
      date: '2026.04.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>기후 변화에 관한 정부 간 협의체(IPCC)의 제7차 평가 주기(AR7)가 보고서 발간 일정을 둘러싼 국가 간의 극심한 의견 대립으로 난항을 겪고 있습니다. 논쟁의 핵심은 2028년으로 예정된 파리 협정의 '제2차 전 지구적 이행점검(GST2)' 이전에 보고서를 완성할지 여부입니다. 선진국들은 정책적 시급성을 이유로 빠른 발간을 촉구하는 반면, 많은 개발도상국은 과학적 완성도와 충분한 검토 시간을 보장해야 한다고 맞서고 있습니다. 이러한 갈등은 향후 국제 기후 협상의 과학적 근거가 될 데이터의 적시 제공 여부에 큰 영향을 미칠 전망입니다.</p><h3>주요 포인트</h3><ul><li>2028년 제2차 전 지구적 이행점검(GST2) 일정에 맞춘 보고서 발간 시점을 두고 국가 간 대립</li><li>과학적 엄밀성 유지와 정책 결정에 필요한 시급성 사이의 우선순위 충돌</li><li>한정된 예산과 저술진의 업무 과부하 등 IPCC의 구조적 한계 및 운영 효율화 문제</li></ul><p>원문: <a href="https://www.carbonbrief.org/qa-why-the-standoff-between-nations-over-the-next-ipcc-reports-matters/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 23,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'ESG 주간 리뷰: EU 탄소 시장 개혁과 기업 지속가능성',
      author: '관리자',
      date: '2026.04.05',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>이번 주 ESG 주요 뉴스는 EU의 탄소배출권거래제(ETS) 개혁 본격화와 기업들의 지속가능성 실천 노력을 다루고 있습니다. EU는 탄소 국경 조정 제도(CBAM) 도입과 함께 무료 배출권 할당을 단계적으로 폐지하기 시작하며 탄소 규제를 강화했습니다. 또한, 네슬레와 ILO는 커피 공급망의 아동 노동 문제를 해결하기 위해 협력하기로 했으며, 스탠다드차타드는 철강 및 메탄 부문에 대한 새로운 탄소 감축 목표를 설정했습니다. 블랙록은 재무적 중요성에 초점을 맞춘 새로운 스튜어드십 지침을 발표하며 투자 전략을 정비했습니다.</p><h3>주요 포인트</h3><ul><li>EU ETS 개혁: 탄소 배출권 무료 할당의 단계적 폐지 및 CBAM 체계 본격 가동</li><li>공급망 인권 강화: 네슬레와 ILO의 커피 산업 내 아동 노동 근절을 위한 파트너십 체결</li><li>금융권 기후 대응: 스탠다드차타드의 고탄소 배출 산업에 대한 넷제로 중간 목표 설정</li></ul><p>원문: <a href="https://www.esgtoday.com/esg-today-week-in-review-255/?utm_source=rss&utm_medium=rss&utm_campaign=esg-today-week-in-review-255" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 24,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '테라스파크, 우주 태양광 발전 위해 540만 유로 투자 유치',
      author: '관리자',
      date: '2026.03.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>프랑스의 우주 기술 스타트업 테라스파크(TerraSpark)가 우주 기반 태양광 발전(SBSP) 기술 상용화를 위해 540만 유로(약 80억 원)의 시드 투자를 유치했습니다. 이 기업은 우주에서 태양 에너지를 수집해 지구로 전송함으로써 기상 조건이나 밤낮의 제한 없이 24시간 깨끗한 에너지를 공급하는 것을 목표로 합니다. 이번 투자금은 기술 실증을 위한 프로토타입 개발에 투입될 예정이며, 이는 글로벌 탄소 중립 달성을 위한 혁신적인 에너지 솔루션으로 주목받고 있습니다.</p><h3>주요 포인트</h3><ul><li>540만 유로 규모의 시드 라운드 투자 완료 (세레나, Bpifrance 등 참여)</li><li>지상 태양광의 한계인 기상 및 야간 제약을 극복하는 24/7 지속 가능한 에너지망 구축</li><li>무선 전력 전송 및 고효율 태양광 패널 기술을 활용한 우주 에너지 인프라 개발 가속화</li></ul><p>원문: <a href="https://www.esgtoday.com/terraspark-raises-e5-4-million-to-provide-solar-power-from-space/?utm_source=rss&utm_medium=rss&utm_campaign=terraspark-raises-e5-4-million-to-provide-solar-power-from-space" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 25,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '구글, Amex GBT·쉘과 지속가능항공유(SAF) 장기 계약 체결',
      author: '관리자',
      date: '2026.03.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>구글이 비즈니스 출장에서 발생하는 탄소 배출을 줄이기 위해 Amex GBT 및 쉘 에비에이션과 지속가능항공유(SAF) 구매를 위한 장기 파트너십을 체결했습니다. 이번 협력은 블록체인 기반 SAF 솔루션인 '아벨리아(Avelia)' 플랫폼을 통해 이루어지며, 구글은 이를 통해 항공 여행 관련 스코프 3(Scope 3) 배출량을 감축할 계획입니다. 구글은 이번 계약을 통해 SAF 시장의 확대를 지원하고 항공 산업의 탈탄소화를 가속화하는 데 기여하고자 합니다.</p><h3>주요 포인트</h3><ul><li>블록체인 기반 플랫폼 '아벨리아'를 활용해 SAF의 환경적 특성을 구매하고 배출 감축분을 투명하게 인증받는 방식입니다.</li><li>'북앤클레임(Book-and-Claim)' 모델을 적용하여 실제 급유 위치와 상관없이 SAF 사용에 따른 탄소 감축 혜택을 기업이 할당받을 수 있습니다.</li><li>이번 파트너십은 2030년까지 전체 가치 사슬에서 넷제로를 달성하려는 구글의 지속가능성 목표를 뒷받침하는 중요한 행보입니다.</li></ul><p>원문: <a href="https://www.esgtoday.com/google-signs-long-term-deal-with-amex-gbt-shell-saf-platform/?utm_source=rss&utm_medium=rss&utm_campaign=google-signs-long-term-deal-with-amex-gbt-shell-saf-platform" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 26,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '에너지 위기 대응책 부활과 영국 재생에너지 기록 경신',
      author: '관리자',
      date: '2026.04.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>전 세계 주요국들이 에너지 가격 불안정에 대응하기 위해 과거의 위기 관리 조치들을 다시 도입하고 있습니다. 영국은 올해 1분기 재생에너지 발전량에서 역대 최고 기록을 세우며 에너지 전환의 성과를 보였습니다. 또한, 독일 등 유럽에서는 간편한 '플러그인 태양광' 시스템이 가계비 절감의 새로운 대안으로 떠오르고 있습니다.</p><h3>주요 포인트</h3><ul><li>에너지 가격 변동성 완화를 위한 각국의 긴급 지원 및 규제 조치 재가동</li><li>영국 내 풍력 및 태양광 발전 비중이 분기 기준 역대 최고치 경신</li><li>베란다형 플러그인 태양광 보급 확대로 일반 가계의 에너지 비용 절감</li></ul><p>원문: <a href="https://www.carbonbrief.org/debriefed-2-april-2026/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 27,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '영국, 풍력·태양광 발전으로 가스 수입 10억 파운드 절감',
      author: '관리자',
      date: '2026.04.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>2026년 3월, 영국은 기록적인 풍력 및 태양광 발전량 덕분에 약 10억 파운드(한화 약 1조 7천억 원) 규모의 가스 수입을 대체하는 성과를 거두었습니다. 재생에너지의 비중이 확대되면서 화석 연료에 대한 의존도가 크게 낮아졌으며, 이는 에너지 안보 강화와 수입 비용 절감으로 이어졌습니다. 기상 조건과 설비 용량 확대로 인해 재생에너지가 전력 믹스에서 차지하는 비중이 역대 최고 수준을 기록하며 에너지 전환의 효율성을 입증했습니다.</p><h3>주요 포인트</h3><ul><li>풍력과 태양광의 기록적인 발전으로 10억 파운드 상당의 가스 수입 비용 절감</li><li>재생에너지 비중 확대를 통한 국가 에너지 안보 및 가격 안정성 기여</li><li>탄소 배출량 감소와 함께 화석 연료 의존도를 낮추는 에너지 전환 가속화</li></ul><p>원문: <a href="https://www.carbonbrief.org/analysis-record-wind-and-solar-saved-uk-from-gas-imports-worth-1bn-in-march-2026/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 19,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'EU 집행위, 산업계 압박 속 탄소배출권 거래제(ETS) 개편 착수',
      author: '관리자',
      date: '2026.04.02',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>유럽연합 집행위원회가 산업계의 비용 부담 완화 요구에 대응하여 탄소배출권 거래제(ETS)의 핵심 메커니즘인 시장안정화예비군(MSR) 조정안을 발표했습니다. 이번 조치는 탄소 가격의 과도한 변동성을 억제하고 시장의 안정성을 확보하여 기업들의 경쟁력을 보호하는 데 목적이 있습니다. 이는 EU의 기후 목표 달성과 산업계의 경제적 생존 사이의 균형을 맞추려는 시도로 풀이됩니다.</p><h3>주요 포인트</h3><ul><li>탄소 가격의 급격한 변동을 방지하기 위해 시장안정화예비군(MSR)의 운영 임계값 조정</li><li>에너지 비용 상승으로 어려움을 겪는 유럽 내 제조 및 에너지 집약 산업의 글로벌 경쟁력 보호</li><li>탄소 시장의 투명성과 예측 가능성을 높여 기업들의 장기적인 탈탄소화 투자를 유도</li></ul><p>원문: <a href="https://www.esgtoday.com/eu-commission-launches-first-of-planned-ets-reforms-amid-industry-pressure/?utm_source=rss&utm_medium=rss&utm_campaign=eu-commission-launches-first-of-planned-ets-reforms-amid-industry-pressure" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 20,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '미 에너지부-아마존, 의류 및 IT 폐기물서 핵심 광물 회수 협력',
      author: '관리자',
      date: '2026.03.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>미국 에너지부(DOE) 산하 에임스 국립연구소와 핵심소재혁신(CMI) 허브가 아마존과 손잡고 폐기물에서 핵심 소재를 회수하는 기술 개발에 착수했습니다. 이번 협력은 수명이 다한 의류와 전자제품 등에서 희토류와 같은 전략적 자원을 추출하여 공급망의 탄력성을 높이는 데 중점을 둡니다. 아마존은 연구를 위해 자사 유통 과정에서 발생하는 폐기물을 제공하며, 이를 통해 자원 순환을 촉진하고 환경 영향을 최소화할 방침입니다.</p><h3>주요 포인트</h3><ul><li>미 에너지부와 아마존의 민관 협력을 통한 핵심 광물 재활용 및 회수 기술 고도화</li><li>전자제품의 희토류 자석 및 의류의 합성 섬유 등 다양한 폐기물 자원화에 집중</li><li>해외 의존도가 높은 핵심 소재의 안정적 공급망 확보 및 순환 경제 모델 구축 기여</li></ul><p>원문: <a href="https://www.esgtoday.com/u-s-doe-partners-with-amazon-on-solutions-to-recover-critical-materials-from-textile-tech-waste/?utm_source=rss&utm_medium=rss&utm_campaign=u-s-doe-partners-with-amazon-on-solutions-to-recover-critical-materials-from-textile-tech-waste" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 21,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '노비스토, 탄소 회계 소프트웨어 기업 \'미니멈\' 인수',
      author: '관리자',
      date: '2026.03.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>ESG 공시 소프트웨어 기업 노비스토(Novisto)가 탄소 관리 전문 기업 미니멈(Minimum)을 인수했습니다. 이번 인수는 기업들이 CSRD 및 SEC 기후 공시 등 강화되는 글로벌 규제 환경에 효과적으로 대응할 수 있도록 탄소 회계 역량을 강화하기 위한 전략적 결정입니다. 양사의 기술 결합을 통해 고객은 단일 플랫폼에서 보다 정밀하고 감사 가능한 탄소 데이터를 통합 관리할 수 있게 됩니다.</p><h3>주요 포인트</h3><ul><li>노비스토의 ESG 공시 플랫폼에 미니멈의 자동화된 탄소 회계 기술 통합</li><li>데이터 수집, 배출 계수 매핑, 감사 가능한 보고서 생성 프로세스 간소화</li><li>글로벌 규제 준수를 위한 고도화된 탄소 배출량 측정 및 관리 솔루션 제공</li></ul><p>원문: <a href="https://www.esgtoday.com/novisto-acquires-carbon-accounting-software-provider-minimum/?utm_source=rss&utm_medium=rss&utm_campaign=novisto-acquires-carbon-accounting-software-provider-minimum" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 22,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '토요타, 볼보·다임러 수소 연료전지 합작법인 합류',
      author: '관리자',
      date: '2026.03.31',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>볼보 그룹, 다임러 트럭, 토요타 자동차가 수소 연료전지 시스템의 개발 및 양산을 위해 전략적 협력을 체결했습니다. 토요타는 기존 볼보와 다임러가 설립한 합작법인 '셀센트릭(cellcentric)'에 합류하여 대형 트럭용 연료전지 기술 혁신을 가속화할 예정입니다. 이번 파트너십은 운송 부문의 탈탄소화를 위해 수소 솔루션의 비용을 낮추고 상용화를 앞당기는 데 중점을 두고 있습니다.</p><h3>주요 포인트</h3><ul><li>대형 상용차 및 다양한 산업 분야를 위한 수소 연료전지 시스템의 대량 생산 및 상용화 추진</li><li>글로벌 주요 제조사 간의 협력을 통한 기술 표준화 및 생산 규모의 경제 달성</li><li>장거리 운송의 탄소 중립을 위한 배터리 전기차 보완 솔루션으로서 수소 기술 생태계 강화</li></ul><p>원문: <a href="https://www.esgtoday.com/toyota-plans-to-join-volvo-daimler-in-hydrogen-fuel-cell-jv/?utm_source=rss&utm_medium=rss&utm_campaign=toyota-plans-to-join-volvo-daimler-in-hydrogen-fuel-cell-jv" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 18,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '에너베뉴, 리튬 없는 ESS 확대를 위해 3억 달러 유치',
      author: '관리자',
      date: '2026.04.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에너지 저장 솔루션 기업 에너베뉴(EnerVenue)가 리튬을 사용하지 않는 차세대 배터리 기술 상용화를 위해 3억 달러 규모의 시리즈 B 투자를 유치했습니다. 이 회사는 NASA의 우주 탐사선에서 사용되던 금속-수소 배터리 기술을 지상용 에너지 저장 장치(ESS)에 적합하도록 발전시켰습니다.</p><h3>주요 포인트</h3><ul><li>3만 회 이상의 충·방전 사이클을 견디는 뛰어난 내구성과 20년 이상의 긴 수명 제공</li><li>리튬 이온 배터리와 달리 화재 위험이 없는 높은 안전성 및 100% 재활용 가능한 친환경성 확보</li><li>슐룸베르거, 사우디 아람코 등 글로벌 에너지 및 투자 기업들이 대거 참여하여 기술력 입증</li></ul><p>원문: <a href="https://www.esgtoday.com/enervenue-raises-300-million-to-scale-lithium-free-energy-storage-solution/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 17,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '에메랄드 AI, 데이터센터 에너지 최적화 위해 2,500만 달러 유치',
      author: '관리자',
      date: '2026.04.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>에너지 기술 스타트업 에메랄드 AI(Emerald AI)가 데이터센터의 에너지 사용을 전력망 용량에 맞게 조정하는 기술 개발을 위해 2,500만 달러의 전략적 투자를 유치했습니다.</p><h3>주요 포인트</h3><ul><li>AI 기반 플랫폼을 활용해 데이터센터의 전력 수요와 지역 전력망의 공급 능력을 실시간으로 동기화</li><li>데이터센터를 '유연한 부하(flexible load)'로 전환하여 전력망 과부하를 방지하고 재생 에너지 활용도 제고</li><li>이클립스(Eclipse)가 주도한 이번 펀딩을 통해 기술 고도화 및 시장 확대를 가속화할 계획</li></ul><p>원문: <a href="https://www.esgtoday.com/emerald-ai-raises-25-million-to-align-data-center-energy-use-with-grid-capacity/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 16,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '네슬레, 커피 공급망 인권 개선 프로젝트 착수',
      author: '관리자',
      date: '2026.04.01',
      views: 0,
      hasAttachment: false,
      content: `
        <h2>핵심 내용</h2><p>글로벌 식품 기업 네슬레가 국제노동기구(ILO)와 협력하여 커피 공급망 내 인권 보호를 위한 새로운 프로젝트를 시작했습니다.</p><h3>주요 포인트</h3><ul><li>네슬레와 ILO의 파트너십을 통한 커피 공급망 내 노동권 및 인권 강화</li><li>베트남, 멕시코, 인도네시아를 중심으로 노동 감독 시스템 강화 및 사회적 보호 확대</li><li>아동 노동 근절 및 농가 소득 증대를 포함한 네스카페 플랜 2030 전략의 가속화</li></ul><p>원문: <a href="https://www.esgtoday.com/nestle-launches-project-to-improve-human-rights-in-coffee-supply-chain/" target="_blank" rel="noopener">원문 보기</a></p>
      `
    },
    {
      id: 15,
      pinned: true,
      category: 'cert', categoryName: '인증자료',
      topic: 'ecovadis', topicName: '에코바디스',
      title: '글로벌 공급망 지속가능성(ESG) 평가 – 에코바디스 \'EcoVadis\'',
      author: '관리자',
      date: '2025.08.23',
      views: 431,
      hasAttachment: false,
      content: `
        <h2>에코바디스(EcoVadis)란?</h2>
        <p>에코바디스(EcoVadis)는 글로벌 공급망에서 기업의 ESG(환경, 사회, 윤리) 성과를 평가하는 세계 최대 규모의 지속가능성 평가 플랫폼입니다.</p>
        <p>전 세계 130개국, 200여 개 업종의 기업들이 에코바디스 평가를 받고 있으며, 글로벌 기업들이 공급업체 관리 기준으로 활용하고 있습니다.</p>
        <h3>평가 4대 영역</h3>
        <ul>
          <li><strong>환경(Environment)</strong> – 에너지 소비, 온실가스 배출, 폐기물 관리, 수자원 관리</li>
          <li><strong>노동·인권(Labor & Human Rights)</strong> – 근로 조건, 산업안전, 인권 보호</li>
          <li><strong>윤리(Ethics)</strong> – 반부패, 공정 경쟁, 정보 보호</li>
          <li><strong>지속가능 조달(Sustainable Procurement)</strong> – 공급망 관리, 사회적 책임</li>
        </ul>
        <h3>등급 체계</h3>
        <p>에코바디스는 0~100점 기반으로 평가하며, 상위 1%는 플래티넘, 상위 5%는 골드, 상위 25%는 실버, 상위 50%는 브론즈 메달을 부여합니다.</p>
        <p>BrightPath ESG Consulting은 에코바디스 고득점 전략 컨설팅을 제공합니다. 현황 진단부터 증빙자료 체계 구축까지, 전 과정을 함께합니다.</p>
      `
    },
    {
      id: 14,
      pinned: false,
      category: 'law', categoryName: '법규',
      topic: 'esg', topicName: 'ESG',
      title: 'EU 기업지속가능성실사지침(CSDDD) 최종 확정 – 기업 대응 가이드',
      author: '관리자',
      date: '2025.07.15',
      views: 892,
      hasAttachment: true,
      content: `
        <h2>CSDDD란?</h2>
        <p>EU 기업지속가능성실사지침(Corporate Sustainability Due Diligence Directive)은 EU 역내에서 활동하는 대기업에게 공급망 전반에 걸친 인권 및 환경 실사 의무를 부과하는 법률입니다.</p>
        <h3>적용 대상</h3>
        <p>EU 내 매출 4억5천만 유로 이상, 직원 1,000명 이상의 기업에 의무 적용됩니다.</p>
      `
    },
    {
      id: 13,
      pinned: false,
      category: 'law', categoryName: '법규',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '2025년 중대재해처벌법 시행령 개정사항 총정리',
      author: '관리자',
      date: '2025.06.20',
      views: 1523,
      hasAttachment: true,
      content: `
        <h2>2025년 주요 개정 사항</h2>
        <p>중대재해처벌법 시행 3년을 맞아 주요 시행령 개정사항이 반영되었습니다. 50인 이상 사업장은 물론 공급망 전반에 대한 안전보건관리체계 구축이 더욱 강화되었습니다.</p>
      `
    },
    {
      id: 12,
      pinned: false,
      category: 'cert', categoryName: '인증자료',
      topic: 'rba', topicName: 'RBA',
      title: 'RBA CoC 8.0 / RBA VAP Standard 8.0.1 발표',
      author: '관리자',
      date: '2024.03.28',
      views: 7062,
      hasAttachment: true,
      content: `
        <h2>RBA 8.0 주요 변경사항</h2>
        <p>RBA(Responsible Business Alliance)가 2024년 3월 28일자로 RBA Code of Conduct 8.0 및 VAP Standard 8.0.1을 정식 발표하였습니다.</p>
        <h3>핵심 강화 항목</h3>
        <ul>
          <li>Scope 3 온실가스 산정·관리 항목 대폭 확대</li>
          <li>노동자 인권보호 항목 강화</li>
          <li>경영시스템과 실사 프로세스 문서화 핵심 도입</li>
          <li>분쟁광물(Conflict Minerals) 관리 강화</li>
        </ul>
      `
    },
    {
      id: 11,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'BrightPath ESG, 2024년 상반기 컨설팅 실적 보고',
      author: '관리자',
      date: '2024.07.02',
      views: 1245,
      hasAttachment: false,
      content: `
        <p>BrightPath ESG Consulting은 2024년 상반기 총 35건의 컨설팅 프로젝트를 성공적으로 수행하였습니다.</p>
      `
    },
    {
      id: 10,
      pinned: false,
      category: 'law', categoryName: '법규',
      topic: 'esg', topicName: 'ESG',
      title: 'KSSB, 국내 지속가능성 공시기준 초안 공개',
      author: '관리자',
      date: '2024.05.03',
      views: 3968,
      hasAttachment: true,
      content: `
        <h2>KSSB 지속가능성 공시기준</h2>
        <p>한국회계기준원 산하 한국지속가능성기준위원회(KSSB)가 국내 기업에 적용될 지속가능성 공시기준 초안을 공개하였습니다.</p>
      `
    },
    {
      id: 9,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'esg', topicName: 'ESG',
      title: '2023년 평가자 평가: 갈림길에 선 ESG 등급',
      author: '관리자',
      date: '2024.04.04',
      views: 3815,
      hasAttachment: true,
      content: `
        <p>2023년 ESG 평가 결과를 분석하며, 기업들이 직면한 주요 과제와 향후 ESG 등급 향상을 위한 전략을 제시합니다.</p>
      `
    },
    {
      id: 8,
      pinned: false,
      category: 'cert', categoryName: '인증자료',
      topic: 'esg', topicName: 'ESG',
      title: 'IPCC 제6차 종합보고서 영문/국문 번역본',
      author: '관리자',
      date: '2024.03.19',
      views: 8037,
      hasAttachment: true,
      content: `
        <p>IPCC 제6차 평가보고서 종합 요약본의 영문 원문과 국문 번역본을 공유합니다. 기후변화 대응 전략 수립 시 참고하시기 바랍니다.</p>
      `
    },
    {
      id: 7,
      pinned: false,
      category: 'cert', categoryName: '인증자료',
      topic: 'esg', topicName: 'ESG',
      title: 'GRI, 생물다양성 표준(GRI 101 Biodiversity 2024) 발표',
      author: '관리자',
      date: '2024.02.13',
      views: 2056,
      hasAttachment: true,
      content: `
        <p>GRI(Global Reporting Initiative)가 생물다양성 관련 새로운 보고 표준 GRI 101을 발표하였습니다.</p>
      `
    },
    {
      id: 6,
      pinned: false,
      category: 'cert', categoryName: '인증자료',
      topic: 'esg', topicName: 'ESG',
      title: 'GRI, 광업 지속가능성 표준(GRI 14: Mining Sector 2024) 발표',
      author: '관리자',
      date: '2024.02.13',
      views: 1722,
      hasAttachment: true,
      content: `
        <p>GRI가 광업 부문에 특화된 지속가능성 보고 표준 GRI 14를 발표하였습니다.</p>
      `
    },
    {
      id: 5,
      pinned: false,
      category: 'law', categoryName: '법규',
      topic: 'safety', topicName: '중대재해처벌법',
      title: '산업안전보건법 개정안 주요 내용 및 기업 대응 방안',
      author: '관리자',
      date: '2024.01.15',
      views: 2341,
      hasAttachment: true,
      content: `
        <p>2024년 산업안전보건법 개정안의 주요 내용을 정리하고, 기업이 준비해야 할 대응 방안을 안내합니다.</p>
      `
    },
    {
      id: 4,
      pinned: false,
      category: 'cert', categoryName: '인증자료',
      topic: 'esg', topicName: 'ESG',
      title: 'SBTi 목표 설정 가이드라인 업데이트 (2024)',
      author: '관리자',
      date: '2024.01.08',
      views: 1893,
      hasAttachment: false,
      content: `
        <p>SBTi(Science Based Targets initiative)가 2024년 목표 설정 가이드라인을 업데이트하였습니다. Scope 3 감축 목표 설정이 더욱 강화되었습니다.</p>
      `
    },
    {
      id: 3,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: 'BrightPath ESG Consulting 홈페이지 오픈',
      author: '관리자',
      date: '2023.12.01',
      views: 3201,
      hasAttachment: false,
      content: `
        <p>BrightPath ESG Consulting의 공식 홈페이지가 오픈하였습니다. ESG 경영, 에코바디스, 중대재해처벌법, ISO 인증에 관한 컨설팅 서비스를 제공합니다.</p>
      `
    },
    {
      id: 2,
      pinned: false,
      category: 'cert', categoryName: '인증자료',
      topic: 'esg', topicName: 'ESG',
      title: 'CBAM(탄소국경조정제도) 전환기간 시작 – 기업 대비 체크리스트',
      author: '관리자',
      date: '2023.10.15',
      views: 4521,
      hasAttachment: true,
      content: `
        <p>EU CBAM 전환기간이 2023년 10월부터 시작되었습니다. 수출 기업의 대비 사항을 정리합니다.</p>
      `
    },
    {
      id: 1,
      pinned: false,
      category: 'insight', categoryName: '인사이트',
      topic: 'esg', topicName: 'ESG',
      title: 'K-ESG 가이드라인 개정판 주요 변경사항 분석',
      author: '관리자',
      date: '2023.09.05',
      views: 2879,
      hasAttachment: true,
      content: `
        <p>산업통상자원부에서 발표한 K-ESG 가이드라인 개정판의 주요 변경사항을 분석합니다.</p>
      `
    }
  ];

  // 등록일 내림차순 정렬 (동일 날짜는 id 내림차순) — 게시판은 항상 최신순 노출
  boardData.sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);

  // 화면 표시용 번호: 일반 글에 한해 최신=총개수, 가장 오래된=1
  (() => {
    const nonPinned = boardData.filter(d => !d.pinned);
    const total = nonPinned.length;
    nonPinned.forEach((item, i) => { item.displayNo = total - i; });
  })();

  // --- 설정 ---
  const ITEMS_PER_PAGE = 10;
  let currentPage = 1;
  let filteredData = [...boardData];

  // --- DOM Elements ---
  let boardBody = document.getElementById('boardBody');
  let boardPagination = document.getElementById('boardPagination');
  let searchInput = document.getElementById('boardSearchInput');
  let typeFilter = document.getElementById('boardTypeFilter');
  let topicFilter = document.getElementById('boardTopicFilter');
  let searchBtn = document.getElementById('boardSearchBtn');
  let totalCount = document.getElementById('boardTotalCount');
  const boardContent = document.getElementById('boardContent');

  // --- Utility ---
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // --- SVG Icons ---
  const pinSVG = `<span class="pin-icon"><svg viewBox="0 0 16 16"><polygon points="8,1 10,6 15,7 11,11 12,16 8,13 4,16 5,11 1,7 6,6"/></svg></span>`;
  const attachSVG = `<span class="attach-icon"><svg viewBox="0 0 16 16"><path d="M14 5l-7.5 7.5a3.5 3.5 0 01-5-5L9 0a2 2 0 013 3L5 10a.5.5 0 01-1-1L11 2"/></svg></span>`;

  // --- Render Table ---
  function renderTable() {
    const pinned = filteredData.filter(d => d.pinned);
    const normal = filteredData.filter(d => !d.pinned);

    const totalPages = Math.max(1, Math.ceil(normal.length / ITEMS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;

    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = normal.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    totalCount.textContent = filteredData.length;

    let html = '';

    if (currentPage === 1) {
      pinned.forEach(item => { html += buildRow(item, true); });
    }

    if (pageItems.length === 0 && pinned.length === 0) {
      html = `
        <tr>
          <td colspan="5">
            <div class="board-empty">
              <div class="board-empty-icon">
                <svg viewBox="0 0 24 24"><path d="M9 12h6M12 9v6M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
              </div>
              <h3>검색 결과가 없습니다</h3>
              <p>다른 검색어나 필터를 시도해보세요.</p>
            </div>
          </td>
        </tr>`;
    } else {
      pageItems.forEach(item => { html += buildRow(item, false); });
    }

    boardBody.innerHTML = html;

    boardBody.querySelectorAll('[data-id]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showDetail(parseInt(link.dataset.id));
      });
    });

    renderPagination();
  }

  function isRecent(dateStr) {
    const [y, m, d] = dateStr.split('.').map(Number);
    const itemDate = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffDays = (today - itemDate) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays < 3;
  }

  function buildRow(item, isPinned) {
    const catClass = `badge-category--${item.category}`;
    const topClass = `badge-category--${item.topic}`;
    const pinnedClass = isPinned ? ' pinned' : '';
    const noText = isPinned ? pinSVG : item.displayNo;

    let titleParts = `<span class="badge-category ${catClass}">${escapeHTML(item.categoryName)}</span>`;
    titleParts += `<span class="badge-category ${topClass}">${escapeHTML(item.topicName)}</span>`;
    titleParts += `<a href="#" data-id="${item.id}">${escapeHTML(item.title)}</a>`;
    if (item.hasAttachment) titleParts += attachSVG;
    if (isRecent(item.date)) titleParts += `<span class="badge-new">N</span>`;

    return `
      <tr class="${pinnedClass}">
        <td class="col-no">${noText}</td>
        <td class="col-title">${titleParts}</td>
        <td class="col-author">${item.author}</td>
        <td class="col-date">${item.date}</td>
        <td class="col-views">${item.views.toLocaleString()}</td>
      </tr>`;
  }

  // --- Render Pagination ---
  function renderPagination() {
    const normal = filteredData.filter(d => !d.pinned);
    const realTotalPages = Math.max(1, Math.ceil(normal.length / ITEMS_PER_PAGE));

    let html = '';
    html += `<button class="page-arrow" data-page="1" ${currentPage === 1 ? 'disabled' : ''}>&laquo;</button>`;
    html += `<button class="page-arrow" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>&lsaquo;</button>`;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(realTotalPages, startPage + 4);
    if (endPage - startPage < 4) startPage = Math.max(1, endPage - 4);

    for (let i = startPage; i <= endPage; i++) {
      html += `<button data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
    }

    html += `<button class="page-arrow" data-page="${currentPage + 1}" ${currentPage === realTotalPages ? 'disabled' : ''}>&rsaquo;</button>`;
    html += `<button class="page-arrow" data-page="${realTotalPages}" ${currentPage === realTotalPages ? 'disabled' : ''}>&raquo;</button>`;

    boardPagination.innerHTML = html;

    boardPagination.querySelectorAll('button:not(:disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page);
        renderTable();
        document.querySelector('.board-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // --- Filter & Search (이중 필터) ---
  function applyFilter() {
    const type = typeFilter ? typeFilter.value : '';
    const topic = topicFilter ? topicFilter.value : '';
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';

    filteredData = boardData.filter(item => {
      const matchType = !type || item.category === type;
      const matchTopic = !topic || item.topic === topic;
      const matchKeyword = !keyword || item.title.toLowerCase().includes(keyword);
      return matchType && matchTopic && matchKeyword;
    });

    currentPage = 1;
    renderTable();
  }

  function bindFilterEvents() {
    if (searchBtn) searchBtn.addEventListener('click', applyFilter);
    if (searchInput) searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') applyFilter(); });
    if (typeFilter) typeFilter.addEventListener('change', applyFilter);
    if (topicFilter) topicFilter.addEventListener('change', applyFilter);
  }

  bindFilterEvents();

  // --- Detail View ---
  function showDetail(id) {
    const item = boardData.find(d => d.id === id);
    if (!item) return;

    item.views++;

    const allSorted = boardData.filter(d => !d.pinned);
    const idx = allSorted.findIndex(d => d.id === id);
    const prev = idx < allSorted.length - 1 ? allSorted[idx + 1] : null;
    const next = idx > 0 ? allSorted[idx - 1] : null;

    const catClass = `badge-category--${item.category}`;
    const topClass = `badge-category--${item.topic}`;

    let html = `
      <div class="board-detail">
        <div class="board-detail-header">
          <div class="board-detail-category">
            <span class="badge-category ${catClass}">${item.categoryName}</span>
            <span class="badge-category ${topClass}">${item.topicName}</span>
          </div>
          <h1 class="board-detail-title">${escapeHTML(item.title)}</h1>
          <div class="board-detail-meta">
            <span><strong>작성자</strong> ${item.author}</span>
            <span><strong>등록일</strong> ${item.date}</span>
            <span><strong>조회수</strong> ${item.views.toLocaleString()}</span>
            ${item.hasAttachment ? `<span>${attachSVG} 첨부파일</span>` : ''}
          </div>
        </div>
        <div class="board-detail-body">
          ${item.content}
        </div>
        <div class="board-detail-footer">
          <button class="btn btn--primary" id="backToList">목록으로</button>
        </div>
      </div>
      <div class="board-nav-list">`;

    if (next) {
      html += `
        <div class="board-nav-item">
          <span class="board-nav-item-label">다음 글</span>
          <a href="#" data-id="${next.id}">${next.title}</a>
        </div>`;
    }
    if (prev) {
      html += `
        <div class="board-nav-item">
          <span class="board-nav-item-label">이전 글</span>
          <a href="#" data-id="${prev.id}">${prev.title}</a>
        </div>`;
    }

    html += `</div>`;

    boardContent.innerHTML = html;

    document.querySelector('.board-section').scrollIntoView({ behavior: 'smooth', block: 'start' });

    document.getElementById('backToList').addEventListener('click', showList);

    boardContent.querySelectorAll('.board-nav-item a[data-id]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showDetail(parseInt(link.dataset.id));
      });
    });
  }

  // Store original list HTML for restore
  const listHTML = boardContent.innerHTML;

  function showList() {
    boardContent.innerHTML = listHTML;

    // Re-bind DOM refs
    boardBody = document.getElementById('boardBody');
    boardPagination = document.getElementById('boardPagination');
    searchInput = document.getElementById('boardSearchInput');
    typeFilter = document.getElementById('boardTypeFilter');
    topicFilter = document.getElementById('boardTopicFilter');
    searchBtn = document.getElementById('boardSearchBtn');
    totalCount = document.getElementById('boardTotalCount');

    bindFilterEvents();
    renderTable();
    document.querySelector('.board-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // --- Initial Render ---
  if (boardBody) {
    renderTable();
  }

});
