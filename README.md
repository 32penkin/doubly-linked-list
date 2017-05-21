## Doubly linked list task
 ###  Doubly Linked list
 is a linked data structure that consists of a set of sequentially linked 
 records called nodes. Each node contains two fields, called links, that are 
 references to the previous and to the next node in the sequence of nodes. 
 The beginning and ending nodes' previous and next links.

 You can use methods of LinkedList such as:
 * get(position) - for getting a node from position
 * append(data) - for adding new node to your List (to the its end)
 * add(data, position) - to add a node to a specific position
 * remove(position) - to remove node from specific position
 * reverse() - for reversing the list
 * also u can use next methods: getHead(), getTail(), isEmpty(), clear().

 ###  Example:

 To create a new List:
 ```sh
  const doublyLinkedList = new DoublyLinkedList();
  ```
  Now linked list looks like:
  ```sh
  DoublyLinkedList { head: null, tail: null, length: 0 }
  ```
  To add some data to the end of List:
  ```sh
  doublyLinkedList.append('node1');
  doublyLinkedList.append('node2');
  ```
  Now linked list looks like:
  ```sh
DoublyLinkedList {
  head: 
   Node {
     data: 'node1',
     prev: undefined,
     next: Node { data: 'node2', prev: [Circular], next: undefined } },
  tail: 
   Node {
     data: 'node2',
     prev: Node { data: 'node1', prev: undefined, next: [Circular] },
     next: undefined },
  length: 2 }
  ```
  To push some data to a specific position:
  ```sh
  doublyLinkedList.add('node3', 1);
  ```
  Now linked list looks like:  
  ```sh
DoublyLinkedList {
  head: 
   Node {
     data: 'node1',
     prev: undefined,
     next: Node { data: 'node3', prev: [Circular], next: [Object] } },
  tail: 
   Node {
     data: 'node2',
     prev: Node { data: 'node1', prev: undefined, next: [Object] },
     next: undefined },
  length: 3 }
  ```
  To remove the node from specific position:
  ```sh
  doublyLinkedList.remove(1);
  ```
  Now linked list looks like:
  ```sh
  DoublyLinkedList {
    head: 
     Node {
       data: 'node1',
       prev: undefined,
       next: Node { data: 'node2', prev: [Circular], next: undefined } },
    tail: 
     Node {
       data: 'node2',
       prev: Node { data: 'node1', prev: undefined, next: [Circular] },
       next: undefined },
    length: 2 }
  ```
  To get node from position:
  ```sh
  doublyLinkedList.get(0);
  ```
  This method will return the node data from spec. position.
  
  Also u can reverse your list:
  ```sh
  doublyLinkedList.reverse();
  ```
  Now linked list looks like:
   ```sh
     head: 
      Node {
        data: 'node2',
        prev: undefined,
        next: Node { data: 'node3', prev: [Circular], next: [Object] } },
     tail: 
      Node {
        data: 'node1',
        prev: Node { data: 'node2', prev: undefined, next: [Object] },
        next: undefined },
     length: 3 }
   ```
---
