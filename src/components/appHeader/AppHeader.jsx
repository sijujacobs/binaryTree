import React from "react";
import "./css/AppHeader.css";
import TreeComponent from "../binaryTree/TreeComponent";

const AppHeader = (props) => {
  return (
    <>
      <div className="appHeader">BINARY TREE</div>
      <div className="binaryTree">
        <TreeComponent />
      </div>
    </>
  );
};

export default AppHeader;
