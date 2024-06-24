import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

type Option = {
  value: string;
  label: React.ReactNode;
};

type SelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  children?: React.ReactNode;
};

const VISIBLE_ITEMS = 10; // Количество видимых элементов
const ITEM_HEIGHT = 40; // Высота одного элемента в пикселях

function Select({
  options,
  value,
  onChange,
  className = "",
  children,
}: SelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const scrollAnimationFrameRef = useRef<number | null>(null);

  const handleSelect = useCallback(
    (optionValue: string) => {
      onChange(optionValue);
      setIsOpen(false);
      setTimeout(() => setIsVisible(false), 300);
    },
    [onChange],
  );

  const startScroll = useCallback((direction: "up" | "down") => {
    const step = 5;
    const scroll = () => {
      if (optionsRef.current) {
        const newScrollTop =
          direction === "up"
            ? optionsRef.current.scrollTop - step
            : optionsRef.current.scrollTop + step;
        optionsRef.current.scrollTo({ top: newScrollTop });

        if (
          (direction === "up" && optionsRef.current.scrollTop > 0) ||
          (direction === "down" &&
            optionsRef.current.scrollTop + optionsRef.current.clientHeight <
              optionsRef.current.scrollHeight)
        ) {
          scrollAnimationFrameRef.current = requestAnimationFrame(scroll);
        }
      }
    };
    scrollAnimationFrameRef.current = requestAnimationFrame(scroll);
  }, []);

  const stopScroll = useCallback(() => {
    if (scrollAnimationFrameRef.current) {
      cancelAnimationFrame(scrollAnimationFrameRef.current);
      scrollAnimationFrameRef.current = null;
    }
  }, []);

  const handleWheelScroll = useCallback((event: React.WheelEvent) => {
    if (optionsRef.current) {
      optionsRef.current.scrollTop += event.deltaY;
    }
  }, []);

  const preventBodyScroll = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setTimeout(() => setIsVisible(false), 300);
      }
    };

    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setShouldRender(true);
      setTimeout(() => {
        if (optionsRef.current) {
          const { scrollHeight, clientHeight, scrollTop } = optionsRef.current;
          setIsScrollable(scrollHeight > clientHeight);
          setIsAtTop(scrollTop === 0);
          setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
        }
        document.addEventListener("wheel", preventBodyScroll, {
          passive: false,
        });
        document.addEventListener("touchmove", preventBodyScroll, {
          passive: false,
        });
      }, 0);
    } else {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 300);
      }, 0);
      document.removeEventListener("wheel", preventBodyScroll);
      document.removeEventListener("touchmove", preventBodyScroll);
      stopScroll();
    }

    return () => {
      document.removeEventListener("wheel", preventBodyScroll);
      document.removeEventListener("touchmove", preventBodyScroll);
      stopScroll();
    };
  }, [isOpen, preventBodyScroll, stopScroll]);

  useEffect(() => {
    const handleScroll = () => {
      if (optionsRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = optionsRef.current;
        setIsAtTop(scrollTop === 0);
        setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
      }
    };

    if (optionsRef.current) {
      optionsRef.current.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      const checkScrollable = () => {
        if (optionsRef.current) {
          const { scrollHeight, clientHeight, scrollTop } = optionsRef.current;
          setIsScrollable(scrollHeight > clientHeight);
          setIsAtTop(scrollTop === 0);
          setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
        }
      };

      checkScrollable();
    }

    return () => {
      if (optionsRef.current) {
        optionsRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isOpen]);

  return (
    <div ref={selectRef} className={`relative font-semibold ${className}`}>
      <div
        className="flex cursor-pointer justify-center rounded border-2 border-indigo-300 bg-indigo-200 p-2 text-gray-900"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setShouldRender(true);
            setTimeout(() => setIsVisible(true), 0);
          }
        }}
      >
        {value
          ? options.find((option) => option.value === value)?.label
          : children}
      </div>
      {shouldRender && (
        <div
          ref={optionsRef}
          onWheel={handleWheelScroll}
          data-select
          style={{ maxHeight: `${VISIBLE_ITEMS * ITEM_HEIGHT}px` }}
          className={`absolute z-10 mt-1 w-full transform overflow-hidden rounded border-2 border-indigo-300 bg-white transition-all duration-300 ${
            isVisible
              ? "max-h-96 translate-y-0 opacity-100"
              : "max-h-0 -translate-y-3 opacity-0"
          }`}
        >
          {isScrollable && !isAtTop && (
            <div
              className="sticky inset-x-0 top-0 flex h-8 cursor-pointer items-center justify-center bg-gradient-to-b from-gray-200 to-transparent"
              onMouseEnter={() => startScroll("up")}
              onMouseLeave={stopScroll}
            >
              <ChevronUpIcon className="h-6 w-6 text-gray-500" />
            </div>
          )}
          <ul>
            {options.map((option, i) => (
              <li
                key={option.value}
                role="button"
                onClick={() => handleSelect(option.value)}
                className={`cursor-pointer p-2 ${i % 2 === 0 ? "bg-indigo-100" : "bg-indigo-100/70"} text-center hover:bg-indigo-200`}
                style={{ height: `${ITEM_HEIGHT}px` }}
              >
                {option.label}
              </li>
            ))}
          </ul>
          {isScrollable && !isAtBottom && (
            <div
              className="sticky inset-x-0 bottom-0 flex h-8 cursor-pointer items-center justify-center bg-gradient-to-t from-gray-200 to-transparent"
              onMouseEnter={() => startScroll("down")}
              onMouseLeave={stopScroll}
            >
              <ChevronDownIcon className="h-6 w-6 text-gray-500" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Select;
