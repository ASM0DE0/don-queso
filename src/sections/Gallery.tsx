import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80",
    "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80",
    "https://images.unsplash.com/photo-1618164437241-4473940d1f5c?w=600&q=80",
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
    "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80",
    "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80",
    "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80",
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
    "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80",
  ];

  return (
    <section id="gallery" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galería de Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre la calidad y variedad de nuestros productos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 font-semibold">
                  Ver más
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
