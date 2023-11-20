const BASE_CHECKBOX_CLASSES = "my-checkbox";

// eslint-disable-next-line react/prop-types
export const Checkbox = ({ label, ...props }: { label: string }) => {
  return (
    <label className="my-label">
      <span className="my-label-text">{label}</span>
      <input
        type="checkbox"
        className={`${BASE_CHECKBOX_CLASSES}`}
        {...props}
      />
    </label>
  );
};
