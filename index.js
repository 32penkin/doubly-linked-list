const Node = require('./src/node');
const DoublyLinkedList = require('./src/doubly-linked-list');

const dll1 = new DoublyLinkedList();

dll1.append('node1');
dll1.append('node2');
dll1.append('node3');
dll1.append('node4');

console.log(dll1.getHead());
console.log(dll1.getTail());
console.log(dll1.isEmpty());
dll1.clear();
console.log(dll1.isEmpty());