/* ============================================
   BrightPath ESG Board - JavaScript
   검색, 필터, 페이지네이션, 상세보기
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- 게시판 데이터 (JSON) ---
  const boardData = [
    {
      id: 15,
      pinned: true,
      category: 'cert',
      categoryName: '인증',
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
      category: 'esg',
      categoryName: 'ESG',
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
      category: 'law',
      categoryName: '법규',
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
      category: 'cert',
      categoryName: '인증',
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
      category: 'news',
      categoryName: '소식',
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
      category: 'esg',
      categoryName: 'ESG',
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
      category: 'esg',
      categoryName: 'ESG',
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
      category: 'cert',
      categoryName: '인증',
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
      category: 'cert',
      categoryName: '인증',
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
      category: 'cert',
      categoryName: '인증',
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
      category: 'law',
      categoryName: '법규',
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
      category: 'esg',
      categoryName: 'ESG',
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
      category: 'news',
      categoryName: '소식',
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
      category: 'cert',
      categoryName: '인증',
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
      category: 'esg',
      categoryName: 'ESG',
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
  let filterSelect = document.getElementById('boardFilter');
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
    // Split pinned vs normal
    const pinned = filteredData.filter(d => d.pinned);
    const normal = filteredData.filter(d => !d.pinned);

    // Pagination for normal items only
    const totalPages = Math.max(1, Math.ceil(normal.length / ITEMS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;

    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = normal.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    // Update count
    totalCount.textContent = filteredData.length;

    // Build rows
    let html = '';

    // Pinned rows (always show on page 1)
    if (currentPage === 1) {
      pinned.forEach(item => {
        html += buildRow(item, true);
      });
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
              <p>다른 검색어나 카테고리를 시도해보세요.</p>
            </div>
          </td>
        </tr>`;
    } else {
      pageItems.forEach(item => {
        html += buildRow(item, false);
      });
    }

    boardBody.innerHTML = html;

    // Add click events
    boardBody.querySelectorAll('[data-id]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showDetail(parseInt(link.dataset.id));
      });
    });

    renderPagination();
  }

  function buildRow(item, isPinned) {
    const categoryClass = `badge-category--${item.category}`;
    const pinnedClass = isPinned ? ' pinned' : '';
    const noText = isPinned ? pinSVG : item.id;

    let titleParts = `<span class="badge-category ${categoryClass}">${escapeHTML(item.categoryName)}</span>`;
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

    // Page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(realTotalPages, startPage + 4);
    if (endPage - startPage < 4) startPage = Math.max(1, endPage - 4);

    for (let i = startPage; i <= endPage; i++) {
      html += `<button data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
    }

    html += `<button class="page-arrow" data-page="${currentPage + 1}" ${currentPage === realTotalPages ? 'disabled' : ''}>&rsaquo;</button>`;
    html += `<button class="page-arrow" data-page="${realTotalPages}" ${currentPage === realTotalPages ? 'disabled' : ''}>&raquo;</button>`;

    boardPagination.innerHTML = html;

    // Events
    boardPagination.querySelectorAll('button:not(:disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page);
        renderTable();
        document.querySelector('.board-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // --- Filter & Search ---
  function applyFilter() {
    const category = filterSelect.value;
    const keyword = searchInput.value.trim().toLowerCase();

    filteredData = boardData.filter(item => {
      const matchCategory = !category || item.category === category;
      const matchKeyword = !keyword || item.title.toLowerCase().includes(keyword);
      return matchCategory && matchKeyword;
    });

    currentPage = 1;
    renderTable();
  }

  searchBtn.addEventListener('click', applyFilter);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') applyFilter();
  });
  filterSelect.addEventListener('change', applyFilter);

  // --- Detail View ---
  function showDetail(id) {
    const item = boardData.find(d => d.id === id);
    if (!item) return;

    // Increment views
    item.views++;

    // Find prev/next
    const allSorted = boardData.filter(d => !d.pinned).sort((a, b) => b.id - a.id);
    const idx = allSorted.findIndex(d => d.id === id);
    const prev = idx < allSorted.length - 1 ? allSorted[idx + 1] : null;
    const next = idx > 0 ? allSorted[idx - 1] : null;

    const categoryClass = `badge-category--${item.category}`;

    let html = `
      <div class="board-detail">
        <div class="board-detail-header">
          <div class="board-detail-category">
            <span class="badge-category ${categoryClass}">${item.categoryName}</span>
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

    // Scroll to top of section
    document.querySelector('.board-section').scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Back button
    document.getElementById('backToList').addEventListener('click', showList);

    // Nav links
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
    filterSelect = document.getElementById('boardFilter');
    searchBtn = document.getElementById('boardSearchBtn');
    totalCount = document.getElementById('boardTotalCount');

    // Re-bind events (guard against missing elements)
    if (searchBtn) searchBtn.addEventListener('click', applyFilter);
    if (searchInput) searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') applyFilter(); });
    if (filterSelect) filterSelect.addEventListener('change', applyFilter);

    renderTable();
    document.querySelector('.board-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // --- Initial Render ---
  if (boardBody) {
    renderTable();
  }

  // Header scroll, hamburger, dropdown handled by main.js

});
