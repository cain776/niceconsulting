// Auto-generate right-side Table of Contents from h2 headings
document.addEventListener('DOMContentLoaded', function () {
  var article = document.querySelector('.guide-article');
  var layout = document.querySelector('.guide-layout');
  var header = document.getElementById('header');
  if (!article || !layout || !header) return;

  var headings = article.querySelectorAll('h2');
  if (headings.length < 2) return;

  function escapeHTML(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Ensure each h2 has an id
  headings.forEach(function (h, i) {
    if (!h.id) h.id = 'section-' + (i + 1);
  });

  // Build TOC HTML
  var tocHTML = '<div class="guide-toc-title">목차</div><ul class="guide-toc-list">';
  headings.forEach(function (h) {
    tocHTML += '<li><a href="#' + h.id + '">' + escapeHTML(h.textContent.trim()) + '</a></li>';
  });
  tocHTML += '</ul>';

  var toc = document.createElement('aside');
  toc.className = 'guide-toc';
  toc.innerHTML = tocHTML;
  layout.appendChild(toc);

  // Smooth scroll
  toc.addEventListener('click', function (e) {
    if (e.target.tagName !== 'A') return;
    e.preventDefault();
    var target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - header.offsetHeight - 20, behavior: 'smooth' });
    }
  });

  // Highlight active heading on scroll (throttled via rAF)
  var tocLinks = toc.querySelectorAll('a');
  var ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        var scrollY = window.pageYOffset;
        var headerHeight = header.offsetHeight;
        var activeIndex = 0;
        for (var i = headings.length - 1; i >= 0; i--) {
          if (scrollY >= headings[i].offsetTop - headerHeight - 80) {
            activeIndex = i;
            break;
          }
        }
        tocLinks.forEach(function (link, idx) {
          link.classList.toggle('active', idx === activeIndex);
        });
        ticking = false;
      });
      ticking = true;
    }
  });
});
