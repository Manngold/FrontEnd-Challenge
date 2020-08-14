const rabbit = document.querySelector('.rabbit');
const findBtn = document.querySelector('.btn_find');

findBtn.addEventListener('click', () => {
  rabbit.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
