function mergeSort(arr) {
  const len = arr.length;
  if (len === 1) return arr;

  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  while (left.length) {
    arr.push(left.shift());
  }

  while (right.length) {
    arr.push(right.shift());
  }
  return arr;
}

const arr = [3, 44 ,38 , 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(mergeSort(arr));
