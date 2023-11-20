import PropTypes from "prop-types";
import { useMemo } from "react";

const getSizeClasses = (size) => {
  switch (size) {
    case "small": {
      return "ec-px-5 ec-py-2";
    }
    case "large": {
      return "ec-px-10 ec-py-2";
    }
    case "medium": {
      return "ec-px-8 ec-py-2";
    }
    default: {
      return "ec-px-5 ec-py-2";
    }
  }
};

const getModeClasses = (isPrimary) =>
  isPrimary
    ? "ec-text-tertiary ec-bg-primary hover:ec-scale-105 ec-transition ec-duration-300 ec-ease-in-out"
    : "ec-text-text ec-border ec-bg-opacity-0 ec-border-solid ec-border-text hover:ec-scale-105 ec-transition ec-duration-300 ec-ease-in-out";

const BASE_BUTTON_CLASSES =
  "ec-cursor-pointer ec-rounded-full ec-leading-none ec-inline-block ec-font-medium ec-text-center ec-text-sm ec-whitespace-nowrap ec-tracking-normal ec-uppercase ec-self-stretch ec-h-11 ec-max-h-11 ec-justify-center ec-items-center ";

export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(" ");
  }, [primary, size]);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.string,
  label: PropTypes.string.isRequired,
};
