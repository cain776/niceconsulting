/* ============================================
   BrightPath ESG Consulting - Main JS
   Vanilla JavaScript (no dependencies)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('header');

  // --- Logo text animation (EN ↔ KO) ---
  const logoText = document.getElementById('logoText');
  if (logoText) {
    setInterval(() => {
      logoText.classList.toggle('show-ko');
    }, 4000);
  }
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  let headerHeight = header.offsetHeight;
  let scrollTicking = false;
  let onScrollExtra = null;

  // Cache header height, update on resize
  window.addEventListener('resize', () => {
    headerHeight = header.offsetHeight;
  });

  // --- Single scroll handler (throttled via rAF) ---
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;

        // Header scroll effect
        if (currentScroll > 10) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        // Active nav link on scroll
        let current = '';
        sections.forEach(section => {
          if (currentScroll >= section.offsetTop - headerHeight - 100) {
            current = section.getAttribute('id');
          }
        });
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
          }
        });

        if (onScrollExtra) onScrollExtra(currentScroll);

        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // --- Mobile hamburger menu ---
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Mobile dropdown toggle ---
  const dropdownToggle = document.querySelector('.nav-link--dropdown');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownToggle.closest('.nav-dropdown').classList.toggle('open');
      }
    });
  }

  // --- Intersection Observer factory ---
  function createOneTimeObserver(threshold, callback, rootMargin) {
    return new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin: rootMargin || '0px' });
  }

  // Scroll fade-in animation
  const fadeObserver = createOneTimeObserver(0.1, (el) => {
    el.classList.add('visible');
  }, '0px 0px -60px 0px');

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

  // Counter animation
  const counterObserver = createOneTimeObserver(0.5, (el) => {
    const target = parseInt(el.getAttribute('data-count'));
    let current = 0;
    const step = target / (1500 / 16);

    function update() {
      current += step;
      if (current >= target) {
        el.textContent = target;
        return;
      }
      el.textContent = Math.floor(current);
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });

  document.querySelectorAll('.stat-number[data-count]').forEach(el => counterObserver.observe(el));

  // --- Smooth scroll for anchor links (exclude bare "#") ---
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetEl = document.querySelector(anchor.getAttribute('href'));
      if (targetEl) {
        window.scrollTo({
          top: targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Inquiry type card toggle + form switch ---
  const inquiryTypeInput = document.getElementById('inquiryType');
  const checkboxGrids = document.querySelectorAll('.checkbox-grid[data-form-type]');
  const formIntroTexts = {
    consulting: 'ESG, 에코바디스, 중대재해처벌법 준비를 위한 컨설팅이 필요하신 기업은 아래 기입해주시면 1영업일 이내에 연락드립니다.',
    safety: '중대재해처벌법 대응 및 안전보건관리체계 구축이 필요하신 기업은 아래 기입해주시면 1영업일 이내에 연락드립니다.',
    training: 'ESG, 에코바디스, 중처법 등 교육·강의가 필요하신 기업은 아래 기입해주시면 1영업일 이내에 연락드립니다.'
  };
  const formIntroEl = document.querySelector('.form-intro p');

  document.querySelectorAll('.inquiry-type-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.inquiry-type-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const type = card.dataset.type;
      if (inquiryTypeInput) inquiryTypeInput.value = type;

      // 체크박스 그룹 전환
      checkboxGrids.forEach(grid => {
        grid.style.display = grid.dataset.formType === type ? '' : 'none';
        if (grid.dataset.formType !== type) {
          grid.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        }
      });

      // 안내문 변경
      if (formIntroEl && formIntroTexts[type]) {
        formIntroEl.textContent = formIntroTexts[type];
      }
    });
  });

  // --- Contact form handler ---
  const contactForm = document.getElementById('contactForm');

  if (contactForm) contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;
    if (!form.company.value || !form.name.value || !form.phone.value || !form.email.value || !form.position.value) {
      alert('필수 항목(*)을 모두 입력해주세요.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.value)) {
      alert('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    // 현재 선택된 문의유형 확인
    const typeLabels = { consulting: '컨설팅 상담', safety: 'ESG & 중처법', training: '교육·강의' };
    const activeCard = document.querySelector('.inquiry-type-card.active');
    const inquiryType = activeCard ? activeCard.dataset.type : 'consulting';
    const activeGrid = form.querySelector('.checkbox-grid[data-form-type="' + inquiryType + '"]');

    if (!activeGrid || activeGrid.querySelectorAll('input[name="services"]:checked').length === 0) {
      alert('컨설팅 종류를 1개 이상 선택해주세요.');
      return;
    }

    if (!form.privacy.checked) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    // Google Sheets + Telegram 전송
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '접수 중...';

    const services = Array.from(activeGrid.querySelectorAll('input[name="services"]:checked'))
      .map(cb => cb.value === 'other' ? '기타: ' + (form.services_other ? form.services_other.value : '') : cb.value)
      .join(', ');

    const payload = {
      inquiryType: typeLabels[inquiryType] || inquiryType,
      company: form.company.value,
      name: form.name.value,
      position: form.position.value,
      phone: form.phone.value,
      email: form.email.value,
      services: services,
      message: form.message ? form.message.value : ''
    };

    fetch('https://script.google.com/macros/s/AKfycbxOY-5vpEgqoRCinI6-SK-RS0ss62b8qcUcghMBLOFRUsLYhPMpEm4NGgXWRkxdmwY70Q/exec', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      if (data.result === 'success') {
        alert('접수가 완료되었습니다.\n1영업일 이내 담당 컨설턴트가 연락드리겠습니다.\n\n감사합니다.');
        form.reset();
        form.querySelectorAll('.inquiry-type-card').forEach(c => c.classList.remove('active'));
      } else {
        alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    })
    .catch(() => {
      alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
  });

  // --- Floating Section Navigator ---
  const sectionNav = document.getElementById('sectionNav');
  if (!sectionNav) return;  // 이하 섹션 네비게이터 전용 코드이므로 early return OK

  const navUp = document.getElementById('navUp');
  const navDown = document.getElementById('navDown');
  const navCurrent = document.getElementById('navCurrent');
  const navTotal = document.getElementById('navTotal');
  if (!navUp || !navDown || !navCurrent || !navTotal) return;

  const navSections = document.querySelectorAll('section[id]');
  const sectionCount = navSections.length;
  let currentSectionIndex = 0;

  navTotal.textContent = sectionCount;

  function updateSectionNav(scrollY) {
    if (scrollY > 200) {
      sectionNav.classList.add('visible');
    } else {
      sectionNav.classList.remove('visible');
    }

    for (let i = navSections.length - 1; i >= 0; i--) {
      if (scrollY >= navSections[i].offsetTop - headerHeight - 150) {
        currentSectionIndex = i;
        break;
      }
    }

    navCurrent.textContent = currentSectionIndex + 1;
    navUp.disabled = currentSectionIndex === 0;
    navDown.disabled = currentSectionIndex === sectionCount - 1;
  }

  navUp.addEventListener('click', () => {
    if (currentSectionIndex > 0) {
      const target = navSections[currentSectionIndex - 1];
      window.scrollTo({ top: target.offsetTop - headerHeight, behavior: 'smooth' });
    }
  });

  navDown.addEventListener('click', () => {
    if (currentSectionIndex < sectionCount - 1) {
      const target = navSections[currentSectionIndex + 1];
      window.scrollTo({ top: target.offsetTop - headerHeight, behavior: 'smooth' });
    }
  });

  onScrollExtra = updateSectionNav;
  updateSectionNav(window.pageYOffset);

  // --- Auto-check service from URL param ---
  // e.g. ?service=에코바디스 → checks "에코바디스 인증 컨설팅"
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (serviceParam) {
    document.querySelectorAll('input[name="services"]').forEach(cb => {
      if (cb.value.indexOf(serviceParam) !== -1) {
        cb.checked = true;
      }
    });
  }

});
