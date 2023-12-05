import BarraDeNavegacion from "../components/BarraDeNavegacion"
import CopiImagenPrincipal from "../components/CopiImagenPrincipal"
import Portafolio from '../components/Portafolio'
import SobreMi from '../components/Sobremi'
import Footer from "../components/Footer"
import { useAuth } from "../context/useContext"

function HomePage() {

  const { themma } = useAuth()

  return (
    <div className={`${themma}`}>
        <BarraDeNavegacion />
        <CopiImagenPrincipal />
        <Portafolio />
        <SobreMi />
        <Footer />
    </div>
  )
}

export default HomePage