class MinHeap {
  constructor(array) {
    //here we are constructing our heap

    this.buildHeap(array);
  }

  buildHeap(array) {
    this.heap = array;
    //here we are constructing heap from last parent s we need to find our last Parent
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      //then we need to check if the prent nodes 2 childs are corectly aligned or not
      this.shiftDown(i);
    }
  }

  shiftDown(currIndex) {
    const endIndex = this.heap.length - 1;

    // check if this parent have left child

    let leftChild = this.leftChild(currIndex);
    let rightChild = this.rightChild(currIndex);
    while (leftChild <= endIndex) {
      //we got if this have a actual left index
      let swapTo = null;
      if (this.heap[leftChild] < this.heap[currIndex]) {
        // swap here
        swapTo = leftChild;
      } else if (this.heap[leftChild] < this.heap[currIndex]) {
        //swap here
        swapTo = rightChild;
      }
      if (swapTo) {
        this.swap(this.heap, swapTo, currIndex);
        currIndex = swapTo;
        leftChild = this.leftChild(currIndex);
      } else {
        return;
      }
      //after swaping we need to continue the loop so add a condition
    }
  }
  shiftUp() {}
  peek() {}

  leftChild(parentIndex) {
    const leftChildIndex = 2 * parentIndex + 1;
    return leftChildIndex;
  }
  rightChild(parentIndex) {
    const rightChildIndex = 2 * parentIndex + 2;
    return rightChildIndex;
  }

  swap(arr, firstIndex, secondIndex) {
    const Temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = Temp;
  }
  display() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }
  parent(childIndex) {
    if (childIndex === 0) {
      return null; // Root node has no parent
    }

    const parentIndex = Math.floor((childIndex - 1) / 2);
    return parentIndex;
  }
}

const heapArray = new MinHeap([8, 6, 5, 2, 10, 20, 9]);

heapArray.display();

//[8,6,5,2,10,20,9]

//    8
//  6    5
// 2 10 20 9

//      2
//    5    6 
//  8  10 20 9  
