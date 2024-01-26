import { useState } from "react";
import "./App.css";
import Person from "./components/Person/Person";

function App() {
  const [title, setTitle] = useState("Hello React"); // [data, fn]

  const changeTitle = () => {
    if (title === "Hello React") {
      setTitle("New title");
    } else {
      setTitle("Hello React");
    }
  };

  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <div className="controls">
        <button className="btn" onClick={changeTitle}>
          Change title
        </button>
      </div>
      <div className="list">
        <Person name="Mike Jefferson" age={20}>
          Профессия: <span>Motion Designer</span>
        </Person>
        <Person name="John Jefferson" age={30}>
          Профессия: <span>Программист</span>
        </Person>
      </div>
    </div>
  );
}

export default App;
