//
const $text = document.querySelector('#text');
//
const array = ['First', 'Second', 'Third'];
//
let dir = true;
let i = 0;
let k = 0;
//
const writeText = (arr) => {
  let time;
  if (i < arr.length) {
    const word = arr[i];
    if (dir && k <= word.length) {
      k++;
      $text.innerHTML = word.slice(0, k);
      if (k === word.length) {
        dir = false;
      }
    } else {
      k--;
      $text.innerHTML = word.slice(0, k);
      if (k === 0) {
        i++;
        dir = true;
        if (i === arr.length) {
          i = 0;
        }
      }
    }
    const reverse = Math.random() * (100 - 50) + 50;
    const forward = Math.random() * (400 - 200) + 200;
    time = k === word.length ? 1000 : dir ? forward : reverse;
  }
  setTimeout(() => writeText(array), time);
};

writeText(array);
