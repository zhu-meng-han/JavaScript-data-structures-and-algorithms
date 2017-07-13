
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
