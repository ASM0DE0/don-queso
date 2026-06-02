import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
