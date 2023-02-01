import "./App.css";
import Celeb from "./Celeb";
import { useEffect, useReducer, useState } from "react";
import stateReducer from "./state/reducer";
import {
  deleteCelebrity,
  fetchCelebrities,
  updateCelebrity,
} from "./state/actions";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/Modal/ModalContent";

const initialState = [];

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [celebrities, dispatchCelebrities] = useReducer(
    stateReducer,
    initialState
  );

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    fetchCelebrities(dispatchCelebrities);
  }, []);

  const accordianHandler = (id) => {
    setActiveSlide(id);
  };

  const openModalHandler = () => {
    setIsModelOpen(true);
  };

  const closeModalHandler = () => {
    setIsModelOpen(false);
  };

  const confirmModalHandler = () => {
    deleteCelebrity(dispatchCelebrities, activeSlide);
    closeModalHandler();
  };

  const updateCelebrityHandler = (formData) => {
    updateCelebrity(
      {
        id: activeSlide,
        ...formData,
      },
      dispatchCelebrities
    );
  };

  return (
    <div className="app">
      {isModelOpen && (
        <Modal>
          <ModalContent
            closeModalHandler={closeModalHandler}
            confirmModalHandler={confirmModalHandler}
            id={activeSlide}
          />
        </Modal>
      )}
      <h1>Celibrities</h1>
      <div className="celebrities-list">
        {celebrities.map((data) => (
          <Celeb
            dispatchCelebrities={dispatchCelebrities}
            picture={data.picture}
            fullname={data.fullname}
            age={data.age}
            gender={data.gender}
            country={data.country}
            desc={data.desc}
            key={data.id}
            id={data.id}
            isActive={activeSlide === data.id ? true : false}
            accordianHandler={accordianHandler}
            openModalHandler={openModalHandler}
            updateCelebrityHandler={updateCelebrityHandler}
          ></Celeb>
        ))}
      </div>
    </div>
  );
}

export default App;
