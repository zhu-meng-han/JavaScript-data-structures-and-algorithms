
/*
Array.prototype.sequenceSearch = function(value) {
  const len = this.length;
  for (let i = 0; i < len; ++i) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
*/

class SequenceSearch {

  constructor(data) {
    this.dataSore = data;
  }

  len() {
    return this.dataSore.length;
  }
  sequenceSearch(value) {
    const arr = this.dataSore;
    for (let i = 0; i < this.len(); ++i) {
      if (arr[i] === value) return i;
    }
    return -1;
  }

  // 自组织方式
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



  print() {
    console.log(this.dataSore);
  }

  // 数据交换
  swap(index) {
    const temp = this.dataSore[index];
    this.dataSore[index] = this.dataSore[index - 1];
    this.dataSore[index - 1] = temp;
  }
}

const arr = [3, 44 , 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

const sequence = new SequenceSearch(arr);

// console.log(sequence.sequenceSearch(47));
// sequence.seqSearch(47);
// console.log(sequence.seqSearch(47));

for (let i = 0; i < 6; ++i) {
  sequence.print();
  // console.log(sequence.seqSearch(47));
  console.log(sequence.OtherSeqSearch(47));
}

