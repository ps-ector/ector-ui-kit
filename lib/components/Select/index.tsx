const BASE_OPTION_CLASSES =
  "hover:ec-bg-primary-900 focus:ec-bg-primary-900 checked:ec-bg-primary-900 ec-appearance-none";

const BASE_SELECT_CLASSES = "ec-select";

const BaseSelect = ({ option, ...props }: { option: string[] }) => {
  return (
    <select className={`${BASE_SELECT_CLASSES}`} {...props}>
      {option.map((opt) => (
        <option className={`${BASE_OPTION_CLASSES}`} key={opt} value={opt}>
          {opt}
        </option>
      ))}
      ;
    </select>
  );
};

const LabelSelect = ({
  label,
  option,
  ...props
}: {
  label?: string;
  option: string[];
}) => {
  return (
    <label className="ec-label">
      <span className="ec-label-text">{label}</span>
      <BaseSelect option={[...option]} {...props} />
    </label>
  );
};

export const Select = ({
  label,
  option,
  ...props
}: {
  label: string;
  option: string[];
}) => {
  return (
    <div className="">
      {label ? (
        <LabelSelect option={[...option]} label={label} {...props} />
      ) : (
        <BaseSelect option={[...option]} {...props} />
      )}
    </div>
  );
};
