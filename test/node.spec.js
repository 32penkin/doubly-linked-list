const Node = require('../src/node');

describe('Node', () => {
  describe('#constructor', () => {
    const node1 = new Node('node1');
    const node2 = new Node('node2');
    const node3 = new Node('node3');
    node1.prev = null;
    node1.next = node2;
    node2.prev = node1;
    node2.next = node3;
    node3.prev = node2;
    node3.next = null;

    it('assigns null to this.prev', () => {
      expect(node1.prev).to.equal(null);
    });

    it('assigns node3 to node2.next', () => {
      expect(node2.next).to.equal(node3);
    });

    it('assigns if node2 to node3.prev', () => {
      expect(node3.prev).to.equal(node2);
    });
  });

});