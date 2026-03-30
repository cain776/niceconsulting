// Auto-generate Open Graph meta tags for guide pages
(function () {
  if (document.querySelector('meta[property="og:title"]')) return;

  var title = document.querySelector('title');
  var desc = document.querySelector('meta[name="description"]');
  if (!title || !desc) return;

  var pageTitle = title.textContent.split('|')[0].trim();
  var pageDesc = desc.getAttribute('content') || '';
  var url = window.location.href;

  var tags = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDesc },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: 'BrightPath ESG Consulting' }
  ];

  tags.forEach(function (tag) {
    var meta = document.createElement('meta');
    meta.setAttribute('property', tag.property);
    meta.setAttribute('content', tag.content);
    document.head.appendChild(meta);
  });
})();
