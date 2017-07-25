### 基本概念

基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。

基数排序有两种方法：

* MSD 从高位开始进行排序
* LSD 从低位开始进行排序

### 基数排序 vs 计数排序 vs 桶排序

这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：

* 基数排序：根据键值的每位数字来分配桶
* 计数排序：每个桶只存储单一键值
* 桶排序：每个桶存储一定范围的数值

### LSD 基数排序动图演示

![](_media/sort-9.gif)

### 代码实现

```js
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
```
