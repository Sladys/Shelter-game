import { useState } from "react";

type ToggleProps = {
  onValue: React.ReactNode;
  offValue: React.ReactNode;
  className?: string;
  initialState?: boolean;
  popup?: boolean;
  popupContent?: React.ReactNode;
  popupClassName?: string;
};

const Toggle = ({
  onValue,
  offValue,
  className,
  initialState = false,
  popup = false,
  popupContent,
  popupClassName,
}: ToggleProps): JSX.Element => {
  const [isActive, setIsActive] = useState(initialState);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative flex items-center justify-center">
      <button className={`${className}`} onClick={handleToggle}>
        {isActive ? onValue : offValue}
      </button>
      {popup && isActive && (
        <div
          className={`absolute top-16 flex w-max items-center justify-center rounded-lg border-2 border-indigo-700 bg-indigo-100 p-4 dark:bg-indigo-900 ${popupClassName}`}
        >
          {popupContent}
        </div>
      )}
    </div>
  );
};

export default Toggle;
