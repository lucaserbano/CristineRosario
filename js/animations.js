/*
 * animations.js — Cristine Rosário · Alergia e Imunologia
 * Scroll-triggered reveals, nav scroll state, mobile menu
 * No dependencies — vanilla JS, ~60 lines
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll Reveal (Intersection Observer) ─────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  /* ── Nav Background on Scroll ──────────────────────────────────────────── */
  const nav = document.querySelector('nav');

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // check initial state
  }

  /* ── Mobile Menu Toggle ────────────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('hamburger-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('hamburger-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('hamburger-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

});
