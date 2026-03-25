import { useState, useEffect } from 'react'

import banner1Desktop from '../assets/banner ganadero 1.jpg'
import banner2Desktop from '../assets/banner ganadero 2.jpg'
import banner3Desktop from '../assets/banner ganadero 3.jpg'
import banner1Mobile from '../assets/ABNNER1MOBILE.png'
import banner2Mobile from '../assets/1.png'
import banner3Mobile from '../assets/2.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { desktop: banner1Desktop, mobile: banner1Mobile },
    { desktop: banner2Desktop, mobile: banner2Mobile },
    { desktop: banner3Desktop, mobile: banner3Mobile },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={slide.desktop} alt={`Banner ${index + 1}`} className="hidden md:block w-full h-full object-cover" />
          <img src={slide.mobile} alt={`Banner ${index + 1} mobile`} className="block md:hidden w-full h-full object-cover" />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-wine-950/90 via-wine-950/40 to-wine-950/60 z-20"></div>

      <div className="absolute inset-0 z-30 flex flex-col justify-end pb-32 md:pb-40">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm mb-4">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
              Figuras Asociativas para la Producción
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
              Productores Ganaderos de Engorda
              <span className="text-gold-500"> del Sureste, S.A. de C.V.</span>
            </h1>

            <p className="text-sm md:text-base text-white/60 max-w-2xl mb-6 leading-relaxed italic">
              Este sitio web se realiza con fines académicos como parte de la asignatura
              Figuras Asociativas para la Producción. La organización es de carácter ficticio,
              creada con el propósito de aplicar conocimientos teóricos relacionados con la
              constitución, organización y funcionamiento de figuras asociativas en el sector productivo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#nosotros" onClick={(e) => { e.preventDefault(); document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary text-center">
                Conócenos
              </a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-secondary text-center">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? 'w-8 h-3 bg-gold-500' : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
