
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
    return this.dataStore.pop();
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
