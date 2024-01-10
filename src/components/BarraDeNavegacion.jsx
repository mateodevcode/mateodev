import "../App.css";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useContext";
import MenuNav from "./MenuNav";
import LogoMateoDev from "./logo/LogoMateoDev";
import LogoRockasus from "./logo/LogoRockasus";
import EnlaceNav from "./EnlaceNav";
import IconsNav from "./Iconos/IconsNav";
import Contacto from "./Contacto";

function BarraDeNavegacion() {
  const {
    themma,
    onClickThemma,
  } = useAuth();

  return (
    <div
      className={`flex flex-row justify-around items-center w-full h-12 font-sans md:py-0 sm:py-2 ${themma} navbar`}
    >
      <Link to="https://mateodev.rockasus.com/">
        <div
          className="flex flex-row justify-center items-center font-semibold"
          title="Página principal de Mateodev"
        >
          <LogoMateoDev />
          <p className="bg-blue-800 px-2 py-0.5 rounded-xl text-white mx-1">
            Mateo
          </p>
          <p>Dev</p>
        </div>
      </Link>
      <div
        className={`flex md:flex-row sm:flex-col justify-center items-center md:flex sm:hidden`}
      >
        <EnlaceNav nombre={"Inicio"} LinkTo={"/"} target={null}/>
        <EnlaceNav nombre={"Sobre mí"} LinkTo={"/sobre-mi"} target={null}/>
        <EnlaceNav nombre={"Portafolio"} LinkTo={"/portafolio"} target={null}/>
        <EnlaceNav nombre={"Blog"} LinkTo={"/"} target={null}/>
        <EnlaceNav nombre={"Aprende programación"} LinkTo={"/"} target={"_blank"}/>
        <Link to="https://rockasus.com" target="_blank">
          <LogoRockasus />
        </Link>
        <Contacto nombre={"Contacto"} classP={"mx-4 md:my-0 sm:my-4 hover:text-sky-500 cursor-pointer"} classDiv={""} />
      </div>
      <div className="flex text-2xl md:my-0 sm:my-2 animate-fade-left animate-once animate-duration-[2000ms] select-none">
        <IconsNav icono={"BsGithub"} />
        <IconsNav icono={"BsLinkedin"} />
        <div className="cursor-pointer mx-2 flex flex-row justify-center items-center" onClick={onClickThemma}>
          {themma == "light" ? <BsMoonFill className="text-base" /> : <BsSun className="text-base" />}
        </div>
        <MenuNav />
      </div>
  
    </div>
  );
}

export default BarraDeNavegacion;


