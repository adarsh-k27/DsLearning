// we need to create a Class For LinkedList

// LinkedList Contain a Head and A Tail and each one in LinkedList is A Node

// we need to create  A Node

class SingleLinkedList {
  // contains A Node

  constructor() {
    this.head = null;
    this.tail = null;
  }

  removeDuplicate() {
    let currentNode = this.head;

    while (currentNode !== null) {
      let nextNodePointer = currentNode.next;

      while (
        nextNodePointer !== null &&
        nextNodePointer.data == currentNode.data
      ) {
        nextNodePointer = nextNodePointer.next;
      }

      currentNode.next = nextNodePointer;
      currentNode = currentNode.next;
    }
  }

  reverseLinkedList() {
    let currentNode = this.head;
    let nextNode = null;
    let prevNode = null;

    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    //head => next => prev:null => 

    this.head = prevNode;
    //in tail we will get  Node{data:10,next:null}

    //so we ned to assign the
  }

  addToLinkedList(data) {
    // conditions
    //  1.check for empty linkedList
    // 2.add to Head
    // 3.add to tail
    // 4.assign Tail
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  displayLinkedList() {
    let temp = this.head;

    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  InsertAfter(nextTo, data) {
    // we need to traverse and find

    let temp = this.head;
    let prev = null;
    let newNode = new Node(data);
    if (temp === null) {
      return;
    }

    while (temp !== null && temp.data !== nextTo) {
      prev = temp;
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// const list = new SingleLinkedList();

// list.addToLinkedList(5);
// list.addToLinkedList(10);
// list.addToLinkedList(15);
// list.addToLinkedList(20);
// list.addToLinkedList(25);
// list.addToLinkedList(30);
// list.InsertAfter(20,50)
// list.displayLinkedList()

//How is It working
// [data:5,next:[data:10,next:[data:15,next:""]]]
//head =[data:5,next:null]
//tail =[data:10,next:null]

module.exports = { SingleLinkedList };
