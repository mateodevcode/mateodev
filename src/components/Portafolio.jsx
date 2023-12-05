import rockasuspage from "../img/rockasus-page.png";
import codepage1 from "../img/code-1.jpg";
import codepage2 from "../img/code-2.jpg";
import webpage from "../img/web.png";
import "../App.css";
import { TbWorldWww } from "react-icons/tb";
import { ImAndroid } from "react-icons/im";
import { useAuth } from "../context/useContext";

function Portafolio() {
  const { themma } = useAuth();

  return (
    <div className={`w-full h-full ${themma} md:mb-48 sm:mb-32`}>
      <p className="text-center font-bold md:text-6xl sm:text-3xl md:mt-20 sm:mt-10 md:mb-20 sm:mb-10">
        Bienvenidos a mi portafolio
      </p>
      <div className="flex flex-wrap justify-center items-center mb-20">
        <CardCodePage imagen={rockasuspage} namePage="ROCKASUS" />
        <CardCodePage imagen={codepage2} namePage="ROCKASUS" />
        <CardCodePage imagen={rockasuspage} namePage="ROCKASUS" />
        <CardCodePage imagen={webpage} namePage="ROCKASUS" />
        <CardCodePage imagen={codepage1} namePage="ROCKASUS" />
        <CardCodePage imagen={codepage2} namePage="ROCKASUS" />
      </div>
    </div>
  );
}

const CardCodePage = (props) => {
  return (
    <div className="md:w-96 sm:w-60 m-3">
      <div className="absolute text-3xl flex flex-col justify-center items-center md:m-28 sm:m-12">
        <p className="md:mb-5 sm:mb-3 font-bold">{props.namePage}</p>
        <div className="flex">
          <TbWorldWww className="text-6xl mx-2 icon-card" />
          <ImAndroid className="text-6xl mx-2 icon-card" />
        </div>
      </div>
      <img className="rounded-lg opacity-50 cardPage" src={props.imagen} alt="" />
    </div>
  );
};

export default Portafolio;
