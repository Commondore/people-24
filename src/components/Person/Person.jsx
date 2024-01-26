import "./Person.scss";
import LogoImg from "./logo.png";

function Person(props) {
  return (
    <div className="person">
      <img src={LogoImg} alt="" />
      <h1 className="title">{props.name}</h1>
      <p className="age">
        Age: <span>{props.age}</span>
      </p>
    </div>
  );
}

export default Person;
