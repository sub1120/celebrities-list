import "./App.css";
import Celebrity from "./components/Celebrity/Celebrity";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/Modal/ModalContent";

import { useEffect, useReducer, useState } from "react";
import appStateReducer from "./state/reducer";
import {
  fetchCelebrities,
  updateCelebrity,
  deleteCelebrity,
} from "./state/actions";

const initialAppState = [];

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [celebrities, dispatchAppState] = useReducer(
    appStateReducer,
    initialAppState
  );

  useEffect(() => {
    fetchCelebrities(dispatchAppState);
  }, []);

  const deleteCelebrityHandler = () => {
    deleteCelebrity(dispatchAppState, activeItem);
    closeModalHandler();
  };

  const updateCelebrityHandler = (formData) => {
    updateCelebrity(
      {
        id: activeItem,
        ...formData,
      },
      dispatchAppState
    );
  };

  console.log(celebrities);

  const accordianHandler = (id) => {
    setActiveItem(id);
  };

  const openModalHandler = () => {
    setIsModelOpen(true);
  };

  const closeModalHandler = () => {
    setIsModelOpen(false);
  };

  return (
    <div className="app">
      {isModelOpen && (
        <Modal>
          <ModalContent
            closeModalHandler={closeModalHandler}
            deleteCelebrityHandler={deleteCelebrityHandler}
            id={activeItem}
          />
        </Modal>
      )}
      <div className="celebrities-list">
        <h1 className="celebrities-heading">Celebrities</h1>
        {celebrities.map((data) => (
          <Celebrity
            picture={data.picture}
            fullname={data.fullname}
            age={data.age}
            gender={data.gender}
            country={data.country}
            desc={data.desc}
            key={data.id}
            id={data.id}
            isActive={activeItem === data.id ? true : false}
            accordianHandler={accordianHandler}
            openModalHandler={openModalHandler}
            updateCelebrityHandler={updateCelebrityHandler}
          ></Celebrity>
        ))}
      </div>
    </div>
  );
}

export default App;
