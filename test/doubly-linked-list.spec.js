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

    it('check the length of the list', () => {
      expect(dll1.length).to.equal(3);
    });
  });

  describe('#get', () => {
    const dll1 = new DoublyLinkedList();

    dll1.append('node1');
    dll1.append('node2');
    dll1.append('node3');

    it('should return Node.data by index', () => {
      expect(dll1.get(0)).to.equal('node1');
      expect(dll1.get(1)).to.equal('node2');
      expect(dll1.get(2)).to.equal('node3');
    });
  });

  describe('#add', () => {
    const dll1 = new DoublyLinkedList();

    dll1.append('node1');
    dll1.append('node2');
    dll1.add('node3', 1);

    it('should insert data by position', () => {
      expect(dll1.get(1)).to.equal('node3');
    });

    it('check the length of the list', () => {
      expect(dll1.length).to.equal(3);
    });
  });

  describe('#remove', () => {
    const dll1 = new DoublyLinkedList();

    dll1.append('node1');
    dll1.append('node2');
    dll1.append('node3');
    dll1.append('node4');

    dll1.remove(1);

    it('should delete node from spec. posotion', () => {
      expect(dll1.get(1)).to.equal('node3');
    });

    it('check the length of the list', () => {
      expect(dll1.length).to.equal(3);
    });
  });

  describe('#reverse', () => {
    const dll1 = new DoublyLinkedList();

    dll1.append('node1');
    dll1.append('node2');
    dll1.append('node3');
    dll1.append('node4');

    dll1.reverse();

    it('check head', () => {
      expect(dll1.head.data).to.equal('node4');
    });

    it('check tail', () => {
      expect(dll1.tail.data).to.equal('node1');
    });

    it('check element', () => {
      expect(dll1.get(1)).to.equal('node3');
    });

    it('check element', () => {
      expect(dll1.get(2)).to.equal('node2');
    });
  });

  describe('#isEmpty', () => {
    const dll1 = new DoublyLinkedList();
    const dll2 = new DoublyLinkedList();

    dll1.append('node1');

    it('check is empty', () => {
      expect(dll1.isEmpty()).to.equal(false);
    });

    it('check is empty', () => {
      expect(dll2.isEmpty()).to.equal(true);
    });
  });

  describe('#clear', () => {
    const dll1 = new DoublyLinkedList();

    dll1.append('node1');
    dll1.clear();

    it('check cleared list', () => {
      expect(dll1.head).to.equal(null);
      expect(dll1.tail).to.equal(null);
      expect(dll1.length).to.equal(0);
    });
  });




});