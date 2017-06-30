
### 基本概念

> **栈的官方定义：**栈（Stack）是一个后进先出（ `Last in first out,LIFO` ）的线性表，它要求只在表尾进行删除和插入操作。对于栈来说，这个表尾称为栈的栈顶，相应的表头称为栈底。入栈使用 `push()` 方法。出栈使用 `pop()` 方法。

通俗来讲，一摞叠起来的书或盘子都可以看做一个栈，我们想要拿出最底下的书或盘子，一定要现将上面的移走才可以。

![](_media/stack-1.png)

### 定义栈：

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

### Demo

```js
const stack = new Stack();

console.log('isEmpty: ' + stack.isEmpty()); // isEmpty: false
stack.push('zhu');
stack.push('meng');
stack.push('han');
console.log('size: ' + stack.size()); // size: 3
console.log('peek: ' + stack.peek()); // peek: han
stack.show(); // zhu,meng,han
stack.pop();
stack.show(); // zhu,meng
stack.clear();
console.log('size: ' + stack.size()); // size: 0
```


### 回文

> 回文是指这样一种现象:一个单词、短语或数字，从前往后写和从后往前写都是一样的。
> 比如，单词 `dad`、`racecar`; 数字：`1001`

```js
// 回文
/*
 * 法一
 */
function isPalindrome(element) {
  let stack = new Stack();
  for(let value of element) {
    stack.push(value);
  }
  let temp = '';
  while (stack.size()) {
    temp += stack.pop();
  }
  return temp === element;
}

/*
 * 法二
 */
function isPalindrome(element) {
  let temp = element.split('').reverse().join();
  return temp === element;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('12321'));
```
