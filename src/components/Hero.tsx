import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import ContactPopup from "./ContactPopup";

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[image:radial-gradient(circle_at_30%_20%,hsl(var(--primary-glow)/0.15),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--accent)/0.1),transparent_50%)]" />
        
        <div className="container relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Votre Entreprise, En Ligne en Quelques Minutes
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transformez votre entreprise physique en puissance numérique. Nous gérons tout - 
              <span className="text-foreground font-semibold"> création de site web, gestion de domaine et hébergement </span> 
              dans un seul abonnement sur mesure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => setIsPopupOpen(true)}
                className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300"
              >
                Commencer Aujourd'hui
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Solution Gérée</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-primary mb-2">Rapide</div>
              <div className="text-sm text-muted-foreground">Configuration</div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
            <p className="text-xs text-muted-foreground font-light">Découvrez nos services</p>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </section>
      <ContactPopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </>
  );
};

export default Hero;
