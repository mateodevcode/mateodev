import fotoPerfil1 from "../img/img-profile-2/foto-1.webp";
import fotoPerfil7 from "../img/img-profile-2/foto-7.webp";
import fotoPerfil3 from "../img/img-profile-2/foto-13.webp";
import fotoPerfil10 from "../img/img-profile-2/foto-10.webp";
import fotoPerfil12 from "../img/img-profile-2/foto-12.webp";
import fotoPerfil17 from "../img/img-profile-2/foto-17.webp";
import fotoPerfil14 from "../img/img-profile-2/foto-14.webp";

import { useAuth } from "../context/useContext";
import ImageGallery from "react-image-gallery";

function Sobremi() {
  const { themma } = useAuth();
  const images = [
    {
      original: fotoPerfil1,
      originalAlt: "Foto formal",
    },
    {
      original: fotoPerfil7,
      originalAlt: "Foto con mi novia",
    },
    {
      original: fotoPerfil3,
      originalAlt: "Foto formal",
    },
    {
      original: fotoPerfil10,
      originalAlt: "Foto en el carnaval 2023",
    },
    {
      original: fotoPerfil12,
      originalAlt: "Foto en el castillo de españa",
    },
    {
      original: fotoPerfil17,
      originalAlt: "Foto en la playa de taganga",
    },
    {
      original: fotoPerfil14,
      originalAlt: "Foto formal",
    },
  ];

  return (
    <div className="w-full flex flex-row h-full md:justify-center md:items-start md:mt-40 md:mb-40 sm:mt-10 sm:mb-10">
      <div className="flex flex-col mx-5 md:w-5/12  md:text-base sm:text-xs md:mt-20 sm:mt-0">
        <p className="md:text-6xl sm:text-2xl font-bold md:mt-5 sm:mb-0">
          Bienvenido a mi espacio personal
        </p>
        <p className="md:text-3xl md:my-2 sm:my-0 sm:text-sm sm:mb-10">
          <i>Aquí podrás conocerme un poco más de mí</i>
        </p>
        <div className="md:hidden sm:flex w-full flex justify-center items-center mb-10">
          <div className="w-64 h-80">
            <ImageGallery
              infinite={true}
              autoPlay={true}
              showFullscreenButton={false}
              showPlayButton={false}
              slideInterval={1500}
              lazyLoad={true}
              items={images}
            />
          </div>
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
            <strong>
              análisis de datos, desarrollo web, desarrollo Android,
              automatización de procesos, manejo de personal, liderazgo
            </strong>
            y lo más importante es que día a día sigo aprendiendo para estar
            actualizado de las nuevas tecnologías.
          </i>
        </p>
      </div>
      <div className="md:flex md:flex-row sm:flex-col justify-center items-center mx-5 md:w-5/12 sm:w-11/12 sm:hidden">
        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <img
            className={`md:w-48 sm:w-24 md:h-64 sm:h-32 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil1}
            alt="Foto de perfil formal"
          />
        </div>
        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <img
            className={`md:w-48 sm:w-24 md:h-64 sm:h-32 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil17}
            alt="Foto en las playas de taganga"
          />
          <img
            className={`md:w-48 sm:w-24 md:h-64 sm:h-32 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil7}
            alt="Fotos con mi novia"
          />
        </div>
        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <img
            className={`md:w-48 sm:w-24 md:h-64 sm:h-32 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil10}
            alt="Fotos en los carnavales 2023"
          />
          <img
            className={`md:w-48 sm:w-24 md:h-64 sm:h-32 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil3}
            alt="Foto de perfil formal"
          />
          <img
            className={`md:w-48 sm:w-24 md:h-64 sm:h-32 m-2 rounded-lg shadow-lg hover:scale-105 ${
              themma == "light" ? "shadow-black" : "shadow-blue-900"
            }`}
            src={fotoPerfil12}
            alt="Foto en el castillo de españa"
          />
        </div>
      </div>
    </div>
  );
}

export default Sobremi;