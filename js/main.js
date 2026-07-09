// Anderson's Taxidermy — shared site behavior
// Mobile nav toggle + sticky header shadow on scroll

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  var icon = document.getElementById('nav-icon-bars');
  var header = document.querySelector('.site-header');

  var HAMBURGER = 'M4 7h16M4 12h16M4 17h16';
  var CLOSE = 'M6 6l12 12M18 6L6 18';

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (icon) icon.setAttribute('d', isOpen ? CLOSE : HAMBURGER);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        if (icon) icon.setAttribute('d', HAMBURGER);
      });
    });
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
