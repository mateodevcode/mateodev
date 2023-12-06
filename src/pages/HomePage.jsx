import BarraDeNavegacion from "../components/BarraDeNavegacion";
import ImagenPrincipal from "../components/ImagenPrincipal";
import Portafolio from "../components/Portafolio";
import SobreMi from "../components/Sobremi";
import Footer from "../components/Footer";
import { useAuth } from "../context/useContext";

function HomePage() {
  const { themma } = useAuth();

  return (
    <div className={`${themma}`}>
      <BarraDeNavegacion />
      <ImagenPrincipal />
      <Portafolio />
      <SobreMi />
      <Footer />
    </div>
  );
}

export default HomePage;
