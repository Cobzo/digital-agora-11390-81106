import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
const MentionsLegales = () => {
  return <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Mentions légales
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
            <p>Le présent site est édité par :</p>
            <ul className="list-none space-y-1 ml-0">
              <li><strong>Neyret Séverin</strong> – Micro-entrepreneur</li>
              <li><strong>Adresse :</strong> 49 rue de la Convention, 42300 Roanne</li>
              <li><strong>Email :</strong> contact@digital-agora.fr</li>
              <li><strong>Téléphone :</strong> 07 69 64 00 74</li>
              <li><strong>Code APE :</strong> 6201Z — Programmation informatique</li>
              <li><strong>TVA :</strong> non applicable – article 293B du CGI</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hébergeur</h2>
            <p>
              <strong>OVH Cloud</strong><br />
              2 rue Kellermann, 59100 Roubaix, France<br />
              Site : <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ovhcloud.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Objet du site</h2>
            <p>Le site Agora Flow a pour objet la présentation et la vente de services de création de sites web.</p>
          </section>
        </div>
      </div>
    </div>;
};
export default MentionsLegales;