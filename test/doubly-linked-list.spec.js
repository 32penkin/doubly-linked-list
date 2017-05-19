const DoublyLinkedList = require('../src/doubly-linked-list');

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

});