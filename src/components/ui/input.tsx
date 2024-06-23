type InputProps = {
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
};

function Input({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
  required = false,
  name,
  id,
  autoComplete,
}: InputProps): JSX.Element {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${className}`}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      autoComplete={autoComplete}
    />
  );
}

export default Input;
