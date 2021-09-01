import React, { useState } from "react";
import "./Box.css";
const Box = ({ height, width, color, id, deleteBox }) => {
  return (
    <div
      className="Box"
      style={{
        backgroundColor: color,
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <button
        onClick={() => deleteBox(id)}
        style={{
          backgroundColor: color,
          borderWidth: "1px",
        }}
      >
        x
      </button>
    </div>
  );
};
export default Box;
