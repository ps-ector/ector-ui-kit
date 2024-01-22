import { useState } from "react";
type Options = {
  name: string;
  href: string;
  content: any;
};

export const Steps = ({
  options,
  redirect,
  ...props
}: {
  redirect: string;
  options: Options[];
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div
        className="ec-flex ec-flex-col ec-gap-10 ec-justify-center"
        {...props}
      >
        <nav className="ec-flex">
          {options?.map((opt, i: number) => (
            <>
              <ol
                key={i}
                role="list"
                className="ec-space-y-4 md:ec-flex md:ec-space-x-8 md:ec-space-y-0 ec-w-full"
              >
                <li key={opt.name} className="md:ec-flex-1 ec-block ec-w-full">
                  <button
                    onClick={() => {
                      setComplete(false);
                      setCurrentStep(i + 1);
                    }}
                    className={`ec-group ec-w-full ec-flex ec-flex-col ec-py-2 ec-pl-4 hover:ec-border-primary md:ec-border-l-0 md:ec-border-t-4 ec-border-l-4 md:ec-pb-0 md:ec-pl-0 md:ec-pt-4 ${
                      i + 1 <= currentStep
                        ? " ec-border-primary"
                        : " ec-border-text"
                    } `}
                  >
                    <span
                      className={`ec-uppercase ec-text-sm ec-font-medium group-hover:ec-text-primary ${
                        i + 1 <= currentStep
                          ? "ec-text-primary"
                          : "ec-text-text"
                      }`}
                    >
                      Step {i + 1}
                    </span>
                    <span className={`ec-text-sm ec-font-medium ec-text-text `}>
                      {opt.name}
                    </span>
                  </button>
                </li>
              </ol>
            </>
          ))}
        </nav>
        <div className="">
          <div>
            {!complete ? (
              <p className="ec-text-text">{options[currentStep - 1].content}</p>
            ) : (
              " "
            )}
          </div>
        </div>
        {!complete ? (
          <div className="ec-flex ec-justify-between">
            <button
              className="ec-btn"
              onClick={() => {
                currentStep === options.length &&
                currentStep === options.length - 1
                  ? setComplete(false)
                  : setCurrentStep((prev) => prev - 1);
              }}
            >
              {currentStep === options.length ? "Back" : "Back"}
            </button>
            <button
              className="ec-btn"
              onClick={() => {
                currentStep === options.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === options.length ? "Finish" : "Next"}
            </button>
          </div>
        ) : (
          <div className="">
            <a
              href={redirect}
              className="ec-text-base ec-leading-5 ec-text-text ec-mr-4 ec-uppercase ec-font-semibold"
            >
              All finished!
            </a>
          </div>
        )}
      </div>
    </>
  );
};
