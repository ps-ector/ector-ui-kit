// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const Progress = ({label}) => {
   
  return (
    <label className="my-label flex-col">
    <span className="my-label-text">{label}</span> 
  <ul className="my-steps">
  <li className="my-step-done">Register</li>
  <li className="my-step-done">Choose plan</li>
  <li className="my-step">Purchase</li>
  <li className="my-step">Done!</li>
</ul>
  </label>
  );
}

