### 基本概念

> 归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一 个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。

作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：

* 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第 2 种方法）；
* 自下而上的迭代；

** Tips：** 时间复杂度为 `O(n log n)`，代价是需要额外的内存空间。

### 算法步骤

* 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
* 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
* 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
* 重复步骤 3 直到某一指针达到序列尾；
* 将另一序列剩下的所有元素直接复制到合并序列尾。

归并排序的性能不受输入数据的影响，但它的表现比选择排序要好，因为它始终都是 O(nlogn)O(nlog⁡n) 的时间复杂度。但代价是需要额外的内存空间。

* 最佳情况：`T(n) =O (n)`
* 最差情况：`T(n) =O (n log n)`
* 平均情况：`T(n) = O(n log n)`

### 动图演示

![](_media/sort-6.gif)

### 代码实现

```js
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

```
