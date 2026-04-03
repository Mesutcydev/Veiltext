// Minimal site script placeholder.
// Add interactive behavior here if desired.

document.addEventListener('DOMContentLoaded', ()=> {
  // Example: highlight current app nav if URL contains /quitenote/
  const bodyPath = location.pathname || '/';
  if (bodyPath.includes('/quitenote/')) {
    document.querySelectorAll('.site-nav a').forEach(a => {
      if (a.getAttribute('href') && bodyPath.startsWith(a.getAttribute('href'))) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }
});
