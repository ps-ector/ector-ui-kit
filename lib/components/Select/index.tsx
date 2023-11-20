const BASE_OPTION_CLASSES =
  "hover:bg-primary-900 focus:bg-primary-900 checked:bg-primary-900 appearance-none";

const BASE_SELECT_CLASSES = "my-select";

export const Select = ({
  label,
  option,
}: {
  label: string;
  option: string[];
}) => {
  return (
    <label className="my-label">
      <span className="my-label-text">{label}</span>
      <select className={`${BASE_SELECT_CLASSES}`}>
        {option.map((opt) => (
          <option className={`${BASE_OPTION_CLASSES}`} key={opt} value={opt}>
            {opt}
          </option>
        ))}
        ;
      </select>
    </label>
  );
};
