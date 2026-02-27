import { useState } from "react";

const professions = ["Software Engineer", "Game Developer"];
const person = [
  { id: 1, name: "Dalary Powell", professions: professions[0] },
  { id: 2, name: "Bennett Lloyd", professions: professions[0] },
  { id: 3, name: "Emely Keller", professions: professions[0] },
  { id: 4, name: "Nico Navarro", professions: professions[0] },
  { id: 5, name: "Winter Larson", professions: professions[0] },
  { id: 6, name: "Rafael Bravo", professions: professions[1] },
  { id: 7, name: "Amoura Graham", professions: professions[1] },
  { id: 8, name: "Giovanni King", professions: professions[1] },
  { id: 9, name: "Victoria Hoover", professions: professions[1] },
  { id: 10, name: "Jaziel Raymond", professions: professions[1] },
  { id: 11, name: "Hadlee Brown", professions: professions[1] },
  { id: 12, name: "Elijah Hartman", professions: professions[1] },
];

const List = () => {
  const [selectedProf, setSelectedProf] = useState(professions[0]);

  const filteredPerson = person.filter((p) => p.professions === selectedProf);

  const listItems = filteredPerson.map((n) => (
    <li key={n.id}>
      {n.name} - {n.professions}
    </li>
  ));

  return (
    <>
      <select
        value={selectedProf}
        onChange={(e) => setSelectedProf(e.target.value)}>
        {professions.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      <ol>{listItems}</ol>
    </>
  );
};

export default List;
