// Auto-generate JSON-LD structured data for guide pages
(function () {
  var title = document.querySelector('title');
  var desc = document.querySelector('meta[name="description"]');
  var canonical = window.location.href;

  if (!title || !desc) return;

  var pageTitle = title.textContent.split('|')[0].trim();
  var pageDesc = desc.getAttribute('content') || '';

  // Determine breadcrumb from path
  var path = window.location.pathname;
  var sectionMap = {
    '/esg/': 'ESG 경영',
    '/ecovadis/': '에코바디스',
    '/iso/': 'ISO 인증',
    '/safety/': '중대재해처벌법',
    '/smallbiz/': '소상공인',
    '/guide/': '인증 가이드',
    '/pages/': '자료'
  };

  var sectionName = '';
  for (var key in sectionMap) {
    if (path.indexOf(key) !== -1) {
      sectionName = sectionMap[key];
      break;
    }
  }

  // Article structured data
  var articleLD = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': pageTitle,
    'description': pageDesc,
    'url': canonical,
    'author': {
      '@type': 'Organization',
      'name': 'BrightPath ESG Consulting',
      'url': 'https://brightpathesg.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'BrightPath ESG Consulting',
      'url': 'https://brightpathesg.com'
    },
    'mainEntityOfPage': canonical
  };

  // BreadcrumbList structured data
  var breadcrumbItems = [
    { '@type': 'ListItem', 'position': 1, 'name': '홈', 'item': 'https://brightpathesg.com/' }
  ];

  if (sectionName) {
    var sectionPath = path.split('/').slice(0, -1).join('/') + '/';
    breadcrumbItems.push({
      '@type': 'ListItem',
      'position': 2,
      'name': sectionName,
      'item': 'https://brightpathesg.com' + sectionPath
    });
    breadcrumbItems.push({
      '@type': 'ListItem',
      'position': 3,
      'name': pageTitle,
      'item': canonical
    });
  }

  var breadcrumbLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems
  };

  // Inject into page
  var script1 = document.createElement('script');
  script1.type = 'application/ld+json';
  script1.textContent = JSON.stringify(articleLD);
  document.head.appendChild(script1);

  var script2 = document.createElement('script');
  script2.type = 'application/ld+json';
  script2.textContent = JSON.stringify(breadcrumbLD);
  document.head.appendChild(script2);
})();
