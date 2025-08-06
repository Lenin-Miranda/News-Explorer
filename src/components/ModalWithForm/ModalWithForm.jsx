import "./ModalWithForm.css";
import close from "../../assets/back.svg";

export default function ModalWithForm({
  children,
  title,
  text,
  onClose,
  isOpen,
  onSwitchMode,
  isLoading,
  success,
}) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal__container" onClick={handleOverlayClick}>
      <div className="modal__form">
        <button className="modal__form-close">
          <img src={close} onClick={onClose} alt="Cerrar modal" />
        </button>
        <h2 className="modal__form-title">
          {success ? "Registration successfully completed!" : title}
        </h2>
        {children}
        <button
          className="modal__form-btn"
          type="button"
          onClick={onSwitchMode}
        >
          <span style={{ color: "#000" }}>{success ? "" : "or"} </span>
          {text}
        </button>
      </div>
    </div>
  );
}
