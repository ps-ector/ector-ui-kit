// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const Tab = ({ label }) => {
  return (
    <>
    <label className="my-label flex-col">
      <span className="my-label-text">{label}</span>
      </label>
      <div className="my-tabs">
      <a className="my-tab my-tab-bordered hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out delay-150 duration-300">SECTION 1</a> 
      <a className="my-tab my-tab-bordered my-tab-active transition ease-in-out delay-150 duration-300">SECTION 2</a> 
      <a className="my-tab my-tab-bordered hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out delay-150 duration-300">SECTION 3</a>
</div>
      </>  
  );
};
