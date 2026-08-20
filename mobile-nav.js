document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav').forEach((nav) => {
    const links = nav.querySelector('.nav-links');
    if (!links || nav.querySelector('.mobile-menu-toggle')) return;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'mobile-menu-toggle';
    toggle.setAttribute('aria-label', 'Abrir menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    nav.append(toggle);

    const closeMenu = () => {
      nav.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    };

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    links.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  });
});
