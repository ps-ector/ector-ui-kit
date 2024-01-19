const BASE_BORDER_CLASSES =
  "ec-border-primary ec-border-solid ec-fade-in ec-border-8 ec-rounded-full ec-px-6 ec-py-6 ec-w-36 ec-bg-transparent ec-h-36 ec-flex ec-justify-center ec-items-center";
const BASE_COUNTER_CLASSES =
  "ec-flex ec-flex-col ec-justify-center ec-items-center ec-tabular-nums ec-text-text ec-text-5xl ec-font-extrabold ec-mb-2 ec-animation-counter [counter-set:_num_var(--num)] before:ec-content-[counter(num)]";

export const Counter = ({
  label,
  description,
}: {
  label?: string;
  description?: string;
}) => {
  return (
    <div className="ec-counter-reset">
      <div className="ec-flex ec-gap-7">
        <div className="ec-flex ec-flex-col ec-items-center ec-gap-6">
          <div className={`${BASE_BORDER_CLASSES}`}>
            <div className={`${BASE_COUNTER_CLASSES}`}>
              <p className="ec-sr-only">100</p>
              <p className="ec-text-center ec-text-lg ec-font-bold">{label}</p>
            </div>
          </div>
          <div className="ec-text-text ec-text-2xl ec-fade-in">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
