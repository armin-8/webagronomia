/*
  MainLayout.jsx — Layout principal
  
  Este componente envuelve TODAS las páginas.
  Contiene: Navbar (arriba) + Outlet (contenido dinámico) + Footer (abajo)
  
  ¿Qué es <Outlet />?
  Es un "hueco" donde React Router inyecta la página actual.
  Si estás en "/" → muestra Home dentro del Outlet
  Si estás en "/contacto" → muestra Contacto dentro del Outlet
  
  Así el Navbar y Footer SIEMPRE están visibles sin repetir código.
*/

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ScrollToTop hace scroll arriba cada vez que cambias de página */}
      <ScrollToTop />
      
      {/* Navbar fijo arriba */}
      <Navbar />
      
      {/* Contenido principal — flex-grow hace que ocupe todo el espacio disponible */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer siempre abajo */}
      <Footer />
    </div>
  )
}

export default MainLayout
