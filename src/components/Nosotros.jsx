import campoImg from '../assets/654573145_18318959548254597_8282831408002558447_n.jpg'
import equipoImg from '../assets/beefmaster_reloj_monterrey_mexico_1_vaca_becerro.jpg'

const Nosotros = () => {
  return (
    <section id="nosotros" className="relative bg-wine-950 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]"></div>

      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Conócenos</span>
          <h2 className="section-title text-white">
            Quiénes <span className="gold-text">Somos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-400 italic mb-6">Productores Ganaderos de Engorda del Sureste, S.A. de C.V.</p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Somos una organización ganadera comprometida con la eficiencia y el desarrollo
              del sector pecuario. Nos especializamos en la engorda de becerros de razas como
              Brangus y Beefmaster, destinados a su posterior comercialización en el mercado.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Nuestra actividad principal consiste en la adquisición y crianza de becerros jóvenes,
              a los cuales brindamos un manejo integral basado en buenas prácticas de alimentación,
              sanidad y bienestar animal, con el objetivo de incrementar su peso y valor comercial
              en un periodo determinado.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Nos distinguimos por nuestro compromiso con la calidad, la responsabilidad social
              y el desarrollo sostenible, asegurando la satisfacción de nuestros clientes y el
              crecimiento continuo de nuestra organización.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { num: '10', label: 'Hectáreas' },
                { num: '75', label: 'Cabezas/Año' },
                { num: '3', label: 'Ciclos Anuales' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-gold-500">{stat.num}</p>
                  <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-wine-700/50 shadow-2xl">
                <img src={campoImg} alt="Ganado Beefmaster" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500/20 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-wine-950 shadow-xl">
                <img src={equipoImg} alt="Becerro Beefmaster" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
