
### 基本概念

> 选择排序算法是一种原址比较排序算法。

选择排序是一种简单直观的排序算法，无论什么数据进去都是 `O(n²)` 的时间复杂度。所以用到它的时候，数据规模越小越好。

### 算法步骤

* 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
* 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
* 重复第二步，直到所有元素均排序完毕。

### 动图演示

![](_media/sort-4.gif)

### 代码示例：

```js
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr));
```

