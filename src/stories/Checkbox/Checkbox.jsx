// eslint-disable-next-line no-unused-vars
import React from "react";

const getModeClasses = (mode) => {
  switch (mode) {
    case "default": {
      return <input type="checkbox" className={`${BASE_CHECKBOX_CLASSES}`} />;
    }
    case "checked": {
      return (
        <input type="checkbox" className={`${BASE_CHECKBOX_CLASSES}`} checked />
      );
    }
    case "disabled": {
      return (
        <input
          type="checkbox"
          className={`${BASE_CHECKBOX_CLASSES}`}
          disabled
          checked
        />
      );
    }
    default: {
      return <input type="checkbox" className={`${BASE_CHECKBOX_CLASSES}`} />;
    }
  }
};

const BASE_CHECKBOX_CLASSES = "my-checkbox ";

// eslint-disable-next-line react/prop-types
export const Checkbox = ({ label, mode }) => {
  const modeClass = getModeClasses(mode);

  return (
    <label className="my-label">
      <span className="my-label-text">{label}</span>
      {modeClass}
    </label>
  );
};
