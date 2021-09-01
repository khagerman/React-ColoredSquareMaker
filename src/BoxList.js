import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";
import "./BoxList.css";
const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const renderBoxes = () => {
    return (
      <div className="BoxList-con">
        {boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            color={box.color}
            height={box.height}
            width={box.width}
            deleteBox={deleteBox}
          />
        ))}
      </div>
    );
  };

  const addBox = (box) => {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };
  const deleteBox = (id) => {
    setBoxes(boxes.filter((b) => b.id !== id));
    console.log(boxes);
    console.log(id);
  };
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
};

export default BoxList;
