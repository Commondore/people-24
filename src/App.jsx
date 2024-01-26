import { useState } from "react";
import "./App.css";
import Person from "./components/Person/Person";

function App() {
  const [title, setTitle] = useState("Hello React"); // [data, fn]
  const [people, setPeople] = useState([
    { name: "Mike", age: 30, prof: "Motion Designer" },
    { name: "John", age: 20, prof: "Junior Web Developer" },
  ]);

  const changeTitle = () => {
    if (title === "Hello React") {
      setTitle("New title");
    } else {
      setTitle("Hello React");
    }
  };

  const changeName = () => {
    const copyPeople = [...people];
    const person = { ...copyPeople[0] };
    person.name = "Sam";
    copyPeople[0] = person;

    setPeople(copyPeople);
  };

  const increaseAge = () => {
    setPeople((prevPeople) => {
      return prevPeople.map((person) => {
        return {
          ...person,
          age: person.age + 1,
        };
      });
    });
  };

  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <div className="controls">
        <button className="btn" onClick={changeTitle}>
          Change title
        </button>

        <button className="btn" onClick={changeName}>
          Change Name
        </button>

        <button className="btn" onClick={increaseAge}>
          Increase Age
        </button>
      </div>
      <div className="list">
        <Person name={people[0].name} age={people[0].age}>
          Профессия: <span>{people[0].prof}</span>
        </Person>
        <Person name={people[1].name} age={people[1].age}>
          Профессия: <span>{people[1].prof}</span>
        </Person>
      </div>
    </div>
  );
}

export default App;
