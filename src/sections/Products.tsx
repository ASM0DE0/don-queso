import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheese,
  FaDrumstickBite,
  FaSnowflake,
  FaUtensils,
} from "react-icons/fa";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("quesos");

  const categories = [
    { id: "quesos", name: "Quesos", icon: FaCheese },
    { id: "cecinas", name: "Cecinas", icon: FaDrumstickBite },
    { id: "congelados", name: "Congelados", icon: FaSnowflake },
    { id: "preparados", name: "Alimentos Preparados", icon: FaUtensils },
  ];

  const products = {
    quesos: [
      {
        name: "Queso Gouda",
        price: "$8.990/kg",
        description:
          "Queso semiduro de origen holandés, sabor suave y cremoso. Ideal para sándwiches y tablas.",
        image:
          "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80",
        category: "Quesos",
      },
      {
        name: "Queso Cheddar",
        price: "$9.990/kg",
        description:
          "Queso de sabor intenso y color anaranjado. Perfecto para hamburguesas y gratinados.",
        image:
          "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&q=80",
        category: "Quesos",
      },
      {
        name: "Queso Mozzarella",
        price: "$7.990/kg",
        description:
          "Queso fresco y elástico, ideal para pizzas y pastas. Alta calidad para fundir.",
        image:
          "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&q=80",
        category: "Quesos",
      },
      {
        name: "Queso Parmesano",
        price: "$12.990/kg",
        description:
          "Queso duro y envejecido, sabor intenso. Perfecto para rallar sobre pastas.",
        image:
          "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
        category: "Quesos",
      },
      {
        name: "Queso Camembert",
        price: "$11.990/unidad",
        description:
          "Queso francés de pasta blanda y corteza comestible. Textura cremosa y suave.",
        image:
          "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&q=80",
        category: "Quesos",
      },
      {
        name: "Queso Ricotta",
        price: "$6.990/kg",
        description:
          "Queso fresco italiano, ligero y versátil. Ideal para rellenos y postres.",
        image:
          "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80",
        category: "Quesos",
      },
    ],
    cecinas: [
      {
        name: "Jamón Cocido",
        price: "$9.990/kg",
        description:
          "Jamón de cerdo cocido, bajo en sodio. Perfecto para sándwiches y fiambres.",
        image:
          "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&q=80",
        category: "Cecinas",
      },
      {
        name: "Salame Italiano",
        price: "$11.990/kg",
        description:
          "Salame tradicional italiano con especias. Sabor auténtico y aromático.",
        image:
          "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&q=80",
        category: "Cecinas",
      },
      {
        name: "Chorizo Español",
        price: "$10.990/kg",
        description:
          "Chorizo curado español, sabor intenso. Ideal para picadas y tapas.",
        image:
          "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80",
        category: "Cecinas",
      },
      {
        name: "Longaniza",
        price: "$8.990/kg",
        description:
          "Longaniza fresca de cerdo, condimentada tradicionalmente. Perfecta para asar.",
        image:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80",
        category: "Cecinas",
      },
    ],
    congelados: [
      {
        name: "Papas Fritas",
        price: "$4.990/kg",
        description:
          "Papas pre-fritas congeladas, crujientes y doradas. Listas para freír.",
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
        category: "Congelados",
      },
      {
        name: "Nuggets de Pollo",
        price: "$6.990/kg",
        description:
          "Nuggets de pollo empanizados, crujientes por fuera y suaves por dentro.",
        image:
          "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
        category: "Congelados",
      },
      {
        name: "Hamburguesas",
        price: "$7.990/kg",
        description:
          "Hamburguesas de carne premium congeladas. 100% carne de vacuno.",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        category: "Congelados",
      },
      {
        name: "Vegetales Mixtos",
        price: "$3.990/kg",
        description:
          "Mix de vegetales congelados: zanahoria, arvejas y maíz. Listos para cocinar.",
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
        category: "Congelados",
      },
    ],
    preparados: [
      {
        name: "Empanadas de Pino",
        price: "$2.500 c/u",
        description:
          "Empanadas chilenas tradicionales con pino: carne, cebolla, huevo y aceitunas.",
        image:
          "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=400&q=80",
        category: "Preparados",
      },
      {
        name: "Pastel de Choclo",
        price: "$8.990/porción",
        description:
          "Pastel de choclo tradicional chileno con carne y pollo. Casero y delicioso.",
        image:
          "https://images.unsplash.com/photo-1626804475297-411d863b5285?w=400&q=80",
        category: "Preparados",
      },
      {
        name: "Cazuela",
        price: "$7.990/porción",
        description:
          "Cazuela chilena con carne, pollo, verduras y choclo. Plato tradicional.",
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
        category: "Preparados",
      },
      {
        name: "Completo Italiano",
        price: "$3.500 c/u",
        description:
          "Completo italiano: palta, tomate y mayonesa. Sabor chileno auténtico.",
        image:
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        category: "Preparados",
      },
    ],
  };

  return (
    <section id="products" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia variedad de productos de alta calidad
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? "bg-cheese-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-cheese-100"
                }`}
              >
                <Icon />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products[activeCategory as keyof typeof products].map(
            (product, index) => (
              <ProductCard key={index} {...product} />
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
