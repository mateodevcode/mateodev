import { Pagescompleted, pagesProcess } from "../data/PageData";
import "../App.css";
import { useAuth } from "../context/useContext";
import { Link } from "react-router-dom";

function Portafolio() {
  const { themma } = useAuth();

  return (
    <div
      className={`w-full h-full ${themma} md:mb-48 sm:mb-32 flex flex-col justify-center items-center`}
    >
      <p className="text-center font-bold md:text-6xl sm:text-3xl md:mt-20 sm:mt-10 md:mb-20 sm:mb-10">
        Portafolio
      </p>
      <div className="w-10/12 mb-24">
        <p
          className={`w-full text-white p-2 rounded-md font-semibold md:text-3xl sm:text-xl shadow-lg md:pl-10 sm:pl-5 italic ${
            themma == "light"
              ? "bg-green-800 shadow-black"
              : "bg-gray-900 shadow-blue-900"
          }`}
        >
          Productos terminados.
        </p>

        <div className="flex flex-wrap justify-center items-center">
          {Pagescompleted.map((page, i) => {
            return (
              <div className="md:w-80 sm:w-60 md:m-10 sm:m-5" key={i}>
                <Link to={page.linkTo} target={"_blank"}>
                  <div
                    className={`w-full shadow-lg hover:scale-105 cursor-pointer ${
                      themma == "light" ? " shadow-black" : "shadow-blue-900"
                    } p-5 rounded-lg`}
                  >
                    <img
                      className="rounded-lg md:w-72 md:h-72"
                      src={page.imgPage}
                      alt={page.nombre}
                    />
                    <div className="flex justify-between items-center mt-5">
                      <p className="font-bold text-sm">{page.nombre}</p>
                      <p
                        className={`text-xs ${
                          themma == "dark" ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {page.date}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Proyectos en curso... */}
      <div className="w-10/12 mb-24">
        <p
          className={`w-full text-white p-2 rounded-md font-semibold md:text-3xl sm:text-xl shadow-lg md:pl-10 sm:pl-5 italic ${
            themma == "light"
              ? "bg-red-700 shadow-black"
              : "bg-gray-900 shadow-blue-900"
          }`}
        >
          Proyectos en curso...
        </p>
        <div className="flex flex-wrap justify-center items-center">
          {pagesProcess.map((page, i) => {
            return (
              <div className="md:w-80 sm:w-60 md:m-10 sm:m-5" key={i}>
                <Link to={page.linkTo} target={"_blank"}>
                  <div
                    className={`w-full shadow-lg hover:scale-105 cursor-pointer ${
                      themma == "light" ? " shadow-black" : "shadow-blue-900"
                    } p-5 rounded-lg`}
                  >
                    <img
                      className="rounded-lg md:w-72 md:h-72"
                      src={page.imgPage}
                      alt={page.nombre}
                    />
                    <div className="flex justify-between items-center mt-5">
                      <p className="font-bold text-sm">{page.nombre}</p>
                      <p
                        className={`text-xs ${
                          themma == "dark" ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {page.date}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portafolio;
