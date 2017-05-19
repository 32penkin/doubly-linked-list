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

  head() {

  }

  tail() {

  }

  get(position) {

  }

  add(data, position) {

  }

  isEmpty() {

  }

  clear() {

  }

  remove(position) {

  }

  reverse() {

  }

}

module.exports = DoublyLinkedList;