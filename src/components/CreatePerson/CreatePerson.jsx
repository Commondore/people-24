import { useState } from "react";
import "./CreatePerson.css";

const CreatePerson = ({ create }) => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
    prof: "",
  });

  const changeHandler = (event) => {
    setPerson((person) => {
      return {
        ...person,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    create({
      ...person,
      age: +person.age,
      id: crypto.randomUUID(),
    });

    setPerson({
      name: "",
      age: "",
      prof: "",
    });
  };

  return (
    <div className="add-person">
      <form onSubmit={submitHandler}>
        <div className="group">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={person.name}
            onChange={changeHandler}
          />
        </div>
        <div className="group">
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            value={person.age}
            onChange={changeHandler}
          />
        </div>
        <div className="group">
          <input
            type="text"
            name="prof"
            placeholder="Enter proffesion"
            value={person.prof}
            onChange={changeHandler}
          />
        </div>
        <div className="group">
          <button className="btn">Add person</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePerson;
