import "./ModalWithForm.css";
import close from "../../assets/back.svg";

export default function ModalWithForm({
  children,
  title,
  buttonText,
  text,
  onClose,
  isOpen,
  onSwitchMode,
}) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica del formulario
    console.log("Form submitted");
  };

  return (
    <div className="modal__container" onClick={handleOverlayClick}>
      <button className="modal__form-close">
        <img src={close} onClick={onClose} />
      </button>
      <form className="modal__form" onSubmit={handleSubmit}>
        <h2 className="modal__form-title">{title}</h2>
        {children}
        <button type="submit" className="modal__form-button">
          {buttonText}
        </button>
        <button
          className="modal__form-btn"
          type="button"
          onClick={onSwitchMode}
        >
          <span style={{ color: "#000" }}>or</span> {text}
        </button>
      </form>
    </div>
  );
}
