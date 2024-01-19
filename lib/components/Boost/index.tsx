export const Boost = ({ label }: { label: string }) => {
  return (
    <label className="ec-label ec-flex-col">
      <span className="ec-label-text ec-text-lg ec-font-bold">{label}</span>
      <div className="ec-col-md-3 ec-col-sm-6">
        <div className="ec-progress blue">
          <span className="ec-progress-left">
            <span className="ec-progress-bar"></span>
          </span>
          <span className="ec-progress-right">
            <span className="ec-progress-bar"></span>
          </span>
          <div className="ec-progress-value">
            <svg
              width="12"
              height="74"
              viewBox="0 0 12 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ec-rotate-in-tr"
            >
              <path
                d="M9.31991 72.6744C11.6254 70.8412 12.0082 67.486 10.1749 65.1806C8.34165 62.8751 4.98654 62.4923 2.68106 64.3256C0.375589 66.1588 -0.00720879 69.514 1.82606 71.8194C3.65933 74.1249 7.01444 74.5077 9.31991 72.6744ZM6.00045 4.1846e-07L0.226951 10L11.774 10L6.00045 4.1846e-07ZM7.00049 68.5L7.00045 9L5.00045 9L5.00049 68.5L7.00049 68.5Z"
                fill="#47D7AC"
              />
            </svg>
            <div className="ec-boost-text ec-text-text ec-text-sm ec-uppercase ec-fade-in ec-animation-delay-fade-2"></div>
          </div>
        </div>
      </div>
    </label>
  );
};
