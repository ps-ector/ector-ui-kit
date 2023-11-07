// eslint-disable-next-line no-unused-vars
import React from "react";

const getModeClasses = (mode) => {
  switch (mode) {
    case "default": {
      return (
        <input
          type="radio"
          name="radio-2"
          className={`${BASE_RADIO_CLASSES}`}
        />
      );
    }
    case "checked": {
      return (
        <input
          type="radio"
          name="radio-2"
          className={`${BASE_RADIO_CLASSES}`}
          checked
        />
      );
    }
    case "disabled": {
      return (
        <input
          type="radio"
          name="radio-2"
          className={`${BASE_RADIO_CLASSES}`}
          disabled          
        />
      );
    }
    default: {
      return (
        <input
          type="radio"
          name="radio-2"
          className={`${BASE_RADIO_CLASSES}`}
        />
      );
    }
  }
};

const BASE_RADIO_CLASSES = "my-radio";

// eslint-disable-next-line react/prop-types
export const Radio = ({ label, mode }) => {
  const modeClass = getModeClasses(mode);
  return (
    <>
      <label className="my-label gap-4">
        <span className="my-label-text">{label}</span>        
        {modeClass}
      </label>      
    </>
  );
};
