import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      name: "Starter",
      description: "Idéal pour présenter son activité ou service unique",
      monthlyPrice: "12",
      yearlyPrice: "139",
      setupFee: "99",
      features: [
        "1 page vitrine responsive",
        "Domaine & hébergement*",
        "HTTPS (Cloudflare SSL)",
        "Support & mises à jour"
      ]
    },
    {
      name: "Business",
      description: "Le site pro complet, rapide et prêt à l'emploi",
      monthlyPrice: "19",
      yearlyPrice: "228",
      setupFee: "99",
      features: [
        "3 à 5 pages",
        "Domaine & hébergement*",
        "Sécurité SSL + optimisations",
        "Maintenance et support"
      ],
      popular: true
    },
    {
      name: "Evolve",
      description: "Pour booster sa visibilité et suivre ses performances",
      monthlyPrice: "29",
      yearlyPrice: "348",
      setupFee: "offert",
      features: [
        "5+ pages personnalisées",
        "Domaine & hébergement*",
        "SEO local + Google Analytics",
        "Sauvegardes & suivi performance",
        "Maintenance prioritaire"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tarification Simple et Transparente
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez l'offre adaptée à vos besoins. Sans frais cachés, sans engagement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Populaire
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm min-h-[3rem]">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <div className="text-4xl font-bold text-primary">
                    {plan.monthlyPrice}€<span className="text-lg text-muted-foreground">/mois</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Soit {plan.yearlyPrice}€/an
                  </div>
                  <div className="text-sm mt-4 font-medium text-primary">
                    Création du site : {plan.setupFee === 'offert' ? 'Offert' : `${plan.setupFee}€`}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]' 
                      : ''
                  } transition-all duration-300`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Choisir {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Le nom de domaine est à la charge du client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
