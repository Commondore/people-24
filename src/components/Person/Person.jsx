import "./Person.scss";

function Person({ name, age, children }) {
  return (
    <div className="person">
      <h1 className="title">{name}</h1>
      <p className="prof">{children}</p>
      <p className="age">
        Age: <span>{age}</span>
      </p>
    </div>
  );
}

export default Person;
