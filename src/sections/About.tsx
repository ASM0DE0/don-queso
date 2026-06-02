import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaHeart, FaStore } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80"
                alt="Don Queso - Nuestra historia"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-cheese-500 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Años de experiencia</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Don Queso nació hace más de 15 años en Talca, con la misión de llevar los mejores productos 
              alimenticios a los hogares y negocios de nuestra comunidad. Lo que comenzó como un pequeño 
              local familiar, hoy se ha convertido en un referente de calidad en la región.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nos especializamos en la venta mayorista y al detalle de quesos de calidad, cecinas, 
              alimentos congelados y una amplia variedad de productos preparados. Cada producto que 
              ofrecemos es cuidadosamente seleccionado para garantizar la frescura y el sabor que 
              nuestros clientes merecen.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-cheese-100 p-3 rounded-full">
                  <FaAward className="text-cheese-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Calidad Premium</h3>
                  <p className="text-sm text-gray-600">Productos seleccionados</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-cheese-100 p-3 rounded-full">
                  <FaUsers className="text-cheese-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Atención Personal</h3>
                  <p className="text-sm text-gray-600">Servicio cercano</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-cheese-100 p-3 rounded-full">
                  <FaHeart className="text-cheese-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Pasión</h3>
                  <p className="text-sm text-gray-600">Amor por lo que hacemos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="bg-cheese-100 p-3 rounded-full">
                  <FaStore className="text-cheese-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Venta Mayorista</h3>
                  <p className="text-sm text-gray-600">Para tu negocio</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
