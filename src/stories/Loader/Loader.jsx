/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export const Loader = () => {
  return (
    <label className="label cursor-pointer flex gap-4">
        <div className="flex flex-col items-center gap-12 bg-[color:var(--grey1,#49474F)] rounded-2xl px-16 py-12 ">
        <div className="loading loading-spinner loading-lg text-success"></div>
        <progress className="progress h-1 w-56 bg-slate-300 progress-success"></progress>
      </div> 
    </label>
  );
};
