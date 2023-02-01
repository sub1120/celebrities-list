import { useState } from "react";
import { deleteCelebrity, updateCelebrity } from "./state/actions";
import "./Celeb.css";

const Celeb = ({
  picture,
  fullname,
  age,
  gender,
  country,
  desc,
  id,
  dispatchCelebrities,
  isActive,
  accordianHandler,
  openModalHandler,
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

  const inputHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (e) => {
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

    updateCelebrity(
      {
        id: id,
        picture: picture,
        ...formData,
      },
      dispatchCelebrities
    );

    setEditMode(false);
    setFormData({
      ...formData,
      error: "",
    });
  };

  const deleteHandler = (e) => {
    openModalHandler();
  };

  const cancleHandler = () => {
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
                onChange={inputHandler}
                disabled={!isEditMode}
              ></input>
            </div>
          </div>
          <div className="plus-icon action-button" onClick={tabHandler}>
            <span className="material-symbols-outlined">add</span>
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
                onChange={inputHandler}
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
                onChange={inputHandler}
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
                onChange={inputHandler}
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
                onChange={inputHandler}
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
                onClick={!isEditMode ? editHandler : submitHandler}
              >
                <span className="material-symbols-outlined">
                  {!isEditMode ? "edit" : "check_circle"}
                </span>
              </div>
              <div
                className={`action-button ${
                  isEditMode ? "del-icon" : "cancel-icon"
                }`}
                onClick={!isEditMode ? deleteHandler : cancleHandler}
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

export default Celeb;
