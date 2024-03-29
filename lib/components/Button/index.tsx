import { useMemo } from "react";

type SizeType = "small" | "medium" | "large" | "full";
type Button = {
  primary?: boolean;
  size?: SizeType;
  children?: React.ReactNode;
};

const getSizeClasses = (size: SizeType): string => {
  switch (size) {
    case "small": {
      return " ec-w-28 ec-px-5 ec-py-2";
    }
    case "large": {
      return "ec-w-44 ec-px-10 ec-py-2";
    }
    case "medium": {
      return "ec-w-40 ec-px-8 ec-py-2";
    }
    case "full": {
      return "ec-w-full ec-px-5 ec-py-2";
    }
    default: {
      return "ec-w-full ec-px-5 ec-py-2";
    }
  }
};

const getModeClasses = (isPrimary: boolean): string =>
  isPrimary
    ? "ec-text-tertiary ec-bg-primary hover:ec-bg-opacity-0 hover:ec-border hover:ec-border-solid hover:ec-border-primary hover:ec-text-primary ec-transition ec-duration-300 ec-ease-in-out"
    : "ec-text-text ec-border ec-bg-opacity-0 ec-border-solid ec-border-text hover:ec-scale-105 ec-transition ec-duration-300 ec-ease-in-out";

const BASE_BUTTON_CLASSES =
  "ec-cursor-pointer ec-rounded-full ec-leading-none ec-inline-block ec-font-medium ec-text-center ec-text-sm ec-whitespace-nowrap ec-tracking-normal ec-uppercase ec-self-stretch  ec-justify-center ec-items-center ";

export const Button = ({
  primary = false,
  size = "medium",
  children,
  ...props
}: Button) => {
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
      {children}
    </button>
  );
};
