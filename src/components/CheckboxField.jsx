import React from "react";

const CheckboxField = ({ label }) => {
  let values = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div className="col-8">
      <label className="mx-4">{label}</label>
      <input className="mx-2" type="checkbox" />
      {values[0]}
      <input className="mx-2" type="checkbox" />
      {values[1]}
      <input className="mx-2" type="checkbox" />
      {values[2]}
      <input className="mx-2" type="checkbox" />
      {values[3]}
    </div>
  );
};

export default CheckboxField;
