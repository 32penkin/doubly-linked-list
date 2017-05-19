const DoublyLinkedList = require('../src/doubly-linked-list');
const Node = require('../src/node');

describe('Node', () => {
  describe('#constructor', () => {
    const dll1 = new DoublyLinkedList();

    it('assigns 0 to this.length', () => {
      expect(dll1.length).to.equal(0);
    });

    it('assigns null to this.head', () => {
      expect(dll1.head).to.equal(null);
    });

    it('assigns null to this.tail', () => {
      expect(dll1.tail).to.equal(null);
    });
  });

  describe('#append', () => {
    const dll1 = new DoublyLinkedList();

    dll1.append('node1');
    dll1.append('node2');
    dll1.append('node3');

    it('should assign any nodes to this.head and this.tail', () => {
      expect(dll1.head).to.be.an.instanceof(Node);
      expect(dll1.tail).to.be.an.instanceof(Node);
    });

    it('assigns node2 to this.head.next', () => {
      expect(dll1.head.next.data).to.equal('node2');
    });
  });




});