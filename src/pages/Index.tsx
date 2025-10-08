import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import SEO from "@/components/SEO";

// Lazy load non-critical sections
const Services = lazy(() => import("@/components/Services"));
const MobileFirst = lazy(() => import("@/components/MobileFirst"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Digital Agora - Solutions Web Tout-en-Un pour Entreprises Physiques"
        description="Transformez votre entreprise physique en puissance numérique. Digital Agora offre création de site web, gestion de domaine et hébergement dans un seul abonnement."
        canonical="https://digital-agora.fr/"
      />
      <Header />
      <Hero />
      <Statistics />
      <Suspense fallback={<div className="py-24 text-center">Chargement...</div>}>
        <Services />
        <MobileFirst />
        <Pricing />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
