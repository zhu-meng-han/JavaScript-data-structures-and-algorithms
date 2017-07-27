### 基础概念

桶排序 (Bucket sort)或所谓的箱排序的原理是将数组分到有限数量的桶子里，然后对每个桶子再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序），最后将各个桶中的数据有序的合并起来。

桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。

为了使桶排序更加高效，我们需要做到这两点：

* 在额外空间充足的情况下，尽量增大桶的数量
* 使用的映射函数能够将输入的 `N` 个数据均匀的分配到 `K` 个桶中

同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。

### 算法步骤

* 假设待排序的一组数统一的分布在一个范围中，并将这一范围划分成几个子范围，也就是桶
* 将待排序的一组数，分档规入这些子桶，并将桶中的数据进行排序
* 将各个桶中的数据有序的合并起来

桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。 桶排序最好情况下使用线性时间 `O(n)`，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，因为其它部分的时间复杂度都为 `O(n)`。很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大。

* 最佳情况： `T(n) = O(n+k)`
* 最差情况： `T(n) = O(n+k)`
* 平均情况： `T(n) = O(n^2)`

### 性能

**什么时候最快**

当输入的数据可以均匀的分配到每一个桶中。

**什么时候最慢**

当输入的数据被分配到了同一个桶中。

### 代码实现

```js
function bucketSort(arr, bucketSize) {
  const len = arr.length;
  let min = max = arr[0];

  if (len < 2) return arr;

  // 最小值、最大值
  for (let i = 0; i < len; ++i) {
    min = min < arr[i] ? min : arr[i];
    max = max > arr[i] ? max : arr[i];
  }

  // 初始化单个桶的数量，默认值为 5
  const DEFAULT_BUCKET_SIZE = 5;
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;

  // 桶的个数
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; ++ i) {
    buckets[i] = [];
  }

  // 利用映射函数将数据分配到各个桶中
  for (let i = 0; i < len; ++i) {
    buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i]);
  }
  arr.length = 0;
  for (let i = 0; i < bucketCount; ++i) {
    // 对每个桶进行排序，这里是用的是插入排序
    insertionSort(buckets[i]);
    for(let j = 0; j < bucketSize; ++j) {
      if (buckets[i][j]) arr.push(buckets[i][j]);
    }
  }

  console.log(arr);
  return arr;
}

const arr = [3, 44 ,38 , 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
bucketSort(arr);
```

