// assets/js/sections/nav.js

export function initNav(config) {
  const nav = document.querySelector('.nav');
  const ham = document.querySelector('.nav__ham');
  const menu = document.querySelector('.nav__mobile-menu');

  if (nav) {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Run once in case started scrolled
  }

  if (ham && menu) {
    const toggleMenu = () => {
      const open = menu.classList.toggle('open');
      ham.setAttribute('aria-expanded', open ? 'true' : 'false');
      
      // Animate hamburger bars to form a cross on toggle
      const bars = ham.querySelectorAll('span');
      if (open) {
        bars[0].style.transform = 'translateY(8px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    };

    ham.addEventListener('click', toggleMenu);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        toggleMenu();
        ham.focus();
      }
    });

    // Close mobile menu on link click
    menu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('open')) {
          toggleMenu();
        }
      });
    });
  }

  // Nav active item highlights on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links .nav__link, .nav__mobile-menu .nav__link');
  
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}` || href === `/#${id}` || href.endsWith(`#${id}`)) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(s => observer.observe(s));
  }
}
