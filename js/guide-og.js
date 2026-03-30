// Auto-generate Open Graph meta tags for guide pages
(function () {
  if (document.querySelector('meta[property="og:title"]')) return;

  var title = document.querySelector('title');
  var desc = document.querySelector('meta[name="description"]');
  if (!title || !desc) return;

  var pageTitle = title.textContent.split('|')[0].trim();
  var pageDesc = desc.getAttribute('content') || '';
  var canonical = document.querySelector('link[rel="canonical"]');
  var url = canonical ? canonical.getAttribute('href') : window.location.href;

  // Section-specific OG images
  var path = window.location.pathname;
  var ogImage = 'https://brightpathesg.com/images/og-image.jpg';
  var imageMap = {
    '/esg/': 'https://brightpathesg.com/images/og-esg.jpg',
    '/ecovadis/': 'https://brightpathesg.com/images/og-ecovadis.jpg',
    '/iso/': 'https://brightpathesg.com/images/og-iso.jpg',
    '/safety/': 'https://brightpathesg.com/images/og-safety.jpg',
    '/smallbiz/': 'https://brightpathesg.com/images/og-smallbiz.jpg',
    '/guide/': 'https://brightpathesg.com/images/og-guide.jpg'
  };
  for (var key in imageMap) {
    if (path.indexOf(key) !== -1) { ogImage = imageMap[key]; break; }
  }

  var tags = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDesc },
    { property: 'og:url', content: url },
    { property: 'og:image', content: ogImage },
    { property: 'og:locale', content: 'ko_KR' },
    { property: 'og:site_name', content: 'BrightPath ESG Consulting' }
  ];

  tags.forEach(function (tag) {
    var meta = document.createElement('meta');
    meta.setAttribute('property', tag.property);
    meta.setAttribute('content', tag.content);
    document.head.appendChild(meta);
  });
})();
