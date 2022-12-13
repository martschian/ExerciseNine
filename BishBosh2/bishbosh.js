export default function BishBosh(bish = 3, bosh = 4, maxNumbers = 100) {
  for (let index = 1; index <= maxNumbers; index++) {
    let child, text;
    child = document.createElement('p');
    if (index % bish == 0 && index % bosh == 0) {
      text = document.createTextNode('bish-bosh');
    } else if (index % bosh == 0) {
      text = document.createTextNode('bosh');
    } else if (index % bish == 0) {
      text = document.createTextNode('bish');
    } else {
      text = document.createTextNode(index);
    }
    child.appendChild(text);
    output.appendChild(child);
  }
}
