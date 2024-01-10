import { useAuth } from "../context/useContext";
import RedesFooter from "./RedesFooter";


function Footer() {
  const { themma } = useAuth();

  return (
    <div className={`w-full flex flex-col h-full ${themma}`}>
      <div className="flex md:flex-row sm:flex-col justify-around items-center md:my-2">
        <RedesFooter />
      </div>
      <div className="text-center text-sm mt-5 mb-10">
        <p className="select-none">
          Todos los derechos reservados. Desarrollado por{" "}
          <strong>MateoDev</strong> © 2023.
        </p>
      </div>
    </div>
  );
}

export default Footer;
