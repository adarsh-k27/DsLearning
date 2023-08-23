const array1 = [1, 6, 10, 6, 7, 8, 6, 13, 5, 6, 8, 9, 4, 5, 6];

const target = 6;

function solution(array, target) {
  let pointer1 = 0; //O(1)
  let pointer2 = array.length - 1; //O(1)

  for (let i = pointer1,j=pointer2; i!==j ; i++) {  //O(n)
    
    if (array[i] == target) {

      if (array[j] == target) {
        j--;
      }
      swap(array, i, j, target);
    }
  }
  console.log(array);
}

function swap(array, i, j, target) {
  const temp = array[j];
  array[i] = temp;
  array[j] = target;
}

solution(array1,target)  //TimeComplexity = O(n)
