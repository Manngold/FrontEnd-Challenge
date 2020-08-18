const input = document.querySelector('input');
const toDoList = document.querySelector('ul');

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 && input.value.length > 0) {
    addToDo(input.value);
    input.value = '';
  }
});

toDoList.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`li[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
let id = 0;
const addToDo = (toDo) => {
  const li = document.createElement('li');
  li.setAttribute('data-id', id);

  li.innerHTML = `
      <span>${toDo}</span>
      <button class="delete_btn" data-id=${id}>❌</button>
    `;

  id++;

  toDoList.appendChild(li);
  li.scrollIntoView({ block: 'center' });
};
