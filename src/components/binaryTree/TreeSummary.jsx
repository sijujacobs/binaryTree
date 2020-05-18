import React from "react";

const TreeSummary = (props) => {
  const { summary } = props;
  return (
    <div>
      <p>Summary</p>
      <table className="summaryTable">
        <thead>
          <tr>
            <th>Level</th>
            <th>Total</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {summary &&
            summary.length > 0 &&
            summary.map((s, i) => {
              return (
                <tr key={i}>
                  <td className="level">{s.level}</td>
                  <td className="content">{Number(s.total).toFixed(0)}</td>
                  <td className="content">{Number(s.average).toFixed(2)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default TreeSummary;

// <table className="summaryTable">
// <thead>
//   <tr>
//     <th>Level</th>
//     <th>Total</th>
//     <th>Average</th>
//   </tr>
// </thead>
// <tbody>
//   {summary &&
//     summary.length > 0 &&
//     summary.map((s, i) => {
//       return (
//         <tr key={i}>
//           <td className="level">{s.level}</td>
//           <td className="content">{Number(s.total).toFixed(0)}</td>
//           <td className="content">{Number(s.average).toFixed(2)}</td>
//         </tr>
//       );
//     })}
// </tbody>
// </table>
