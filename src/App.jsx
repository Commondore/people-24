import { useState } from "react";
import "./App.css";
import Person from "./components/Person/Person";

function App() {
  const [title, setTitle] = useState("Hello React"); // [data, fn]
  const [people, setPeople] = useState([
    { name: "Mike", age: 30, prof: "Motion Designer", id: 1 },
    { name: "John", age: 20, prof: "Junior Web Developer", id: 2 },
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
          name: person.id === id ? event.target.value : person.name,
        };
      });
    });
  };

  const increaseAge = (id) => {
    const copyPeople = [...people];
    const index = people.findIndex((person) => person.id === id);
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

  let list = null;

  if (isShow) {
    list = (
      <div className="list">
        {people.map((person) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              icrease={() => increaseAge(person.id)}
              change={(event) => changeName(person.id, event)}
              remove={() => removePerson(person.id)}
            >
              Профессия: <span>{person.prof}</span>
            </Person>
          );
        })}
        {/* <Person
          name={people[0].name}
          age={people[0].age}
          icrease={() => increaseAge(people[0].id)}
          change={(event) => changeName(people[0].id, event)}
        >
          Профессия: <span>{people[0].prof}</span>
        </Person> */}
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <input type="text" value={title} onChange={changeTitle} />

      <div className="controls">
        {!!people.length && (
          <button className="btn" onClick={() => setIsShow((isShow) => !isShow)}>
            Toggle People
          </button>
        )}
      </div>
      {list}
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
