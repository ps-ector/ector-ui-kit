export const Progress = ({
  percentage = 1,
  message,
  ...props
}: {
  percentage: number;
  message?: string;
}) => {
  return (
    <div
      className="ec-flex ec-w-full ec-flex-col ec-items-center ec-gap-2 ec-px-16 ec-py-12 "
      {...props}
    >
      <div
        className="ec-w-full ec-bg-gray-200 ec-rounded-full ec-dark:bg-text"
        {...props}
      >
        <div
          className=" ec-w-full ec-bg-primary ec-text-xs ec-font-medium ec-text-secondary ec-text-center ec-p-0.5 ec-leading-none ec-rounded-full"
          style={{ width: `${percentage}` + "%" }}
          {...props}
        >
          {percentage}%
        </div>
      </div>
      <div className="ec-w-full ec-flex ec-justify-center ec-text-text">
        <p>{message}</p>
      </div>
    </div>
  );
};
