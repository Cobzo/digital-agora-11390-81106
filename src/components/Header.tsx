import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContactPopup from "./ContactPopup";
import logo from "@/assets/logo.png";
const Header = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container max-w-6xl mx-auto px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={logo} alt="Digital Agora Logo" className="h-6 w-6 sm:h-8 sm:w-8" />
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Agora Flow</h1>
            </div>
            <p className="hidden md:block text-sm font-medium text-muted-foreground">
              Agence de Roanne
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <Button onClick={() => navigate("/auth")} variant="outline" className="border-primary/20 hover:border-primary/50 text-xs sm:text-sm px-3 sm:px-4">
                Espace Client
              </Button>
              <Button onClick={() => setIsPopupOpen(true)} className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </header>
      <ContactPopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </>;
};
export default Header;