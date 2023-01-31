import { useState } from "react";
import { deleteCelebrity, updateCelebrity } from "./state/actions";

const Celeb = ({
  picture,
  fullname,
  age,
  gender,
  country,
  desc,
  id,
  dispatchCelebrities,
}) => {
  const [isEditMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullname,
    age,
    gender,
    country,
    desc,
  });

  const inputHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    updateCelebrity(
      {
        id: id,
        picture: picture,
        ...formData,
      },
      dispatchCelebrities
    );

    setEditMode(false);
  };

  const deleteHandler = (e) => {
    deleteCelebrity(dispatchCelebrities, id);
  };

  const cancleHandler = () => {
    setEditMode(false);
  };

  const editHandler = () => {
    console.log("ds");
    setEditMode(true);
  };

  return (
    <div className="celeb">
      <form>
        <div className="profile">
          <img src={picture} alt={fullname}></img>
        </div>
        <div className="fullname">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={inputHandler}
            disabled={!isEditMode}
          ></input>
        </div>
        <div className="age">
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={inputHandler}
            disabled={!isEditMode}
          ></input>
        </div>
        <div className="gender">
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={inputHandler}
            disabled={!isEditMode}
          ></input>
        </div>
        <div className="country">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={inputHandler}
            disabled={!isEditMode}
          ></input>
        </div>
        <div className="desc">
          <input
            type="textarea"
            name="desc"
            value={formData.desc}
            onChange={inputHandler}
            disabled={!isEditMode}
          ></input>
        </div>
        <div className="action-button">
          <button
            type="button"
            onClick={!isEditMode ? editHandler : submitHandler}
          >
            {!isEditMode ? "edit" : "save"}
          </button>
        </div>
        <div className="action-button">
          <button
            type="button"
            onClick={!isEditMode ? deleteHandler : cancleHandler}
          >
            {!isEditMode ? "delete" : "cancle"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Celeb;
