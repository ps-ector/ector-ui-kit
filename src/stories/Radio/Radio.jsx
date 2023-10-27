export const Radio = () => (
  <div className="rounded-md bg-yellow-50 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-yellow-800">
          Attention needed
        </h3>
        <div className="mt-2 text-sm text-yellow-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </p>
        </div>
      </div>
    </div>
  </div>
);
