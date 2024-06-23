import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

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
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={`relative ${className}`}>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        autoComplete={autoComplete}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={toggleShowPassword}
          tabIndex={-1}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
        >
          {showPassword ? (
            <EyeIcon className="h-5 w-5" />
            ) : (
            <EyeSlashIcon className="h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
}

export default Input;
