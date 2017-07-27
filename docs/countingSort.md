### 基础概念

计数排序（Counting sort）是一种稳定的线性时间排序算法。

计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

### 算法步骤

* 查找待排序数组中最大和最小的元素
* 统计每个值为i的元素的出现次数
* 对所有计数开始累加(从min开始,每一项和前一项相加)
* 反向填充目标数组,将每个元素i放在新数组的第C[i]项,每放一个元素,计数 -1.

计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

当输入的元素是 `n` 个 `0` 到 `k` 之间的整数时，它的运行时间是 `O(n + k)`。计数排序不是比较排序，排序的速度快于任何比较排序算法。由于用来计数的数组 `C` 的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上 `1`），这使得计数排序对于数据范围很大的数组，需要大量时间和内存。

* 最佳情况：`T(n) = O(n+k)`
* 最差情况：`T(n) = O(n+k)`
* 平均情况：`T(n) = O(n+k)`

### 动图演示

![](_media/sort-8.gif)

### 算法实现

```js

function countingSort(arr) {
  const len = arr.length;
  const count = [];
  const result = [];
  let min = max = arr[0];

  // 查找最小值、最大值，并统计每个值出现的次数
  for(let i = 0; i < len; ++i) {
    count[arr[i]] = count[arr[i]] ? count[arr[i]] + 1 : 1;
    min = min < arr[i] ? min : arr[i];
    max = max > arr[i] ? max : arr[i];
  }

  // 从最小值->最大值,将计数逐项相加
  for(let j = min; j < max; ++j) {
    count[j + 1] = (count[j + 1] || 0) + (count[j] || 0);
  }

  // count中,下标为 arr 数值,数据为 arr 数值出现次数; 反向填充数据进入 Result 数据\
  for (let i = len - 1; i >= 0; --i) {
    result[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  console.log(result);
  return result;
}

const arr = [3, 44 ,38 , 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

countingSort(arr);

```
