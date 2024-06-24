type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded bg-indigo-700 p-2 font-semibold text-gray-100 transition-colors duration-300 hover:bg-indigo-800 active:bg-indigo-900 disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:active:bg-indigo-700 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
