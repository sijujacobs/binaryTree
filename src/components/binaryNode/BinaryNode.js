class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.level = 0;
  }

  insertChildNode(node, level) {
    if (this.left || this.right) {
      ++this.level;
    }
    if (node.value < this.value) {
      if (this.left !== null) {
        this.left.insertChildNode(node, this.level);
      } else {
        this.left = node;
      }
    }
    if (node.value > this.value) {
      if (this.right !== null) {
        this.right.insertChildNode(node, this.level);
      } else {
        this.right = node;
      }
    }
  }
}

export default BinaryNode;
