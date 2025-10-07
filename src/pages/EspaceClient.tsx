import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { Construction } from "lucide-react";

const EspaceClient = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Tables<'profiles'> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
      } else {
        setProfile(profileData);
      }

      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        navigate("/auth");
      } else if (session) {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de se déconnecter",
        variant: "destructive",
      });
    } else {
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 p-4">
      <div className="container max-w-4xl mx-auto py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">
              Bonjour {profile?.first_name || ""},
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Vos informations</h2>
              <div className="grid gap-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Nom complet</span>
                  <span className="font-medium">
                    {profile?.first_name} {profile?.last_name}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{profile?.email}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Téléphone</span>
                  <span className="font-medium">{profile?.phone}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <Card className="border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="flex flex-col items-center justify-center py-12 px-6 text-center">
                  <Construction className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Work in Progress
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    De nouvelles fonctionnalités seront bientôt disponibles ici pour améliorer votre expérience.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 pt-4">
              <Button onClick={() => navigate("/")} variant="outline">
                Retour à l'accueil
              </Button>
              <Button onClick={handleLogout} variant="destructive">
                Se déconnecter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EspaceClient;
