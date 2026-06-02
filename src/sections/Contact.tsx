import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaFacebook,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "56966961713";

  return (
    <section id="contact" className="py-20 bg-wood-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para atenderte. ¡Contáctanos por el medio que
            prefieras!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ x: 10 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4"
            >
              <div className="bg-cheese-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-cheese-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Dirección</h3>
                <p className="text-gray-600">
                  C. 14 Sur 1492, Talca, Maule, Chile
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4"
            >
              <div className="bg-cheese-100 p-3 rounded-full">
                <FaPhone className="text-cheese-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
                <p className="text-gray-600">+56 9 6696 1713</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4"
            >
              <div className="bg-green-100 p-3 rounded-full">
                <FaWhatsapp className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 transition-colors"
                >
                  +56 9 6696 1713
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <FaFacebook className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Facebook</h3>
                <a
                  href="https://www.facebook.com/p/Don-Queso-Talca-61580454445879/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Don Queso Talca
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4"
            >
              <div className="bg-cheese-100 p-3 rounded-full">
                <FaClock className="text-cheese-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Horario</h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 9:00 - 19:00
                  <br />
                  Sábados: 9:00 - 14:00
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789!2d-71.657884!3d-35.444197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI2JzM5LjEiUyA3McKwMzknMjguNCJX!5e0!3m2!1ses!2scl!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Don Queso"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
