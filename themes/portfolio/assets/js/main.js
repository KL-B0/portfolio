/* == Menu == */
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
  }));
}

/* == Intro section == */
const intros = [];

for (let i = 1; i <= 3; i++) {
  intros.push(document.getElementById('intro-' + i));
}

window.addEventListener('load', () => {
  for (let i = 0; i < intros.length; i++) {
    intros[i].classList.remove('opacity-0');
  }
});

/* == Skills section == */
const togglers = [];
const cards = [];
var states = [false, false, false, false]

for (let i = 1; i <= 4; i++) {
  togglers.push(document.getElementById('skill-toggle-' + i));
  cards.push(document.getElementById('skill-card-' + i));
}

if (togglers && cards && states) {
  for (let i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener('click', () => {
      if (!states[i]) {
        states[i] = true;

        cards[i].classList.remove('hidden');
        //togglers[i].classList.remove('h-16');
        togglers[i].childNodes[5].classList.add('hidden');
        togglers[i].childNodes[7].classList.remove('hidden');
      } else {
        states[i] = false;

        cards[i].classList.add('hidden');
        //togglers[i].classList.add('h-16');
        togglers[i].childNodes[5].classList.remove('hidden');
        togglers[i].childNodes[7].classList.add('hidden');
      }
    });
  }
}

/* == Scroll up == */
const scroll = document.getElementById('scroll-up');

if (scroll) {
  window.addEventListener('scroll', () => {
    if (this.scrollY >= 360) {
      scroll.classList.remove('bottom-0');
      scroll.classList.remove('sm:bottom-menu');
      scroll.classList.add('bottom-20');
      scroll.classList.add('sm:bottom-0');
    } else {
      scroll.classList.add('bottom-0');
      scroll.classList.add('sm:bottom-menu');
      scroll.classList.remove('bottom-20');
      scroll.classList.remove('sm:bottom-0');
    }
  });
}
