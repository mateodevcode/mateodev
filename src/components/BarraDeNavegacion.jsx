import "../App.css";
import logo1 from "../img/iconos/logo-1.webp";
import logo2 from "../img/iconos/mateodev.webp";
import {
  BsList,
  BsGithub,
  BsLinkedin,
  BsSun,
  BsMoonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useContext";

function BarraDeNavegacion() {
  const {
    themma,
    onClickThemma,
    onclickMenu,
    mostrarMenu,
    onclickMostrarContacto,
  } = useAuth();

  return (
    <div
      className={`flex md:flex-row justify-around items-center w-full md:h-12 font-sans md:py-0 sm:py-2 ${themma} navbar`}
    >
      <Link to="/">
        <div className="flex md:flex-row justify-center items-center font-semibold" title="Página principal de Mateodev">
          <img className="w-7 mr-2 h-7" src={logo2} alt="logo de mateodev"/>
          <p className="bg-blue-800 px-2 py-1 rounded-xl text-white mr-1">
            Mateo
          </p>
          <p className="">Dev</p>
        </div>
      </Link>
      <div
        className={`flex md:flex-row sm:flex-col justify-center items-center md:flex sm:hidden`}
      >
        <Link to="/">
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Inicio</p>
        </Link>
        <Link to="/sobre-mi" onClick={onclickMenu}>
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Sobre mí</p>
        </Link>
        <Link to="/portafolio">
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Portafolio</p>
        </Link>
        <Link to="/">
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Blog</p>
        </Link>
        <Link to="/">
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">
            Aprende programación
          </p>
        </Link>
        <Link to="https://rockasus.com" target="_blank">
          <img
            className={`w-7 h-7 md:flex md:my-0 sm:my-2`}
            src={logo1}
            alt="logo de rockasus"
          />
        </Link>
        <p
          className="mx-4 md:my-0 sm:my-2 hover:text-sky-500 select-none cursor-pointer"
          onClick={onclickMostrarContacto}
        >
          Contacto
        </p>
      </div>
      <div className="flex text-2xl md:my-0 sm:my-2 animate-fade-left animate-once animate-duration-[2000ms] select-none">
        <BsSun
          className={`mx-2 ${themma == "light" ? "hidden" : ""} cursor-pointer`}
          onClick={onClickThemma}
        />
        <BsMoonFill
          className={`mx-2 ${themma == "dark" ? "hidden" : ""} cursor-pointer`}
          onClick={onClickThemma}
        />

        <Link to="https://github.com/mateodevcode" aria-label="Ver mi github" target="_blank">
          <BsGithub
            className={`mx-2 cursor-pointer ${
              themma == "light" ? "hover:text-gray-800" : ""
            }`}
          />
        </Link>
        <Link
          to="https://www.linkedin.com/in/mateo-lizcano-noriega/" aria-label="Ver mi linkedin" target="_blank"
        >
          <BsLinkedin
            className={`mx-2 cursor-pointer ${
              themma == "light" ? "hover:text-blue-600" : ""
            }`}
          />
        </Link>
        <BsList
          className={`sm:flex md:hidden mx-2 cursor-pointer`}
          onClick={onclickMenu}
        />
      </div>
      <div
        className={`flex md:flex-row sm:flex-col justify-center items-center md:hidden ${mostrarMenu} w-full text-white`}
      >
        <Link to="/" onClick={onclickMenu}>
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Inicio</p>
        </Link>
        <Link to="/sobre-mi" onClick={onclickMenu}>
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Sobre mí</p>
        </Link>
        <Link to="/portafolio" onClick={onclickMenu}>
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Portafolio</p>
        </Link>
        <Link to="/">
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Blog</p>
        </Link>
        <Link to="/">
          <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">
            Aprende programación
          </p>
        </Link>
        <Link to="https://rockasus.com" target="_blank">
          <img
            className={`w-7 h-7 md:flex md:my-0 sm:my-2`}
            src={logo1}
            alt="logo de rockasus"
          />
        </Link>
        <p
          className="mx-4 md:my-0 sm:my-2 hover:text-sky-500 select-none cursor-pointer"
          onClick={onclickMostrarContacto}
        >
          Contacto
        </p>
      </div>

    </div>
  );
}

export default BarraDeNavegacion;
