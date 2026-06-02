import { motion } from "framer-motion";
import { FaWhatsapp, FaStar } from "react-icons/fa";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

const ProductCard = ({
  name,
  price,
  description,
  image,
  category,
}: ProductCardProps) => {
  // Lo ideal a futuro sería que este número venga de variables de entorno (process.env) o props
  const phoneNumber = "56966961713";
  const message = encodeURIComponent(`Hola, quiero pedir: ${name} - ${price}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Una transición tipo resorte se siente más natural
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-[box-shadow] duration-300 flex flex-col h-full"
    >
      {/* Contenedor de la Imagen */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-cheese-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
          {category}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between mb-2 gap-2">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center text-cheese-500 shrink-0">
              <FaStar className="mr-1" />
              <span className="text-sm font-medium text-gray-700">4.9</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Footer de la tarjeta */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-cheese-600">{price}</span>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${name} por WhatsApp`}
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors font-medium shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="text-lg" />
            <span>Pedir</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
