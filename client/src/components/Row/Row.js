import React from "react";
import Cell from "../Cell/Cell";

// Row component
const Row = ({ row, play, move }) => {
  return (
    <tr>
      {row.map((cell, i) => (
        <Cell key={i} value={cell} columnIndex={i} play={play} move={move} />
      ))}
    </tr>
  );
};

export default Row;
