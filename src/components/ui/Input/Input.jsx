import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./Input.scss";
import { useState } from "react";

const Input = ({
  width,
  height,
  type,
  placeholder,
  value,
  onChange,
  label,
  options,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const customStyle = {};
  if (width) customStyle["--input-width"] = width;
  if (height) customStyle["--input-height"] = height;

  const renderInput = () => {
    switch (type) {
      case "date":
        return (
          <div
            className="vira-store-input__date"
            style={customStyle}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            <img src="/assets/ui/calendar.svg" alt="آیکون تقویم" />
            <DatePicker
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              calendar={persian}
              locale={persian_fa}
              style={customStyle}
            />
          </div>
        );
      case "search":
        return (
          <div className="vira-store-input__search">
            <button type="submit" className="vira-store-input__search__button">
              <img src="/assets/ui/search.svg" alt="آیکون سرج" />
            </button>
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              aria-label="Search Input"
              className="vira-store-input__search__input"
              style={customStyle}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        );
      case "radio-group":
        return (
          <div className="vira-store-input__radio-group">
            {options.map((option, index) => {
              const optionValue =
                option.value || option.label || `option-${index}`;
              return (
                <label
                  key={optionValue}
                  className={`priority-option ${
                    value === optionValue ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={name}
                    value={optionValue}
                    checked={value === optionValue}
                    onChange={() => onChange(optionValue)}
                  />
                  <div className="priority-option-button">
                    {option.img && <img src={option.img} alt={option.label} />}
                    {option.label}
                  </div>
                </label>
              );
            })}
          </div>
        );
      case "email":
      case "number":
      case "password":
      case "text":
        return (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`vira-store-input__${type}`}
            style={customStyle}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
      case "textarea":
        return (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="vira-store-input__textarea"
            style={customStyle}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="vira-store-input">
      {label && (
        <label
          className={`vira-store-input__label ${isFocused ? "focused" : ""}`}
        >
          {label}
        </label>
      )}
      {renderInput()}
    </div>
  );
};

export default Input;
