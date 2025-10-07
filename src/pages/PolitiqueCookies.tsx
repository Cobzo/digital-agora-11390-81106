import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PolitiqueCookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Politique des cookies
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Utilisation des cookies</h2>
            <p>
              Le site Digital Agora utilise des cookies strictement nécessaires à son bon fonctionnement (sécurité, performance). Aucun cookie publicitaire ou de suivi n'est installé sans le consentement explicite de l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Consentement</h2>
            <p>
              En cas d'utilisation future d'outils tiers tels que Google Analytics, un bandeau de consentement sera affiché à la première visite, permettant d'accepter ou de refuser les cookies non essentiels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueCookies;
