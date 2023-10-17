import plantList from "./data.json";
import { getPhoto } from "./functions";

const Exemple1 = () => {
  console.log(plantList);
  return (
    <>
      {plantList.map(({ name, id, cover }) => (
        <div key={id}>
          <img style={{ width: "100px" }} src={getPhoto(cover)} />
          <div>{name}</div>
        </div>
      ))}
    </>
  );
};

export default Exemple1;
