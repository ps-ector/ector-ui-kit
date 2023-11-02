/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const BASE_OPTION_CLASSES='hover:bg-emerald-400/20 focus:bg-emerald-400/20 checked:bg-emerald-400/20 appearance-none';

const BASE_SELECT_CLASSES= 'select appearance-none  accent-red-300 hover:accet-red-400 select-bordered hover:outline-0 active:outline-0 focus:outline-0 select-sm w-full max-w-xs text-slate-200 border-slate-200 rounded-3xl bg-[color:var(--tertiary,#302F34)]';

export const Select = ({ label, option }) => {
  

  return (
    <label className="label cursor-pointer flex gap-4">
      <span className="label-text">{label}</span>
      <select className={`${BASE_SELECT_CLASSES}`}>
      {option.map(opt =>
      <option  className={`${BASE_OPTION_CLASSES}`} key={opt} value={opt}>{opt}</option>
    )};
    </select>
    </label>
  );
};
