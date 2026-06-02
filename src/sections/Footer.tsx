import { motion } from "framer-motion";
import {
  FaCheese,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const phoneNumber = "56966961713";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaCheese className="text-3xl text-cheese-400" />
              <span className="text-2xl font-bold">Don Queso</span>
            </div>
            <p className="text-gray-400 text-sm">
              Especialistas en quesos, cecinas y alimentos congelados en Talca,
              Chile. Más de 15 años de experiencia entregando calidad y sabor.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-cheese-400 transition-colors cursor-pointer"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="products"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-cheese-400 transition-colors cursor-pointer"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-cheese-400 transition-colors cursor-pointer"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-cheese-400 transition-colors cursor-pointer"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="text-cheese-400" />
                <span className="text-sm">C. 14 Sur 1492, Talca, Maule</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FaPhone className="text-cheese-400" />
                <span className="text-sm">+56 9 6696 1713</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/Don-Queso-Talca-61580454445879/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Don Queso. Todos los derechos
            reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Hecho con ❤️ en Talca, Chile
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
