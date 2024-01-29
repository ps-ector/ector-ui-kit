const BaseInput = ({ ...props }) => {
  return <input type="text" className="ec-input" {...props} />;
};

const LabelledInput = ({ label, ...props }: { label?: string }) => {
  return (
    <label className="ec-label">
      <span className="ec-label-text">{label}</span>
      <BaseInput {...props} />
    </label>
  );
};

export const Input = ({ label, ...props }: { label?: string }) => {
  return (
    <div className="ec-w-full">
      {label ? (
        <LabelledInput label={label} {...props} />
      ) : (
        <BaseInput {...props} />
      )}
    </div>
  );
};
