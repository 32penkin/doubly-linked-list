const Node = require('./src/node');
const DoublyLinkedList = require('./src/doubly-linked-list');

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append('node1');
doublyLinkedList.append('node2');

doublyLinkedList.add('node3', 1);


doublyLinkedList.reverse();

console.log(doublyLinkedList);