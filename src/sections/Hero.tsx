import { motion } from 'framer-motion'
import { FaCheese, FaArrowRight } from 'react-icons/fa'
import Button from '../components/Button'

const Hero = () => {
  const phoneNumber = '56966961713'
  const message = encodeURIComponent('Hola, quiero hacer un pedido con Don Queso')

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cheese-400/20 via-cream-50 to-wood-200/30" />
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1920&q=80"
          alt="Quesos artesanales"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <FaCheese className="text-6xl text-cheese-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow"
          >
            Don Queso
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-cream-100 mb-4 font-medium"
          >
            Especialistas en quesos, cecinas y alimentos congelados
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-cream-200 mb-8 italic"
          >
            "Más de 15 años entregando calidad y sabor en Talca"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="text-lg px-8 py-4"
            >
              <span className="flex items-center gap-2">
                Pedir por WhatsApp
                <FaArrowRight />
              </span>
            </Button>

            <Button
              href="#products"
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              Ver Productos
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-white"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cheese-400">15+</div>
              <div className="text-sm">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cheese-400">1000+</div>
              <div className="text-sm">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cheese-400">50+</div>
              <div className="text-sm">Productos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cheese-400">100%</div>
              <div className="text-sm">Calidad garantizada</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-center"
        >
          <div className="text-sm mb-2">Desliza para más</div>
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
