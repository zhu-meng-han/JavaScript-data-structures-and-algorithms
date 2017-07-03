class Set {

  constructor() {
    this.dataStore = {};
  }

  // 判断是否已存在
  has(value) {
    return this.dataStore.hasOwnProperty(value);
  }

  // 添加
  append(value) {
    if (!this.has(value)) {
      this.dataStore[value] = value;
    }
  }

  // 移除
  remove(value) {
    if (this.has(value)) {
      delete this.dataStore[value];
      return true;
    }
    return false;
  }

  // 清空
  clear() {
    this.dataStore = {};
  }

  // 长度
  get size() {
    return Object.keys(this.dataStore).length;
  }

  get values() {
    return Object.values(this.dataStore);
  }

  union(otherSet) {
    let temp = new Set();
    this.values.forEach(item => {
      temp.append(item);
    });
    otherSet.values.forEach(item => {
      temp.append(item);
    });
    return temp;
  }

  intersection(otherSet) {
    let temp = new Set();
    this.values.forEach(item => {
      if(otherSet.has(item)) {
        temp.append(item);
      }
    });
    return temp;
  }

  difference(otherSet) {
    let temp = new Set();
    this.values.forEach(item => {
      if(!otherSet.has(item)) {
        temp.append(item);
      }
    });
    return temp;
  }

  subset(otherSet) {
    if (this.size > otherSet.size) {
      return false;
    } else {
      return !this.values.some(value => !otherSet.has(value));
    }
  }
}

const set = new Set();

set.append('zhu');
// console.log(set.has('zhu')); // true
set.append('meng');
set.append('han');
// console.log(set.size); // 3
// console.log(set.values); // ['zhu', 'meng', 'han']
// set.remove('meng');
// console.log(set.values); // ['zhu', 'han']
// set.clear();
// console.log(set.dataStore); // {}
const otherSet = new Set();
otherSet.append('123');
otherSet.append('meng');
otherSet.append('1234');

// set.union(otherSet);
console.log(set.union(otherSet));
console.log(set.intersection(otherSet));
console.log(set.difference(otherSet));
console.log(set.subset(otherSet));
