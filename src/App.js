import "./App.css";
import Celeb from "./Celeb";
import { useEffect, useReducer, useState } from "react";
import stateReducer from "./state/reducer";
import { fetchCelebrities } from "./state/actions";

const initialState = [];

function App() {
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

  return (
    <div className="app">
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
          ></Celeb>
        ))}
      </div>
    </div>
  );
}

export default App;
