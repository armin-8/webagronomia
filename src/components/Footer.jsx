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
              <span className="font-heading font-bold text-lg text-gold-500">Productores Ganaderos</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Productores Ganaderos de Engorda del Sureste, S.A. de C.V. — Engorda de becerros
              con calidad y compromiso en Teapa, Tabasco.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', href: '#hero' },
                { name: 'Sobre nosotros', href: '#nosotros' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Fotogalería', href: '#galeria' },
                { name: 'Equipo', href: '#equipo' },
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
              <li>Asesoría técnica ganadera</li>
              <li>Comercialización de ganado</li>
              <li>Capacitación en manejo animal</li>
              <li>Engorda de becerros</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              <li className="flex items-center gap-2"><span>📍</span> Teapa, Tabasco, México</li>
              <li className="flex items-center gap-2"><span>📞</span> +52 (993) 123-4567</li>
              <li className="flex items-center gap-2"><span>📘</span> @productores_ganaderos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wine-800/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">&copy; {currentYear} Productores Ganaderos de Engorda del Sureste, S.A. de C.V.</p>
          <p className="text-white/20 text-xs">Proyecto académico — Figuras Asociativas para la Producción</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
