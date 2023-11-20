import { Button } from "../Button";
import { Error } from "../../assets/error";
import { Info } from "../../assets/info";

const ERROR_INPUT_CLASSES =
  "my-input text-red-200 border-red-600 hover:bg-red-400/20 focus:border-red-600";
const BASE_INPUT_CLASSES = "my-input";

const BaseInput = ({ label, ...props }: { label?: string }) => {
  return (
    <label className="my-label">
      <span className="my-label-text">{label}</span>
      <input type="text" className={`${BASE_INPUT_CLASSES}`} {...props} />
    </label>
  );
};

const InputButtonInside = ({
  label,
  buttonProps,
  ...props
}: {
  label?: string;
  buttonProps: any;
}) => {
  return (
    <div
      className={`flex flex-row justify-between pr-0.5 pl-3 text-text border-text rounded-3xl bg-transparent hover:outline-0 hover:bg-primary/20 my-input w-full max-w-xs focus:border-primary focus:outline-0 py-0.5`}
    >
      <BaseInput label={label} {...props} />
      <Button
        className="cursor-pointer leading-none rounded-3xl inline-block font-medium text-center text-xs whitespace-nowrap tracking-normal uppercase self-stretch justify-center items-center text-tertiary bg-primary hover:-translate-x-2 transition duration-300 ease-in-out px-2"
        primary
        {...buttonProps}
      ></Button>
    </div>
  );
};

const ErrorBaseInput = ({
  label,
  errorMessage,
  ...props
}: {
  label?: string;
  errorMessage?: string;
}) => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <BaseInput label={label} {...props} />
      <span className={`${ERROR_INPUT_CLASSES}`}>
        <Error />
      </span>
      <p className="text-red-400 text-xs">{errorMessage}</p>
    </div>
  );
};

const TooltipBaseInput = ({
  label,
  tooltipMessage,
  ...props
}: {
  label?: string;
  tooltipMessage?: string;
}) => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <BaseInput label={label} {...props} />
      <div className="my-tooltip" data-tip={tooltipMessage}>
        <Info />
      </div>
    </div>
  );
};

type InputMode = "default" | "buttonInside" | "error" | "tooltip";

const getComponentByMode = (mode: InputMode, props: any) => {
  switch (mode) {
    case "default": {
      return <BaseInput {...props} />;
    }
    case "buttonInside": {
      return <InputButtonInside {...props} />;
    }
    case "error": {
      return <ErrorBaseInput {...props} />;
    }
    case "tooltip": {
      return <TooltipBaseInput {...props} />;
    }
    default: {
      return <BaseInput {...props} />;
    }
  }
};

// eslint-disable-next-line react/prop-types
export const Input = ({
  mode,
  label,
  ...props
}: {
  mode: InputMode;
  label: string;
}) => {
  return (
    <label className="my-label">
      <span className="my-label-text">{label}</span>
      {getComponentByMode(mode, props)}
    </label>
  );
};
