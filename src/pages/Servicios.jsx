/*
  Servicios.jsx — Página de servicios
  
  Conceptos que practicas:
  - Renderizado condicional de listas
  - Grid con cards
  - Composición de secciones alternadas (fondo blanco/gris)
  - Buena práctica: datos separados de la UI
*/

import { Link } from 'react-router-dom'

const Servicios = () => {
  // Todos los servicios — fácil de agregar o quitar
  const servicios = [
    {
      icon: '🌾',
      title: 'Asesoría en Cultivos',
      description: 'Acompañamiento técnico durante todo el ciclo de producción. Selección de semillas, manejo de plagas, nutrición vegetal y estrategias de cosecha.',
      features: ['Plan de cultivo personalizado', 'Monitoreo semanal', 'Recomendaciones de fertilización', 'Control integrado de plagas'],
    },
    {
      icon: '🔬',
      title: 'Análisis de Suelos',
      description: 'Muestreo y análisis completo de tu terreno para conocer su composición, pH, nutrientes disponibles y necesidades específicas.',
      features: ['Muestreo profesional', 'Análisis de laboratorio', 'Interpretación de resultados', 'Plan de enmiendas'],
    },
    {
      icon: '💧',
      title: 'Sistemas de Riego',
      description: 'Diseño, instalación y mantenimiento de sistemas de riego tecnificado que optimizan el uso del agua.',
      features: ['Riego por goteo', 'Riego por aspersión', 'Automatización', 'Ahorro de agua hasta 60%'],
    },
    {
      icon: '🌱',
      title: 'Agricultura Orgánica',
      description: 'Te ayudamos a hacer la transición hacia una producción orgánica certificada, agregando valor a tus productos.',
      features: ['Certificación orgánica', 'Insumos biológicos', 'Compostas y biofertilizantes', 'Mercados especializados'],
    },
    {
      icon: '📊',
      title: 'Agricultura de Precisión',
      description: 'Uso de tecnología GPS, drones y sensores para un manejo más eficiente y preciso de tus parcelas.',
      features: ['Mapeo con drones', 'Sensores de humedad', 'Análisis de imágenes satelitales', 'Datos en tiempo real'],
    },
    {
      icon: '📋',
      title: 'Proyectos Productivos',
      description: 'Elaboración de proyectos para acceder a apoyos gubernamentales y financiamiento agrícola.',
      features: ['Estudios de factibilidad', 'Planes de negocio', 'Gestión de apoyos', 'Seguimiento administrativo'],
    },
  ]

  return (
    <div>
      {/* ==================== HERO / BANNER ==================== */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Soluciones integrales para cada necesidad de tu producción agrícola.
          </p>
        </div>
      </section>

      {/* ==================== GRID DE SERVICIOS ==================== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
              >
                {/* Ícono */}
                <span className="text-4xl block mb-4">{servicio.icon}</span>
                
                {/* Título */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {servicio.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {servicio.description}
                </p>
                
                {/* Lista de features */}
                <ul className="space-y-2 mt-auto">
                  {servicio.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-primary-500 flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESO DE TRABAJO ==================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo Trabajamos?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un proceso simple y efectivo para alcanzar los mejores resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Diagnóstico', desc: 'Evaluamos tu terreno y necesidades actuales.' },
              { step: '02', title: 'Planificación', desc: 'Diseñamos un plan de acción a tu medida.' },
              { step: '03', title: 'Ejecución', desc: 'Implementamos las soluciones junto a tu equipo.' },
              { step: '04', title: 'Seguimiento', desc: 'Monitoreamos resultados y ajustamos estrategias.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                {/* Número del paso */}
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-700 font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                
                {/* Línea conectora (no en el último) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas alguno de estos servicios?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Platiquemos sobre tu proyecto. La primera consulta es sin costo.
          </p>
          <Link to="/contacto" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors inline-block">
            Solicitar Información
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Servicios
