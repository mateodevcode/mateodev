import BarraDeNavegacion from '../components/BarraDeNavegacion'
import Footer from '../components/Footer'
import Portafolio from '../components/Portafolio'
import { useAuth } from '../context/useContext'

function PortafolioPage() {

  const { themma } = useAuth()

  return (
    <div className={`${themma}`}>
      <BarraDeNavegacion />
      <Portafolio />
      <Footer />
    </div>
  )
}

export default PortafolioPage