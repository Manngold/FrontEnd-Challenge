const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const gameField = document.querySelector('.game__field');
const popUp = document.querySelector('.pop-up');
const popUpBtn = document.querySelector('.pop-up__button');
const popUpText = document.querySelector('.pop-up__text');

let carrots = 5;
let time = 10;

const timer = {
  fail: null,
  clock: null,
};

gameBtn.addEventListener('click', () => {
  init();
});

popUpBtn.addEventListener('click', () => {
  gameField.innerHTML = '';
  init();
  popUp.classList.add('pop-up--hidden');
});
gameField.addEventListener('click', (e) => {
  const { className } = e.target;

  if (className === 'carrot') {
    carrots -= 1;
    gameScore.innerText = carrots;
    e.target.remove();
  } else if (className === 'bug') {
    failAlarm();
  }
});

function hideBtn() {
  gameBtn.style.display = 'none';
}

function initScore(carrots) {
  if (carrots != 5) carrots = 5;
  gameScore.innerHTML = carrots;
}

function initTime() {
  if (time != 10) time = 10;
  gameTimer.innerHTML = `00:${time}`;
  timer.fail = setTimeout(failAlarm, time * 1000);
  timer.clock = setInterval(descTime, 1000);
}

function descTime() {
  if ((time == 0) | (carrots == 0)) {
    clearInterval(timer.clock);
    timer.clock = null;
    if (carrots == 0) winAlarm();
    return;
  }
  --time;
  gameTimer.innerHTML = `00:${time}`;
}

function failAlarm() {
  popUp.classList.remove('pop-up--hidden');
  popUpText.innerText = 'Try Again?';
  timer.fail = null;
}

function winAlarm() {
  popUp.classList.remove('pop-up--hidden');
  popUpText.innerText = 'You Win 🎉';
  timer.fail = null;
}

function getCoord(iconSize) {
  const info = gameField.getBoundingClientRect();
  const maxX = info.width - iconSize;
  const maxY = info.height - iconSize;
  const randomCoord = [getRandom(0, maxX), getRandom(0, maxY)];
  return randomCoord;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const a of iter) {
    if (a == l) return;
    yield a;
  }
}

function bugGen() {
  const img = document.createElement('img');
  img.setAttribute('class', 'bug');
  img.setAttribute('src', './img/bug.png');

  const [x, y] = getCoord(50);
  img.style.top = `${y}px`;
  img.style.left = `${x}px`;

  gameField.appendChild(img);
}
function carrotGen() {
  const img = document.createElement('img');
  const rec = img.getBoundingClientRect();
  img.setAttribute('class', 'carrot');
  img.setAttribute('src', './img/carrot.png');

  const [x, y] = getCoord(80);
  img.style.top = `${y}px`;
  img.style.left = `${x}px`;

  gameField.appendChild(img);
}

function init() {
  hideBtn();
  initScore(carrots);
  initTime();
  for (const bug of limit(5, infinity())) {
    bugGen();
  }
  for (const carrot of limit(5, infinity())) {
    carrotGen();
  }
}
