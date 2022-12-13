const list = document.querySelector('ul');

const toggleDone = function (e) {
  e.classList.toggle('done');
};

const removeItemFromList = function (e) {
  console.log(e.target.parentElement);
  list.removeChild(e.target.parentElement);
};

const addItemToList = function (e) {
  console.log(e.target[0].value);
  const newItem = document.createElement('li');
  const text = document.createTextNode(e.target[0].value);
  const button = document.createElement('button');
  button.innerText = 'x';
  button.addEventListener('click', (e) => removeItemFromList(e));
  newItem.appendChild(text);
  newItem.appendChild(button);

  newItem.classList.add('list-group-item');
  newItem.addEventListener('click', (e) => toggleDone(e.target));
  list.appendChild(newItem);
  e.target.reset();
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addItemToList(e);
});
