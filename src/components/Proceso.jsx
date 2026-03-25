import { useState } from 'react'

import paso1Img from '../assets/pexels-gustavo-fring-4894629.jpg'
import paso2Img from '../assets/pexels-shvetsa-5230963.jpg'
import paso3Img from '../assets/pexels-gustavo-fring-4975391.jpg'
import paso4Img from '../assets/pexels-juan-moccagatta-2159466094-36510008.jpg'
import paso5Img from '../assets/pexels-muhammad-yunus-2160062343-36489873.jpg'
import paso6Img from '../assets/pexels-gustavo-fring-5622492.jpg'

const Proceso = () => {
  const [activeStep, setActiveStep] = useState(0)

  const pasos = [
    { num: 1, title: 'Diagnóstico', img: paso1Img, desc: 'Evaluamos las condiciones de tu terreno, cultivos existentes, clima y recursos disponibles para crear una línea base del proyecto.' },
    { num: 2, title: 'Análisis de Suelo', img: paso2Img, desc: 'Realizamos muestreo y análisis de laboratorio para determinar nutrientes, pH, materia orgánica y salud del suelo.' },
    { num: 3, title: 'Plan de Cultivo', img: paso3Img, desc: 'Diseñamos un plan integral de producción con selección de cultivos, calendario de siembra y estrategias de manejo.' },
    { num: 4, title: 'Implementación', img: paso4Img, desc: 'Ejecutamos el plan con acompañamiento técnico en campo, sistemas de riego y manejo fitosanitario.' },
    { num: 5, title: 'Monitoreo', img: paso5Img, desc: 'Seguimiento continuo del desarrollo de cultivos, ajustes en tiempo real y reportes de avance periódicos.' },
    { num: 6, title: 'Cosecha', img: paso6Img, desc: 'Asesoría en el momento óptimo de cosecha, manejo post-cosecha y evaluación de rendimientos obtenidos.' },
  ]

  return (
    <section id="proceso" className="bg-white section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-4 block">Metodología</span>
          <h2 className="section-title text-wine-900">
            Nuestro <span className="text-gold-600">Proceso</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Active step detail with image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={pasos[activeStep].img}
                alt={pasos[activeStep].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-wine-900 font-bold text-lg">
                    {pasos[activeStep].num}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading">{pasos[activeStep].title}</h3>
                </div>
                <p className="text-white/80 leading-relaxed">{pasos[activeStep].desc}</p>
              </div>
            </div>
          </div>

          {/* Right: Step selector */}
          <div className="space-y-3">
            {pasos.map((paso, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  activeStep === i
                    ? 'bg-wine-900 border-gold-500/30 shadow-lg'
                    : 'bg-gray-50 border-gray-200 hover:border-gold-500/20 hover:bg-gray-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold transition-colors ${
                  activeStep === i ? 'bg-gold-500 text-wine-900' : 'bg-wine-100 text-wine-800'
                }`}>
                  {paso.num}
                </div>
                <div>
                  <h4 className={`font-bold text-lg transition-colors ${activeStep === i ? 'text-gold-500' : 'text-wine-900'}`}>
                    {paso.title}
                  </h4>
                  <p className={`text-sm mt-1 transition-colors line-clamp-1 ${activeStep === i ? 'text-white/60' : 'text-gray-500'}`}>
                    {paso.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proceso
