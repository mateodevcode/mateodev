import "../App.css";
import javascript from "../img/javascript.png";
import python from "../img/python.png";
import mongoDB from "../img/mongoDB.png";
import nodeJs from "../img/nodejs.png";
import imgReact from "../img/React.png";
import git from "../img/git.png";
import tailwind from "../img/tailwind.png";
import css from "../img/css.png";
import html from "../img/html.png";
import npm from "../img/npm.png";

// import rockasus from '../img/rockasus-2.png'
// import dynamos from '../img/dynamo.png'
// import mateodev from '../img/mateodev.png'
// import wonly from '../img/wonly.png'

import { useAuth } from "../context/useContext";
import { TypeBinary, TypeDescripcion, TypeNombres } from "./ShellInteractive";

function V0ImagenPrincipal() {
  const { themma } = useAuth();

  return (
    <div className={`w-full flex justify-center items-center ${themma}`}>
      <div className="w-11/12 h-full flex flex-row justify-around md:mt-20 sm:mt-32 md:mb-10 sm:mb-10">
        <div className="w-9/12 flex flex-col items-start">
          <div className="md:m-2 sm:m-1 w-full md:mt-40 sm:mt-20">
            <div className="md:text-6xl sm:text-lg font-semibold">
              <TypeNombres />
            </div>
          </div>
          <div className="md:m-2 sm:m-1 w-9/12">
            <div className="md:text-xl sm:text-xs text-gray-400 md:h-20 sm:h-32">
              <TypeDescripcion />
            </div>
          </div>
          <div className="md:m-2 sm:m-1 w-12/12 sm:mt-10">
            <div
              className={`md:text-xs sm:text-xs ${
                themma == "dark" ? "binary" : "nobinary"
              } opacity-30 md:h-32 sm:h-32`}
            >
              <TypeBinary />
            </div>
          </div>
          {/* <div className="flex md:flex-row sm:flex-wrap justify-center items-center md:m-2 sm:m-1 opacity-40">
            <img className="md:w-64 sm:w-20  rounded-md" src={rockasus} alt="" />
            <img className="md:w-28 sm:w-10 " src={dynamos} alt="" />
            <img className="md:w-64 sm:w-20 " src={wonly} alt="" />
            <img className="md:w-20  sm:w-10  mx-3" src={mateodev} alt="" />
          </div> */}
        </div>
        <div className="w-3/12 flex flex-col items-end opacity-90 select-none">
          <div className="flex md:flex-row sm:flex-col justify-center items-center md:my-2 sm:my-0">
            <img
              className="md:w-32 sm:w-10 md:p-2 sm:p-1 hover:animate-wiggle"
              src={imgReact}
              alt=""
            />
            <img
              className="md:w-24 sm:w-8 md:p-2 sm:p-1 hover:animate-wiggle md:mr-10 sm:mr-2"
              src={javascript}
              alt=""
            />
          </div>
          <div className="flex flex-row justify-center items-center md:my-2 sm:my-0.5">
            <img
              className="md:w-20 sm:w-8 md:p-2 sm:p-1 hover:animate-wiggle"
              src={css}
              alt=""
            />
            <img
              className="md:w-16 sm:w-8 md:p-2 sm:p-1 hover:animate-wiggle"
              src={html}
              alt=""
            />
            <img
              className="md:w-36 sm:w-10 md:p-2 sm:p-1 hover:animate-wiggle"
              src={tailwind}
              alt=""
            />
          </div>
          <div className="flex md:flex-row sm:flex-col justify-center items-center md:my-2 sm:my-0.5">
            <img
              className="md:w-64 sm:w-16 md:p-2 sm:p-1 hover:animate-wiggle"
              src={git}
              alt=""
            />
            <img
              className="md:w-32 sm:w-8 md:p-2 sm:p-1 hover:animate-wiggle"
              src={python}
              alt=""
            />
          </div>
          <div className="flex md:flex-row sm:flex-col justify-center items-center md:my-2 sm:my-0.5">
            <img
              className="md:w-36 sm:w-10 md:p-2 sm:p-1 hover:animate-wiggle"
              src={npm}
              alt=""
            />
            <img
              className="md:w-40 sm:w-14 md:p-2 sm:p-1 hover:animate-wiggle"
              src={nodeJs}
              alt=""
            />
          </div>
          <div className="flex flex-row justify-center items-center md:my-2 sm:my-0.5">
            <img
              className="md:w-56 sm:w-24 md:p-2 sm:p-1 hover:animate-wiggle md:mr-10 sm:mr-0"
              src={mongoDB}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default V0ImagenPrincipal;
