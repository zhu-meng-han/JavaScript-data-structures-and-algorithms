function quickSort(arr) {
  const len = arr.length;

  if (len < 2) {
    return arr;
  }

  let left = [],
      right = [],
      pivot = arr[0];

  for (let i = 1; i < len; ++i) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [3, 44 ,38 , 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(quickSort(arr));

