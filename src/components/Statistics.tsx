import { Card, CardContent, CardHeader } from "@/components/ui/card";

const statistics = [
  {
    percentage: "92%",
    title: "RECHERCHES LOCALES",
    description: "92 % des consommateurs utilisent Internet pour rechercher un commerce ou un service local.",
    source: "IPSOS"
  },
  {
    percentage: "+25 %",
    title: "CLIENTS RÉCURRENTS",
    description: "Les commerçants équipés d'une réservation en ligne constatent en moyenne +25 % de récurrence client.",
    source: "Statista & Deloitte"
  },
  {
    percentage: "-40 %",
    title: "CHARGE DE RÉPONSE",
    description: "Les chatbots/IA réduisent jusqu'à 40 % le temps consacré aux questions fréquentes (horaires, disponibilités, produits).",
    source: "Juniper Research"
  },
  {
    percentage: "+30 %",
    title: "VISITES EN MAGASINS",
    description: "Les commerçants avec un site optimisé gagnent en moyenne +30 % de fréquentation en boutique.",
    source: "Fevad"
  }
];

const Statistics = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Les Chiffres Parlent d'Eux-Mêmes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'impact réel d'une présence en ligne pour votre commerce
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300 group bg-secondary/30"
            >
              <CardHeader className="text-center pb-3">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                  {stat.title}
                </h3>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.percentage}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {stat.description}
                </p>
                <p className="text-xs font-medium text-primary">
                  —{stat.source}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
