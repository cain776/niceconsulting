/* ============================================
   BrightPath ESG - Header & Footer Components
   Single source of truth for shared UI
   ============================================ */
(function () {
  'use strict';

  var SVG_ARROW = '<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

  // --- Active nav detection ---
  function getActiveSection() {
    var path = window.location.pathname;
    if (path.includes('/esg/'))       return 'esg';
    if (path.includes('/ecovadis/'))  return 'ecovadis';
    if (path.includes('/iso/'))       return 'iso';
    if (path.includes('/safety/'))    return 'safety';
    if (path.includes('/smallbiz/'))  return 'smallbiz';
    if (path.includes('/guide/'))     return 'guide';
    if (path.includes('/track-record')) return 'track-record';
    if (path.includes('/board'))      return 'board';
    return '';
  }

  function ac(section) {
    return getActiveSection() === section ? ' nav-link--active' : '';
  }

  function guideActive() {
    return getActiveSection() === 'guide' ? ' nav-link--active' : '';
  }

  // --- Header ---
  function renderHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;

    var isGuide = document.body.classList.contains('guide-body');
    var scrolledClass = isGuide ? ' scrolled' : '';

    el.outerHTML =
      '<header class="header' + scrolledClass + '" id="header">' +
        '<div class="header-inner">' +
          '<a href="/" class="logo">' +
            '<span class="logo-symbol">明</span>' +
            '<span class="logo-text" id="logoText">' +
              '<span class="logo-text-en">BrightPath <em>ESG</em></span>' +
              '<span class="logo-text-ko">브라이트패스 <em>컨설팅</em></span>' +
            '</span>' +
          '</a>' +
          '<nav class="nav" id="nav">' +
            '<div class="nav-dropdown">' +
              '<a href="/#about" class="nav-link nav-link--dropdown">브라이트패스컨설팅 ' + SVG_ARROW + '</a>' +
              '<div class="nav-dropdown-menu">' +
                '<a href="/#about">회사 소개</a>' +
                '<a href="/#ceo">대표 소개</a>' +
                '<a href="/#services">서비스</a>' +
                '<a href="/#process">프로세스</a>' +
                '<a href="/#industries">산업분야</a>' +
                '<a href="/#team">컨설턴트</a>' +
              '</div>' +
            '</div>' +
            '<a href="/pages/track-record.html" class="nav-link' + ac('track-record') + '">실적</a>' +
            '<a href="/esg/index.html" class="nav-link' + ac('esg') + '">ESG</a>' +
            '<a href="/ecovadis/index.html" class="nav-link' + ac('ecovadis') + '">에코바디스</a>' +
            '<a href="/iso/index.html" class="nav-link' + ac('iso') + '">ISO</a>' +
            '<a href="/safety/index.html" class="nav-link' + ac('safety') + '">중대재해처벌법</a>' +
            '<a href="/smallbiz/index.html" class="nav-link' + ac('smallbiz') + '">소상공인</a>' +
            '<div class="nav-dropdown">' +
              '<a href="#" class="nav-link nav-link--dropdown' + guideActive() + '">인증 가이드 ' + SVG_ARROW + '</a>' +
              '<div class="nav-dropdown-menu">' +
                '<a href="/guide/rba.html">RBA</a>' +
                '<a href="/guide/kcgs.html">KCGS</a>' +
                '<a href="/guide/sbti.html">SBTi</a>' +
                '<a href="/guide/cbam.html">CBAM</a>' +
              '</div>' +
            '</div>' +
            '<a href="/pages/board.html" class="nav-link' + ac('board') + '">자료실</a>' +
            '<a href="/#contact" class="nav-link nav-link--cta">상담 신청</a>' +
          '</nav>' +
          '<button type="button" class="hamburger" id="hamburger" aria-label="메뉴 열기">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</header>';
  }

  // --- Footer ---
  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;

    el.outerHTML =
      '<footer class="footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-top">' +
              '<a href="/" class="logo">' +
                '<span class="logo-symbol">明</span>' +
                '<span class="logo-text">BrightPath <em>ESG</em></span>' +
              '</a>' +
              '<div class="footer-nav">' +
                '<a href="/esg/index.html">ESG</a>' +
                '<a href="/ecovadis/index.html">에코바디스</a>' +
                '<a href="/iso/index.html">ISO</a>' +
                '<a href="/safety/index.html">중대재해처벌법</a>' +
                '<a href="/guide/rba.html">RBA</a>' +
                '<a href="/smallbiz/index.html">소상공인</a>' +
              '</div>' +
            '</div>' +
            '<div class="footer-mid">' +
              '<div class="footer-company-row">' +
                '<span class="footer-company">브라이트패스 ESG 컨설팅</span>' +
                '<span class="footer-divider">|</span>' +
                '<span>인천 계양구 봉오대로651번길 9</span>' +
                '<span class="footer-divider">|</span>' +
                '<a href="tel:010-7433-0339">010-7433-0339</a>' +
                '<span class="footer-divider">|</span>' +
                '<a href="mailto:contact@brightpathesg.com">contact@brightpathesg.com</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<p>&copy; 2026 BrightPath ESG Consulting. All rights reserved.</p>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  // --- Run ---
  function init() {
    renderHeader();
    renderFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
