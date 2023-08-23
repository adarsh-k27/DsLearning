const {BinarySearchTree}=require('./binarySearchTree')


const list=new BinarySearchTree()

list.insertData(27)
list.insertData(29)
list.insertData(24)
list.insertData(21)
list.insertData(26)
list.insertData(32)

list.closest(25)



//       26
//     /    \
//    23     24
//   /  \   /   \
//  21  24 26    32
