import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Fotogalería', href: '#galeria' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const handleClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 rounded-2xl ${
      scrolled
        ? 'bg-wine-900/80 backdrop-blur-xl shadow-2xl shadow-wine-950/30 border border-wine-800/50'
        : 'bg-wine-900/40 backdrop-blur-md border border-white/10'
    }`}>
      <div className="flex justify-between items-center h-16 px-6">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleClick('#hero') }} className="flex items-center gap-2 group">
          <span className="font-heading font-bold text-sm md:text-base text-gold-500 leading-tight">
            Productores Ganaderos<br className="md:hidden" /><span className="hidden md:inline"> del Sureste</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              className="text-sm font-medium text-white/80 hover:text-gold-400 px-3 py-2 rounded-xl hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
          aria-label="Menú"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-gold-500 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-gold-500 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-gold-500 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
            className="block px-6 py-3 text-white/80 hover:text-gold-400 hover:bg-white/5 font-medium transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
