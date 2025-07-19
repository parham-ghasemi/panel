import "./DropDown.scss";
import { useState, useRef, useEffect } from "react";
import CheckBox from "../CheckBox/CheckBox";

const DropDown = ({ options, label, value = [], onChange, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef(null);

  const customStyle = {};
  if (width) customStyle["--dropdown-width"] = width;

  const toggleOption = (option) => {
    let newSelection = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];

    onChange(newSelection);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`vira-store-dropdown ${
        isFocused ? "vira-store-dropdown__focused" : ""
      }`}
      ref={dropdownRef}
      style={customStyle} // Apply custom style here
    >
      <label className="vira-store-dropdown__label">{label}</label>
      <div
        className="vira-store-dropdown__control"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setIsFocused(true);
        }}
        tabIndex="0"
      >
        {value.length > 0 ? value.join(", ") : `انتخاب ${label}`}
        <img
          src={isOpen ? "/assets/ui/arrow-up.svg" : "/assets/ui/arrow-down.svg"}
          alt="جهت"
          className="vira-store-dropdown__arrow"
        />
      </div>

      {isOpen && (
        <div className="vira-store-dropdown__menu" tabIndex="0">
          {options.map((option, i) => (
            <div key={i} className="vira-store-dropdown__item">
              <CheckBox
                checked={value.includes(option)}
                onChange={() => toggleOption(option)}
                label={option}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
