import { useState } from 'react'
import bgImg from '../assets/3.png'

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario:', formData)
    setEnviado(true)
    setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
    setTimeout(() => setEnviado(false), 5000)
  }

  const inputClasses = "w-full px-4 py-3 bg-wine-800/50 border border-wine-700/50 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 outline-none transition-all"

  return (
    <section id="contacto" className="relative section-padding overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-wine-950/90"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Hablemos</span>
          <h2 className="section-title text-white">
            Contácta<span className="gold-text">nos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-wine-900/50 backdrop-blur-sm border border-wine-800/50 rounded-3xl p-8">
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
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className={inputClasses} placeholder="(33) 1234-5678" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Asunto *</label>
                <select name="asunto" value={formData.asunto} onChange={handleChange} required className={inputClasses}>
                  <option value="" className="bg-wine-900">Selecciona un asunto</option>
                  <option value="asesoria" className="bg-wine-900">Asesoría en cultivos</option>
                  <option value="suelos" className="bg-wine-900">Análisis de suelos</option>
                  <option value="riego" className="bg-wine-900">Sistemas de riego</option>
                  <option value="plagas" className="bg-wine-900">Control de plagas</option>
                  <option value="otro" className="bg-wine-900">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Mensaje *</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="4" className={`${inputClasses} resize-none`} placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-center text-lg">Enviar Mensaje</button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            {[
              { icon: '📍', title: 'Ubicación', info: 'Jalisco, México' },
              { icon: '📞', title: 'Teléfono', info: '+52 (33) 1234-5678' },
              { icon: '✉️', title: 'Email', info: 'contacto@agroservicios.com' },
              { icon: '🕐', title: 'Horario', info: 'Lunes a Viernes: 8:00 AM - 6:00 PM' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-wine-800/60 border border-wine-700/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/30 transition-colors">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <p className="text-white/50 text-sm">{item.title}</p>
                  <p className="text-white font-medium">{item.info}</p>
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-wine-800/50">
              <p className="text-white/50 text-sm mb-4">Redes Sociales</p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'WhatsApp'].map((red, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-wine-800/60 border border-wine-700/30 rounded-xl flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500/30 transition-all">
                    <span className="text-lg">{['📘', '📸', '💬'][i]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
