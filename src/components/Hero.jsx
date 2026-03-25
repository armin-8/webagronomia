import { useState, useEffect } from 'react'

// Importamos las imágenes — Vite las optimiza automáticamente
import banner1Desktop from '../assets/BANNER1.png'
import banner2Desktop from '../assets/desktop 2.png'
import banner3Desktop from '../assets/desktop3.png'
import banner1Mobile from '../assets/ABNNER1MOBILE.png'
import banner2Mobile from '../assets/1.png'
import banner3Mobile from '../assets/2.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Cada slide tiene su versión desktop y mobile
  const slides = [
    { desktop: banner1Desktop, mobile: banner1Mobile },
    { desktop: banner2Desktop, mobile: banner2Mobile },
    { desktop: banner3Desktop, mobile: banner3Mobile },
  ]

  // Auto-play: cambia de slide cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer) // Limpia el timer al desmontar
  }, [slides.length])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Desktop image */}
          <img
            src={slide.desktop}
            alt={`Banner ${index + 1}`}
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile image */}
          <img
            src={slide.mobile}
            alt={`Banner ${index + 1} mobile`}
            className="block md:hidden w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay oscuro para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-wine-950/90 via-wine-950/40 to-wine-950/60 z-20"></div>

      {/* Contenido sobre el carrusel */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end pb-32 md:pb-40">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
                Ingeniería Agronómica Profesional
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-none mb-4 tracking-tight">
              AGRO<span className="text-gold-500">SERVICIOS</span>
            </h1>

            <p className="text-base md:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
              Soluciones integrales en agronomía para productores que buscan maximizar
              sus cosechas de forma sustentable y rentable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicios" onClick={(e) => { e.preventDefault(); document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary text-center">
                Nuestros Servicios
              </a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-secondary text-center">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dots del carrusel */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-3 bg-gold-500'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 text-white/30">
        <div className="w-5 h-7 border border-white/20 rounded-full flex justify-center pt-1">
          <div className="w-1 h-1.5 bg-gold-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
