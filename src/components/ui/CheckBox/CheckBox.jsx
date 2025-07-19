import "./CheckBox.scss";

const CheckBox = ({ checked, onChange, label, disabled = false }) => {
  return (
    <label className={`vira-store-checkbox ${disabled ? "is-disabled" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={checked}
      />
      <span className="vira-store-checkbox__box" />
      <span className="vira-store-checkbox__label">{label}</span>
    </label>
  );
};

export default CheckBox;
