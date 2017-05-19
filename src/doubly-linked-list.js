const Node = require('./node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const node = new Node(data);

    if(!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  get(position) {
    let currentNode = this.head;
    let i = 0;

    while(i < position) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode.data;
  }

  add(data, position) {

  }

  remove(position) {

  }

  reverse() {

  }

  head() {

  }

  tail() {

  }

  isEmpty() {

  }

  clear() {

  }

}

module.exports = DoublyLinkedList;