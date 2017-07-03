const LinkedList = require('./node.js');

class HashTable {

  constructor() {
    this.table = [];
  }

  static LoseLoseHashCode(key) {
    let hash = 0;
    for (let code of key) {
      hash += code.charCodeAt();
    }

    return hash % 37;
  }

  /*
  // 新增 or 修改
  append(key, value) {
    const position = HashTable.LoseLoseHashCode(key);
    this.table[position] = value;
    return true;
  }

  get(key) {
    const position = HashTable.LoseLoseHashCode(key);
    return this.table[position];
  }

  remove(key) {
    const position = HashTable.LoseLoseHashCode(key);
    this.table[position] = undefined;
    return true;
  }
  */

  /*
    *链表类
  */
  /*
  append(key, value) {
    const position = HashTable.LoseLoseHashCode(key);
    if (this.table[position] === void 0) {
      this.table[position] = new LinkedList();
    }
    this.table[position].append({key, value});
  }

  get(key) {
    const position = HashTable.LoseLoseHashCode(key);
    if (this.table[position] !== void 0) {
      const getElementValue = node => {
        if (!node && !node.element) return undefined;
        if (Object.is(node.element.key, key)) {
          return node.element.value;
        } else {
          return getElementValue(node.next);
        }
      }
      return getElementValue(this.table[position].head);
    }
    return undefined;
  }

  remove(key) {
    const position = HashTable.LoseLoseHashCode(key);
    if (this.table[position] !== undefined) {
      const getElementValue = node => {
        if (!node && !node.element) return false;
        if (Object.is(node.element.key, key)) {
          this.table[position].remove(node.element);
          if (this.table[position].isEmpty()) {
            this.table[position] = undefined;
          }
          return true;
        } else {
          getElementValue(node.next);
        }
      }
      return getElementValue(this.table[position].head);
    }
    return false;
  }
  */
  /*
   * 线性探测法
  */
  append(key, value) {
    const position = HashTable.LoseLoseHashCode(key);
    if (this.table[position] === void 0) {
      this.table[position] = {key, value};
    } else {
      let index = ++position;
      while(this.table[index] !== void 0) {
        index++;
      }
      this.table[indx] = {key, value};
    }
  }

  get(key) {
    const position = HashTable.LoseLoseHashCode(key);
    if (this.table[position] !== void 0) {
      if (Object.is(this.table[index].key, key)) {
        return this.table[position].value;
      } else {
        const index = ++position;
        while (this.table[index] === void 0 || Object.is(this.table[index].key, key)) {
          index++;
        }
        return Object.is(this.table[index].key, key) ? this.table[index].value : undefined;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = HashTable.LoseLoseHashCode(key);
    if (this.table[position] !== void 0) {
      if (Object.is(this.table[index].key, key)) {
        this.table[position] = void 0;
        return true;
      } else {
        const index = ++position;
        while (this.table[index] === void 0 || Object.is(this.table[index].key, key)) {
          index++;
        }
        if (Object.is(this.table[index].key, key)) {
          this.table[index] = void 0;
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }

  show() {
    this.table.map((value, key) => {
      if (value) console.log(`${key} : ${value}`);
    });
  }
}

const hashTable = new HashTable();
hashTable.append('Gandalf', 'gandalf@email.com');
hashTable.append('John', 'johnsnow@email.com');
console.log(hashTable.get('Gandalf'));
console.log(hashTable.get('John'));
// hashTable.remove('John');
console.log(hashTable.remove('John'));
console.log(hashTable.table);
// console.log(hashTable.get('John'));
// hashTable.append('Tyrion', 'tyrion@email.com');
// console.log(hashTable.get('Tyrion'));
// console.log(hashTable.get('Gandalf')); // gandalf@email.com
// console.log(hashTable.get('Loiane')); // undefined
// hashTable.remove('Surmon');
// console.log(hashTable.show());
// 16 : tyrion@email.com
// 19 : gandalf@email.com
// 29 : johnsnow@email.com

// const hash = new HashTable()
// hash.append('Gandalf',    'gandalf@email.com')
// hash.append('John', 'johnsnow@email.com')
// hash.append('Tyrion', 'tyrion@email.com')
// hash.append('Aaron',    'aaron@email.com')
// hash.append('Donnie', 'donnie@email.com')
// hash.append('Ana', 'ana@email.com')
// hash.append('Jonathan', 'jonathan@email.com')
// hash.append('Jamie', 'jamie@email.com')
// hash.append('Sue',    'sue@email.com')
// hash.append('Mindy', 'mindy@email.com')
// hash.append('Paul', 'paul@email.com')
// hash.append('Nathan', 'nathan@email.com')

// 5 : jonathan@email.com
// 5 : jamie@email.com
// 5 : sue@email.com
// 10 : nathan@email.com
// 13 : donnie@email.com
// 13 : ana@email.com
// 16 : tyrion@email.com
// 16 : aaron@email.com
// 19 : gandalf@email.com
// 29 : johnsnow@email.com
// 32 : mindy@email.com
// 32 : paul@email.com
