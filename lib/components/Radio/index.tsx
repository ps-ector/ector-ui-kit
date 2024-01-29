const BASE_RADIO_CLASSES = "ec-radio";

const BaseRadio = ({ ...props }) => {
  return (
    <input
      type="radio"
      name="radio-2"
      className={`${BASE_RADIO_CLASSES}`}
      {...props}
    />
  );
};

const LabelRadio = ({ label, ...props }: { label?: string }) => {
  return (
    <label className="ec-label">
      <span className="ec-label-text ">{label}</span>
      <BaseRadio {...props} />
    </label>
  );
};

export const Radio = ({ label, ...props }: { label?: string }) => {
  return (
    <div className="">
      {label ? (
        <LabelRadio label={label} {...props} />
      ) : (
        <BaseRadio {...props} />
      )}
    </div>
  );
};
