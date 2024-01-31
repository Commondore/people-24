import { useState } from "react";
import "./App.css";
import People from "./components/People/People";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Counter from "./components/Counter/Counter";
import Example from "./components/Example/Example";

function App() {
  const [title, setTitle] = useState("Hello React"); // [data, fn]
  const [people, setPeople] = useState([
    {
      name: "Mike",
      age: 30,
      prof: "Motion Designer",
      id: 1,
    },
    {
      name: "John",
      age: 20,
      prof: "Junior Web Developer",
      id: 2,
    },
    {
      name: "Sam",
      age: 22,
      prof: "Middle Web Developer",
      id: 3,
    },
  ]);
  const [isShow, setIsShow] = useState(true);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeName = (id, event) => {
    setPeople((people) => {
      return people.map((person) => {
        return {
          ...person,
          name:
            person.id === id
              ? event.target.value
              : person.name,
        };
      });
    });
  };

  const increaseAge = (id) => {
    const copyPeople = [...people];
    const index = people.findIndex(
      (person) => person.id === id
    );
    const person = { ...people[index] };
    person.age = person.age + 1;
    copyPeople[index] = person;
    setPeople(copyPeople);
    // setPeople((prevPeople) => {
    //   return prevPeople.map((person) => {
    //     const age = person.id === id ? person.age + 1 : person.age;
    //     return {
    //       ...person,
    //       age,
    //     };
    //   });
    // });
  };

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  const createPerson = (person) => {
    setPeople((people) => {
      return [...people, person];
    });
  };

  return (
    <div className="wrapper">
      <Example />
      <h1 className="title">{title}</h1>
      {/* <input type="text" value={title} onChange={changeTitle} /> */}

      <div className="controls">
        {!!people.length && (
          <ToggleButton
            isShow={isShow}
            toggle={() => setIsShow((isShow) => !isShow)}
          >
            Toggle Button
          </ToggleButton>
        )}
      </div>

      <Counter items={people}>Количество людей:</Counter>

      {isShow && (
        <People
          people={people}
          increase={increaseAge}
          change={changeName}
          remove={removePerson}
        />
      )}
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
