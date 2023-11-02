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

const BASE_RADIO_CLASSES =
  "radio border-[color:var(--secondary,#D8E9E8)] checked:bg-emerald-400";

// eslint-disable-next-line react/prop-types
export const Radio = ({ label, mode }) => {
  const modeClass = getModeClasses(mode);
  return (
    <>
      <label className="label gap-4">
        <span className="label-text">{label}</span>
        {modeClass}
      </label>      
    </>
  );
};
