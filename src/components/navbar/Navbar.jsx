import { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
// import NotificationModal from "../notifications/notificationModal/NotificationModal";

const Navbar = () => {
  // notif modal
  const [openNotifModal, setOpenNotifModal] = useState(false);
  const handleOpenNotifModal = () => {
    setOpenNotifModal(!openNotifModal);
  };

  const navigate = useNavigate();

  return (
    <div className="vira-store-navbar">
      <div className="vira-store-navbar__right">
        <div className="vira-store-navbar__right__logo">
          <Link to={"/"}>
            <h1 className="vira-store-navbar__right__logo__title">ویرامد</h1>
          </Link>
        </div>
      </div>
      <div className="vira-store-navbar__left">
        <div className="vira-store-navbar__left__company">
          <div className="vira-store-navbar__left__company__profile">
            <img
              onClick={() => navigate("/profile")}
              src="/assets/navbar/profile.svg"
              className="vira-store-navbar__left__company__profile__picture"
              alt="عکس پروفایل"
              loading="lazy"
            />
          </div>
          <div className="vira-store-navbar__left__company__info">
            <h3 onClick={() => navigate("/profile")}>ادمین فروشگاه</h3>
            <p onClick={() => navigate("/profile")}>ورود به پروفایل</p>
            <span>آخرین بازدید: دیروز 15:49</span>
          </div>
        </div>
        {/* <div
          className="vira-store-navbar__left__notifs"
          onClick={handleOpenNotifModal}
          style={{ position: "relative" }}
        >
          <p>پیام‌ها</p>
          <img src="/assets/navbar/notification.svg" alt="پیام‌ها" />

          {openNotifModal && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
              }}
            >
              <NotificationModal onClose={handleOpenNotifModal} />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
