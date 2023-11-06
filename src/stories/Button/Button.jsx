// eslint-disable-next-line no-unused-vars
import React, { useMemo } from 'react';

const getSizeClasses = (size) => {
  switch (size) {
    case 'small': {
      return 'px-5 py-2';
    }
    case 'large': {
      return 'px-10 py-2';
    }
    case 'medium':{
      return 'px-8 py-2';
    }
    default: {
      return 'px-5 py-2';
    }
  }
};

const getModeClasses = (isPrimary) =>
  isPrimary
    ? 'text-tertiary bg-primary hover:scale-105 transition duration-300 ease-in-out'
    : 'text-text border bg-opacity-0 border-solid border-text hover:scale-105 transition duration-300 ease-in-out';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full leading-none rounded-3xl inline-block font-medium text-center text-sm whitespace-nowrap tracking-normal uppercase self-stretch h-11 max-h-11 justify-center items-center ';

/**
 * Primary UI component for user interaction
 */
// eslint-disable-next-line react/prop-types
export const Button = ({ primary = false, size = 'medium', label, ...props }) => { 
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <button type="button" className={`${BASE_BUTTON_CLASSES} ${computedClasses}`} {...props}>
      {label}
    </button>
  );
};
