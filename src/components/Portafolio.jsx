import { pages } from '../data/PageData'


import "../App.css";
import { TbWorldWww } from "react-icons/tb";
import { ImAndroid } from "react-icons/im";
import { useAuth } from "../context/useContext";
import MeEncanta from "./MeEncanta";
import { Link } from 'react-router-dom';

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
          <Link to="https://md.rockasus.com/" target='_blank'><CardCodePage imagen={pages[2].imgPage} namePage={pages[2].nombre} fechaPage={pages[2].date} /></Link>
          <Link to="https://rockasus.com/" target='_blank'><CardCodePage imagen={pages[1].imgPage} namePage={pages[1].nombre} fechaPage={pages[1].date} /></Link>
          <Link to="https://lupin.rockasus.com/" target='_blank'><CardCodePage imagen={pages[0].imgPage} namePage={pages[0].nombre} fechaPage={pages[0].date} /></Link>
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
          <Link to="https://dynamos.rockasus.com/" target='_blank'><CardCodePage imagen={pages[3].imgPage} namePage={pages[3].nombre} fechaPage={pages[3].date} /></Link>
          <Link to="" target=''><CardCodePage imagen={pages[4].imgPage} namePage={pages[4].nombre} fechaPage={pages[4].date} /></Link>
          <Link to="" target=''><CardCodePage imagen={pages[5].imgPage} namePage={pages[5].nombre} fechaPage={pages[5].date} /></Link>
        </div>
      </div>
    </div>
  );
}

const CardCodePage = (props) => {
  const { themma } = useAuth();
  return (
    <div
      className={`md:w-80 sm:w-60 md:m-10 sm:m-5 shadow-lg hover:scale-110 cursor-pointer ${
        themma == "light" ? " shadow-black" : "shadow-blue-900"
      } p-5 rounded-lg`}
    >
      <img className="rounded-lg w-80" src={props.imagen} alt="" />
      <MeEncanta />
      <div className="flex justify-between items-center mt-2">
        <p className="font-bold">{props.namePage}</p>
        <div className="flex">
          <TbWorldWww className="mx-1 text-xl" />
          <ImAndroid className="mx-1 text-xl" />
        </div>
        <p className="text-xs text-gray-400">{props.fechaPage}</p>
      </div>
    </div>
  );
};

export default Portafolio;
