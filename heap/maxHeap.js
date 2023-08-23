class MaxHeap {
  constructor(array) {
    this.buildHeap(array);
  }

  buildHeap(array) {
    this.heap = array;
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shfiftDown(i);
    }
  }

  shfiftDown(currIndex) {
    const endIndex = this.heap.length - 1;
    let left = this.leftChild(currIndex);

    while (left <= endIndex) {
      let right = this.rightChild(currIndex);
      let swapTo = null;
      if (this.heap[left] > this.heap[currIndex]) {
        swapTo = left;
      } else if (right <= endIndex && this.heap[right] > this.heap[currIndex]) {
        swapTo = right;
      }

      if (swapTo) {
        this.swap(this.heap, swapTo, currIndex);
      } else {
        return;
      }
    }
  }

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

const heapArray = new MaxHeap([8, 6, 5, 2, 10, 20, 9]);

heapArray.display();


//[8,6,5,2,10,20,9]

//      20 
//    8    10
//  2  6  5  9   