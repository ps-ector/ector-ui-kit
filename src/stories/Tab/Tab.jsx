// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const Tab = ({ label }) => {
  return (
    <>
    <label className="label cursor-pointer flex flex-col gap-4">
      <span className="label-text">{label}</span>
      </label>
      <div className="tabs">
      <a className="tab tab-bordered hover:text-[color:var(--main-color,#47D7AC)]">SECTION 1</a> 
      <a className="tab tab-bordered tab-active">SECTION 2</a> 
      <a className="tab tab-bordered hover:text-[color:var(--main-color,#47D7AC)]">SECTION 3</a>
</div>
      </>  
  );
};
