import BarraDeNavegacion from "../components/BarraDeNavegacion";
import Footer from "../components/Footer";
import Sobremi from "../components/Sobremi";
import { useAuth } from "../context/useContext";

function SobreMiPage() {
  const { themma } = useAuth();
  return (
    <div className={`${themma}`}>
      <BarraDeNavegacion />
      <Sobremi />
      <Footer />
    </div>
  );
}

export default SobreMiPage;
