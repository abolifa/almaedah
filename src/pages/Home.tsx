import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ProductsSection from "@/components/products";
import WhyUs from "@/components/whyus";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ProductsSection />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
