const BASE_TOGGLE_CLASSES = "ec-toggle";
const BaseToggle = ({ ...props }) => {
  return (
    <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} {...props} />
  );
};

const LabelToggle = ({ label, ...props }: { label?: string }) => {
  return (
    <label className="ec-label">
      <span className="ec-label-text">{label}</span>
      <BaseToggle {...props} />
    </label>
  );
};

// eslint-disable-next-line react/prop-types
export const Toggle = ({ label, ...props }: { label?: string }) => {
  return (
    <div className="">
      {label ? (
        <LabelToggle label={label} {...props} />
      ) : (
        <BaseToggle {...props} />
      )}
    </div>
  );
};
