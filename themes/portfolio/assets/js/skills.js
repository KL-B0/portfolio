const togglers = [];
const cards = [];
var states = [false, false, false, false]

for (let i = 1; i <= 4; i++) {
  togglers.push(document.getElementById('skill-toggle' + i));
  cards.push(document.getElementById('skill-card' + i));
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
