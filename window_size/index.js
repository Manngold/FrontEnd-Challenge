function getScreen() {
  const span = document.querySelector('#screen');
  const width = window.screen.width;
  const height = window.screen.height;

  span.innerHTML = `window.screen : ${width},${height}`;
}

function getOuter() {
  const span = document.querySelector('#outer');
  const width = window.outerWidth;
  const height = window.outerHeight;

  span.innerHTML = `window.outer : ${width},${height}`;
}

function getInner() {
  const span = document.querySelector('#inner');
  const width = window.innerWidth;
  const height = window.innerHeight;

  span.innerHTML = `window.inner : ${width},${height}`;
}

function getClient() {
  const span = document.querySelector('#client');
  const html = document.querySelector('html');
  const width = html.clientWidth;
  const height = html.clientHeight;

  span.innerHTML = `client : ${width},${height}`;
}

function init() {
  getScreen();
  getOuter();
  getInner();
  getClient();
}

window.addEventListener('resize', () => init());

init();
