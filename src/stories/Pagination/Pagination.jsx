// eslint-disable-next-line no-unused-vars
import React from "react";

const BASE_PAGINATION_CLASSES =
'relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-400 hover:text-zinc-800 '

const BASE_NAV_CLASSES =
'relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-slate-200 transition-all duration-300 hover:text-emerald-400 '

const BASE_PAGINATION_SELECTED_CLASSES = ' relative block rounded-full px-3 py-1.5 text-sm bg-emerald-400 text-zinc-800 '

// eslint-disable-next-line react/prop-types
export const Pagination = ({ label }) => {
  return (
    <>
    <label className="label cursor-pointer flex flex-col gap-4">
      <span className="label-text">{label}</span>
      </label>
      <nav >
        <ul className="list-style-none flex gap-3">
          <li>
            <a className={`${BASE_NAV_CLASSES}`}>
            &#10094;
            </a>
          </li>
          <li>
            <a
              className={`${BASE_PAGINATION_CLASSES}`}
              href=""
            >
              1
            </a>
          </li>
          <li>
            <a
              className={`${BASE_PAGINATION_SELECTED_CLASSES}`}
              href="" 
            >
              2           
            </a>
          </li>
          <li>
            <a
              className={`${BASE_PAGINATION_CLASSES}`}
              href=""
            >
              3
            </a>
          </li>
          <li>
            <a
              className={`${BASE_NAV_CLASSES}`}
              href=""
            >
              &#10095;
            </a>
          </li>
        </ul>
      </nav> 
      </>  
  );
};
