import Person from "./Person/Person";

const People = ({ people, increase, change, remove }) => {
  return (
    <div className="list">
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            icrease={() => increase(person.id)}
            change={(event) => change(person.id, event)}
            remove={() => remove(person.id)}
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
};

export default People;
