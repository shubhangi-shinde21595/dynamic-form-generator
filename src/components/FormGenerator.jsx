import React, { useState } from "react";
import FormField from "./FormField";

const FormGenerator = () => {
  const [fields, setFields] = useState([]);

  const addField = (type, label, options) => {
    setFields([...fields, { type, label, options }]);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    localStorage.setItem("formConfig", JSON.stringify(fields));
  };

  const renderFields = () => {
    console.log(fields);
    return fields.map((field, index) => (
      <FormField
        key={index}
        type={field.type}
        label={field.label}
        options={field.options}
        onRemove={() => removeField(index)}
      />
    ));
  };

  const loadConfig = () => {
    const savedConfig = localStorage.getItem("formConfig");
    if (savedConfig) {
      setFields(JSON.parse(savedConfig));
    }
  };

  return (
    <div className="container my-4">
      <div className="d-inline p-2 mx-4">
        <button
          className="mx-4 my-4"
          onClick={() => addField("text", "Enter Name")}
        >
          Add Text Field
        </button>
        <button
          className="mx-4 my-4"
          onClick={() => addField("textArea", "Enter Your Address")}
        >
          Add TextArea Field
        </button>
        <button
          className="mx-4 my-4"
          onClick={() => addField("checkbox", "Languages Known")}
        >
          Add CheckBox Field
        </button>
        <button
          className="mx-4 my-4"
          onClick={() => addField("radio", "Gender")}
        >
          Add Radio Field
        </button>
        <button
          className="mx-4 my-4"
          onClick={() => addField("dropdown", "Qualification")}
        >
          Add Dropdown Field
        </button>
        <button className="mx-4 my-4" onClick={loadConfig}>
          Load Configuration
        </button>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} className="row">
          {renderFields()}
          <button className="col-md-4 offset-md-4" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormGenerator;
