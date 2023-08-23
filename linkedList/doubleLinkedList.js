export class DLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToLinkedList(data) {
    // check if Head is null
    let newNode = new Node(data)
    if (this.head == null) {
      this.head = newNode;
    }
    else{
        this.tail.next=newNode;
        newNode.prev=this.tail;
    }
    this.tail=newNode;
  }

  displayList(){
    let temp = this.head;
    if(temp==null){
        return
    }
    while(temp !== null){
        console.log(temp.data);
        temp=temp.next
    }
  }

  displayListReverse(){
    let temp = this.tail;
    if(temp==null){
        return
    }
    while(temp !== null){
        console.log(temp.data);
        temp=temp.prev
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}


const list = new DLinkedList()
list.addToLinkedList(19)
list.addToLinkedList(20)
list.addToLinkedList(30)
list.addToLinkedList(25)

list.displayListReverse()