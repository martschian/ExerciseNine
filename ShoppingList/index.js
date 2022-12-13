const list = document.querySelector('ul');

const toggleDone = function (el) {
  el.classList.toggle('done');
};

const removeItemFromList = function (el) {
  list.removeChild(el.parentElement);
};

const addItemToList = function (el) {
  const item = document.createElement('li');
  const text = document.createTextNode(el[0].value);
  const button = document.createElement('button');

  button.setAttribute('type', 'button');
  button.innerText = 'x';
  button.addEventListener('click', (e) => removeItemFromList(e.target));

  item.appendChild(text);
  item.appendChild(button);
  item.classList.add('list-group-item');
  item.addEventListener('click', (e) => toggleDone(e.target));
  list.appendChild(item);
  el.reset();
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addItemToList(e.target);
});
