
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
