import cultivoImg from '../assets/pexels-koprivakart-4144833.jpg'
import sueloImg from '../assets/pexels-shvetsa-5230960.jpg'
import riegoImg from '../assets/pexels-nikita-karpovich-3861361-5732561.jpg'
import plagaImg from '../assets/pexels-rdne-7782351.jpg'
import organicoImg from '../assets/pexels-melquizedeque-31173020.jpg'
import planImg from '../assets/pexels-gustavo-fring-4975400.jpg'

const Servicios = () => {
  const servicios = [
    { img: cultivoImg, title: 'Asesoría en Cultivos', desc: 'Acompañamiento técnico durante todo el ciclo de producción agrícola.' },
    { img: sueloImg, title: 'Análisis de Suelos', desc: 'Estudios completos de composición, nutrientes, pH y materia orgánica.' },
    { img: riegoImg, title: 'Sistemas de Riego', desc: 'Diseño e instalación de sistemas de riego eficientes y sustentables.' },
    { img: plagaImg, title: 'Control de Plagas', desc: 'Manejo integrado de plagas con enfoque sustentable y preventivo.' },
    { img: organicoImg, title: 'Agricultura Orgánica', desc: 'Transición y certificación para producción orgánica responsable.' },
    { img: planImg, title: 'Planes de Negocio', desc: 'Proyectos productivos con análisis financiero y estudio de mercado.' },
  ]

  return (
    <section id="servicios" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-4 block">Lo que hacemos</span>
          <h2 className="section-title text-wine-900">
            Nuestros <span className="text-gold-600">Servicios</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-900/60 to-transparent"></div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-wine-900 mb-3 font-heading">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                <div className="w-0 group-hover:w-12 h-0.5 bg-gold-500 mt-4 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
