import { motion } from 'framer-motion'
import { FaCheckCircle, FaTruck, FaWhatsapp, FaLeaf, FaBoxOpen } from 'react-icons/fa'

const Benefits = () => {
  const benefits = [
    {
      icon: FaCheckCircle,
      title: 'Calidad Garantizada',
      description: 'Todos nuestros productos son cuidadosamente seleccionados para garantizar la mejor calidad',
    },
    {
      icon: FaTruck,
      title: 'Atención Rápida',
      description: 'Despachos eficientes y atención personalizada para satisfacer tus necesidades',
    },
    {
      icon: FaWhatsapp,
      title: 'Pedidos por WhatsApp',
      description: 'Facilidad para hacer tus pedidos desde cualquier lugar con un solo clic',
    },
    {
      icon: FaLeaf,
      title: 'Productos Frescos',
      description: 'Mantenemos la frescura de nuestros productos con los más altos estándares',
    },
    {
      icon: FaBoxOpen,
      title: 'Atención Mayorista',
      description: 'Precios especiales para negocios y compras al por mayor',
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-wood-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los beneficios que nos hacen diferentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-cheese-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-cheese-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
