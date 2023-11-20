const getModeClasses = (mode) => {
  switch (mode) {
    case "default": {
      return <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} />;
    }
    case "checked": {
      return (
        <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} checked />
      );
    }
    case "disabled": {
      return (
        <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} disabled />
      );
    }
    default: {
      return <input type="checkbox" className={`${BASE_TOGGLE_CLASSES}`} />;
    }
  }
};

const BASE_TOGGLE_CLASSES = "my-toggle";

// eslint-disable-next-line react/prop-types
export const Toggle = ({ label, mode }) => {
  const modeClass = getModeClasses(mode);

  return (
    <label className="my-label">
      <span className="my-label-text">{label}</span>
      {modeClass}
    </label>
  );
};
