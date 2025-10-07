import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import MobileFirst from "@/components/MobileFirst";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <Services />
      <MobileFirst />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
