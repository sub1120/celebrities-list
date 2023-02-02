import "./AccordianItem.css";

const AccordianItem = ({ isActive, children, accordianHandler, id }) => {
  const tabHandler = () => {
    if (!isActive) {
      accordianHandler(id);
    } else {
      accordianHandler(0);
    }
  };

  return (
    <div className={`accordian-item ${isActive ? " active" : ""}`}>
      <div className="plus-icon" onClick={tabHandler}>
        <span className="material-symbols-outlined">
          {!isActive ? "add" : "remove"}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AccordianItem;
