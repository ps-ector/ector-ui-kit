// eslint-disable-next-line no-unused-vars
import React from "react";

const BASE_BORDER_CLASSES =
  "border-primary border-solid fade-in border-8 rounded-full px-6 py-6 w-36 bg-transparent h-36 flex justify-center items-center";
const BASE_COUNTER_CLASSES =
  "flex tabular-nums text-text text-5xl font-extrabold mb-2 animation-counter [counter-set:_num_var(--num)] before:content-[counter(num)]";

// eslint-disable-next-line react/prop-types
export const Counter = ({ label }) => {
  return (
    <label className="my-label flex-col">
      <span className="my-label-text text-lg font-bold">{label}</span>
      <div className="flex gap-7">
        <div className="flex flex-col items-center gap-6">
          <div className={`${BASE_BORDER_CLASSES}`}>
            <span className={`${BASE_COUNTER_CLASSES}`}>
              <span className="sr-only">100</span>
            </span>
          </div>
          <div className="text-text text-2xl fade-in">Performance.</div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className={`${BASE_BORDER_CLASSES}` + " animation-delay-fade-2"}>
            <span className={`${BASE_COUNTER_CLASSES}` + " animation-delay-2"}>
              <span className="sr-only">100</span>
            </span>
          </div>
          <div className="text-text text-2xl fade-in animation-delay-fade-2">
            Accessibility.
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className={`${BASE_BORDER_CLASSES}` + " animation-delay-fade-4"}>
            <span className={`${BASE_COUNTER_CLASSES}` + " animation-delay-4"}>
              <span className="sr-only">100</span>
            </span>
          </div>
          <div className="text-text text-2xl fade-in animation-delay-fade-4">
            SEO.
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className={`${BASE_BORDER_CLASSES}` + " animation-delay-fade-6"}>
            <span className={`${BASE_COUNTER_CLASSES}` + " animation-delay-6"}>
              <span className="sr-only">100</span>
            </span>
          </div>
          <div className="text-text text-2xl fade-in animation-delay-fade-6">
            Best practices.
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="progress blue">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">
              <svg
                width="50"
                height="90"
                viewBox="0 0 99 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M95.9795 88.0349C99.4377 85.285 100.012 80.2523 97.262 76.7941C94.5121 73.3359 89.4794 72.7617 86.0212 75.5116C82.563 78.2615 81.9888 83.2942 84.7387 86.7524C87.4886 90.2106 92.5213 90.7848 95.9795 88.0349ZM-0.000320482 0.773217L5.44611 17.2151L16.962 4.27742L-0.000320482 0.773217ZM91.9977 80.6528L11.0809 8.62853L9.08632 10.8694L90.0031 82.8937L91.9977 80.6528Z"
                  fill="#47D7AC"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
};
