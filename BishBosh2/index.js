import BishBosh from './bishbosh.js';

const bish = document.querySelector('#bish');
const bosh = document.querySelector('#bosh');
const loops = document.querySelector('#loops');
const output = document.querySelector('#output');

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  output.innerHTML = '';
  BishBosh(bish.value, bosh.value, loops.value);
});
