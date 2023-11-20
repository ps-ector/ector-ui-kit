export const Boost = ({ label }: { label: string }) => {
  return (
    <label className="my-label flex-col">
      <span className="my-label-text text-lg font-bold">{label}</span>
      <div className="col-md-3 col-sm-6">
        <div className="progress blue">
          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>
          <div className="progress-value">
            <svg
              width="12"
              height="74"
              viewBox="0 0 12 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-in-tr"
            >
              <path
                d="M9.31991 72.6744C11.6254 70.8412 12.0082 67.486 10.1749 65.1806C8.34165 62.8751 4.98654 62.4923 2.68106 64.3256C0.375589 66.1588 -0.00720879 69.514 1.82606 71.8194C3.65933 74.1249 7.01444 74.5077 9.31991 72.6744ZM6.00045 4.1846e-07L0.226951 10L11.774 10L6.00045 4.1846e-07ZM7.00049 68.5L7.00045 9L5.00045 9L5.00049 68.5L7.00049 68.5Z"
                fill="#47D7AC"
              />
            </svg>
            <div className="boost-text text-text text-sm uppercase fade-in animation-delay-fade-2"></div>
          </div>
        </div>
      </div>
    </label>
  );
};
