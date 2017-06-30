/*
// 链表节点
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// 链表
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 追加元素
  append(element) {
    const node = new Node(element);
    let current = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length ++;
  }

  // 任意位置添加元素
  insert(element, position) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      let current = this.head;
      let previous = null;
      let index = 0;
      if (position === 0) {
        this.head = node;
      } else {
        while (index ++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      this.length ++;
      return true;
    }
    return false;
  }

  // 查找元素下标
  findIndex(element) {
    let current = this.head;
    let index = -1;
    while (current) {
      if (element === current.element) {
        return index + 1;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  // 移除元素
  removeAt(position) {
    if (position > -1 && position <= this.length) {
      let current = this.head;
      let index = 0;
      let previous = null;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }

      this.length--;
      return true;
    }
    return false;
  }

  // 移除指定元素
  remove(element) {
    const index = this.findIndex(element);
    return this.removeAt(index);
  }

  // 是否空链表
  isEmpty() {
    return !this.length;
  }

  // 链表长度
  size() {
    return this.length;
  }

  // 显示元素
  show() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `${current.element} `;
      current = current.next;
    }
    return str;
  }
}

const linkedList = new LinkedList();

console.log(linkedList.isEmpty()); // true
linkedList.append('zhu');
linkedList.append('meng');
linkedList.append('han');
linkedList.insert('han00', 1);
console.log(linkedList.size()); // 4
console.log(linkedList.show()); // zhu han00 meng han
console.log(linkedList.findIndex('meng')); // 2
console.log(linkedList.removeAt(2)); // true
console.log(linkedList.show()); // zhu han00 han

*/

// 链表节点
class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

// 双向链表
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.end = null;
    this.length = 0;
  }

  // 追加元素
  append(element) {
    const node = new Node(element);
    let current = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length ++;
  }

  // 任意位置添加元素
  insert(element, position) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      let current = this.head;
      let index = 0;
      let previous = null;
      // 第一个位置
      if (position === 0) {
        if(!this.head) {
          this.head = node;
          this.end = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (position === this.length) { // 在尾部添加
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        node.prev = previous;
      } else {
        while (index ++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;
      }
      this.length ++;
      return true;
    }
    return false;
  }

  // 移除指定位置元素
  removeAt(position) {
    if (position > -1 && position <= this.length) {
      let current = this.head;
      let previous = null;
      let index = 0;

      // 移除第一个
      if (position === 0) {
        this.head = this.head.next;
        this.head.prev = null;
        if (this.length === 1) {
          this.end = null;
        }
      } else if (position === this.length) { // 移除最后一个
        while (index++ < position -1) { // 拿到最后一个元素
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.prev.prev = previous;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.prev.prev = previous;
      }

    }
    return false;
  }

  // 显示元素
  show() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `${current.element} `;
      current = current.next;
    }
    return str;
  }
}

const doubleLinkedList = new DoublyLinkedList();

doubleLinkedList.append('zhu');
doubleLinkedList.append('meng');
doubleLinkedList.append('han');
console.log(doubleLinkedList.show()); // zhu meng han
doubleLinkedList.insert('han00', 1);
doubleLinkedList.insert('han00', 0);
doubleLinkedList.insert('han00', 5);
console.log(doubleLinkedList.show()); // han00 zhu han00 meng han han00
doubleLinkedList.removeAt(6);
console.log(doubleLinkedList.show()); // han00 zhu han00 meng han
doubleLinkedList.removeAt(1);
console.log(doubleLinkedList.show()); // han00 han00 meng han


