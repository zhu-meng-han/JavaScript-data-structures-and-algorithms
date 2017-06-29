
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

const stack = new Stack();

console.log('isEmpty: ' + stack.isEmpty());
stack.push('z');
stack.push('m');
stack.push('h');
console.log('size: ' + stack.size());
console.log('peek: ' + stack.peek());
stack.show();
stack.pop();
stack.show();
stack.clear();
console.log('size: ' + stack.size());

