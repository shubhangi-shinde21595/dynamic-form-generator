import React from "react";

const DropdownField = ({ label }) => {
  const options = ["HSC", "Diploma", "UG", "PG"];
  let optionList = options.map((opt, index) => (
    <option key={index} value={opt}>
      {opt}
    </option>
  ));

  return (
    <div className="col-8">
      <label className="mx-4">{label} :</label>
      <select>{optionList}</select>
    </div>
  );
};

export default DropdownField;
