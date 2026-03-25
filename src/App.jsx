import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Nosotros from './components/Nosotros.jsx'
import MisionVision from './components/MisionVision.jsx'
import Servicios from './components/Servicios.jsx'
import Proceso from './components/Proceso.jsx'
import Galeria from './components/Galeria.jsx'
import Equipo from './components/Equipo.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Nosotros />
      <MisionVision />
      <Servicios />
      <Proceso />
      <Galeria />
      <Equipo />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
