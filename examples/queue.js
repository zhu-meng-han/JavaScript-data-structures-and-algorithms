
class Queue {

  constructor(data) {
    this.dataStore = data || [];
  }

  // 检测队列是否为空
  isEmpty() {
    return !this.dataStore.length;
  }

  // 队尾加入元素
  enqueue(element) {
    this.dataStore.push(element);
  }
  /*
  enqueue(element, priority) {
    this.dataStore.push({element, priority});
  }
  */

  /*
  enqueue(element, priority) {
    const queueElement = {element, priority};

    if (this.isEmpty()) {
      this.dataStore.push(queueElement);
    } else {
      const preIndex = this.dataStore.findIndex(item => item.priority > queueElement.priority);
      if (preIndex > -1) {
        this.dataStore.splice(preIndex, 0, queueElement);
      } else {
        this.dataStore.push(queueElement);
      }
    }
  }
  */

  // 删除队首元素
  dequeue() {
    return this.dataStore.shift();
  }
  /*
  dequeue() {
    let minIndex = 0;
    for (let i = 0, len = this.size(); i < len; ++i) {
      if (this.dataStore[i].priority < this.dataStore[minIndex].priority) {
        minIndex = i;
      }
    }
    return this.dataStore.splice(minIndex, 1);
  }
  */

  // 队首元素
  front() {
    return this.dataStore[0];
  }

  // 队尾元素
  back() {
    return this.dataStore[this.size() - 1];
  }

  // 队列长度
  size() {
    return this.dataStore.length;
  }

  // 清除队列
  clear() {
    this.dataStore = [];
  }

  // 打印队列
  show() {
    const str = this.dataStore.toString();
    // const str = this.dataStore.map(item => {
    //   return item.element + ' : ' + item.priority
    // }).toString();
    console.log(str);
  }
}

// const queue = new Queue();

// console.log('isEmpty: ' + queue.isEmpty()); // isEmpty: false
// queue.enqueue('zhu', 2);
// queue.enqueue('meng', 1);
// queue.enqueue('han', 3);
// queue.enqueue('han1', 3);
// queue.enqueue('zhu1', 2);
// queue.enqueue('meng1', 0);
// queue.show(); // zhu,meng,han
// console.log('size: ' + queue.size()); // size: 3
// console.log('front: ' + queue.front()); // front: zhu
// console.log('back: ' + queue.back()); // back: han
// queue.dequeue();
// queue.show(); // meng,han
// queue.clear();
// queue.show(); //


class LoopQueue extends Queue {

  constructor(data) {
    super(data);
  }

  getIndex(index) {
    const length = this.size();
    return index > length ? (index % length) : index;
  }

  find(index) {
    return !this.isEmpty() ? this.dataStore[this.getIndex(index) - 1] : null;
  }
}

const loopQueue = new LoopQueue(['zhu']);
loopQueue.enqueue('meng');
loopQueue.enqueue('han');
loopQueue.enqueue('zhu1');
loopQueue.enqueue('meng1');
loopQueue.enqueue('han1');

console.log(loopQueue.find(123)); // han

