import { useState } from 'react'

const MisionVision = () => {
  const [activeCard, setActiveCard] = useState(null)

  const cards = [
    {
      id: 'mision',
      icon: '🎯',
      title: 'Misión',
      content: 'Brindar asesoría agrícola de calidad que permita a los productores mexicanos optimizar sus cultivos, aumentar sus rendimientos y adoptar prácticas sustentables que protejan nuestros recursos naturales.',
    },
    {
      id: 'vision',
      icon: '🔭',
      title: 'Visión',
      content: 'Ser la empresa líder en consultoría agronómica, reconocida por nuestro compromiso con la innovación tecnológica y la agricultura responsable para el desarrollo del campo.',
    },
  ]

  return (
    <section className="bg-wine-900 py-20">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-wine-800/60 border border-wine-700/50 rounded-2xl p-10 cursor-pointer transition-all duration-500 hover:border-gold-500/30 hover:bg-wine-800/80 overflow-hidden"
              onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <span className="text-5xl block mb-6">{card.icon}</span>
                <h3 className="text-3xl font-heading font-bold text-white mb-4">{card.title}</h3>
                <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6"></div>
                <div className={`transition-all duration-500 overflow-hidden ${
                  activeCard === card.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 md:max-h-60 md:opacity-100'
                }`}>
                  <p className="text-white/60 leading-relaxed">{card.content}</p>
                </div>
                <p className="text-gold-500/50 text-xs mt-4 md:hidden">
                  {activeCard === card.id ? 'Toca para cerrar' : 'Toca para ver más'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MisionVision
