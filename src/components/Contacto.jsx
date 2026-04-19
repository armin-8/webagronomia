import { useState } from 'react'
import bgImg from '../assets/3.png'

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario:', formData)
    setEnviado(true)
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
    setTimeout(() => setEnviado(false), 5000)
  }

  const inputClasses = "w-full px-4 py-3 bg-wine-800/50 border border-wine-700/50 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 outline-none transition-all"

  return (
    <section id="contacto" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-wine-950/85"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Hablemos</span>
          <h2 className="section-title text-white">
            Contác<span className="gold-text">tanos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info + Mapa */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-white/70 leading-relaxed mb-10 text-lg">
                Hola, somos una organización de productores ganaderos ubicada en el sureste de
                Teapa, Tabasco. Nos especializamos en la engorda de ganado para la producción
                de carne de alta calidad.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: '📍', title: 'Productores Ganaderos', info: 'Teapa, Tabasco, 86800' },
                  { icon: '📞', title: '(+34) 947 002 963', info: '' },
                  { icon: '✉️', title: 'productores.engorda.sureste@gmail.com', info: '' },
                  { icon: '📘', title: '@pagina_de_Facebook', info: '' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-wine-800/60 border border-wine-700/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/30 transition-colors">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-gold-500 font-semibold text-sm">{item.title}</p>
                      {item.info && <p className="text-white/50 text-xs">{item.info}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-wine-700/30 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15267.!2d-92.952085!3d17.547064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edb0ae04d48ed3%3A0x5502d9977576e3b7!2sEsquipulas%2C%2086800%20Teapa%2C%20Tab.%2C%20Mexico!5e0!3m2!1ses!2smx!4v1711000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Teapa, Tabasco"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-wine-900/50 backdrop-blur-sm border border-wine-800/50 rounded-3xl p-8">
            <h3 className="text-xl font-heading font-bold text-white mb-6">Envíanos un mensaje</h3>
            {enviado && (
              <div className="bg-gold-500/10 border border-gold-500/30 text-gold-400 px-4 py-3 rounded-xl mb-6 text-center">
                ¡Mensaje enviado con éxito!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Nombre *</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className={inputClasses} placeholder="Tu nombre completo" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Teléfono</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className={inputClasses} placeholder="(993) 123-4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Mensaje *</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="4" className={`${inputClasses} resize-none`} placeholder="Escríbenos tu mensaje..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-center text-lg">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
