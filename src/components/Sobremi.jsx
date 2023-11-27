import fotoPerfil1 from "../img/foto-1.jpg";
import fotoPerfil2 from "../img/foto-2.jpg";
import fotoPerfil4 from "../img/foto-4.jpg";
import fotoPerfil10 from "../img/foto-10.jpg";
import fotoPerfil12 from "../img/foto-12.jpg";
import fotoPerfil17 from "../img/foto-17.jpg";
import { useAuth } from "../context/useContext";

function Sobremi() {
  const { themma } = useAuth();

  return (
    <div className="w-full flex flex-row h-full md:justify-center md:items-start md:mt-20 md:mb-10 sm:mt-20 sm:mb-10">
      <div className="flex flex-col mx-5 md:w-5/12  md:text-base sm:text-xs md:mt-20 sm:mt-20 text-justify">
        <p className="md:text-6xl sm:text-lg font-bold md:mt-10 sm:mb-3">
          Bienvenido a mi espacio personal
        </p>
        <p className="md:text-2xl md:my-1 sm:my-0 sm:text-sm">
          <i>Aquí podrás conocerme un poco más de mí</i>
        </p>
        <p className="md:text-base sm:text-xs">
          <i>
            Bueno, este soy yo, <strong>Mateo Lizcano Noriega,</strong> un joven
            amante de la tecnología.
          </i>
        </p>
        <p>
          <i>
            Me encanta la Tecnología y sobre todo la
            <strong>ciberseguridad</strong>.
          </i>
        </p>
        <p>
          <i>
            Soy una persona,
            <strong>Alegre, Honesta, responsable y muy enfocada.</strong>
          </i>
        </p>
        <p>
          <i>
            Actualmente, estoy realizando un máster en
            <strong>dirección y administración de empresas</strong> que junto
            con mis estudios profesionales en
            <strong>negocios internacionales</strong> me hacen una persona
            bastante completa como para 
            <strong>dirigir, organizar y ejecutar</strong> proyectos.
          </i>
        </p>
        <p>
          <i>
            Actualmente, sé de
            <strong>
              análisis de datos, desarrollo web, desarrollo Android,
              automatización de procesos, manejo de personal, liderazgo
            </strong>
            y lo más importante es que día a día sigo aprendiendo para estar
            actualizado de las nuevas tecnologías.
          </i>
        </p>
      </div>
      <div className="flex md:flex-row sm:flex-col justify-center items-center mx-5 md:w-5/12 sm:w-11/12">
        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <img
            className={`md:w-48 sm:w-24 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil1}
            alt=""
          />
        </div>
        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <img
            className={`md:w-48 sm:w-24 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil17}
            alt=""
          />
          <img
            className={`md:w-48 sm:w-24 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil2}
            alt=""
          />
        </div>
        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <img
            className={`md:w-48 sm:w-24 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil10}
            alt=""
          />
          <img
            className={`md:w-48 sm:w-24 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil4}
            alt=""
          />
          <img
            className={`md:w-48 sm:w-24 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil12}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Sobremi;
