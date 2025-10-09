import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Loader2, Mail, Phone } from "lucide-react";

interface ContactPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactPopup = ({ open, onOpenChange }: ContactPopupProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "73b34dc0-76f3-49fb-8119-193470844f2b",
          email: email,
          subject: "Nouvelle demande de contact - Digital Agora"
        }),
      });

      if (response.ok) {
        toast.success("Merci ! Nous vous recontacterons bientôt.");
        setEmail("");
        onOpenChange(false);
      } else {
        toast.error("Échec de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Une erreur s'est produite. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contactez-nous</DialogTitle>
          <DialogDescription>
            Laissez-nous votre email et nous vous recontacterons rapidement.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:0769640074" className="hover:text-primary transition-colors">
                07 69 64 00 74
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:contact@digital-agora.fr" className="hover:text-primary transition-colors">
                contact@digital-agora.fr
              </a>
            </div>
          </div>

          <div className="border-t pt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="popup-email" className="text-sm font-medium">
                  Votre email *
                </label>
                <Input
                  id="popup-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi...
                  </>
                ) : (
                  "Envoyer"
                )}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
