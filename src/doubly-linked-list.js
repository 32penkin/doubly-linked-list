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
    const node = new Node(data);
    let currentNode = this.head;
    let i = 1;

    while(i < position) {
      currentNode = currentNode.next;
      i++;
    }

    node.prev = currentNode;
    node.next = currentNode.next;
    currentNode.next = node;

    this.length++;
  }

  remove(position) {
    let currentNode = this.head;
    let i = 0;

    while (i < position) {
      currentNode = currentNode.next;
      i++
    }
    if(currentNode.prev) currentNode.prev.next = currentNode.next;
    if(currentNode.next) currentNode.next.prev = currentNode.prev;

    this.length--;
  }

  reverse() {
    let currentNode = this.head;
    let temp = [];

    while (currentNode) {
      temp.push(currentNode.data);
      if(currentNode.next) currentNode = currentNode.next;
      else break;
    }

    currentNode = this.head;

    while (currentNode) {
      currentNode.data = temp.pop();
      if(currentNode.next) currentNode = currentNode.next;
      else break;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  isEmpty() {
    return this.length == 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

}

module.exports = DoublyLinkedList;