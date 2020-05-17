// import BinaryNode from "../binaryNode/BinaryNode";
class BinaryTree {
  constructor(value) {
    this.rootNode = null;
  }

  insertNode(node) {
    if (this.rootNode) {
      this.rootNode.insertChildNode(node, 1);
    } else {
      this.rootNode = node;
    }
  }
}

export default BinaryTree;
