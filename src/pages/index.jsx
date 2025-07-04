import Head from "next/head";
import GroupSection from "@/components/GroupSection";
import PavilionSection from "@/components/PavilionSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atletic Les Corts Futsal – Club de fútbol sala en Les Corts, Barcelona</title>
        <meta name="description" content="Descubre Atletic Les Corts Futsal, un club de fútbol sala en Les Corts, Barcelona. Formación, valores y deporte desde 2024." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://atletic-lc-page.vercel.app/" />
        <link rel="preload" as="image" href="/assets/JuvenilA_photo.jpg" />
        <link rel="preload" as="image" href="/assets/campo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <meta property="og:title" content="Atletic Les Corts Futsal" />
        <meta property="og:description" content="Un club de fútbol sala en Les Corts, Barcelona. Formación, valores y compromiso social." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atletic-lc-page.vercel.app/" />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "Atletic Les Corts Futsal",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Les Corts",
                "addressRegion": "Barcelona",
                "addressCountry": "ES"
              },
              "url": "https://atletic-lc-page.vercel.app/",
              "logo": "/assets/logo.png",
              "sport": "Futsal"
            }),
          }}
        />
      </Head>

      <main>
        <GroupSection />
        <PavilionSection />
        <div className="space">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
