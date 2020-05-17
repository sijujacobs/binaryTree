import React, { Component } from "react";

import "./css/TreeComponent.css";
import BinaryTree from "./BinaryTree";
import BinaryNode from "../binaryNode/BinaryNode";
import NodeComponent from "../binaryNode/NodeComponent";

class TreeComponent extends Component {
  constructor(props) {
    super(props);
    this.nodeInput = React.createRef();
    this.state = {
      nodeValue: 0,
      bTree: new BinaryTree(),
    };
  }
  // onChangeHandler = (e) => {
  //   this.setState({
  //     nodeValue: e.target.value,
  //   });
  // };
  onClickHandler = () => {
    // console.log(" ::this.refs.myInput  : ", this.nodeInput.current.value);
    let nodeValue = this.nodeInput.current.value;
    let node = new BinaryNode(nodeValue);
    this.state.bTree.insertNode(node);
    this.forceUpdate();
  };

  render() {
    const rootNode = this.state.bTree.rootNode || null;
    return (
      <div className="treeComponent">
        <input type="number" min="1" ref={this.nodeInput}></input>
        <button onClick={this.onClickHandler}>Insert</button>
        {rootNode && <NodeComponent type="root" node={rootNode} />}
      </div>
    );
  }
}

export default TreeComponent;
