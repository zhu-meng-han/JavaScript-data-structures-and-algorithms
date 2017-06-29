
## 基本概念

> **栈的官方定义：**栈（Stack）是一个后进先出（ `Last in first out,LIFO` ）的线性表，它要求只在表尾进行删除和插入操作。对于栈来说，这个表尾称为栈的栈顶，相应的表头称为栈底。入栈使用 `push()` 方法。出栈使用 `pop()` 方法。

通俗来讲，一摞叠起来的书或盘子都可以看做一个栈，我们想要拿出最底下的书或盘子，一定要现将上面的移走才可以。

![](_media/stack-1.png)

## 定义栈：

```js
class Stack {

  constructor() {
    this.dataStore = [];
  }

  // 入栈
  push(element) {
    this.dataStore.push(element);
  }

  // 出栈
  pop() {
    this.dataStore.pop();
  }

  // 是否空栈
  isEmpty() {
    return !!this.dataStore.length;
  }

  // 长度
  size() {
    return this.dataStore.length;
  }

  // 清空栈
  clear() {
    this.dataStore = [];
  }

  show() {
    console.log(this.dataStore.toString());
  }

  // 栈顶元素
  peek() {
    return this.dataStore[this.size() - 1];
  }
}
```

## 实例化栈

```js
const stack = new Stack();

console.log('isEmpty: ' + stack.isEmpty()); // isEmpty: false
stack.push('z');
stack.push('m');
stack.push('h');
console.log('size: ' + stack.size()); // size: 3
console.log('peek: ' + stack.peek()); // peek: h
stack.show(); // z,m,h
stack.pop();
stack.show(); // z,m
stack.clear();
console.log('size: ' + stack.size()); // size: 0
```
