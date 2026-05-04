/* ============================================
   BrightPath ESG - Header & Footer Components
   Single source of truth for shared UI
   ============================================ */
(function () {
  'use strict';

  // Base path detection for GitHub Pages compatibility
  var BASE = (function() {
    var path = window.location.pathname;
    // If running on GitHub Pages with /niceconsulting/ prefix
    if (path.indexOf('/niceconsulting/') === 0) return '/niceconsulting';
    // Custom domain or local dev
    return '';
  })();

  function bp(p) { return BASE + p; }

  var SVG_ARROW = '<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

  // --- Active nav detection ---
  function getActiveSection() {
    var path = window.location.pathname;
    // Strip base path for GitHub Pages
    if (BASE) path = path.replace(BASE, '');
    if (path.indexOf('/esg/') !== -1)       return 'esg';
    if (path.indexOf('/ecovadis/') !== -1)  return 'ecovadis';
    if (path.indexOf('/iso/') !== -1)       return 'iso';
    if (path.indexOf('/safety/') !== -1)    return 'safety';
    if (path.indexOf('/smallbiz/') !== -1)  return 'smallbiz';
    if (path.indexOf('/guide/') !== -1)     return 'guide';
    if (path.indexOf('/board') !== -1)      return 'board';
    if (path === '/' || path === '' || path === '/index.html') return 'board';
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
          '<a href="' + bp('/') + '" class="logo">' +
            '<span class="logo-symbol">明</span>' +
            '<span class="logo-text" id="logoText">' +
              '<span class="logo-text-en">明, ESG <em>Story</em></span>' +
              '<span class="logo-text-ko">明, <em>ESG를 말하다</em></span>' +
            '</span>' +
          '</a>' +
          '<nav class="nav" id="nav">' +
            '<a href="' + bp('/') + '" class="nav-link' + ac('board') + '">자료실</a>' +
            '<a href="' + bp('/esg/index.html') + '" class="nav-link' + ac('esg') + '">ESG</a>' +
            '<a href="' + bp('/ecovadis/index.html') + '" class="nav-link' + ac('ecovadis') + '">에코바디스</a>' +
            '<a href="' + bp('/iso/index.html') + '" class="nav-link' + ac('iso') + '">ISO</a>' +
            '<a href="' + bp('/safety/index.html') + '" class="nav-link' + ac('safety') + '">중대재해처벌법</a>' +
            '<a href="' + bp('/smallbiz/index.html') + '" class="nav-link' + ac('smallbiz') + '">소상공인</a>' +
            '<div class="nav-dropdown">' +
              '<a href="#" class="nav-link nav-link--dropdown' + guideActive() + '">인증 가이드 ' + SVG_ARROW + '</a>' +
              '<div class="nav-dropdown-menu">' +
                '<a href="' + bp('/guide/rba.html') + '">RBA</a>' +
                '<a href="' + bp('/guide/kcgs.html') + '">KCGS</a>' +
                '<a href="' + bp('/guide/sbti.html') + '">SBTi</a>' +
                '<a href="' + bp('/guide/cbam.html') + '">CBAM</a>' +
              '</div>' +
            '</div>' +
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
              '<a href="' + bp('/') + '" class="logo">' +
                '<span class="logo-symbol">明</span>' +
                '<span class="logo-text">明, <em>ESG를 말하다</em></span>' +
              '</a>' +
              '<div class="footer-nav">' +
                '<a href="' + bp('/esg/index.html') + '">ESG</a>' +
                '<a href="' + bp('/ecovadis/index.html') + '">에코바디스</a>' +
                '<a href="' + bp('/iso/index.html') + '">ISO</a>' +
                '<a href="' + bp('/safety/index.html') + '">중대재해처벌법</a>' +
                '<a href="' + bp('/guide/rba.html') + '">RBA</a>' +
                '<a href="' + bp('/smallbiz/index.html') + '">소상공인</a>' +
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
