import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useContext";

const IconsNav = ({ icono }) => {
  const { themma } = useAuth();

  switch (icono) {
    case "BsGithub":
      return (
        <Link to="https://github.com/mateodevcode" target="_blank" className="flex flex-row justify-center items-center">
          <BsGithub
            className={`mx-2 cursor-pointer text-lg ${
              themma == "light" ? "hover:text-gray-800" : ""
            }`}
          />
        </Link>
      );
    case "BsLinkedin":
      return (
        <Link to="https://github.com/mateodevcode" target="_blank" className="flex flex-row justify-center items-center">
          <BsLinkedin
            className={`mx-2 cursor-pointer text-lg ${
              themma == "light" ? "hover:text-blue-700" : ""
            }`}
          />
        </Link>
      );
  }
};

export default IconsNav;
