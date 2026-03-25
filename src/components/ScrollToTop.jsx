/*
  ScrollToTop.jsx — Componente utilitario
  
  Problema: En una SPA (Single Page Application) con React Router,
  cuando navegas de una página a otra, el scroll NO se resetea.
  Si estabas abajo en "/servicios" y vas a "/contacto", llegas abajo también.
  
  Solución: Este componente escucha cambios de ruta y hace scroll a (0,0).
  Lo ponemos dentro del Layout para que aplique en toda la app.
*/

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]) // Se ejecuta cada vez que cambia la URL

  return null // No renderiza nada visual
}

export default ScrollToTop
