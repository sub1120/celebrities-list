import "./ModalContent.css";

const ModalContent = ({ deleteCelebrityHandler, closeModalHandler }) => {
  return (
    <div className="confirm">
      <div>Are you sure want to delete?</div>
      <div className="confirm-actions">
        <button className="confirm-no" onClick={() => closeModalHandler()}>
          Cancel
        </button>
        <button
          className="confirm-yes"
          onClick={() => deleteCelebrityHandler()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
