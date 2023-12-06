import { VscHeartFilled } from "react-icons/vsc";
import { CgHeart } from "react-icons/cg";
import { useState } from "react";


function MeEncanta() {
  const [countLike, setCountLike] = useState(120);
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
    <div className={`w-full mt-4`}>
      <div className="flex flex-row justify-between items-center mt-2 mx-4">
        <button
          className="flex flex-row justify-center items-center bg-blue-600 text-white text-xs px-2 py-1 rounded-lg"
          onClick={onclickLike}
        >
          <CgHeart
            className={`${mostrarLike ? "flex" : "hidden"} mr-2 select-none`}
          />
          <VscHeartFilled
            className={`${mostrarLike ? "hidden" : "flex"} mr-2 select-none`}
          />
          Me gusta
        </button>
        <p className="text-left px-2 py-0.5 text-xs border-2 rounded-md">
          {countLike}
        </p>
      </div>
    </div>
  );
}

export default MeEncanta;
