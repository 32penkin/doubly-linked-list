const Node = require('./src/node');
const DoublyLinkedList = require('./src/doubly-linked-list');

const dll1 = new DoublyLinkedList();

dll1.append('node1');
dll1.append('node2');
dll1.append('node3');
dll1.append('node4');

dll1.reverse();

console.log(dll1.get(0));
console.log(dll1.get(1));
console.log(dll1.get(2));
console.log(dll1.get(3));