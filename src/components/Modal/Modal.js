import ReactDOM from "react-dom";
import "./Modal.css";

const OverlayModel = ({ closeModal, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
};

const Modal = ({ closeModal, children }) => {
  return ReactDOM.createPortal(
    <OverlayModel closeModal={closeModal}>{children}</OverlayModel>,
    document.getElementById("overlay-modal")
  );
};

export default Modal;
