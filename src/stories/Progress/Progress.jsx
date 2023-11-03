// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const Progress = ({label}) => {
   
  return (
    <label className="label cursor-pointer flex flex-col gap-4">
    <span className="label-text">{label}</span> 
  <ul className="steps steps-vertical lg:steps-horizontal">
  <li className="my-step-done">Register</li>
  <li className="my-step-done">Choose plan</li>
  <li className="my-step">Purchase</li>
  <li className="my-step">Done!</li>
</ul>
  </label>
  );
}

