const div = document.querySelectorAll('.box');
const target = div[4];

target.addEventListener('click', (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;
  const pageX = event.pageX;
  const pageY = event.pageY;

  console.log(`client X : ${clientX}, client Y : ${clientY}`);
  console.log(`page X : ${pageX}, page Y : ${pageY}`);
});
