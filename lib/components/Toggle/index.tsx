const BASE_TOGGLE_CLASSES = "my-toggle";

// eslint-disable-next-line react/prop-types
export const Toggle = ({ label, ...props }: { label: string }) => {
  return (
    <label className="my-label">
      <span className="my-label-text">{label}</span>
      <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} {...props} />
    </label>
  );
};
