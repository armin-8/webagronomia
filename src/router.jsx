/*
  router.jsx — Configuración de rutas de la aplicación
  
  Aquí definimos TODAS las URLs de nuestra página.
  Usamos createBrowserRouter (React Router v6) que es la forma moderna.
  
  Estructura:
  - "/" → Layout principal (Navbar + Footer siempre visibles)
    - "/" → Home (página de inicio)
    - "/nosotros" → Quiénes somos
    - "/servicios" → Nuestros servicios
    - "/contacto" → Formulario de contacto
*/

import {
  createBrowserRouter,   // Crea el router
  createRoutesFromElements, // Permite usar JSX para definir rutas
  Route,                    // Componente para definir cada ruta
} from 'react-router-dom'

// Layout principal (contiene Navbar + Outlet + Footer)
import MainLayout from './layouts/MainLayout.jsx'

// Páginas
import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Servicios from './pages/Servicios.jsx'
import Contacto from './pages/Contacto.jsx'

export const router = createBrowserRouter(
  createRoutesFromElements(
    // Ruta raíz: MainLayout envuelve todas las páginas
    // errorElement: lo que se muestra si la URL no existe
    <Route path="/" element={<MainLayout />} errorElement={<h1 className="text-center text-2xl mt-20">404 - Página no encontrada</h1>}>
      
      {/* index = true significa que esta es la ruta por defecto de "/" */}
      <Route index element={<Home />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="servicios" element={<Servicios />} />
      <Route path="contacto" element={<Contacto />} />
    </Route>
  )
)
