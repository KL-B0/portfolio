const scroll = document.getElementById('scroll-up');

console.log(scroll)
if (scroll) {
  window.addEventListener('scroll', () => {
    if (this.scrollY >= 360) {
      scroll.classList.remove('bottom-0');
      scroll.classList.remove('sm:bottom-menu');
      scroll.classList.add('bottom-20');
      scroll.classList.add('sm:bottom-0')
    } else {
      scroll.classList.add('bottom-0');
      scroll.classList.add('sm:bottom-menu');
      scroll.classList.remove('bottom-20');
      scroll.classList.remove('sm:bottom-0')
    }
  });
}
