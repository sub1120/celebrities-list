import { useState } from "react";
import { containDigit, isDigit } from "../../utils/helper";
import "./Celebrity.css";

const Celebrity = ({
  picture,
  fullname,
  age,
  gender,
  country,
  desc,
  id,
  isActive,
  accordianHandler,
  openModalHandler,
  updateCelebrityHandler,
}) => {
  const [isEditMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullname,
    age,
    gender,
    country,
    desc,
    error: "",
  });

  const resetForm = () => {
    setFormData({
      fullname,
      age,
      gender,
      country,
      desc,
      error: "",
    });
    setEditMode(false);
  };

  const inputChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const saveHandler = (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.age ||
      !formData.country ||
      !formData.gender ||
      !formData.desc
    )
      return setFormData({
        ...formData,
        error: `Fill all fields!`,
      });

    if (!isDigit(formData.age)) {
      return setFormData({
        ...formData,
        error: `Age must be digit!`,
      });
    }

    if (containDigit()) {
      return setFormData({
        ...formData,
        error: `Country cannot have digits!`,
      });
    }

    updateCelebrityHandler({
      picture: picture,
      ...formData,
    });

    setEditMode(false);
  };

  const deleteHandler = (e) => {
    openModalHandler();
  };

  const cancelHandler = () => {
    resetForm();
  };

  const editHandler = () => {
    setEditMode(true);
  };

  const tabHandler = () => {
    if (!isActive) {
      accordianHandler(id);
    } else {
      accordianHandler(0);
    }
  };

  return (
    <div className="celeb">
      <form>
        <section className="header">
          <div className="header-left">
            <div className="profile">
              <img src={picture} alt={fullname}></img>
            </div>
            <div className="fullname">
              <input
                className={`input ${!isEditMode ? "edit" : ""}`}
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={inputChangeHandler}
                disabled={!isEditMode}
              ></input>
            </div>
          </div>
          <div className="plus-icon action-button" onClick={tabHandler}>
            <span className="material-symbols-outlined">
              {!isActive ? "add" : "remove"}
            </span>
          </div>
        </section>

        <div className={`content ${isActive ? " active" : ""}`}>
          <section className="basic-details">
            <div className="age">
              <label htmlFor="age">Age</label>
              <br />
              <input
                className={`input ${!isEditMode ? "edit" : ""}`}
                type="text"
                name="age"
                value={formData.age}
                onChange={inputChangeHandler}
                disabled={!isEditMode}
              ></input>
            </div>
            <div className="gender">
              <label htmlFor="gender">Gender</label>
              <br />
              <input
                className={`input ${!isEditMode ? "edit" : ""}`}
                type="text"
                name="gender"
                value={formData.gender}
                onChange={inputChangeHandler}
                disabled={!isEditMode}
              ></input>
            </div>
            <div className="country">
              <label htmlFor="country">Country</label>
              <br />
              <input
                className={`input ${!isEditMode ? "edit" : ""}`}
                type="text"
                name="country"
                value={formData.country}
                onChange={inputChangeHandler}
                disabled={!isEditMode}
              ></input>
            </div>
          </section>
          <section className="description">
            <div className="desc">
              <label htmlFor="desc">Description</label>
              <br />
              <textarea
                className={`textarea ${!isEditMode ? "edit" : ""}`}
                name="desc"
                value={formData.desc}
                onChange={inputChangeHandler}
                disabled={!isEditMode}
              ></textarea>
            </div>
          </section>
          <section className="bottom">
            <div className="error">{formData.error}</div>
            <div className="actions">
              <div
                className={`action-button ${
                  isEditMode ? "done-icon" : "edit-icon"
                }`}
                onClick={!isEditMode ? editHandler : saveHandler}
              >
                <span className="material-symbols-outlined">
                  {!isEditMode ? "edit" : "check_circle"}
                </span>
              </div>
              <div
                className={`action-button ${
                  isEditMode ? "del-icon" : "cancel-icon"
                }`}
                onClick={!isEditMode ? deleteHandler : cancelHandler}
              >
                <span className="material-symbols-outlined">
                  {!isEditMode ? "delete" : "cancel"}
                </span>
              </div>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default Celebrity;
