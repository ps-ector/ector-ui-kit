/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export const Loader = () => {
  return (
    <label className="my-label">
      <div className="flex flex-col items-center gap-12 bg-tertiary-600 rounded-2xl px-16 py-12 ">
        <div className="my-loading"></div>
        <progress className="my-progress"></progress>
      </div>
    </label>
  );
};
