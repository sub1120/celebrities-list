import "./App.css";
import Celeb from "./Celeb";
import { useEffect, useReducer } from "react";
import stateReducer from "./state/reducer";
import { fetchCelebrities } from "./state/actions";

const initialState = [];

function App() {
  const [celebrities, dispatchCelebrities] = useReducer(
    stateReducer,
    initialState
  );

  useEffect(() => {
    fetchCelebrities(dispatchCelebrities);
  }, []);

  return (
    <div className="app">
      <h1>Celibrities</h1>
      <div className="list">
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
          ></Celeb>
        ))}
      </div>
    </div>
  );
}

export default App;
