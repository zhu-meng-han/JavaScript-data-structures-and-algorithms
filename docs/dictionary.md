
### 基本概念

> 字典是以 `{ key: value }` 的形式存储数据的数据结构，简单说：`Object` 对象便是字典在 Javascript 中的实现。


### 简单实现一个 Dictionary 类：

```js
class Dictionary {

  constructor() {
    this.dataStore = [];
  }

  // 新增
  add(key, value) {
    this.dataStore[key] = value;
  }

  // 查询
  find(key) {
    return this.dataStore[key];
  }

  // 移除
  remove(key) {
    delete this.dataStore[key];
  }

  // 全部keys
  keys() {
    return Object.keys(this.dataStore);
  }

  values() {
    return Object.values(this.dataStore);
  }
}
```

### Demo

```js
const dictionary = new Dictionary();

dictionary.add('one', 'zhu');
dictionary.add('two', 'meng');
dictionary.add('three', 'han');
console.log(dictionary.keys()); // [ 'one', 'two', 'three' ]
console.log(dictionary.values()); // [ 'zhu', 'meng', 'han' ]
console.log(dictionary.find('two')); // meng
dictionary.remove('two');
console.log(dictionary.keys()); // [ 'one', 'three' ]
console.log(dictionary.values()); // [ 'zhu, 'han' ]
```
