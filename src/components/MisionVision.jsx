import { useState } from 'react'
import mvImg from '../assets/mision y vision.png'

const MisionVision = () => {
  const [activeCard, setActiveCard] = useState(null)

  const cards = [
    {
      id: 'mision',
      icon: '🎯',
      title: 'Misión',
      content: 'Somos una Sociedad Anónima de Capital Variable dedicada a la engorda de becerros mediante prácticas ganaderas responsables y eficientes, garantizando el adecuado manejo, alimentación y bienestar del ganado bovino, produciendo animales de alta calidad para su comercialización. Buscamos contribuir al desarrollo económico de los productores ganaderos de la región de Tabasco, especialmente en el municipio de Teapa, promoviendo la productividad, la organización y el crecimiento sostenible del sector.',
    },
    {
      id: 'vision',
      icon: '🔭',
      title: 'Visión',
      content: 'Ser una organización ganadera reconocida en el sureste de México por su eficiencia en la engorda y comercialización de becerros, destacándose por la calidad de su producción, el trabajo organizado entre sus socios y la implementación de buenas prácticas pecuarias que permitan el crecimiento sostenible de la empresa y el fortalecimiento del sector ganadero regional.',
    },
  ]

  return (
    <section className="bg-wine-900 py-20">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden border border-wine-700/50 shadow-2xl max-w-md w-full">
              <img src={mvImg} alt="Beefmaster Tabasco" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Cards de Misión y Visión */}
          <div className="space-y-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="group relative bg-wine-800/60 border border-wine-700/50 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:border-gold-500/30 hover:bg-wine-800/80 overflow-hidden"
                onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{card.icon}</span>
                    <h3 className="text-2xl font-heading font-bold text-white">{card.title}</h3>
                  </div>
                  <div className="w-12 h-0.5 bg-gold-500 mb-4"></div>
                  <div className={`transition-all duration-500 overflow-hidden ${
                    activeCard === card.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
                  }`}>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">{card.content}</p>
                  </div>
                  <p className="text-gold-500/50 text-xs mt-3 md:hidden">
                    {activeCard === card.id ? 'Toca para cerrar' : 'Toca para ver más'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MisionVision
