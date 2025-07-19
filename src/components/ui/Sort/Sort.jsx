import { useState } from "react";
import "./Sort.scss";

const Sort = ({ label, value, sortState, onToggle }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="vira-store-sort">
      <label>{label}</label>
      <button
        type="button"
        aria-pressed={sortState}
        onClick={() => onToggle(!sortState)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <img
          src={`/assets/ui/${sortState ? "sort-up" : "sort-down"}.svg`}
          alt={
            sortState ? "مرتب‌سازی صعودی فعال است" : "مرتب‌سازی نزولی فعال است"
          }
        />
        <span className={isFocused ? "focused" : ""}>{value}</span>
      </button>
    </div>
  );
};

export default Sort;
