import { Link } from "react-router-dom";
import { useAuth } from "../context/useContext";
import logo2 from "../img/iconos/mateodev.png";
import Minicard from '../img/minicard/minicard-2.png'
import {
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsGooglePlay,
  BsWhatsapp,
  BsEnvelopeAt,
  BsGeoAltFill,
  BsXSquare
} from "react-icons/bs";
import imgPerfil from "../img/img-profile/img-perfil-2.jpg";

function Footer() {
  const { themma, mostarContacto, onclickMostrarContacto } = useAuth();

  const handlerDescargarImg = () => {
    const imgUrl = Minicard;
    const downlandLink = document.createElement('a');
    downlandLink.href = imgUrl;
    downlandLink.download = "MiniCard.jpg"
    document.body.appendChild(downlandLink);
    downlandLink.click();
    document.body.removeChild(downlandLink);
  }

  return (
    <div className={`w-full flex flex-col h-full ${themma}`}>
      <div className="flex justify-center items-center text-white">
        <div className={`${mostarContacto} rounded-xl mb-5`}>
          <div className="flex justify-center flex-row items-center mt-5">
            <img className="w-16 rounded-full mr-4" src={imgPerfil} alt="" />
            <div className="flex flex-col justify-center items-start">
              <p className="text-xl font-semibold">Mateo Lizcano Noriega</p>
              <p>Desarrollador de Software</p>
            </div>
          </div>
          <div className="flex justify-center items-center my-3">
            <button className="m-2 bg-blue-600 px-2 py-1 rounded-lg hover:bg-sky-300 text-white text-xs">
              Saludar
            </button>
            <button className="m-2 bg-blue-900 px-2 py-1 rounded-lg hover:bg-blue-300 text-white text-xs">
              Agendar una reunión
            </button>
          </div>
          <hr />
          <div className="mx-3 text-sm my-6">
            <p className="my-1">🪪Profesional en Negocios Internacionales</p>
            <p className="my-1">
              📝MBA - Dirección y administración de empresas
            </p>
            <p className="my-1">📟Desarrollador web</p>
            <p className="my-1">📲Desarrollador Android</p>
            <p className="my-1">📈Analista de datos</p>
            <p className="my-1">💻Analista en Ciberseguridad</p>
            <p></p>
          </div>
          <hr />
          <div className="flex flex-col justify-center items-center mt-6 mb-3">
            <div className="flex flex-row w-11/12 justify-start items-center">
              <BsEnvelopeAt />
              <p className="mx-5">mateodevcode@gmail.com</p>
            </div>
            <div className="flex flex-row w-11/12 justify-start items-center">
              <BsWhatsapp />
              <p className="mx-5">+34 675 464 502</p>
            </div>
            <div className="flex flex-row w-11/12 justify-start items-center">
              <BsGeoAltFill />
              <p className="mx-5">Málaga España</p>
            </div>
          </div>
          <div className="flex justify-end mr-7 items-center">
            <button className="bg-slate-700 px-2 py-1 mx-2 rounded-md text-xs text-white hover:bg-slate-500" onClick={handlerDescargarImg}>
              Descargar
            </button>
            <button className="bg-slate-700 px-2 py-1 mx-2 rounded-md text-xs text-white hover:bg-slate-500">
              Compartir
            </button>
            <BsXSquare className="mx-2 hover:scale-125 text-lg" onClick={onclickMostrarContacto}/>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center font-semibold md:my-2 md:mb-0 sm:mb-5 mt-10">
        <div  className="flex justify-center items-center cursor-pointer">
          <img className={`w-7 mx-2`} src={logo2} alt="" />
          <button className=" bg-blue-600 px-2 py-1 rounded-lg hover:bg-sky-300 text-white text-xs" onClick={onclickMostrarContacto}>
              Contactar
            </button>
        </div>
      </div>
      <div className="flex md:flex-row sm:flex-col justify-around items-center md:my-2">
        <div className="md:flex md:flex-row sm:flex-col justify-center items-center md:text-sm sm:hidden">
          <Link to="/">
            <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Inicio</p>
          </Link>
          <Link to="/">
            <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">Sobre mí</p>
          </Link>
          <Link to="/portafolio">
            <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">
              Portafolio
            </p>
          </Link>
          <Link to="/">
            <p className="mx-4 md:my-0 sm:my-2 hover:text-sky-500">
              Aprende programación
            </p>
          </Link>
          <p
            className="mx-4 md:my-0 sm:my-2 hover:text-sky-500 cursor-pointer"
            onClick={onclickMostrarContacto}
          >
            Contacto
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Link to="https://www.linkedin.com/in/mateo-lizcano-noriega/" target="_blank">
            <div
              className={`mx-2 duration-500 ${
                themma == "dark" ? "bg-white text-black" : "bg-black text-white"
              } p-2 rounded-full hover:bg-blue-600 hover:text-white hover:scale-150`}
            >
              <BsLinkedin />
            </div>
          </Link>
          <Link to="https://www.instagram.com/mateo.lizcano.noriega/" target="_blank">
            <div
              className={`mx-2 duration-500 ${
                themma == "dark" ? "bg-white text-black" : "bg-black text-white"
              } p-2 rounded-full hover:bg-pink-500 hover:text-white hover:scale-150`}
            >
              <BsInstagram />
            </div>
          </Link>
          <Link to="https://www.facebook.com/mateo.lizcano.noriega/" target="_blank">
            <div
              className={`mx-2 duration-500 ${
                themma == "dark" ? "bg-white text-black" : "bg-black text-white"
              } p-2 rounded-full hover:bg-blue-500 hover:text-white hover:scale-150`}
            >
              <BsFacebook />
            </div>
          </Link>
          <Link to="https://github.com/mateodevcode" target="_blank">
            <div
              className={`mx-2 duration-500 ${
                themma == "dark" ? "bg-white text-black" : "bg-black text-white"
              } p-2 rounded-full hover:bg-gray-800 hover:text-white hover:scale-150`}
            >
              <BsGithub />
            </div>
          </Link>
          <Link>
            <div
              className={`mx-2 duration-500 ${
                themma == "dark" ? "bg-white text-black" : "bg-black text-white"
              } p-2 rounded-full hover:scale-150`}
            >
              <BsGooglePlay />
            </div>
          </Link>
          <Link to="https://api.whatsapp.com/message/YZ472YWAWRA5E1?autoload=1&app_absent=0" target="_blank">
            <div
              className={`mx-2 duration-500 ${
                themma == "dark" ? "bg-white text-black" : "bg-black text-white"
              } p-2 rounded-full hover:bg-green-500 hover:text-white hover:scale-150`}
            >
              <BsWhatsapp className="" />
            </div>
          </Link>
        </div>
      </div>
      <div className="text-center text-sm mt-5 mb-10">
        <p className="select-none">
          Todos los derechos reservados. Desarrollado por <strong>MATEODEV</strong> © 2023.
        </p>
      </div>
    </div>
  );
}





export default Footer;
