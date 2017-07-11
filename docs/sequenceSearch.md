### 基本概念

对于查找数据来说，最简单的方法就是从列表的第一个元素开始对列表元素逐个进行判断，直到找到了想要的结果，或者直到列表结尾也没有找到。

### 实现方式

从列表的第一个元素开始循环，然后逐个与要查找的数据进行比较。如果匹配到了，则结束查找。如果到了列表的结尾也没有匹配到，那么这个数据就不存在于这个列表中。

**Tips：**顺序搜索是最低效的一种搜索算法。

### 代码实现

```js
Array.prototype.sequenceSearch = function(value) {
  const len = this.length;
  for (let i = 0; i < len; ++i) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

const arr = [3, 44 , 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(arr.sequenceSearch(47));
```
