const input = document.querySelector('input');
const toDoList = document.querySelector('ul');

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 && input.value.length > 0) {
    addToDo(input.value);
    input.value = '';
  }
});

const addToDo = (toDo) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'delete_btn');
  deleteBtn.addEventListener('click', deleteToDo);

  span.innerText = toDo;
  deleteBtn.innerText = '❌';

  li.appendChild(span);
  li.appendChild(deleteBtn);

  toDoList.appendChild(li);
  li.scrollIntoView({ block: 'center' });
};

const deleteToDo = (event) => {
  const li = event.target.parentNode;
  li.remove();
};
