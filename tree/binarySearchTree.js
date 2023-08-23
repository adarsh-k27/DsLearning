class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertData(data) {
    const newNode = new Node(data);
    let currentNode = this.root;
    if (currentNode == null) {
      // we need to add The Root First
      this.root = newNode;
      return;
    }
    while (true) {
      // add condition
      if (currentNode.data < data) {
        // add to right side
        if (currentNode.right == null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else if (currentNode.data > data) {
        if (currentNode.left == null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        currentNode.right = newNode;
      }
    }
  }

  closest(target) {
    let currentNode = this.root;
    let closest = currentNode.data;
    while (currentNode !== null) {
      if (Math.abs(closest - target) > Math.abs(currentNode.data - target)) {
        closest = currentNode.data;
      }
      if (currentNode.data < target) {
        currentNode = currentNode.right;
      } else if (currentNode.data > target) {
        currentNode = currentNode.left;
      } else {
        break;
      }
    }
    console.log(closest);
  }

  contains(data) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.data < data) {
        currentNode = currentNode.right;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }
    return false;
  }

  display() {
    let currentNode = this.root;
  }
}

class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

const BSList = new BinarySearchTree();

BSList.insertData(20);
BSList.insertData(25);
BSList.insertData(19);
BSList.insertData(16);
BSList.insertData(30);

console.log(BSList.contains(31));

module.exports = {BinarySearchTree}

