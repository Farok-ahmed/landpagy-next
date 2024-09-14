import React, { useState, useEffect, useRef } from "react";

const CustomSelect = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
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
