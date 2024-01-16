export const Steps = ({ ...props }) => {
  return (
    <ul className="ec-list-none ec-flex ec-items-center" {...props}>
      <li className="ec-flex ec-flex-col ec-items-center ">
        <div className="ec-flex">
          <div className="ec-bg-primary ec-rounded-full ec-w-8 ec-h-8 ec-text-tertiary ec-flex ec-justify-center ec-items-center ec-font-black">
            &#10003;
          </div>
        </div>
        <p className="ec-text-primary">Register</p>
      </li>
      <li className="ec-w-56 ec-pb-6">
        <div className="ec-h-0.5 ec-bg-primary ec-w-full "></div>
      </li>
      <li className="ec-flex ec-flex-col ec-items-center ">
        <div className="ec-flex">
          <div className="ec-bg-transparent ec-border-2 ec-border-primary ec-rounded-full ec-w-8 ec-h-8 ec-text-primary ec-flex ec-justify-center ec-items-center ec-font-black">
            2
          </div>
        </div>
        <p className="ec-text-primary">Choose plan</p>
      </li>
      <li className="ec-w-56 ec-pb-6">
        <div className="ec-h-0.5 ec-bg-text ec-w-full "></div>
      </li>
      <li className="ec-flex ec-flex-col ec-items-center ">
        <div className="ec-flex">
          <div className="ec-bg-transparent ec-border-2 ec-border-text ec-rounded-full ec-w-8 ec-h-8 ec-text-text ec-flex ec-justify-center ec-items-center ec-font-black">
            3
          </div>
        </div>
        <p className="ec-text-text">Purchase</p>
      </li>
      <li className="ec-w-56 ec-pb-6">
        <div className="ec-h-0.5 ec-bg-text ec-w-full "></div>
      </li>
      <li className="ec-flex ec-flex-col ec-items-center ">
        <div className="ec-flex">
          <div className="ec-bg-transparent ec-border-2 ec-border-text ec-rounded-full ec-w-8 ec-h-8 ec-text-text ec-flex ec-justify-center ec-items-center ec-font-black">
            4
          </div>
        </div>
        <p className="ec-text-text">Done!</p>
      </li>
    </ul>
  );
};
