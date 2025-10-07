import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PolitiqueConfidentialite = () => {
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
          Politique de confidentialité (RGPD)
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <p>
              Le site Digital Agora respecte la vie privée de ses utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Données collectées</h2>
            <p>
              Les informations collectées via le formulaire de contact (nom, prénom, adresse e-mail, message) sont utilisées uniquement pour répondre aux demandes des utilisateurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Utilisation des données</h2>
            <p>
              Ces données ne sont ni revendues ni partagées à des tiers. Elles sont conservées pour une durée maximale de 12 mois.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
            <p>
              L'utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles, qu'il peut exercer en contactant : <a href="mailto:severinab80@gmail.com" className="text-primary hover:underline">severinab80@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
