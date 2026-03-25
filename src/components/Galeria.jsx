import img1 from '../assets/654573145_18318959548254597_8282831408002558447_n.jpg'
import img2 from '../assets/652764130_18317649631254597_9046899333906021145_n.jpg'
import img3 from '../assets/650729244_18076863206614141_2951599525777551674_n.jpg'
import img4 from '../assets/633579240_122156566334733090_5227759975304808085_n.jpg'
import img5 from '../assets/Beefmaster 07.jpg'
import img6 from '../assets/PORTUGAL-Beefmaster-xato-10-meses-Carlos-Serra.jpg'
import img7 from '../assets/abf1d0b881eafb2960904e9e7c10a217.jpg'
import img8 from '../assets/pexels-paulo-gustavo-modesto-1241776887-36378862.jpg'
import img9 from '../assets/Entregan-premio-ganaderias-raza-Beefmaster-2.jpg'

const Galeria = () => {
  const fotos = [
    { img: img1, alt: 'Ganado Beefmaster en el corral' },
    { img: img2, alt: 'Becerros en engorda' },
    { img: img3, alt: 'Producción ganadera' },
    { img: img4, alt: 'Ganado en pastoreo' },
    { img: img5, alt: 'Raza Beefmaster' },
    { img: img6, alt: 'Becerro Beefmaster joven' },
    { img: img7, alt: 'Ganado bovino' },
    { img: img8, alt: 'Campo ganadero' },
    { img: img9, alt: 'Ganadería Beefmaster premiada' },
  ]

  return (
    <section id="galeria" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-4 block">Nuestro Trabajo</span>
          <h2 className="section-title text-wine-900">
            Foto<span className="text-gold-600">galería</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fotos.map((foto, i) => (
            <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={foto.img}
                alt={foto.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-wine-950/0 group-hover:bg-wine-950/40 transition-all duration-300 flex items-end">
                <p className="text-white font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {foto.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria
