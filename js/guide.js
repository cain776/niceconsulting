/* ============================================
   BrightPath ESG - Guide Page JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.getElementById('guideSidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');

  if (!sidebar || !sidebarToggle) return;

  // --- Mobile sidebar toggle ---
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close sidebar on link click (mobile)
  sidebar.querySelectorAll('.guide-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  });

});
