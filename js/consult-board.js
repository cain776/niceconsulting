/* ============================================
   BrightPath ESG - Consulting Board JS
   자료실 스타일 테이블 게시판 (잠금/공개)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const data = [
    // 2026
    { id: 40, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'progress', statusName: '진행중', title: '전자부품 ****사 - 에코바디스 골드 등급 목표 컨설팅', author: '관리자', date: '2026.03.28', views: 42 },
    { id: 39, locked: true, category: 'rba', categoryName: 'RBA', status: 'new', statusName: '신규', title: '자동차부품 ****사 - RBA 8.0 긴급 심사 대응', author: '관리자', date: '2026.03.25', views: 38 },
    { id: 38, locked: true, category: 'esg', categoryName: 'ESG', status: 'progress', statusName: '진행중', title: '제조업 ****사 - ESG 경영체계 구축 및 K-ESG 대응', author: '관리자', date: '2026.03.22', views: 67 },
    { id: 37, locked: false, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '식품업 ****사 - 에코바디스 실버 → 골드 등급 상향 성공', author: '관리자', date: '2026.03.18', views: 312, content: '<h3>프로젝트 개요</h3><p>식품 제조기업이 기존 에코바디스 실버 등급에서 골드 등급으로의 상향을 목표로 컨설팅을 의뢰하였습니다.</p><h3>주요 수행 내용</h3><ul><li>4대 평가 영역 갭 분석</li><li>증빙자료 55건 체계적 구축</li><li>지속가능경영보고서 30페이지 제작</li><li>임직원 ESG 교육 2회 실시</li></ul><h3>성과</h3><p>3개월 만에 에코바디스 재평가에서 <strong>골드 등급(상위 5%)</strong>을 획득하였습니다.</p>' },
    { id: 36, locked: true, category: 'safety', categoryName: '중대재해', status: 'progress', statusName: '진행중', title: '건설업 ****사 - 중대재해처벌법 안전보건관리체계 구축', author: '관리자', date: '2026.03.15', views: 89 },
    { id: 35, locked: true, category: 'iso', categoryName: 'ISO', status: 'complete', statusName: '완료', title: 'IT업 ****사 - ISO 27001 정보보안 인증 취득 지원', author: '관리자', date: '2026.03.10', views: 156 },
    { id: 34, locked: false, category: 'rba', categoryName: 'RBA', status: 'complete', statusName: '완료', title: '반도체 ****사 - RBA 골드 등급 취득 성공 사례', author: '관리자', date: '2026.03.05', views: 428, content: '<h3>프로젝트 개요</h3><p>반도체 부품 제조기업이 글로벌 고객사의 RBA 인증 요구에 대응하기 위해 컨설팅을 의뢰하였습니다.</p><h3>주요 수행 내용</h3><ul><li>RBA VAP 8.0.2 기준 자가진단(SAQ)</li><li>5대 영역 격차 분석</li><li>Scope 3 온실가스 산정 체계 구축</li><li>모의심사 2회 + 본심사 대응</li></ul><h3>성과</h3><p>6개월간 준비를 거쳐 <strong>RBA 골드 등급</strong>을 취득하였습니다.</p>' },
    { id: 33, locked: true, category: 'esg', categoryName: 'ESG', status: 'progress', statusName: '진행중', title: '물류업 ****사 - 지속가능경영보고서 제작', author: '관리자', date: '2026.02.28', views: 73 },
    { id: 32, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'new', statusName: '신규', title: '화학업 ****사 - 에코바디스 첫 인증 준비 상담', author: '관리자', date: '2026.02.22', views: 51 },
    { id: 31, locked: true, category: 'safety', categoryName: '중대재해', status: 'complete', statusName: '완료', title: '제조업 ****사 - 50인 미만 사업장 중처법 대응 완료', author: '관리자', date: '2026.02.18', views: 201 },
    { id: 30, locked: false, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '공공기관 **** - ESG 경영 도입 및 교육 성공 사례', author: '관리자', date: '2026.02.10', views: 537, content: '<h3>프로젝트 개요</h3><p>공공기관이 정부의 ESG 경영 확산 방침에 따라 체계적인 ESG 도입을 의뢰하였습니다.</p><h3>주요 수행 내용</h3><ul><li>공공기관 맞춤 ESG 현황 진단</li><li>K-ESG 가이드라인 기반 전략 수립</li><li>전 임직원 대상 ESG 교육 3회 (150명)</li><li>ESG 경영 중장기 로드맵 수립</li></ul><h3>성과</h3><p>경영평가 ESG 항목에서 <strong>우수 등급</strong>을 획득하였습니다.</p>' },
    { id: 29, locked: true, category: 'iso', categoryName: 'ISO', status: 'progress', statusName: '진행중', title: '에너지업 ****사 - ISO 50001 에너지관리 인증', author: '관리자', date: '2026.02.05', views: 94 },
    { id: 28, locked: true, category: 'rba', categoryName: 'RBA', status: 'new', statusName: '신규', title: '배터리업 ****사 - RBA 인증 첫 심사 대비', author: '관리자', date: '2026.01.28', views: 118 },
    { id: 27, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '섬유업 ****사 - 에코바디스 브론즈 → 실버 등급 상향', author: '관리자', date: '2026.01.20', views: 183 },
    { id: 26, locked: true, category: 'safety', categoryName: '중대재해', status: 'progress', statusName: '진행중', title: '서비스업 ****사 - 프랜차이즈 중대재해처벌법 대응', author: '관리자', date: '2026.01.15', views: 145 },
    { id: 25, locked: true, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '철강업 ****사 - ESG 공급망 실사 대응', author: '관리자', date: '2026.01.08', views: 267 },
    // 2025
    { id: 24, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '자동차부품 ****사 - 에코바디스 플래티넘 등급 달성', author: '관리자', date: '2025.12.20', views: 892 },
    { id: 23, locked: true, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '금융업 ****사 - ESG 채권 발행 지원', author: '관리자', date: '2025.12.10', views: 203 },
    { id: 22, locked: true, category: 'iso', categoryName: 'ISO', status: 'complete', statusName: '완료', title: '제약업 ****사 - ISO 14001 환경경영 인증', author: '관리자', date: '2025.11.25', views: 176 },
    { id: 21, locked: true, category: 'safety', categoryName: '중대재해', status: 'complete', statusName: '완료', title: '물류업 ****사 - 위험성 평가 및 비상대응 체계 구축', author: '관리자', date: '2025.11.15', views: 231 },
    { id: 20, locked: true, category: 'rba', categoryName: 'RBA', status: 'complete', statusName: '완료', title: '전자업 ****사 - RBA 실버 등급 취득', author: '관리자', date: '2025.10.22', views: 164 },
    { id: 19, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '화장품 ****사 - 에코바디스 골드 등급 취득', author: '관리자', date: '2025.09.15', views: 289 },
    { id: 18, locked: true, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '건설업 ****사 - ESG 경영 진단 및 전략 수립', author: '관리자', date: '2025.08.10', views: 142 },
    { id: 17, locked: true, category: 'iso', categoryName: 'ISO', status: 'complete', statusName: '완료', title: '식품업 ****사 - ISO 22000 식품안전 인증', author: '관리자', date: '2025.07.05', views: 198 },
    { id: 16, locked: true, category: 'safety', categoryName: '중대재해', status: 'complete', statusName: '완료', title: '제조업 ****사 - 안전보건관리체계 고도화', author: '관리자', date: '2025.05.20', views: 213 },
    { id: 15, locked: true, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '유통업 ****사 - 공급망 ESG 실사 대응', author: '관리자', date: '2025.03.12', views: 175 },
    // 2024
    { id: 14, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '반도체 ****사 - 에코바디스 실버 등급 취득', author: '관리자', date: '2024.11.28', views: 341 },
    { id: 13, locked: true, category: 'rba', categoryName: 'RBA', status: 'complete', statusName: '완료', title: '디스플레이 ****사 - RBA 브론즈 등급 취득', author: '관리자', date: '2024.09.15', views: 256 },
    { id: 12, locked: true, category: 'iso', categoryName: 'ISO', status: 'complete', statusName: '완료', title: '물류업 ****사 - ISO 45001 안전보건 인증', author: '관리자', date: '2024.07.20', views: 189 },
    { id: 11, locked: true, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '에너지 ****사 - 탄소중립 로드맵 수립', author: '관리자', date: '2024.05.10', views: 224 },
    { id: 10, locked: true, category: 'safety', categoryName: '중대재해', status: 'complete', statusName: '완료', title: '건설업 ****사 - 중대재해 예방 컨설팅', author: '관리자', date: '2024.03.08', views: 197 },
    // 2023
    { id: 9, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '자동차 ****사 - 에코바디스 골드 등급 달성', author: '관리자', date: '2023.11.22', views: 412 },
    { id: 8, locked: true, category: 'iso', categoryName: 'ISO', status: 'complete', statusName: '완료', title: 'IT업 ****사 - ISO 27001 정보보호 인증', author: '관리자', date: '2023.09.18', views: 278 },
    { id: 7, locked: true, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '공공기관 **** - K-ESG 대응 체계 구축', author: '관리자', date: '2023.07.05', views: 315 },
    { id: 6, locked: true, category: 'rba', categoryName: 'RBA', status: 'complete', statusName: '완료', title: '전자부품 ****사 - RBA 첫 심사 대응', author: '관리자', date: '2023.04.12', views: 187 },
    { id: 5, locked: true, category: 'safety', categoryName: '중대재해', status: 'complete', statusName: '완료', title: '제조업 ****사 - 안전보건관리체계 구축', author: '관리자', date: '2023.02.15', views: 246 },
    // 2022
    { id: 4, locked: true, category: 'ecovadis', categoryName: '에코바디스', status: 'complete', statusName: '완료', title: '화학업 ****사 - 에코바디스 브론즈 등급 취득', author: '관리자', date: '2022.12.10', views: 356 },
    { id: 3, locked: true, category: 'iso', categoryName: 'ISO', status: 'complete', statusName: '완료', title: '제조업 ****사 - ISO 9001 품질경영 인증', author: '관리자', date: '2022.09.20', views: 298 },
    { id: 2, locked: true, category: 'esg', categoryName: 'ESG', status: 'complete', statusName: '완료', title: '중견기업 ****사 - ESG 경영 도입 컨설팅', author: '관리자', date: '2022.06.15', views: 267 },
    { id: 1, locked: true, category: 'safety', categoryName: '중대재해', status: 'complete', statusName: '완료', title: '건설업 ****사 - 중대재해처벌법 대응 체계 수립', author: '관리자', date: '2022.03.10', views: 312 },
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

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  const lockIcon = '<span class="cb-lock-emoji">&#x1F512;</span>';
  const unlockIcon = '<span class="cb-unlock-emoji">&#x1F513;</span>';

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
        const lockEmoji = item.locked ? lockIcon : unlockIcon;
        const statusBadge = `<span class="cb-status-badge ${statusClass}"><span class="cb-status-dot"></span>${item.statusName}</span>`;

        html += `<tr class="${rowClass}">
          <td class="col-no">${item.id}</td>
          <td class="col-title">
            <span class="cb-labels"><span class="badge-category ${categoryClass}">${escapeHTML(item.categoryName)}</span>${statusBadge}</span>
            <span class="cb-title-text">${lockEmoji}<a href="#" data-id="${item.id}">${escapeHTML(item.title)}</a></span>
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
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('visible')) hideModal();
  });

  render();
});
