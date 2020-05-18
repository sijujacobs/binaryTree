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
  onTraverseHandler = () => {
    // this.state.bTree.traverse();
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

    let summaryList =
      this.state.treeSummary &&
      this.state.treeSummary.length > 0 &&
      this.state.treeSummary.map((item, i) => {
        return (
          <li key={i}>
            <span className="level">Level : {item.level}</span>
            <span className="content">
              Total : {Number(item.total).toFixed(0)}
            </span>
            <span className="content">
              Average : {Number(item.average).toFixed(2)}
            </span>
          </li>
        );
      });
    let summaryContainer =
      this.state.treeSummary && this.state.treeSummary.length > 0 ? (
        <div className="summary">
          <div>
            <p>Summary</p>
            <ul>{summaryList}</ul>
          </div>
        </div>
      ) : (
        <div></div>
      );
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
          <button onClick={this.onTraverseHandler}>Summary</button>
        </div>
        {summaryContainer}
        <div className="treeView">
          {rootNode && <NodeComponent type="root" node={rootNode} />}
        </div>
      </div>
    );
  }
}

export default TreeComponent;
