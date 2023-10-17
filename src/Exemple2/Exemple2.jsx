import { plantList2 } from "./data.js";

const Exemple2 = () => {
  console.log(plantList2);
  return (
    <>
      {plantList2.map(({ name, id, cover }) => (
        <div key={id}>
          <img style={{ width: "100px" }} src={cover} />
          <div>{name}</div>
        </div>
      ))}
    </>
  );
};

export default Exemple2;
