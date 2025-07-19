import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
  return (
    <main>
      <div className="vira-store-panel-layout">
        <div className="vira-store-panel-layout__navbar">
          <Navbar />
        </div>
        <div className="vira-store-panel-layout__body">
          <div className="vira-store-panel-layout__body__sidebar">
            <Sidebar />
          </div>
          <div className="vira-store-panel-layout__body__content">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
