const body = document.querySelector('body');
const span = document.querySelector('.coordinate');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');

body.addEventListener('mousemove', (event) => {
  x = event.clientX;
  y = event.clientY;

  span.innerHTML = `${x}px , ${y}px`;
  span.style.top = `${y}px`;
  span.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
});
