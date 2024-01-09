import "../App.css";
import { skills } from "../data/SkillData";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import { useAuth } from "../context/useContext";
import { TypeBinary, TypeNombres } from "./ShellInteractive";

function ImagenPrincipal() {
  const { themma } = useAuth();

  const images = skills.map((skill) => {
    return {
      original: skill.imagen_512,
      thumbnail: skill.imagen_150,
      originalAlt: skill.alt
    }
  })

  return (
    <div className={`w-full flex justify-around items-center ${themma}`}>
      <div className="w-10/12 h-full flex md:flex-row sm:flex-col justify-around md:my-36 sm:mt-10 sm:mb-48">
        <div className="md:w-8/12 sm:w-full flex flex-col items-start md:mt-20">
          <div className="md:m-2 sm:m-1 w-full">
            <div className="md:text-6xl sm:text-2xl font-semibold md:h-28 sm:h-16">
              <TypeNombres />
            </div>
          </div>
          <div className="md:m-2 sm:m-1 w-12/12">
            <div className="md:text-xl sm:text-xs text-gray-400 md:h-20 sm:h-12 md:text-left sm:text-justify md:mb-0 sm:mb-20">
              <p>MateoDev es solo el reflejo profesional de toda mi trayectoria, un espacio donde podrás ver mis proyectos y disfrutar del aprendizaje que brindamos a través de todos los recursos obtenidos de esta comunidad.</p>
            </div>
          </div>
          <div className="md:m-2 sm:m-1 w-12/12 sm:mt-10 md:flex sm:hidden">
            <div
              className={`md:text-xs sm:text-xs ${
                themma == "dark" ? "binary" : "nobinary"
              } opacity-30 md:h-32 sm:h-32`}
            >
              <TypeBinary />
            </div>
          </div>
        </div>
        <div
          className="md:w-12 md:h-12 flex flex-row justify-center items-center skill-contenedor"
          style={{ width: "200px", height: "200px", margin: "auto" }}
        >
          <ImageGallery
            items={images}
            infinite={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showThumbnails={false}
            showBullets={false}
            slideInterval={2500}
            autoPlay={true}
            lazyLoad={true}
          />
        </div>
      </div>
    </div>
  );
}

export default ImagenPrincipal;
