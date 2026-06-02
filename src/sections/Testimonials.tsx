import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Cliente frecuente',
      rating: 5,
      text: 'Excelente calidad en sus quesos y cecinas. Llevo años comprando aquí y nunca me han decepcionado. ¡Súper recomendado!',
    },
    {
      name: 'Carlos Pérez',
      role: 'Dueño de restaurante',
      rating: 5,
      text: 'Como proveedor para mi restaurante, Don Queso es insuperable. Productos frescos, buenos precios y entrega puntual.',
    },
    {
      name: 'Ana Rodríguez',
      role: 'Ama de casa',
      rating: 5,
      text: 'Los productos congelados son de muy buena calidad. Mis hijos aman los nuggets y las papas fritas. Siempre frescos.',
    },
    {
      name: 'Pedro Sánchez',
      role: 'Emprendedor',
      rating: 5,
      text: 'Compro al por mayor para mi local de completos. Los precios son excelentes y la atención es muy personalizada.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de personas que confían en nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-cream-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-cheese-400 text-3xl mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-cheese-500" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
