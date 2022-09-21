const menu = document.getElementById('menu');
const toggle = document.getElementById('menu-toggle');
const close = document.getElementById('menu-close');

if (menu && toggle && close) {
  toggle.addEventListener('click', () => {
    menu.classList.remove('bottom-menu');
    menu.classList.add('bottom-0');
    toggle.classList.add('hidden');
    close.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('bottom-0');
    menu.classList.add('bottom-menu');
    toggle.classList.remove('hidden');
    close.classList.add('hidden');
  });

  const link = document.querySelectorAll('.menu-link');
  link.forEach(l => l.addEventListener('click', () => {
    menu.classList.remove('bottom-0');
    menu.classList.add('bottom-menu');
    toggle.classList.remove('hidden');
    close.classList.add('hidden');
  }))
}
