const BASE_RADIO_CLASSES = "my-radio";

export const Radio = ({ label, ...props }: { label: string }) => {
  return (
    <>
      <label className="my-label gap-4">
        <span className="my-label-text">{label}</span>
        <input
          type="radio"
          name="radio-2"
          className={`${BASE_RADIO_CLASSES}`}
          {...props}
        />
      </label>
    </>
  );
};
