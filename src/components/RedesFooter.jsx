import { Link } from "react-router-dom";
import { useAuth } from "../context/useContext";
import { Tooltip } from "@chakra-ui/react";
import { iconos } from "../components/Iconos/iconsFooterData";

const RedesFooter = () => {
  const { themma } = useAuth();

  return (
    <div className="flex flex-row justify-center items-center">
      {iconos.map((icono, i) => {
        return (
          <Tooltip key={i} label={icono.nombre} placement={"top"}>
            <Link to={icono.linkTo} aria-label={icono.label} target="_blank">
              <div
                className={`mx-2 duration-300 ${
                  themma == "dark"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                } p-2 rounded-full ${icono.colorHover} hover:text-white`}
              >
                {icono.icon}
              </div>
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default RedesFooter;
