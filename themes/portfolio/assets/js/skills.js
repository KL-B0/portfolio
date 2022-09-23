const toggle1 = document.getElementById('skill-toggle1');
const skill1 = document.getElementById('skill-card1');
var open = false;

const togglers = [
  document.getElementById('skill-toggle1'),
  document.getElementById('skill-toggle2'),
  document.getElementById('skill-toggle3'),
  document.getElementById('skill-toggle4')
];
const cards = [
  document.getElementById('skill-card1'),
  document.getElementById('skill-card2'),
  document.getElementById('skill-card3'),
  document.getElementById('skill-card4'),
]
var states = [
  false,
  false,
  false,
  false
]

if (togglers && cards && states) {
  for (let i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener('click', () => {
      if (!states[i]) {
        states[i] = true;

        cards[i].classList.remove('hidden');
        togglers[i].classList.remove('mb-4');
        togglers[i].classList.remove('rounded-xl');
        togglers[i].classList.add('rounded-t-xl');
        togglers[i].childNodes[5].classList.add('hidden');
        togglers[i].childNodes[7].classList.remove('hidden');
      } else {
        states[i] = false;

        cards[i].classList.add('hidden');
        togglers[i].classList.add('mb-4');
        togglers[i].classList.add('rounded-xl');
        togglers[i].classList.remove('rounded-t-xl');
        togglers[i].childNodes[5].classList.remove('hidden');
        togglers[i].childNodes[7].classList.add('hidden');
      }
    });
  }
}
