const Alianzas = () => {
  const alianzas = [
    { nombre: 'SAGARPA', emoji: '🏛️' },
    { nombre: 'INIFAP', emoji: '🔬' },
    { nombre: 'CONAGUA', emoji: '💧' },
    { nombre: 'FIRA', emoji: '🏦' },
    { nombre: 'CIMMYT', emoji: '🌾' },
    { nombre: 'UDG Agronomía', emoji: '🎓' },
  ]

  return (
    <section id="alianzas" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-4 block">Colaboradores</span>
          <h2 className="section-title text-wine-900">
            Nuestras <span className="text-gold-600">Alianzas</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {alianzas.map((a, i) => (
            <div key={i} className="group bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center aspect-square hover:bg-wine-900 transition-all duration-300 border border-gray-100 hover:border-wine-800">
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{a.emoji}</span>
              <p className="text-sm font-bold text-wine-900 group-hover:text-gold-500 transition-colors text-center">{a.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Alianzas
