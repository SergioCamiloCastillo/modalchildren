import React from "react";
import "./Modal.css";
const Modal = ({ isOpen, closeModal,title, children }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
    //detiene los click de los div o elementos padres como lo es onClick closeModal,
    // es decir que si le doy click al recuadro blanco que es el modal, no cierra el modal, solo en la parte negra
  };
  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        {title}
        <button onClick={closeModal}>Close Modal</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
