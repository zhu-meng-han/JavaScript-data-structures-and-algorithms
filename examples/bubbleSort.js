
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i< len; ++i) {
    for (let j = 0; j < len - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) { // 相邻元素对比
        const temp = arr[j]; // 交换
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [3, 44 ,38 , 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr));
// [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]
