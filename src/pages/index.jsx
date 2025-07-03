import Head from "next/head";
import PavilionSection from "@/components/PavilionSection";
import GroupSection from "@/components/GroupSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atletic Les Corts Futsal – Club de Fútbol Sala en Barcelona</title>
        <meta name="description" content="Atletic Les Corts Futsal es un club de fútbol sala de Barcelona, ubicado en el barrio de Les Corts. Contamos con equipos en todas las categorías formativas y sénior." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Atletic Les Corts Futsal – Club de Fútbol Sala en Barcelona" />
        <meta property="og:description" content="Atletic Les Corts Futsal es un club de fútbol sala de Barcelona, ubicado en el barrio de Les Corts. Contamos con equipos en todas las categorías formativas y sénior." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atletic-les-corts.com/" />
        <meta property="og:image" content="https://atletic-les-corts.com/assets/logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <link rel="canonical" href="https://atletic-les-corts.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsClub",
          "name": "Atletic Les Corts Futsal",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Les Corts",
            "addressRegion": "Barcelona",
            "addressCountry": "ES"
          },
          "url": "https://atletic-les-corts.com/",
          "logo": "https://atletic-les-corts.com/assets/logo.png",
          "hasPOS": "Barcelona"
        })}} />
      </Head>
      <div>
        <GroupSection />
        <PavilionSection />
        <div className="space">
        <ContactForm />
        </div>
      </div>
    </>
  );
}
