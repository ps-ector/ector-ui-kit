const LinearLoader = ({ className, ...props }: any) => {
  const PROGRESS_CLASS =
    "ec-progress ec-relative ec-w-full ec-appearance-none ec-overflow-hidden ec-h-1 ec-bg-text ec-rounded-lg";
  return (
    <div
      className={
        "ec-flex ec-items-center ec-gap-12 ec-px-16 ec-py-12" +
        " " +
        `${className}`
      }
    >
      <progress className={`${PROGRESS_CLASS}`} {...props}></progress>
    </div>
  );
};

const RoundLoader = ({ className, ...props }: any) => {
  const LOADER_CLASS =
    "ec-loading ec-aspect-square ec-pointer-events-none ec-inline-block ec-w-8 ec-bg-primary ec-text-primary";
  return (
    <div
      className={
        "ec-flex ec-items-center ec-justify-center ec-gap-12 ec-px-16 ec-py-12" +
        " " +
        `${className}`
      }
    >
      <div className={`${LOADER_CLASS}`} {...props}></div>
    </div>
  );
};

export const Loader = ({ mode, ...props }: { mode: string }) => {
  {
    switch (mode) {
      case "round": {
        return <RoundLoader mode={mode} {...props}></RoundLoader>;
      }
      case "linear": {
        return <LinearLoader mode={mode} {...props}></LinearLoader>;
      }

      default: {
        return <RoundLoader mode={mode} {...props}></RoundLoader>;
      }
    }
  }
};
