import "./Button.scss";

const Button = ({ type, icon = null, onClick, children }) => {
  let btnClassName = "vira-store-button";
  const textClassName = "vira-store-button__text"; // always the same

  switch (type) {
    case "outlined":
      btnClassName += " outlined";
      break;
    case "dark-outlined":
      btnClassName += " dark-outlined";
      break;
    case "darkText-outlined":
      btnClassName += " darkText-outlined";
      break;
    case "gray-filled":
      btnClassName += " gray-filled";
      break;
    default:
      btnClassName += " filled";
      break;
  }

  return (
    <button type="button" className={btnClassName} onClick={onClick}>
      {icon && <img src={icon} alt="button icon" />}
      {children ? <p className={textClassName}>{children}</p> : ""}
    </button>
  );
};

export default Button;
