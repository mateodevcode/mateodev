import ImageGallery from "react-image-gallery";
import { perfils } from "../data/PerfilData";
import ImgSobremi from "./ImgSobremi";

function Sobremi() {
  const images = perfils.map((perfil) => {
    return {
      original: perfil.original,
      originalAlt: perfil.originalAlt,
    };
  });

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
              items={images}
              infinite={true}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={true}
              showThumbnails={false}
              showBullets={true}
              slideInterval={2500}
              autoPlay={true}
              lazyLoad={true}
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
            <strong> alegre, honesta, responsable y muy enfocada.</strong>
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
              {" "}
              análisis de datos, desarrollo web, desarrollo Android,
              automatización de procesos, manejo de personal, liderazgo
            </strong>{" "}
            y lo más importante es que día a día sigo aprendiendo para estar
            actualizado de las nuevas tecnologías.
          </i>
        </p>
      </div>
      <div className="md:flex md:flex-row sm:flex-col justify-center items-center mx-5 md:w-5/12 sm:w-11/12 sm:hidden">
        <ImgSobremi imgPerfil={0} />
        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <ImgSobremi imgPerfil={1} />
          <ImgSobremi imgPerfil={2} />
        </div>

        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <ImgSobremi imgPerfil={4} />
          <ImgSobremi imgPerfil={5} />
          <ImgSobremi imgPerfil={6} />
        </div>
      </div>
    </div>
  );
}

export default Sobremi;
