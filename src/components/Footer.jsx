const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-wine-950 border-t border-gold-500/10">
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>

      <div className="container-custom py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌾</span>
              <span className="font-heading font-bold text-xl text-gold-500">AgroServicios</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Soluciones integrales en agronomía para el campo mexicano. Innovación, sustentabilidad y resultados.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', href: '#hero' },
                { name: 'Nosotros', href: '#nosotros' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Proceso', href: '#proceso' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                    className="text-white/40 hover:text-gold-500 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li>Asesoría en Cultivos</li>
              <li>Análisis de Suelos</li>
              <li>Sistemas de Riego</li>
              <li>Control de Plagas</li>
              <li>Agricultura Orgánica</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              <li className="flex items-center gap-2"><span>📍</span> Jalisco, México</li>
              <li className="flex items-center gap-2"><span>📞</span> +52 (33) 1234-5678</li>
              <li className="flex items-center gap-2"><span>✉️</span> contacto@agroservicios.com</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {['📘', '📸', '💬'].map((emoji, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-wine-800/60 border border-wine-700/30 rounded-lg flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500/30 transition-all">
                  <span>{emoji}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-wine-800/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">&copy; {currentYear} AgroServicios. Todos los derechos reservados.</p>
          <p className="text-white/20 text-xs">Desarrollado como proyecto académico</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
