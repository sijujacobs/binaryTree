class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertChildNode(node) {
    if (node.value < this.value) {
      if (this.left !== null) {
        this.left.insertChildNode(node);
      } else {
        this.left = node;
      }
    }
    if (node.value > this.value) {
      if (this.right !== null) {
        this.right.insertChildNode(node);
      } else {
        this.right = node;
      }
    }
  }
}

export default BinaryNode;
