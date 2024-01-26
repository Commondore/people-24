import "./App.css";
import Person from "./components/Person/Person";

function App() {
  return (
    <div className="wrapper">
      <Person name="Mike Jefferson" age={20} />
      <Person name="John Jefferson" age={30} />
    </div>
  );
}

export default App;
