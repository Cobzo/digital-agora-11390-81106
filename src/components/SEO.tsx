import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  image?: string;
};

export default function SEO({
  title = "Agora Flow — Agence web à Roanne",
  description = "Création de sites, hébergement, noms de domaines, et gestions SEO.",
  canonical = "https://agoraflow.fr/",
  noindex = false,
  image = "https://agoraflow.fr/og-image.png",
}: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
