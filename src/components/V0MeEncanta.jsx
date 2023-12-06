import { VscHeartFilled } from "react-icons/vsc";
import { CgHeart } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../context/useContext";
import { useState } from "react";
import foto10 from "../img/img-profile/foto-10.jpg";

function V0MeEncanta() {
  const { themma } = useAuth();
  const [countLike, setCountLike] = useState(0);
  const [mostrarLike, setMostrarLike] = useState(true);

  const onclickLike = () => {
    if (mostrarLike == true) {
      setMostrarLike(false);
      setCountLike(countLike + 1);
    } else {
      setMostrarLike(true);
      setCountLike(countLike - 1);
    }
  };

  return (
    <div className={`w-full ${themma} mt-20 flex justify-center items-center`}>
      <div className="w-60 h-80 bg-gray-100 rounded-xl">
        <div className="flex justify-end mt-2 mr-4">
          <FaMessage className="text-4xl m-0.5 text-red-600" />
          <div className="absolute flex flex-row justify-center items-center text-xs m-1 mt-2.5 text-white">
            <VscHeartFilled className="mx-1" />
            <p className="mx-1">{countLike}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img className="w-40 rounded-xl" src={foto10} alt="" />
            <button
              className="flex flex-row justify-center items-center bg-blue-600 text-white px-2 py-1 rounded-lg m-2"
              onClick={onclickLike}
            >
              <CgHeart
                className={`${
                  mostrarLike ? "flex" : "hidden"
                } mr-2 select-none`}
              />
              <VscHeartFilled
                className={`${
                  mostrarLike ? "hidden" : "flex"
                } mr-2 select-none`}
              />
              Me gusta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default V0MeEncanta;
