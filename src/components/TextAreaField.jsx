import React from "react";

const TextAreaField = ({ label }) => {
  return (
    <div className="col-8">
      <label className="mx-4">{label} :</label>
      <textarea type="textArea" rows={4} cols={40} />
    </div>
  );
};

export default TextAreaField;
