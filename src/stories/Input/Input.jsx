import { Button } from "../Button/Button";
import { Error } from "../../assets/error";
import { Info } from "../../assets/info";

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
          className={`flex flex-row justify-between pr-0.5 pl-3 text-text border-text rounded-3xl bg-transparent hover:outline-0 hover:bg-primary/20 my-input w-full max-w-xs focus:border-primary focus:outline-0 py-0.5`}
        >
          <input
            type="text"
            placeholder="Placeholder"
            className={`bg-transparent appearance-none focus:outline-0`}
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
          <Error />
          <p className="text-red-400 text-xs">Error</p>
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
          <div className="my-tooltip" data-tip="Tooltip content here">
            <Info />
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
  "my-input text-red-200 border-red-600 hover:bg-red-400/20 focus:border-red-600";
const BASE_INPUT_CLASSES = "my-input";

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
