
// 定义一个 Node 类
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 插入
  insert(key) {
    const newNode = new Node(key);
    const insertNode = (node, newNode) => {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }

    if (!this.root) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  // 中序遍历
  inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    }
    inOrderTraverseNode(this.root, callback);
  }

  // 先序遍历
  preOrderTraverse(callback) {
    const preOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    }
    preOrderTraverseNode(this.root, callback);
  }

  // 后续遍历
  postOrderTraverse(callback) {
    const postOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    }
    postOrderTraverseNode(this.root, callback);
  }

  min(node) {
    const minNode = node => {
      return node ? (node.left ? minNode(node.left): node) : null;
    }

    return minNode( node || this.root);
  }

  max(node) {
    const maxNode = node => {
      return node ? (node.right ? maxNode(node.right) : node) : null;
    }

    return maxNode(node || this.root);
  }

  search(key) {
    const searchNode = (node, key) => {
      if (node === null) return null;
      if (node.key === key) return node;
      return searchNode(key < node.key ? node.left : node.right, key);
    }

    return searchNode(this.root, key);
  }
  // 查找父节点
  searchParentNode(key) {
    const searchNode = (node, key) => {
      if (node === null || (node.left === null && node.right === null)) return null;
      if (node.left.key === key || node.right.key === key) return node;
      return searchNode(key < node.key ? node.left : node.right, key);
    }

    return searchNode(this.root, key);
  }

  // 移除节点
  remove(key) {
    const removeNode = (node, key) => {
      if (node === null) return null;
      if (node.key > key) {
        node.left = removeNode(node.left, key);
        return node;
      }
      if (node.key < key) {
        node.right = removeNode(node.right, key);
        return node;
      }
      if (node.key === key) {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.right === null) {
          node = node.left;
          return node;
        }
        const tempNode = this.min(node.right);
        node.key = tempNode.key;
        node.right = removeNode(node.right, tempNode.key);
        return node;
      }
    }

    return removeNode(this.root, key);
  }
}

const tree = new BinarySearchTree();
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(6)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(15)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

// console.log(tree.root);

// tree.inOrderTraverse(value => {
//   console.log(value);
// })

console.log(tree.searchParentNode(25));

// console.log(' ----- ');

// tree.preOrderTraverse(value => {
//   console.log(value);
// })

// console.log(' ----- ');

// tree.postOrderTraverse(value => {
//   console.log(value);
// })

// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.root);
// console.log(tree.search(5));
// tree.remove(11);
// console.log(tree.remove(11));
// console.log(tree.root);
// console.log(tree.search(13));
