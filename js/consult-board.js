/* ============================================
   BrightPath ESG - Consulting Board JS
   자료실 스타일 테이블 게시판 (잠금/공개)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const data = [
    { id: 20, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'progress', statusName: '진행중', title: '전자부품 A사 - 에코바디스 골드 등급 목표 컨설팅', author: '관리자', date: '2026.03.28', views: 42 },
    { id: 19, locked: true, category: 'rba', categoryName: 'RBA', status: 'new', statusName: '신규', title: '자동차부품 B사 - RBA 8.0 긴급 심사 대응', author: '관리자', date: '2026.03.25', views: 38 },
    { id: 18, locked: true, category: 'esg', categoryName: 'ESG', status: 'progress', statusName: '진행중', title: '제조업 C사 - ESG 경영체계 구축 및 K-ESG 대응', author: '관리자', date: '2026.03.22', views: 67 },
    { id: 17, locked: false, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '식품업 D사 - 에코바디스 실버 → 골드 등급 상향 성공', author: '관리자', date: '2026.03.18', views: 312, content: '<h3>프로젝트 개요</h3><p>식품 제조기업 D사는 기존 에코바디스 실버 등급에서 골드 등급으로의 상향을 목표로 컨설팅을 의뢰하였습니다.</p><h3>주요 수행 내용</h3><ul><li>4대 평가 영역 갭 분석</li><li>증빙자료 55건 체계적 구축</li><li>지속가능경영보고서 30페이지 제작</li><li>임직원 ESG 교육 2회 실시</li></ul><h3>성과</h3><p>3개월 만에 에코바디스 재평가에서 <strong>골드 등급(상위 5%)</strong>을 획득하였습니다.</p>' },
    { id: 16, locked: true, category: 'safety', categoryName: '중대재해', status: 'progress', statusName: '진행중', title: '건설업 E사 - 중대재해처벌법 안전보건관리체계 구축', author: '관리자', date: '2026.03.15', views: 89 },
    { id: 15, locked: true, category: 'iso', categoryName: 'ISO', status: 'complete', statusName: '완료', title: 'IT업 F사 - ISO 27001 정보보안 인증 취득 지원', author: '관리자', date: '2026.03.10', views: 156 },
    { id: 14, locked: false, category: 'rba', categoryName: 'RBA', status: 'complete', statusName: '완료', title: '반도체 G사 - RBA 골드 등급 취득 성공 사례', author: '관리자', date: '2026.03.05', views: 428, content: '<h3>프로젝트 개요</h3><p>반도체 부품 제조기업 G사는 글로벌 고객사의 RBA 인증 요구에 대응하기 위해 컨설팅을 의뢰하였습니다.</p><h3>주요 수행 내용</h3><ul><li>RBA VAP 8.0.2 기준 자가진단(SAQ)</li><li>5대 영역 격차 분석</li><li>Scope 3 온실가스 산정 체계 구축</li><li>모의심사 2회 + 본심사 대응</li></ul><h3>성과</h3><p>6개월간 준비를 거쳐 <strong>RBA 골드 등급</strong>을 취득하였습니다.</p>' },
    { id: 13, locked: true, category: 'esg', categoryName: 'ESG', status: 'progress', statusName: '진행중', title: '물류업 H사 - 지속가능경영보고서 제작', author: '관리자', date: '2026.02.28', views: 73 },
    { id: 12, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'new', statusName: '신규', title: '화학업 I사 - 에코바디스 첫 인증 준비 상담', author: '관리자', date: '2026.02.22', views: 51 },
    { id: 11, locked: true, category: 'safety', categoryName: '중대재해', status: 'complete', statusName: '완료', title: '제조업 J사 - 50인 미만 사업장 중처법 대응 완료', author: '관리자', date: '2026.02.18', views: 201 },
    { id: 10, locked: false, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '공공기관 K기관 - ESG 경영 도입 및 교육 성공 사례', author: '관리자', date: '2026.02.10', views: 537, content: '<h3>프로젝트 개요</h3><p>K 공공기관은 정부의 ESG 경영 확산 방침에 따라 체계적인 ESG 도입을 의뢰하였습니다.</p><h3>주요 수행 내용</h3><ul><li>공공기관 맞춤 ESG 현황 진단</li><li>K-ESG 가이드라인 기반 전략 수립</li><li>전 임직원 대상 ESG 교육 3회 (150명)</li><li>ESG 경영 중장기 로드맵 수립</li></ul><h3>성과</h3><p>경영평가 ESG 항목에서 <strong>우수 등급</strong>을 획득하였습니다.</p>' },
    { id: 9, locked: true, category: 'iso', categoryName: 'ISO', status: 'progress', statusName: '진행중', title: '에너지업 L사 - ISO 50001 에너지관리 인증', author: '관리자', date: '2026.02.05', views: 94 },
    { id: 8, locked: true, category: 'rba', categoryName: 'RBA', status: 'new', statusName: '신규', title: '배터리업 M사 - RBA 인증 첫 심사 대비', author: '관리자', date: '2026.01.28', views: 118 },
    { id: 7, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '섬유업 N사 - 에코바디스 브론즈 → 실버 등급 상향', author: '관리자', date: '2026.01.20', views: 183 },
    { id: 6, locked: true, category: 'safety', categoryName: '중대재해', status: 'progress', statusName: '진행중', title: '서비스업 O사 - 프랜차이즈 중대재해처벌법 대응', author: '관리자', date: '2026.01.15', views: 145 },
    { id: 5, locked: true, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '철강업 P사 - ESG 공급망 실사 대응', author: '관리자', date: '2026.01.08', views: 267 },
    { id: 4, locked: false, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '자동차부품 Q사 - 에코바디스 플래티넘 등급 달성', author: '관리자', date: '2025.12.20', views: 892, content: '<h3>프로젝트 개요</h3><p>글로벌 자동차부품 기업 Q사는 골드에서 플래티넘을 목표로 장기 파트너십을 의뢰하였습니다.</p><h3>주요 수행 내용</h3><ul><li>글로벌 본사 및 국내 법인 통합 ESG 전략</li><li>탄소중립 로드맵 및 SBTi 목표 설정</li><li>공급망 실사 체계 고도화</li><li>지속가능경영보고서 GRI 기준 제작</li></ul><h3>성과</h3><p><strong>에코바디스 플래티넘(상위 1%)</strong>을 달성하였습니다.</p>' },
    { id: 3, locked: true, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '금융업 R사 - ESG 채권 발행 지원', author: '관리자', date: '2025.12.10', views: 203 },
    { id: 2, locked: true, category: 'iso', categoryName: 'ISO', status: 'complete', statusName: '완료', title: '제약업 S사 - ISO 14001 환경경영 인증', author: '관리자', date: '2025.11.25', views: 176 },
    { id: 1, locked: true, category: 'safety', categoryName: '중대재해', status: 'complete', statusName: '완료', title: '물류업 T사 - 위험성 평가 및 비상대응 체계 구축', author: '관리자', date: '2025.11.15', views: 231 },
  ];

  const ITEMS_PER_PAGE = 10;
  let currentPage = 1;
  let filteredData = [...data];
  let openDetailId = null;

  const body = document.getElementById('cbBody');
  const paginationEl = document.getElementById('cbPagination');
  const filterSelect = document.getElementById('cbFilter');
  const searchInput = document.getElementById('cbSearchInput');
  const searchBtn = document.getElementById('cbSearchBtn');
  const totalCount = document.getElementById('cbTotalCount');
  const modal = document.getElementById('cbModal');
  const modalBackdrop = document.getElementById('cbModalBackdrop');
  const modalClose = document.getElementById('cbModalClose');

  const lockSVG = '<span class="cb-lock-icon"><svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg></span>';
  const attachSVG = '<span class="attach-icon"><svg viewBox="0 0 16 16"><path d="M14 5l-7.5 7.5a3.5 3.5 0 01-5-5L9 0a2 2 0 013 3L5 10a.5.5 0 01-1-1L11 2"/></svg></span>';

  function render() {
    const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const page = filteredData.slice(start, start + ITEMS_PER_PAGE);

    totalCount.textContent = filteredData.length;

    let html = '';
    if (page.length === 0) {
      html = '<tr><td colspan="5"><div class="board-empty" style="padding:60px 20px;text-align:center;color:var(--gray-500)"><h3>검색 결과가 없습니다</h3><p>다른 검색어나 카테고리를 시도해보세요.</p></div></td></tr>';
    } else {
      page.forEach(item => {
        const rowClass = item.locked ? 'cb-row--locked' : 'cb-row--open';
        const categoryClass = `badge-category--${item.category}`;
        const statusClass = `cb-status-badge--${item.status}`;
        const lockIcon = item.locked ? lockSVG : '';
        const statusBadge = `<span class="cb-status-badge ${statusClass}"><span class="cb-status-dot"></span>${item.statusName}</span>`;

        html += `<tr class="${rowClass}">
          <td class="col-no">${item.id}</td>
          <td class="col-title">
            <span class="badge-category ${categoryClass}">${item.categoryName}</span>
            ${lockIcon}<a href="#" data-id="${item.id}">${item.title}</a>${statusBadge}
          </td>
          <td class="col-author">${item.author}</td>
          <td class="col-date">${item.date}</td>
          <td class="col-views">${item.views.toLocaleString()}</td>
        </tr>`;

        // Detail row for open items
        if (!item.locked && item.content && openDetailId === item.id) {
          html += `<tr class="cb-detail-row visible">
            <td colspan="5" class="cb-detail-cell">
              <div class="cb-detail-body">${item.content}</div>
            </td>
          </tr>`;
        }
      });
    }

    body.innerHTML = html;

    // Bind clicks
    body.querySelectorAll('[data-id]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(link.dataset.id);
        const item = data.find(d => d.id === id);
        if (item.locked) {
          showModal();
        } else {
          openDetailId = openDetailId === id ? null : id;
          item.views++;
          render();
        }
      });
    });

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    let html = '';
    html += `<button class="page-arrow" data-page="1" ${currentPage === 1 ? 'disabled' : ''}>&laquo;</button>`;
    html += `<button class="page-arrow" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>&lsaquo;</button>`;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    if (endPage - startPage < 4) startPage = Math.max(1, endPage - 4);

    for (let i = startPage; i <= endPage; i++) {
      html += `<button data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
    }

    html += `<button class="page-arrow" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>&rsaquo;</button>`;
    html += `<button class="page-arrow" data-page="${totalPages}" ${currentPage === totalPages ? 'disabled' : ''}>&raquo;</button>`;

    paginationEl.innerHTML = html;

    paginationEl.querySelectorAll('button:not(:disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page);
        openDetailId = null;
        render();
        document.querySelector('.cb-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function applyFilter() {
    const category = filterSelect.value;
    const keyword = searchInput.value.trim().toLowerCase();
    filteredData = data.filter(item => {
      const matchCategory = !category || item.category === category;
      const matchKeyword = !keyword || item.title.toLowerCase().includes(keyword);
      return matchCategory && matchKeyword;
    });
    currentPage = 1;
    openDetailId = null;
    render();
  }

  searchBtn.addEventListener('click', applyFilter);
  searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') applyFilter(); });
  filterSelect.addEventListener('change', applyFilter);

  // Modal
  function showModal() {
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    modal.classList.remove('visible');
    document.body.style.overflow = '';
  }

  modalBackdrop.addEventListener('click', hideModal);
  modalClose.addEventListener('click', hideModal);

  render();
});
