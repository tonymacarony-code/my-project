import Hero from "./components/Hero";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Map from "./components/Map";
import Gallery from "./components/Gallery";
export default function Home() {

  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <ChooseUs />
      <Map />
      <Testimonials />
      <Gallery />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
