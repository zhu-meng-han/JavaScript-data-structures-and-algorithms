function radixSort(arr, maxDigit) {
  let mod = 10;
  let dev = 1;
  const counter = [];

  for (let i = 0; i < maxDigit; ++i, mod *= 10, dev *= 10) {
    for (let j = 0; j < arr.length; ++j) {
      const bucket = parseInt((arr[j] % mod) / dev);
      if(!counter[bucket]) counter[bucket] = [];
      counter[bucket].push(arr[j]);
    }
    console.log(counter);
  }
}

const arr = [3, 44 ,38 , 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

radixSort(arr, 1);
