import ganadoImg from '../assets/650729244_18076863206614141_2951599525777551674_n.jpg'
import corralImg from '../assets/121226907_575501216539253_5798751890701691224_n.jpg'
import campoImg from '../assets/pexels-paulo-gustavo-modesto-1241776887-36378862.jpg'

const Servicios = () => {
  return (
    <section id="servicios" className="bg-gray-50 section-padding">
      <div className="container-custom">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-4 block">Lo que hacemos</span>
            <h2 className="section-title text-wine-900 mb-6">
              Engordamos tu <span className="text-gold-600">Ganado</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Trabajamos mediante la implementación de técnicas productivas eficientes e innovación
              en los procesos, buscando mejorar la productividad, generar mayores ingresos para
              nuestros socios y contribuir al fortalecimiento del sector ganadero en el municipio
              de Teapa, Tabasco, México.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Laboramos en equipo, compartiendo conocimientos y técnicas para mejorar constantemente
              nuestros métodos de producción. Nos enorgullece ser una parte importante de la industria
              ganadera en nuestra región y contribuir al desarrollo económico de nuestra comunidad.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={ganadoImg} alt="Engorda de ganado" className="w-full h-80 object-cover" />
          </div>
        </div>

        {/* Servicios highlight */}
        <div className="bg-wine-900 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gold-500 italic mb-6">
                "Engorda de Ganado en Teapa"
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Ofrecemos servicios de calidad y experiencia en el cuidado y alimentación de los
                animales, garantizando un producto final de excelencia. ¡Confía en nosotros para
                obtener la mejor carne de la zona!
              </p>
              <ul className="space-y-3">
                {['Asesoría técnica ganadera', 'Comercialización de ganado', 'Capacitación en manejo animal'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <span className="text-gold-500">›</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <img src={corralImg} alt="Becerros en corral" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src={campoImg} alt="Campo ganadero" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
