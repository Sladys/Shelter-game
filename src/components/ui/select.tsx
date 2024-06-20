import React, { useState, useEffect, useRef } from "react";

type Option = {
  value: string;
  label: string | JSX.Element;
};

type SelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  buttonContent: string | JSX.Element;
  widthClass: string;
};

function Select({
  options,
  value,
  onChange,
  buttonContent,
  widthClass,
}: SelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (ulRef.current) {
      if (isOpen) {
        ulRef.current.style.overflow = "hidden";
        setTimeout(() => {
          if (ulRef.current) {
            ulRef.current.style.overflow = "auto";
          }
        }, 300);
      } else {
        ulRef.current.style.overflow = "hidden";
      }
    }
  }, [isOpen]);

  return (
    <div ref={selectRef} className={`relative ${widthClass}`}>
      <div
        className="flex cursor-pointer justify-center rounded bg-emerald-200 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value
          ? options.find((option) => option.value === value)?.label
          : buttonContent}
      </div>
      <ul
        ref={ulRef}
        data-select
        className={`absolute z-10 mt-1 w-full transform rounded border bg-white pl-2 transition-all duration-300 ${
          isOpen
            ? "max-h-96 translate-y-0 opacity-100"
            : "max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            role="button"
            onClick={() => handleSelect(option.value)}
            className="cursor-pointer p-2 text-center hover:bg-emerald-200"
          >
            {option.label}
          </li>
        ))}
      </ul>
      <div className="invisible absolute">
        <div className="px-3 py-2">{buttonContent}</div>
      </div>
    </div>
  );
}

export default Select;
