export const Title = ({ label }: { label: string }) => {
  return (
    <label className=" ec-w-max ec-flex ec-justify-between flex-col">
      <span className="ec-text-text ec-w-max ec-text-lg ec-font-bold ec-animate-typewriter ec-animate-text">
        {label}
      </span>
    </label>
  );
};
