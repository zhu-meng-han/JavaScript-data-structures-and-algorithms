### 基本概念

对于查找数据来说，最简单的方法就是从列表的第一个元素开始对列表元素逐个进行判断，直到找到了想要的结果，或者直到列表结尾也没有找到。

### 实现方式

从列表的第一个元素开始循环，然后逐个与要查找的数据进行比较。如果匹配到了，则结束查找。如果到了列表的结尾也没有匹配到，那么这个数据就不存在于这个列表中。

**Tips：**顺序搜索是最低效的一种搜索算法。

##### 代码实现

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

### 使用自组织数据

对于未排序的数据集来说，当被查找的数据位于数据集的起始位置时，查找是最快、最成 功的。通过将成功找到的元素置于数据集的起始位置，可以保证在以后的操作中该元素能被更快地查找到。

此时我们可以遵循 `“80-20 原则”`，通过自组织的方式把这 `20%` 的数据置于数据集的起始位置，这样便可以通过一个简单的顺序查找快速找到它们。

> `“80-20 原则”` 是指对某一数据集执行的 `80%` 的查找操作都是对其中 `20%` 的数据元素进行查找。

* 代码实现

```js
class SequenceSearch{

  constructor(data) {
    this.dataStore = data || [];
  }

  len() {
    return this.dataSore.length;
  }

  seqSearch(value) {
    const arr = this.dataSore;
    for (let i = 0; i < this.len(); ++i) {
      if (arr[i] === value) {
        if (i) this.swap(i);
        return i;
      }
    }
    return -1;
  }

  swap(index) {
    const temp = this.dataSore[index];
    this.dataSore[index] = this.dataSore[index - 1];
    this.dataSore[index - 1] = temp;
  }

  print() {
    console.log(this.dataSore);
  }
}

const arr = [3, 44 , 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
const sequence = new SequenceSearch(arr);

for (let i = 0; i < 6; ++i) {
  console.log(sequence.seqSearch(47));
  sequence.print();
}

/*
 * 输出
 */

[ 3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
4
[ 3, 44, 38, 47, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
3
[ 3, 44, 47, 38, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
2
[ 3, 47, 44, 38, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
1
[ 47, 3, 44, 38, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
0
[ 47, 3, 44, 38, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
0
```

注意观察，`47` 被连续查找 `4` 次之后，移动到数组最前面。

另外一种给 `seqSearch()` 函数添加自组织数据的方法是：将找到的元素移动到数据集的起始位置，但是如果这个元素已经很接近起始位置，则不会对它的位置进行交换。

再次参照 `“80-20 原则”`，我们可以确定以下原则:

> 仅当数据位于数据集的前 `20%` 元素之外时，该数据才需要被重新移动到数据集的起始位置。

* 代码实现

```js
  OtherSeqSearch(value) {
    const arr = this.dataSore;
    for (let i = 0; i < this.len(); ++i) {
      if (arr[i] === value) {
        if (i > (this.len() * 0.2)) this.swap(i);
        return i;
      }
    }

    return -1;
  }

/*
 * 输出
 */

[ 3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
4
[ 3, 44, 38, 47, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
3
[ 3, 44, 38, 47, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
3
[ 3, 44, 38, 47, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
3
[ 3, 44, 38, 47, 5, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48 ]
3
```

经过多次查找之后，`47` 已经很接近其实位置，所以没有改变它的位置。
