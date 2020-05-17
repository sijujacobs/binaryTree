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
    let nodeValue = this.nodeInput.current.value;
    if (nodeValue > 0) {
      let node = new BinaryNode(nodeValue);
      this.state.bTree.insertNode(node);
      this.forceUpdate();
    }
  };
  onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      this.onClickHandler();
    }
  };

  render() {
    const rootNode = this.state.bTree.rootNode || null;
    return (
      <div className="treeComponent">
        <div className="controlArea">
          <input
            type="number"
            min="1"
            ref={this.nodeInput}
            onKeyDown={this.onKeyDownHandler}
          ></input>
          <button onClick={this.onClickHandler}>Insert</button>
        </div>
        <div className="treeView">
          {rootNode && <NodeComponent type="root" node={rootNode} />}
        </div>
      </div>
    );
  }
}

export default TreeComponent;
