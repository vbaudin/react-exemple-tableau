import monstera from "../assets/monstera.jpg";
import olivier from "../assets/olivier.jpg";
import placeholder from "../assets/placeholder.jpg";

const imageMap = {
  MONSTERA: monstera,
  OLIVIER: olivier,
  default: placeholder,
};

export const getPhoto = (name) => {
  return imageMap[name];
};
