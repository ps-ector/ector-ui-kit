// eslint-disable-next-line no-unused-vars
import React from "react";

const getModeClasses = (mode) => {
  switch (mode) {
    case 'default': {
      return <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} />;
    }
    case 'checked': {
      return <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} checked/>;
    }
    case 'disabled':{
      return <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} disabled/>;
    }
    default: {
      return <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} />;
    }
  }
};

const BASE_TOGGLE_CLASSES = "toggle border-[color:var(--secondary,#D8E9E8)] bg-[color:var(--secondary,#D8E9E8)] checked:bg-emerald-400";

// eslint-disable-next-line react/prop-types
export const Toggle = ({label, mode}) => {
  const modeClass = getModeClasses(mode);
 
  return (
    <label className="label cursor-pointer flex gap-4">
    <span className="label-text">{label}</span> 
    {modeClass}
  </label>
  );
}

