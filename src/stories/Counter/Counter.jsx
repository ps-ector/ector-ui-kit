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
      </div>
    </label>
  );
};
