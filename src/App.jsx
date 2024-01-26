import { useState } from "react";
import "./App.css";
import Person from "./components/Person/Person";
import { Component } from "react";
import Button from "./components/Button/Button";

function App() {
  const [title, setTitle] = useState("Hello React"); // [data, fn]
  const [people, setPeople] = useState([
    { name: "Mike", age: 30, prof: "Motion Designer" },
    { name: "John", age: 20, prof: "Junior Web Developer" },
  ]);

  const changeTitle = (text) => {
    if (title === "Hello React") {
      setTitle(text);
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
        {/* <button className="btn" onClick={() => changeTitle("New title")}>
          Change title
        </button> */}
        <Button click={() => changeTitle("New title")}>Change title</Button>

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

// class App extends Component {
//   state = {
//     title: "Some title",
//   };

//   changeName = () => {
//     this.setState({ ...this.state, title: "New title" });
//   };

//   render() {
//     return (
//       <div className="wrapper">
//         <h1 className="title" onClick={this.changeName}>
//           {this.state.title}
//         </h1>
//       </div>
//     );
//   }
// }

export default App;
