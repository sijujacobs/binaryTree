import React from "react";

const Node = (props) => {
  const { node } = props;

  let leftNode = node && node.left && <Node node={node.left} />;
  let rightNode = node && node.right && <Node node={node.right} />;
  console.log(" :: leftNode: ", leftNode);
  return (
    <div className="node">
      <div>{node && node.value}</div>
      {leftNode}
      {rightNode}
    </div>
  );
};

export default Node;
