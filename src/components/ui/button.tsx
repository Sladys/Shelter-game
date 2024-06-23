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
      className={`rounded bg-gray-600 p-2 text-white transition-colors duration-300 hover:bg-gray-700 disabled:opacity-50 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
