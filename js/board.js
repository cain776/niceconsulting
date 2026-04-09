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
