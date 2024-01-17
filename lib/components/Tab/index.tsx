import { useState } from "react";

type Options = {
  tab: string;
  id?: string;
  content: string;
};

export function Tabs({ options, ...props }: { options: Options[] }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="ec-flex ec-text-text ec-w-full ec-flex-col">
      <div className="ec-flex ec-border-b" {...props}>
        {options.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={` ec-text-start ec-py-2 ec-px-2 ec-border-b-2 ec-transition-colors ec-duration-300 ec-uppercase ec-text-text ec-pr-2 ec-w-full ec-font-light hover:ec-text-primary ${
                idx === activeTabIndex
                  ? "ec-border-primary ec-text-primary"
                  : "ec-border-text"
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.tab}
            </button>
          );
        })}
      </div>

      <div className="ec-m-1 ec-p-2.5 ec-outline-none ec-text-text">
        <p>{options[activeTabIndex].content}</p>
      </div>
    </div>
  );
}
