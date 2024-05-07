import React from "react";

const TextAreaField = ({ label }) => {
  return (
    <div className="col-8">
      <label className="mx-4">{label} :</label>
      <input className="mx-2" type="radio" name="group" />
      Male
      <input className="mx-2" type="radio" name="group" />
      Female
      <input className="mx-2" type="radio" name="group" />
      Other
    </div>
  );
};

export default TextAreaField;
