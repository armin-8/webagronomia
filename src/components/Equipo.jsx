const Equipo = () => {
  const miembros = [
    { nombre: 'Yamileth Perez', cargo: 'Gerente general', emoji: '👩‍💼' },
    { nombre: 'Edgar Perez', cargo: 'Administrador de fincas', emoji: '👨‍💼' },
    { nombre: 'Jenifer Perez', cargo: 'Encargado de compras y ventas de ganado', emoji: '👩‍💼' },
    { nombre: 'Bryan Rafael Millares', cargo: 'Operadores de maquinaria agrícola', emoji: '👨‍🔧' },
    { nombre: 'Bryan Rafael Millares', cargo: 'Personal de mantenimiento y cuidado de los animales', emoji: '👨‍🌾' },
  ]

  return (
    <section id="equipo" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-6">
          <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-4 block">Nuestro Talento</span>
          <h2 className="section-title text-wine-900">
            Nuestro <span className="text-gold-600">Equipo</span>
          </h2>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-16 leading-relaxed">
          Nuestra organización, <strong className="text-wine-900">Productores Ganaderos de Engorda del Sureste, S.A. de C.V.</strong>,
          se encuentra en el sureste de Teapa, Tabasco, y nos especializamos en la engorda de ganado.
          Somos un equipo comprometido con el crecimiento y desarrollo de la industria ganadera de nuestra región.
        </p>

        <div className="border-t border-gray-200 pt-16">
          {/* Top row - 3 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {miembros.slice(0, 3).map((m, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-100 rounded-2xl border-2 border-gray-200 group-hover:border-gold-500/50 transition-colors flex items-center justify-center overflow-hidden">
                  {/* Placeholder — reemplazar con foto real cuando la tengan */}
                  <span className="text-5xl">{m.emoji}</span>
                </div>
                <p className="text-gray-500 text-sm mb-1">{m.cargo}</p>
                <h3 className="text-xl font-bold text-gold-600 font-heading">{m.nombre}</h3>
                <p className="text-gray-400 text-xs mt-1">Productores Ganaderos de Engorda del Sureste, S.A. de C.V.</p>
              </div>
            ))}
          </div>

          {/* Bottom row - 2 members centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
            {miembros.slice(3).map((m, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-100 rounded-2xl border-2 border-gray-200 group-hover:border-gold-500/50 transition-colors flex items-center justify-center overflow-hidden">
                  <span className="text-5xl">{m.emoji}</span>
                </div>
                <p className="text-gray-500 text-sm mb-1">{m.cargo}</p>
                <h3 className="text-xl font-bold text-gold-600 font-heading">{m.nombre}</h3>
                <p className="text-gray-400 text-xs mt-1">Productores Ganaderos de Engorda del Sureste, S.A. de C.V.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Equipo
