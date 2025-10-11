import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
const CGU = () => {
  return <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Conditions générales d'utilisation (CGU)
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptation des conditions</h2>
            <p>L'utilisation du site Agora Flow implique l'acceptation pleine et entière des présentes conditions générales d'utilisation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Obligations de l'utilisateur</h2>
            <p>
              L'utilisateur s'engage à ne pas perturber le bon fonctionnement du site et à ne pas tenter d'accéder à des zones protégées sans autorisation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
            <p>Agora Flow ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.</p>
          </section>
        </div>
      </div>
    </div>;
};
export default CGU;