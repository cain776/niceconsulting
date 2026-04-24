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
      id: 106,
      pinned: false,
      category: 'news', categoryName: '소식',
      topic: 'esg', topicName: 'ESG',
      title: '라임 락 뉴 에너지, 에너지 전환 펀드 6억 4천만 달러 유치',
      author: '관리자',
      date: '2026.04.23',
      views: 0,
      hasAttachment: false,
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: true,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
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
      isNew: false,
      content: `
        <p>산업통상자원부에서 발표한 K-ESG 가이드라인 개정판의 주요 변경사항을 분석합니다.</p>
      `
    }
  ];

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

  function buildRow(item, isPinned) {
    const catClass = `badge-category--${item.category}`;
    const topClass = `badge-category--${item.topic}`;
    const pinnedClass = isPinned ? ' pinned' : '';
    const noText = isPinned ? pinSVG : item.id;

    let titleParts = `<span class="badge-category ${catClass}">${escapeHTML(item.categoryName)}</span>`;
    titleParts += `<span class="badge-category ${topClass}">${escapeHTML(item.topicName)}</span>`;
    titleParts += `<a href="#" data-id="${item.id}">${escapeHTML(item.title)}</a>`;
    if (item.hasAttachment) titleParts += attachSVG;
    if (item.isNew) titleParts += `<span class="badge-new">N</span>`;

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

    const allSorted = boardData.filter(d => !d.pinned).sort((a, b) => b.id - a.id);
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
