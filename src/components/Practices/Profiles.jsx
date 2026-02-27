const images = [
  "/data/scientist/img001.png",
  "/data/scientist/img002.png",
  "/data/scientist/img003.png",
  "/data/scientist/img004.png",
  "/data/scientist/img005.png",
  "/data/scientist/img006.png",
];

const Profiles = () => {
  return (
    <>
      {images.map((s, i) => (
        <img key={i} src={s} alt={`img${i}`} />
      ))}
    </>
  );
};

export default Profiles;
