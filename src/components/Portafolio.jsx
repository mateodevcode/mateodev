import { pages } from "../data/PageData";

import "../App.css";
import { TbWorldWww } from "react-icons/tb";
import { ImAndroid } from "react-icons/im";
import { useAuth } from "../context/useContext";
import MeEncanta from "./MeEncanta";
import { Link } from "react-router-dom";

function Portafolio() {
  const { themma } = useAuth();

  return (
    <div
      className={`w-full h-full ${themma} md:mb-48 sm:mb-32 flex flex-col justify-center items-center`}
    >
      <p className="text-center font-bold md:text-6xl sm:text-3xl md:mt-20 sm:mt-10 md:mb-20 sm:mb-10">
        Portafolio
      </p>
      <div className="w-10/12">
        <p
          className={`w-full text-white p-2 rounded-md font-semibold md:text-3xl sm:text-xl shadow-lg md:pl-10 sm:pl-5 italic ${
            themma == "light"
              ? "bg-green-800 shadow-black"
              : "bg-gray-900 shadow-blue-900"
          }`}
        >
          Productos terminados.
        </p>
        <div className="flex flex-wrap justify-center items-center mb-20">
          <CardCodePage
            imagen={pages[2].imgPage}
            namePage={pages[2].nombre}
            fechaPage={pages[2].date}
            linkTo={"https://mateodev.rockasus.com/"}
            target="_blank"
          />
          <CardCodePage
            imagen={pages[1].imgPage}
            namePage={pages[1].nombre}
            fechaPage={pages[1].date}
            linkTo={"https://rockasus.com/"}
            target="_blank"
          />

          <CardCodePage
            imagen={pages[0].imgPage}
            namePage={pages[0].nombre}
            fechaPage={pages[0].date}
            linkTo={"https://lupin.rockasus.com/"}
            target="_blank"
          />
        </div>
      </div>
      <div className="w-10/12">
        <p
          className={`w-full text-white p-2 rounded-md font-semibold md:text-3xl sm:text-xl shadow-lg md:pl-10 sm:pl-5 italic ${
            themma == "light"
              ? "bg-red-700 shadow-black"
              : "bg-gray-900 shadow-blue-900"
          }`}
        >
          Proyectos en curso...
        </p>
        <div className="flex flex-wrap justify-center items-center mb-20">
          <CardCodePage
            imagen={pages[3].imgPage}
            namePage={pages[3].nombre}
            fechaPage={pages[3].date}
            linkTo={"https://dynamos.rockasus.com/"}
            target="_blank"
          />

          <CardCodePage
            imagen={pages[4].imgPage}
            namePage={pages[4].nombre}
            fechaPage={pages[4].date}
            linkTo={""}
            target="_blank"
          />

          <CardCodePage
            imagen={pages[5].imgPage}
            namePage={pages[5].nombre}
            fechaPage={pages[5].date}
            linkTo={""}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}

const CardCodePage = ({ imagen, namePage, fechaPage, linkTo, target }) => {
  const { themma } = useAuth();
  return (
    <div className="md:w-80 sm:w-60 md:m-10 sm:m-5">
      <Link to={linkTo} target={target}>
        <div
          className={`w-full shadow-lg hover:scale-105 cursor-pointer ${
            themma == "light" ? " shadow-black" : "shadow-blue-900"
          } p-5 rounded-lg`}
        >
          <img
            className="rounded-lg md:w-72 md:h-72"
            src={imagen}
            alt={namePage}
          />
          <div className="flex justify-between items-center mt-5">
            <p className="font-bold text-sm">{namePage}</p>
            <div className="flex">
              <TbWorldWww className="mx-1 text-xl" />
              <ImAndroid className="mx-1 text-xl" />
            </div>
            <p className="text-xs text-gray-800">{fechaPage}</p>
          </div>
        </div>
      </Link>
      <MeEncanta />
    </div>
  );
};

export default Portafolio;
