import yamilethImg from '../assets/YAMILETH PEREZ SANCHEZ.jpeg'
import edgarImg from '../assets/EDGAR PEREZ SANCHEZ.jpeg'
import jeniferImg from '../assets/JENIFER PEREZ PEREZ.jpeg'
import bryanImg from '../assets/BRYAN RAFAEL MILLARES.jpeg'

const Equipo = () => {
  const miembros = [
    { nombre: 'Yamileth Perez Sanchez', cargo: 'Gerente general', img: yamilethImg },
    { nombre: 'Edgar Perez Sanchez', cargo: 'Administrador de fincas', img: edgarImg },
    { nombre: 'Jenifer Perez Perez', cargo: 'Encargada de compras y ventas de ganado', img: jeniferImg },
    { nombre: 'Bryan Rafael Millares Hernández', cargo: 'Operador de maquinaria agrícola y mantenimiento', img: bryanImg },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {miembros.map((m, i) => (
              <div key={i} className="text-center group">
                <div className="w-36 h-36 mx-auto mb-5 rounded-2xl border-2 border-gray-200 group-hover:border-gold-500/50 transition-all duration-300 overflow-hidden shadow-lg group-hover:shadow-xl">
                  <img src={m.img} alt={m.nombre} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <p className="text-gray-500 text-sm mb-1">{m.cargo}</p>
                <h3 className="text-lg font-bold text-gold-600 font-heading">{m.nombre}</h3>
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
