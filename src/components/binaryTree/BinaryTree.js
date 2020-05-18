// import BinaryNode from "../binaryNode/BinaryNode";
class BinaryTree {
  constructor(value) {
    this.rootNode = null;
    this.treeMap = {};
  }

  insertNode(node) {
    if (this.rootNode) {
      this.rootNode.insertChildNode(node, 1);
    } else {
      this.rootNode = node;
    }
  }

  updateTreeMap(node, level) {
    if (this.treeMap[level]) {
      this.treeMap[level].values.push(node.value);
    } else {
      let mapObj = {
        level: level,
        values: [node.value],
      };
      this.treeMap[level] = mapObj;
    }
    this.treeMap[level].total = this.treeMap[level].values.reduce(
      (t, v) => Number(t) + Number(v)
    );
    this.treeMap[level].average =
      Number(this.treeMap[level].total) / this.treeMap[level].values.length;
  }
  traverse(node = this.rootNode, level = 1) {
    this.updateTreeMap(node, level);
    let leftNode = node.left || null;
    let rightNode = node.right || null;
    if (leftNode || rightNode) {
      ++level;
      if (leftNode) {
        this.traverse(leftNode, level);
      }
      if (rightNode) {
        this.traverse(rightNode, level);
      }
    }
  }
}

export default BinaryTree;
