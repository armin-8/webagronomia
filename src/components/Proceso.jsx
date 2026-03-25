import { useState } from 'react'

import paso1Img from '../assets/beefmaster_reloj_monterrey_mexico_1becerros.jpg'
import paso2Img from '../assets/652764130_18317649631254597_9046899333906021145_n.jpg'
import paso3Img from '../assets/132447264_3618632711564337_6896276047704069133_n.jpg'

const Proceso = () => {
  const [activeStep, setActiveStep] = useState(0)

  const pasos = [
    {
      num: 1,
      title: 'Compra de Becerros',
      img: paso1Img,
      desc: 'Contamos con una red de proveedores de ganado en el sur de Veracruz, Chiapas y criadores locales especializados, que garantizan el abasto de becerros con las características cárnicas necesarias para su engorda. Todo esto se lleva a cabo mediante un estricto programa de selección y la implementación de buenas prácticas pecuarias, asegurando la calidad, sanidad y bienestar del animal desde su adquisición.',
    },
    {
      num: 2,
      title: 'Engorda de Becerros',
      img: paso2Img,
      desc: 'Nuestra capacidad de producción está proyectada bajo un manejo intermedio, trabajando con 3 ciclos anuales de engorda, cada uno con un lote de 25 becerros, lo que permite alcanzar una producción total de 75 cabezas de ganado al año. Contamos con una infraestructura básica pero funcional, adecuada para una organización en etapa inicial, que permite llevar un control eficiente de los procesos productivos.',
    },
    {
      num: 3,
      title: 'Comercialización y Distribución',
      img: paso3Img,
      desc: 'Nuestros productos están destinados a la comercialización en mercados regionales y nacionales, abarcando municipios como Teapa, Macuspana, Paraíso, Balancán y Villahermosa. Asimismo, extendemos nuestra distribución a diversos estados de la República como Veracruz, Campeche, Nuevo León, Durango y Tamaulipas.',
    },
  ]

  return (
    <section id="proceso" className="bg-white section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-4 block">Cría de Becerros</span>
          <h2 className="section-title text-wine-900">
            Nuestro <span className="text-gold-600">Proceso</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Contamos con una superficie de 10 hectáreas ubicada en el municipio de Teapa,
            en el estado de Tabasco, destinada a la cría, desarrollo y engorda de becerros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img src={pasos[activeStep].img} alt={pasos[activeStep].title} className="w-full h-full object-cover transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-wine-900 font-bold text-lg">{pasos[activeStep].num}</span>
                  <h3 className="text-2xl font-bold text-white font-heading">{pasos[activeStep].title}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {pasos.map((paso, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  activeStep === i ? 'bg-wine-900 border-gold-500/30 shadow-lg' : 'bg-gray-50 border-gray-200 hover:border-gold-500/20 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors ${
                    activeStep === i ? 'bg-gold-500 text-wine-900' : 'bg-wine-100 text-wine-800'
                  }`}>{paso.num}</div>
                  <h4 className={`font-bold text-lg transition-colors ${activeStep === i ? 'text-gold-500' : 'text-wine-900'}`}>{paso.title}</h4>
                </div>
                <p className={`text-sm leading-relaxed pl-14 ${activeStep === i ? 'text-white/70' : 'text-gray-500 line-clamp-2'}`}>{paso.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proceso
