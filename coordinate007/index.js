const body = document.querySelector('body');
const span = document.querySelector('.coordinate');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const targetRect = target.getBoundingClientRect();
const targetWidth = targetRect.width / 2;
const targetHeight = targetRect.height / 2;

body.addEventListener('mousemove', (event) => {
  x = event.clientX;
  y = event.clientY;

  horizontal.style.transform = `translateY(${y}px)`;
  vertical.style.transform = `translateX(${x}px)`;
  target.style.transform = `translate(${x - targetWidth}px ,${
    y - targetHeight
  }px)`;
  span.style.transform = `translate(${x}px, ${y}px)`;
  span.innerHTML = `${x}px , ${y}px`;
});
