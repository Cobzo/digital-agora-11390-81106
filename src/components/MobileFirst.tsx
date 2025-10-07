import storeExterior from "@/assets/store_exterior.png";

const MobileFirst = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Votre Commerce, Dans Leur Poche
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plus de 80% de vos clients recherchent des commerces depuis leur smartphone. 
            Soyez présent où ils vous cherchent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Accessible Partout, Tout le Temps
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Vos clients peuvent découvrir vos produits et services depuis n'importe où - 
                en magasin, dans la rue, ou confortablement installés chez eux. 
                Une expérience optimale sur tous les écrans.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                De la Recherche à l'Achat en Un Clic
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformez l'intérêt en action. Nos sites web permettent à vos clients 
                de passer de la découverte à la réservation ou l'achat en quelques secondes, 
                augmentant significativement votre taux de conversion.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.3)] hover:scale-105 transition-transform duration-300 max-w-xl">
              <img 
                src={storeExterior} 
                alt="Clients découvrant le commerce via mobile"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFirst;
