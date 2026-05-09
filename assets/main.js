/**
 * SG Immobilien – Tab Navigation
 */

function showTab(name) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(function(t) {
    t.classList.remove('active');
  });

  // Remove active from all nav links
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.remove('active');
  });

  // Show selected tab
  var tab = document.getElementById('tab-' + name);
  if (tab) tab.classList.add('active');

  // Activate nav link (not all tabs have nav links)
  var navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return false;
}

// Handle footer links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll within pages
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
