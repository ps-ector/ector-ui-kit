import { useState } from "react";
type Options = {
  steps: string;
  content: any;
};

export const Steps = ({ options, ...props }: { options: Options[] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div
        className="ec-flex ec-flex-col ec-gap-10 ec-justify-center"
        {...props}
      >
        <div className="ec-flex ec-items-center ec-justify-between">
          {options?.map((opt, i: number) => (
            <>
              <div
                key={i}
                className={`ec-step-item ${
                  currentStep === i + 1 && "ec-active"
                } ${(i + 1 < currentStep || complete) && "ec-complete"} `}
              >
                <div className="ec-step">
                  {i + 1 < currentStep || complete ? "✓" : i + 1}
                </div>
                <p className="ec-text-gray-500">{opt.steps}</p>
              </div>
            </>
          ))}
        </div>
        <div className="ec-flex ec-justify-center">
          <div>
            <p className="ec-text-text">{options[currentStep].content}</p>
          </div>
        </div>
        {!complete ? (
          <div className="ec-flex ec-justify-between">
            <button
              className="ec-btn"
              onClick={() => {
                currentStep === options.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev - 1);
              }}
            >
              {currentStep === options.length ? "Finish" : "Back"}
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
          <div className="ec-flex ec-justify-center">
            <p className="ec-text-base ec-leading-5 ec-text-gray-300 ec-mr-4">
              All finished!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

// type Options = {
//   step: string;
//   order?: number;
//   label: string;
// };
// // &#10003;

// export const Steps = ({ options, ...props }: { options: Options[] }) => {
//   // const FinalStep = ({ opt }: any) => {
//   //   return (
//   //     <>
//   //       <li style={{}} className="ec-w-16 ec-flex ec-flex-col ec-items-center ">
//   //         <div className="ec-flex">
//   //           <div className="ec-bg-primary ec-rounded-full ec-w-8 ec-h-8 ec-text-tertiary ec-flex ec-justify-center ec-items-center ec-font-black">
//   //             {opt.step}
//   //           </div>
//   //         </div>
//   //       </li>
//   //     </>
//   //   );
//   // };
//   const last = options[options.length - 1];

//   return (
//     <>
//       <ul className="ec-list-none ec-flex ec-items-center ec-px-4" {...props}>
//         {options.map((opt) => (
//           <>
//             {last ? (
//               <>
//                 <li
//                   style={{}}
//                   className="ec-w-16 ec-flex ec-flex-col ec-items-center "
//                 >
//                   <div className="ec-flex">
//                     <div className="ec-bg-primary ec-rounded-full ec-w-8 ec-h-8 ec-text-tertiary ec-flex ec-justify-center ec-items-center ec-font-black">
//                       {opt.step}
//                     </div>
//                   </div>
//                 </li>
//                 <li
//                   style={{ order: `${opt.order} ` + 1 }}
//                   className="ec-w-full"
//                 >
//                   <div className="ec-h-0.5 ec-bg-primary ec-w-full "></div>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li
//                   style={{}}
//                   className="ec-w-16 ec-flex ec-flex-col ec-items-center "
//                 >
//                   <div className="ec-flex">
//                     <div className="ec-bg-primary ec-rounded-full ec-w-8 ec-h-8 ec-text-tertiary ec-flex ec-justify-center ec-items-center ec-font-black">
//                       {opt.step}
//                     </div>
//                   </div>
//                 </li>
//                 {/* <li
//                   style={{ order: `${opt.order} ` + 1 }}
//                   className="ec-w-full"
//                 >
//                   <div className="ec-h-0.5 ec-bg-primary ec-w-full "></div>
//                 </li> */}
//               </>
//             )}
//           </>
//         ))}
//         {/* <li className="ec-w-16 ec-flex ec-flex-col ec-items-center ">
//           <div className="ec-flex">
//             <div className="ec-bg-primary ec-rounded-full ec-w-8 ec-h-8 ec-text-tertiary ec-flex ec-justify-center ec-items-center ec-font-black">
//               &#10003;
//             </div>
//           </div>
//         </li>
//         <li className="ec-w-full">
//           <div className="ec-h-0.5 ec-bg-primary ec-w-full "></div>
//         </li>
//         <li className="ec-w-16 ec-flex ec-flex-col ec-items-center ">
//           <div className="ec-flex">
//             <div className="ec-bg-transparent ec-border-2 ec-border-primary ec-rounded-full ec-w-8 ec-h-8 ec-text-primary ec-flex ec-justify-center ec-items-center ec-font-black">
//               2
//             </div>
//           </div>
//         </li>
//         <li className="ec-w-full">
//           <div className="ec-h-0.5 ec-bg-text ec-w-full "></div>
//         </li>
//         <li className="ec-w-16 ec-flex ec-flex-col ec-items-center ">
//           <div className="ec-flex">
//             <div className="ec-bg-transparent ec-border-2 ec-border-text ec-rounded-full ec-w-8 ec-h-8 ec-text-text ec-flex ec-justify-center ec-items-center ec-font-black">
//               3
//             </div>
//           </div>
//         </li>
//         <li className="ec-w-full">
//           <div className="ec-h-0.5 ec-bg-text ec-w-full "></div>
//         </li>
//         <li className="ec-w-16 ec-flex ec-flex-col ec-items-center ">
//           <div className="ec-flex">
//             <div className="ec-bg-transparent ec-border-2 ec-border-text ec-rounded-full ec-w-8 ec-h-8 ec-text-text ec-flex ec-justify-center ec-items-center ec-font-black">
//               4
//             </div>
//           </div>
//         </li> */}
//       </ul>
//       <div className="ec-flex ec-w-full ec-justify-between">
//         {options.map((opt) => (
//           <p className="ec-text-primary ec-w-16 ec-text-center">{opt.label}</p>
//         ))}
//         {/* <p className="ec-text-primary ec-w-16 ec-text-center">Register</p>
//         <p className="ec-text-primary ec-w-16 ec-text-center">Choose plan</p>
//         <p className="ec-text-text ec-w-16 ec-text-center">Purchase</p>
//         <p className="ec-text-text ec-w-16 ec-text-center">Done!</p> */}
//       </div>
//     </>
//   );
// };

// const StepFirst = ({ property }: any) => {
//   return (
//     <>
//       <div className="ec-w-max ec-flex ec-items-center">
//         <div
//           className={` ec-rounded-full ec-px-4 ec-py-4 ec-w-8 ec-h-8 ec-flex ec-justify-center ec-items-center ec-font-black ${property}`}
//         ></div>
//       </div>
//     </>
//   );
// };

// const StepBasic = ({ property, index }: any) => {
//   return (
//     <div className="ec-flex ec-items-center ec-w-full ">
//       <div className="ec-w-max ec-flex ec-flex-col ec-items-center">
//         <div
//           className={` ec-rounded-full ec-px-4 ec-py-4 ec-w-8 ec-h-8 ec-flex ec-justify-center ec-items-center ec-font-black ${property}`}
//         ></div>
//         <p className="ec-text-primary ec-w-16 ec-text-center">Step {index}</p>
//       </div>
//       <div className={`ec-w-full ec-h-0.5 ec-bg-primary ec-h `}></div>
//     </div>
//   );
// };
// const StepLast = ({ property, index }: any) => {
//   return (
//     <>
//       <div className="ec-w-max ec-flex ec-items-center">
//         <div
//           className={` ec-rounded-full ec-px-4 ec-py-4 ec-w-8 ec-h-8 ec-flex ec-justify-center ec-items-center ec-font-black ${property}`}
//         ></div>
//         <p className="ec-text-primary ec-w-16 ec-text-center">Step {index}</p>
//       </div>
//     </>
//   );
// };

// export function Steps({ currentStep, numberOfSteps }: any) {
//   const activeColor = (index: any) =>
//     currentStep >= index
//       ? "ec-bg-primary ec-text-tertiary"
//       : "ec-bg-text ec-text-tertiary";
//   const isFinalStep = (index: any) => index === numberOfSteps - 1;

//   return (
//     <div className="ec-flex ec-w-full ec-items-center ec-flex-col">
//       <div className="ec-flex ec-w-full ec-items-center ec-justify-between ec-px-4">
//         {Array.from({ length: numberOfSteps }).map((_, index) => (
//           <div className="ec-flex ec-items-center ec-w-full ">
//             {index === 0 ? (
//               <StepFirst property={activeColor(index)}></StepFirst>
//             ) : (
//               <StepBasic property={activeColor(index)}></StepBasic>
//             )}
//             {isFinalStep(index) ? <StepLast></StepLast> : null}
//           </div>
//         ))}
//       </div>
//       {/* <div className="ec-flex ec-w-full ec-items-cente ec-justify-between">
//         {Array.from({ length: numberOfSteps }).map((_, index) => (
//           <p className="ec-text-primary ec-w-16 ec-text-center">Step {index}</p>
//         ))}
//       </div> */}
//     </div>
//   );
// }
