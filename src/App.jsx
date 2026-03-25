import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Nosotros from './components/Nosotros.jsx'
import MisionVision from './components/MisionVision.jsx'
import Proceso from './components/Proceso.jsx'
import Servicios from './components/Servicios.jsx'
import Alianzas from './components/Alianzas.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Nosotros />
      <MisionVision />
      <Proceso />
      <Servicios />
      <Alianzas />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
