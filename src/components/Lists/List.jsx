const names = [
  "Dalary Powell",
  "Bennett Lloyd",
  "Emely Keller",
  "Nico Navarro",
  "Winter Larson",
  "Rafael Bravo",
  "Amoura Graham",
  "Giovanni King",
  "Victoria Hoover",
  "Jaziel Raymond",
  "Hadlee Brown",
  "Elijah Hartman",
];

const List = () => {
  const listItems = names.map((n) => <li>{n}</li>);

  return <ul>{listItems}</ul>;
};

export default List;
