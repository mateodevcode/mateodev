import fotoPerfil1 from "../img/img-profile-2/foto-1.jpg";
import fotoPerfil7 from "../img/img-profile-2/foto-7.jpg";
import fotoPerfil3 from "../img/img-profile-2/foto-13.jpg";
import fotoPerfil10 from "../img/img-profile-2/foto-10.jpg";
import fotoPerfil12 from "../img/img-profile-2/foto-12.jpg";
import fotoPerfil17 from "../img/img-profile-2/foto-17.jpg";
import fotoPerfil14 from '../img/img-profile-2/foto-14.jpg'

import { useAuth } from "../context/useContext";
import ImageGallery from "react-image-gallery";


function Sobremi() {
  const { themma } = useAuth();
  const images = [
    {
      original: fotoPerfil1
    },
    {
      original: fotoPerfil7
    },
    {
      original: fotoPerfil3
    },
    {
      original: fotoPerfil10
    },
    {
      original: fotoPerfil12
    },
    {
      original: fotoPerfil17
    },
    {
      original: fotoPerfil14
    },
    
  ]

  return (
    <div className="w-full flex flex-row h-full md:justify-center md:items-start md:mt-40 md:mb-40 sm:mt-10 sm:mb-10">
      <div className="flex flex-col mx-5 md:w-5/12  md:text-base sm:text-xs md:mt-20 sm:mt-0">
        <p className="md:text-6xl sm:text-2xl font-bold md:mt-5 sm:mb-0">
          Bienvenido a mi espacio personal
        </p>
        <p className="md:text-3xl md:my-2 sm:my-0 sm:text-sm sm:mb-2">
          <i>Aquí podrás conocerme un poco más de mí</i>
        </p>
        <div className="md:hidden sm:flex">
          <ImageGallery
          infinite={true}
          autoPlay={true} 
          showFullscreenButton={false}
          showPlayButton={false}
          slideInterval={1500}
          lazyLoad={true}
          items={images} />
        </div>
        <p className="md:text-xl sm:text-xs md:mt-2 sm:mt-5">
          <i>
            Bueno, este soy yo, <strong>Mateo Lizcano Noriega,</strong> un joven
            amante de la tecnología.
          </i>
        </p>
        <p className="md:text-xl sm:text-xs">
          <i>
            Me encanta la Tecnología y sobre todo la
            <strong> ciberseguridad</strong>.
          </i>
        </p>
        <p className="md:text-xl sm:text-xs">
          <i>
            Soy una persona,
            <strong> Alegre, Honesta, responsable y muy enfocada.</strong>
          </i>
        </p>
        <p className="md:text-xl sm:text-xs">
          <i>
            Actualmente, estoy realizando un máster en
            <strong> dirección y administración de empresas</strong> que junto
            con mis estudios profesionales en
            <strong> negocios internacionales</strong> me hacen una persona
            bastante completa como para 
            <strong> dirigir, organizar y ejecutar</strong> proyectos.
          </i>
        </p>
        <p className="md:text-xl sm:text-xs">
          <i>
            Actualmente, sé de 
            <strong> análisis de datos, desarrollo web, desarrollo Android, automatización de procesos, manejo de personal, liderazgo
            </strong> y lo más importante es que día a día sigo aprendiendo para estar
            actualizado de las nuevas tecnologías.
          </i>
        </p>
      </div>
      <div className="md:flex md:flex-row sm:flex-col justify-center items-center mx-5 md:w-5/12 sm:w-11/12 sm:hidden">
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
            src={fotoPerfil7}
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
            src={fotoPerfil3}
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
0