import { useLocation } from "react-router-dom";
import "./BreadCrumb.scss";
import arrowIcon from "/assets/ui/arrow-left-bc.svg";

function BreadCrumb({ icon, variant }) {
  const location = useLocation();
  let breadCrumb = [];

  if (location.pathname === "/" && !breadCrumb.includes("خانه")) {
    breadCrumb.push("خانه");
  }

  return (
    <div className="bread-crumb">
      {icon && <img src={icon} alt="breadcrumb icon" />}
      {breadCrumb.map((item, index) => (
        <div className="bread-item" key={index}>
          <h3
            className={
              breadCrumb.length === 1 || index === breadCrumb.length - 1
                ? "final"
                : "intermediate"
            }
          >
            {item}
          </h3>
          {breadCrumb.length > 1 && index < breadCrumb.length - 1 && (
            <img src={arrowIcon} alt="arrow" className="arrow-icon" />
          )}
        </div>
      ))}
    </div>
  );
}

export default BreadCrumb;
