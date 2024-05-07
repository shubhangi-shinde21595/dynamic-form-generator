// FormField.js
import React from "react";
import TextInputField from "./TextInputField";
import DropdownField from "./DropdownField";
import CheckboxField from "./CheckboxField";
import RadioButtonField from "./RadioButtonField";
import TextAreaField from "./TextAreaField";

const FormField = ({ type, label, options, onRemove }) => {
  const renderField = () => {
    switch (type) {
      case "text":
        return <TextInputField label={label} />;
      case "textArea":
        return <TextAreaField label={label} />;
      case "dropdown":
        return <DropdownField label={label} options={options} />;
      case "checkbox":
        return <CheckboxField label={label} />;
      case "radio":
        return <RadioButtonField label={label} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="row alignItem">
      {renderField()}
      <button className="col-4 my-4 " onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default FormField;
