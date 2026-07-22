// assets/js/sections/nav.js

export function initNav(config) {
  const nav = document.querySelector('.nav');
  const ham = document.querySelector('.nav__ham');
  const menu = document.querySelector('.nav__mobile-menu');

  if (nav) {
    let lastScrollY = window.scrollY;

    const checkScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      if (currentScrollY <= 0) {
        nav.classList.remove('nav-hidden');
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        nav.classList.add('nav-hidden');
      } else if (currentScrollY < lastScrollY) {
        nav.classList.remove('nav-hidden');
      }

      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', checkScroll, { passive: true });
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
      if (!menu.classList.contains('open')) return;
      
      if (e.key === 'Escape') {
        toggleMenu();
        ham.focus();
        return;
      }
      
      if (e.key === 'Tab') {
        const focusableElements = [ham, ...menu.querySelectorAll('a, button, [tabindex="0"]')].filter(el => {
          return el.offsetParent !== null && !el.disabled;
        });
        
        if (focusableElements.length === 0) return;
        
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
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

  // Nav active item highlights based on page URL and scroll sections
  const navLinks = document.querySelectorAll('.nav__links .nav__link, .nav__mobile-menu .nav__link');
  const pathname = window.location.pathname;
  const isHome = pathname === '/' || pathname.endsWith('index.html');

  if (navLinks.length) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      const isExactPageMatch = 
        (href === '/products.html' && pathname.includes('products.html')) ||
        (href === '/services.html' && (pathname.includes('services.html') || pathname.includes('/services/'))) ||
        (href === '/about.html' && pathname.includes('about.html')) ||
        (href === '/contact.html' && pathname.includes('contact.html'));

      if (isExactPageMatch) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    if (isHome) {
      const sections = document.querySelectorAll('section[id]');
      if (sections.length) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${id}` || href === `/#${id}` || href?.endsWith(`#${id}`)) {
                  link.classList.add('active');
                  link.setAttribute('aria-current', 'page');
                } else if (href?.startsWith('#')) {
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
  }
}
