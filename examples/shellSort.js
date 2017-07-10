
function shellSort(arr) {
  const len = arr.length;
  let gap = 1;
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }

  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; ++i) {
      let temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = temp;
    }
  }

  return arr;
}


const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(shellSort(arr));
