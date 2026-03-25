import campoImg from '../assets/pexels-flambo-388007-1112080.jpg'
import equipoImg from '../assets/pexels-helenalopes-841303.jpg'

const Nosotros = () => {
  return (
    <section id="nosotros" className="relative bg-wine-950 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]"></div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Conócenos</span>
            <h2 className="section-title text-white mb-6">
              Quiénes <span className="gold-text">Somos</span>
            </h2>
            <div className="w-16 h-1 bg-gold-500 mb-8"></div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Somos una empresa dedicada a brindar soluciones agronómicas integrales,
              con años de experiencia asesorando a productores en la optimización de
              sus cultivos y el cuidado sustentable de sus tierras.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Nuestro equipo de ingenieros agrónomos está comprometido con la innovación
              tecnológica y las mejores prácticas del campo, siempre con un alto sentido
              de responsabilidad ambiental y social.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { num: '500+', label: 'Hectáreas' },
                { num: '10+', label: 'Años' },
                { num: '150+', label: 'Clientes' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-gold-500">{stat.num}</p>
                  <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-wine-700/50 shadow-2xl">
                <img
                  src={campoImg}
                  alt="Campo agrícola"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500/20 rounded-3xl -z-10"></div>
              {/* Floating card with team photo */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-wine-950 shadow-xl">
                <img
                  src={equipoImg}
                  alt="Nuestro equipo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -top-4 -right-4 bg-wine-800/90 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-4 shadow-xl">
                <p className="text-gold-500 font-bold text-2xl">98%</p>
                <p className="text-white/60 text-xs">Tasa de éxito</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
