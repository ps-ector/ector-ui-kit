// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "../Button/Button";

const getModeClasses = (mode) => {
  switch (mode) {
    case "default": {
      return (
        <input
          type="text"
          placeholder="Placeholder"
          className={`${BASE_INPUT_CLASSES}`}
        />
      );
    }
    case "buttonInside": {
      return (
        <div
          className={`flex flex-row input justify-between pr-0.5 pl-3 text-text border-text rounded-3xl bg-transparent hover:outline-0 hover:bg-primary/20 input-sm w-full max-w-xs focus:border-primary focus:outline-0 py-0.5`}
        >
          <input
            type="text"
            placeholder="Placeholder"
            className={`bg-transparent`}
          />
          <Button
            className="cursor-pointer leading-none rounded-3xl inline-block font-medium text-center text-xs whitespace-nowrap tracking-normal uppercase self-stretch justify-center items-center text-tertiary bg-primary hover:-translate-x-2 transition duration-300 ease-in-out px-2"
            primary
            label={"Button"}
          ></Button>
        </div>
      );
    }
    case "disabled": {
      return (
        <input
          type="text"
          placeholder="Placeholder"
          className={`${BASE_INPUT_CLASSES}`}
          disabled
        />
      );
    }
    case "error": {
      return (
        <div className="flex flex-row gap-2 justify-center items-center">
          <input
            type="text"
            placeholder="Error"
            className={`${ERROR_INPUT_CLASSES}`}
          />
          <img src="src/assets/error.svg" alt="" />
          <p className="text-red-600 text-xs">Error</p>
        </div>
      );
    }
    case "tooltip": {
      return (
        <div className="flex flex-row gap-2 justify-center items-center">
          <input
            type="text"
            placeholder="Placeholder"
            className={`${BASE_INPUT_CLASSES}`}
          />
        <div className="tooltip before:bg-tertiary-700 py-2 before:px-5" data-tip="Tooltip content here">
        <img src="src/assets/info.svg" alt="" />
        </div>
        </div>
        
      );
    }
    default: {
      return (
        <input
          type="text"
          placeholder="Placeholder"
          className={`${BASE_INPUT_CLASSES}`}
        />
      );
    }
  }
};

const ERROR_INPUT_CLASSES =
  "input text-red-200 input-error input-bordered border-red-600 rounded-3xl bg-transparent hover:outline-0 hover:bg-red-400/20 input-sm w-full max-w-xs focus:border-red-600 focus:outline-0";
const BASE_INPUT_CLASSES =
  "input text-text input-bordered border-text rounded-3xl bg-transparent hover:outline-0 hover:bg-primary/20 input-sm w-full max-w-xs focus:border-primary focus:outline-0";

// eslint-disable-next-line react/prop-types
export const Input = ({ label, mode }) => {
  const modeClass = getModeClasses(mode);

  return (
    <label className="my-label">
      <span className="my-label-text">{label}</span>

      {modeClass}
    </label>
  );
};
