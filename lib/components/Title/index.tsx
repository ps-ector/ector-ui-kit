export const Title = ({ label }: { label: string }) => {
  return (
    <label className="ec-w-max">
      <span className="ec-text-text ec-text-lg ec-font-bold ec-animate-typewriter ec-animate-text ec-block">
        {label}
      </span>
    </label>
  );
};
