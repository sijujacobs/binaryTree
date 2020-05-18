import React, { Component } from "react";

import "./css/TreeComponent.css";
import BinaryTree from "./BinaryTree";
import BinaryNode from "../binaryNode/BinaryNode";
import NodeComponent from "../binaryNode/NodeComponent";
import TreeSummary from "./TreeSummary";

import { CSSTransition } from "react-transition-group";
class TreeComponent extends Component {
  constructor(props) {
    super(props);
    this.nodeInput = React.createRef();
    this.state = {
      nodeValue: 0,
      bTree: new BinaryTree(),
      showSummary: false,
    };
    this.state.treeSummary = [];
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
      this.nodeInput.current.value = "";
      this.forceUpdate();
    }
  };
  onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      this.onClickHandler();
    }
  };

  showSummary = () => {
    this.setState((prevState) => ({
      showList: !prevState.showList,
    }));
    this.getSummary();
  };
  getSummary = () => {
    var tPromise = new Promise((resove, reject) => {
      this.state.bTree.traverse();
      if (this.state.bTree.treeMap) {
        let tMap = this.state.bTree.treeMap;
        let tLevels = [];
        for (let m in tMap) {
          tLevels.push(tMap[m]);
        }
        resove(tLevels);
      } else {
        reject("Error in TreeMap");
      }
    });
    tPromise
      .then((newTreeSummary) => {
        console.log("Promise Success: newTreeSummary : ", newTreeSummary);
        this.setState((prevState) => ({
          treeSummary: newTreeSummary,
        }));
      })
      .catch((e) => console.log("Promise Error : ", e));
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
          <button onClick={this.showSummary}>Summary</button>
        </div>
        <CSSTransition
          in={this.state.showList}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={this.listSwitch}
          onExit={this.listSwitch}
        >
          <TreeSummary summary={this.state.treeSummary} />
        </CSSTransition>
        <div className="treeView">
          {rootNode && <NodeComponent type="root" node={rootNode} />}
        </div>
      </div>
    );
  }
}

export default TreeComponent;
