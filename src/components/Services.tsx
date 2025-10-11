import { Globe, Server, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Création de Site Web",
    description: "Sites web responsives et personnalisés adaptés à votre marque. Modernes, rapides et optimisés pour les conversions.",
    features: ["Design mobile-first", "Optimisé SEO", "Image de marque personnalisée", "Gestion de contenu"]
  },
  {
    icon: Server,
    title: "Gestion de Domaine",
    description: "Enregistrement et gestion complète de domaine. Nous gérons tous les détails techniques pour vous.",
    features: ["Enregistrement de domaine", "Gestion DNS", "Certificats SSL", "Configuration email"]
  },
  {
    icon: Shield,
    title: "Hébergement Fiable",
    description: "Hébergement de qualité entreprise avec 100% de disponibilité. Votre site reste rapide, sécurisé et toujours accessible.",
    features: ["Serveurs haute vitesse", "Sauvegardes quotidiennes", "Protection DDoS", "Surveillance 24/7"]
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            Tout Ce Dont Vous Avez Besoin, Au Même Endroit
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Arrêtez de jongler entre plusieurs fournisseurs. Obtenez votre présence en ligne complète avec un seul abonnement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300 group"
            >
              <CardHeader>
                <div className="mb-3 md:mb-4 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
