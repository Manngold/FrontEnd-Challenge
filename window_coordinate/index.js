const div = document.querySelectorAll('.box');
const target = div[3];
const [scrollBy, scrollTo, scrollInto] = document.querySelectorAll('button');

target.addEventListener('click', (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;
  const pageX = event.pageX;
  const pageY = event.pageY;

  console.log(`client X : ${clientX}, client Y : ${clientY}`);
  console.log(`page X : ${pageX}, page Y : ${pageY}`);
});

scrollBy.addEventListener('click', () => {
  window.scrollBy({
    top: 100,
    left: 0,
    behavior: 'smooth',
  });
});

scrollTo.addEventListener('click', () => {
  window.scrollTo({
    top: 100,
    left: 0,
    behavior: 'smooth',
  });
});

scrollInto.addEventListener('click', () => {
  target.scrollIntoView({ behavior: 'smooth' });
});
