import "./Person.scss";

function Person({ name, age, children, icrease, change, remove }) {
  return (
    <div className="person">
      <h1 className="title" onClick={icrease}>
        {name}
      </h1>
      <input className="input" type="text" value={name} onChange={change} />
      <p className="prof" onClick={remove}>
        {children}
      </p>
      <p className="age">
        Age: <span>{age}</span>
      </p>
    </div>
  );
}

export default Person;
