import React, { createContext, useContext, useState } from "react";
import ModalComp from "../components/ui/Modal/Modal";

const ModalContext = createContext({
  openModal: () => {},
  closeLatestModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = (content, titleValue = "", otherOptions = {}) => {
    const isTitleString = typeof titleValue === "string";
    const title = isTitleString ? titleValue : "";
    const options = isTitleString ? otherOptions : titleValue;
    setModals((prev) => [...prev, { content, title, ...options }]);
  };

  const closeLatestModal = () => {
    setModals((prev) => prev.slice(0, -1));
  };

  const latestModal = modals[modals.length - 1];

  return (
    <ModalContext.Provider value={{ openModal, closeLatestModal }}>
      {children}
      {latestModal && (
        <ModalComp
          open={true}
          onClose={closeLatestModal}
          content={latestModal.content}
          title={latestModal.title}
          cross={latestModal.cross ?? true}
          withBorder={latestModal.withBorder ?? true}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
