// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const Breadcrumbs = ({label}) => {
   
  return (
    <label className="label cursor-pointer flex flex-col gap-4">
    <span className="label-text">{label}</span> 
    <div className="text-sm breadcrumbs">
  <ul>
    <li>
      <a>
       <img src="src/assets/home.svg" alt="" />
        Home
      </a>
    </li> 
    <li>
      <a>        
        Detail
      </a>
    </li> 
    <li>      
      Pricing
    </li>
  </ul>
</div>
</label>
  );
}

