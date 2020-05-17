import React from "react";
import "./css/NodeComponent.css";

const NodeComponent = (props) => {
  const { node, type } = props;
  return (
    <div className={"nodeComponent " + type}>
      <span>{node.value}</span>
      {node.left && <NodeComponent type="left" node={node.left} />}
      {node.right && <NodeComponent type="right" node={node.right} />}
    </div>
  );
};

export default NodeComponent;
