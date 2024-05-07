// TextInputField.js
import React from "react";

const TextInputField = ({ label, value, onChange }) => {
  return (
    <div className="col-8">
      <label className="mx-4">{label} :</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default TextInputField;
