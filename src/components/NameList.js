import React from "react";
import Person from './Person'

function NameList() {
  const names = ["Geralt", "Dandelion", "Yennefer", "Ciri"];
  const nameList = names.map(name => <h2>{name}</h2>);
  const persons = [
    {
      id: 1,
      name: "Geralt",
      nature: "Witcher"
    },
    {
      id: 2,
      name: "Dandelion",
      nature: "Bard"
    },
    {
      id: 3,
      name: "Yennefer",
      nature: "Sorceress"
    }
  ];

  const personList = persons.map(person => <Person key={person.id} person={person} />);

  return (
    <div>
      <div>{nameList}</div>
      <div>{personList}</div>
    </div>
  );
}

export default NameList;
