function radixSort(arr) {
  let mod = 10;
  let dev = 1;
  let counter = [];
  let maxDigit = 0;

  // 获取数组最大值元素的长度
  for (let i = 0; i < arr.length; ++i) {
    const len = arr[i].toString().length;
    if (maxDigit < len) maxDigit = len;
  }

  for (let i = 0; i < maxDigit; ++i, mod *= 10, dev *= 10) {
    // LSD 低位起始 排序
    for (let j = 0; j < arr.length; ++j) {
      const bucket = parseInt((arr[j] % mod) / dev);
      if(counter[bucket] === void 0) counter[bucket] = [];
      counter[bucket].push(arr[j]);
    }

    let pos = 0;
    for (let j = 0; j < counter.length; ++j) {
      if(counter[j] !== void 0) {
        let value = null;
        while ((value = counter[j].shift()) !== void 0) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}

const arr = [3, 44, 38, 5, 47, 150, 36, 26, 27, 2, 406, 4, 19, 502, 48];

radixSort(arr);
