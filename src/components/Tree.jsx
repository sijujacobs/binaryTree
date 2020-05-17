import React, { useEffect } from "react";
// import Node from "./Node";
import { connect } from "react-redux";
const Tree = (props) => {
  // const { nodeTree } = props;
  useEffect(() => {
    // console.log("UseEffect :: nodes : ", nodes);
  });
  // console.log("Tree :: nodes : ", nodeTree);
  // const createNodeTree = () => {
  //   let nodeTree = [];
  // };

  return <div className="tree">Tree</div>;
};

const mapStatetoProps = (state) => {
  return {
    nodeTree: state.nodeReducer.nodeTree,
  };
};
const connectedTree = connect(mapStatetoProps)(Tree);
export default connectedTree;
