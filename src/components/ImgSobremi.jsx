import { useAuth } from "../context/useContext";
import { perfils } from "../data/PerfilData";

const ImgSobremi = ({imgPerfil}) => {
    const { themma } = useAuth()

  return (
    <div className="flex md:flex-col sm:flex-col justify-center items-center">
      <img
        className={`md:w-48 sm:w-24 md:h-64 sm:h-32 m-2 rounded-lg shadow-lg hover:scale-105 ${
          themma == "light" ? "shadow-black" : "shadow-blue-900"
        }`}
        src={perfils[imgPerfil].original}
        alt={perfils[imgPerfil].originalAlt}
      />
    </div>
  );
};

export default ImgSobremi;
