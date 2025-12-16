import Head from "next/head";
import PavilionSection from "@/components/PavilionSection";
import ContactForm from "@/components/ContactForm";
import Presentation from "@/components/Presentation";
import Sponsor from "@/components/Sponsor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atlètic Les Corts Futsal</title>

        {/* META BÀSICA */}
        <meta
          name="description"
          content="Descobreix l'Atlètic Les Corts Futsal, club de futbol sala del barri de Les Corts (Barcelona). Formació, valors i família a través de l'esport."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://atletic-lc-page.vercel.app/" />

        {/* RENDIMENT / FONTS */}
        <link rel="preload" as="image" href="/assets/campo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* OPEN GRAPH / SOCIAL */}
        <meta property="og:title" content="Atlètic Les Corts Futsal" />
        <meta
          property="og:description"
          content="Formant valors i persones a través del futbol sala des del 2017."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atletic-lc-page.vercel.app/" />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />

        {/* SCHEMA.ORG */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              name: "Atlètic Les Corts Futsal",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Les Corts",
                addressRegion: "Barcelona",
                addressCountry: "ES",
              },
              url: "https://atletic-lc-page.vercel.app/",
              logo: "/assets/logo.png",
              sport: "Futbol sala",
              description:
                "Club de futbol sala del barri de Les Corts (Barcelona), centrat en la formació i els valors."
            }),
          }}
        />
      </Head>

      <main>
        <Presentation />
        <Sponsor />
        <PavilionSection />
        <div className="space">
          <ContactForm />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
