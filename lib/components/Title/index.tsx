export const Title = ({ label }: { label: string }) => {
  return (
    <label className="my-label flex-col">
      <span className="my-label-text text-lg font-bold animate-typewriter animate-text">
        {label}
      </span>
    </label>
  );
};
