import BarraDeNavegacion from "../components/BarraDeNavegacion"
import Footer from "../components/Footer"
import ImagenPrincipal from "../components/ImagenPrincipal"
import Sobremi from "../components/Sobremi"
import { useAuth } from "../context/useContext"

function HomePage() {

  const { themma } = useAuth()

  return (
    <div className={`${themma}`}>
        <BarraDeNavegacion />
        <ImagenPrincipal />
        <Sobremi />
        <Footer />
    </div>
  )
}

export default HomePage