
### 基本概念

> 插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

### 算法步骤

* 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
* 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

算法分析

* 最佳情况： `T(n) = O(n)`
* 最差情况： `T(n) = O(n²)`
* 平均情况： `T(n) = O(n²)`

### 动图演示

![](_media/sort-5.gif)

### 代码示例：

```js
function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let preIndex = i - 1;
    let current = arr[i];
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex --;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

const arr = [3, 44 ,38 , 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr));
```
