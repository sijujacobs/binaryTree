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
          treeSummary: [...prevState.treeSummary, ...newTreeSummary],
        }));
      })
      .catch((e) => console.log("Promise Error : ", e));

    // console.log(" ::tree Map : ", tMap);
  };

  render() {
    const rootNode = this.state.bTree.rootNode || null;

    // console.log(
    //   " render ::this.state.treeSummary   : ",
    //   this.state.treeSummary
    // );
    // let fruits = [
    //   { name: "Apple", color: "red" },
    //   { name: "Orange", color: "orange" },
    //   { name: "Grape", color: "green" },
    // ];
    // let summaryList1 =
    //   fruits &&
    //   fruits.map((item, i) => {
    //     return <li key={i}>{item.name}</li>;
    //   });

    let summaryList =
      this.state.treeSummary &&
      this.state.treeSummary.length > 0 &&
      this.state.treeSummary.map((item, i) => {
        return (
          <li key={i}>
            <span>Level : {item.level}</span>
            <span>Total : {item.total}</span>
            <span>Average : {item.average}</span>
          </li>
        );
      });
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
          <div className="summary">
            <div>
              <p>Summary</p>
              <ul>{summaryList}</ul>
            </div>
          </div>
        </div>
        <div className="treeView">
          {rootNode && <NodeComponent type="root" node={rootNode} />}
        </div>
      </div>
    );
  }
}

export default TreeComponent;
