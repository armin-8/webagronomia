/*
  Nosotros.jsx — Página "Quiénes Somos"
  
  Estructura:
  1. Header de la página (banner superior)
  2. Misión y Visión
  3. Valores de la empresa
  4. Equipo (opcional — placeholder para fotos)
  
  Conceptos que practicas:
  - Composición de secciones
  - Grid responsive
  - Mapeo de arrays para renderizar listas
*/

const Nosotros = () => {
  const valores = [
    {
      icon: '🌍',
      title: 'Sustentabilidad',
      description: 'Trabajamos en armonía con el medio ambiente, promoviendo prácticas que protejan nuestros recursos naturales.',
    },
    {
      icon: '🤝',
      title: 'Compromiso',
      description: 'Nos dedicamos al éxito de nuestros clientes con atención personalizada y seguimiento continuo.',
    },
    {
      icon: '📚',
      title: 'Innovación',
      description: 'Aplicamos las técnicas más modernas y la investigación más reciente en cada proyecto.',
    },
    {
      icon: '💪',
      title: 'Integridad',
      description: 'Actuamos con honestidad y transparencia en todas nuestras relaciones profesionales.',
    },
  ]

  return (
    <div>
      {/* ==================== HERO / BANNER ==================== */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Conoce al equipo que está transformando la agricultura en México.
          </p>
        </div>
      </section>

      {/* ==================== MISIÓN Y VISIÓN ==================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 leading-relaxed">
                Brindar soluciones agronómicas integrales que permitan a los productores 
                mexicanos maximizar sus rendimientos de forma sustentable, utilizando 
                tecnología de vanguardia y conocimiento científico aplicado al campo.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-earth-50 rounded-2xl p-8 border border-earth-100">
              <div className="w-14 h-14 bg-earth-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔭</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder en consultoría agronómica en el occidente de México, 
                reconocida por nuestra excelencia técnica, innovación constante y compromiso 
                con el desarrollo rural sustentable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NUESTRA HISTORIA ==================== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nacimos de la pasión por el campo y la convicción de que la agricultura mexicana 
              puede ser más productiva, eficiente y respetuosa con el medio ambiente.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Desde nuestros inicios, hemos trabajado de la mano con productores de Jalisco, 
              ayudándoles a implementar mejores prácticas de cultivo, optimizar el uso de 
              recursos y adoptar tecnologías que incrementan sus rendimientos.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== VALORES ==================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo día a día.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-primary-50 transition-colors duration-300"
              >
                <span className="text-5xl block mb-4">{valor.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{valor.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EQUIPO (Placeholder) ==================== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 text-lg">
              Profesionales comprometidos con el campo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ing. Carlos Pérez', role: 'Director General', emoji: '👨‍🌾' },
              { name: 'Ing. María López', role: 'Especialista en Suelos', emoji: '👩‍🔬' },
              { name: 'Ing. Roberto García', role: 'Asesor de Riego', emoji: '👨‍💼' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">{member.emoji}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nosotros
