/*
  Home.jsx — Página de inicio
  
  Estructura de una landing page profesional:
  1. Hero section (lo primero que ve el usuario)
  2. Sección de servicios destacados
  3. Sección de por qué elegirnos
  4. Call to Action (CTA)
  
  Conceptos Tailwind que practicas:
  - Gradientes: bg-gradient-to-r from-X to-Y
  - Responsive: sm:, md:, lg: prefijos
  - Flexbox y Grid: flex, grid, gap
  - Hover effects: hover:scale-105, hover:shadow-lg
  - Transitions: transition-all duration-300
*/

import { Link } from 'react-router-dom'

const Home = () => {
  // Datos de servicios destacados — separar datos de la UI es buena práctica
  const serviciosDestacados = [
    {
      icon: '🌾',
      title: 'Asesoría Agrícola',
      description: 'Consultoría especializada para optimizar tus cultivos y maximizar rendimientos.',
    },
    {
      icon: '🔬',
      title: 'Análisis de Suelos',
      description: 'Estudios completos de suelo para determinar nutrientes y tratamientos necesarios.',
    },
    {
      icon: '💧',
      title: 'Sistemas de Riego',
      description: 'Diseño e implementación de sistemas de riego eficientes y sustentables.',
    },
  ]

  const estadisticas = [
    { numero: '500+', label: 'Hectáreas Asesoradas' },
    { numero: '150+', label: 'Clientes Satisfechos' },
    { numero: '10+', label: 'Años de Experiencia' },
    { numero: '98%', label: 'Tasa de Éxito' },
  ]

  return (
    <div>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-20 md:py-32 px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary-600/50 text-primary-100 px-4 py-1 rounded-full text-sm font-medium mb-6">
              🌱 Profesionales en Agronomía
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cultivamos el futuro del{' '}
              <span className="text-primary-300">campo mexicano</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl leading-relaxed">
              Ofrecemos asesoría integral en agronomía para productores que buscan 
              maximizar sus cosechas de forma sustentable y rentable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/servicios" className="btn-primary text-center text-lg">
                Ver Servicios
              </Link>
              <Link to="/contacto" className="btn-secondary text-center text-lg">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ESTADÍSTICAS ==================== */}
      <section className="bg-white py-12 border-b">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-600">
                  {stat.numero}
                </p>
                <p className="text-gray-500 mt-1 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICIOS DESTACADOS ==================== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Soluciones completas para cada etapa de tu producción agrícola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviciosDestacados.map((servicio, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <span className="text-4xl block mb-4">{servicio.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {servicio.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/servicios" className="btn-primary inline-block">
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== POR QUÉ ELEGIRNOS ==================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda: texto */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegirnos?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Experiencia Comprobada',
                    desc: 'Más de una década trabajando con productores de Jalisco y todo México.',
                  },
                  {
                    title: 'Tecnología de Punta',
                    desc: 'Utilizamos herramientas modernas de análisis y monitoreo de cultivos.',
                  },
                  {
                    title: 'Enfoque Sustentable',
                    desc: 'Promovemos prácticas agrícolas responsables con el medio ambiente.',
                  },
                  {
                    title: 'Atención Personalizada',
                    desc: 'Cada campo es único. Diseñamos planes a la medida de tus necesidades.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha: imagen placeholder */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <span className="text-8xl block mb-4">🌿</span>
                <p className="text-primary-700 font-medium">
                  Aquí irá una foto del campo o del equipo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para transformar tu producción?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y recibe una asesoría gratuita para evaluar el potencial de tu campo.
          </p>
          <Link to="/contacto" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors inline-block">
            Solicitar Asesoría Gratuita
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
