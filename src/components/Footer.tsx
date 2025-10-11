import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="py-8 px-6 border-t bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Agora Flow</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Accompagner les entreprises en ligne
              </p>
            </div>
            
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Digital Agora. Tous droits réservés.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground border-t pt-4">
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/politique-cookies" className="hover:text-primary transition-colors">
              Politique des cookies
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/cgu" className="hover:text-primary transition-colors">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;