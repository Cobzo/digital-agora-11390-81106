import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";

// Lazy load non-critical sections
const Services = lazy(() => import("@/components/Services"));
const MobileFirst = lazy(() => import("@/components/MobileFirst"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
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
