import React, { useState } from "react";
import "./NewBoxForm.css";
/** 
 NewBoxForm - this component should render a form that when submitted, 
 creates a new Box. You should be able to specify the Box’s width, 
 height, and background color. When the form is submitted, clear the input values.
 */

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { width: 100, height: 100, color: "#7FFFD4" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  // add item and reset form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };
  // get data from form and make into object
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="color">Color:</label>
      <input
        type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Make a square</button>
    </form>
  );
};

export default NewBoxForm;
