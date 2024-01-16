const BASE_CHECKBOX_CLASSES = "ec-checkbox";
const BaseCheckbox = ({ ...props }) => {
  return (
    <input type="checkbox" className={`${BASE_CHECKBOX_CLASSES}`} {...props} />
  );
};

const LabelCheckbox = ({ label, ...props }: { label?: string }) => {
  return (
    <label className="ec-label">
      <span className="ec-label-text">{label}</span>
      <BaseCheckbox {...props} />
    </label>
  );
};

// eslint-disable-next-line react/prop-types
export const Checkbox = ({ label, ...props }: { label?: string }) => {
  return (
    <div className="">
      {label ? (
        <LabelCheckbox label={label} {...props} />
      ) : (
        <BaseCheckbox {...props} />
      )}
    </div>
  );
};
