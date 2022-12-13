function BishBosh(bish = 3, bosh = 4, maxNumbers = 100) {
  for (let index = 1; index <= maxNumbers; index++) {
    if (index % bish == 0 && index % bosh == 0) {
      console.log('bish-bosh');
    } else if (index % bosh == 0) {
      console.log('bosh');
    } else if (index % bish == 0) {
      console.log('bish');
    } else {
      console.log(index);
    }
  }
}

BishBosh();
