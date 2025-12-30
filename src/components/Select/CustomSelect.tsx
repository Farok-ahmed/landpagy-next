"use client";
import { useEffect, useRef, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (_option: Option) => void;
}

const CustomSelect = ({ options, placeholder, onChange }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select nice-select-common" ref={dropdownRef}>
      <div className="select-box" onClick={handleToggleDropdown}>
        <div className="select-placeholder">
          <i className="icon_globe-2 mr-1"></i>
          {selectedOption ? selectedOption.label : placeholder}
        </div>
      </div>
      {isOpen && (
        <ul className="select-options">
          {options.map((option, index) => (
            <li
              key={index}
             className={`select-option ${
                selectedOption && selectedOption.value === option.value
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
