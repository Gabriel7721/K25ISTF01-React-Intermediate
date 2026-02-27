const names = [
  { id: 1, name: "Dalary Powell", professions: "Software Engineer" },
  { id: 2, name: "Bennett Lloyd", professions: "Software Engineer" },
  { id: 3, name: "Emely Keller", professions: "Software Engineer" },
  { id: 4, name: "Nico Navarro", professions: "Software Engineer" },
  { id: 5, name: "Winter Larson", professions: "Software Engineer" },
  { id: 6, name: "Rafael Bravo", professions: "Game Developer" },
  { id: 7, name: "Amoura Graham", professions: "Game Developer" },
  { id: 8, name: "Giovanni King", professions: "Game Developer" },
  { id: 9, name: "Victoria Hoover", professions: "Game Developer" },
  { id: 10, name: "Jaziel Raymond", professions: "Game Developer" },
  { id: 11, name: "Hadlee Brown", professions: "Game Developer" },
  { id: 12, name: "Elijah Hartman", professions: "Game Developer" },
];

const List = () => {
  const listItems = names.map((n) => <li>{n}</li>);

  return <ul>{listItems}</ul>;
};

export default List;
