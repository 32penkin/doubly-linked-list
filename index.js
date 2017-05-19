const Node = require('./src/node');
const DoublyLinkedList = require('./src/doubly-linked-list');

const dll1 = new DoublyLinkedList();

dll1.append('node1');
dll1.append('node2');
dll1.append('node3');

console.log(dll1);