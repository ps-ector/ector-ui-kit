import PropTypes from "prop-types";

export const Title = ({ label }) => {
  return (
    <label className="my-label flex-col">
      <span className="my-label-text text-lg font-bold animate-typewriter animate-text">
        {label}
      </span>
    </label>
  );
};

Title.propTypes = {
  label: PropTypes.string,
};
