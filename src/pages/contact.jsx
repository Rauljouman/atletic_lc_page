import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import styles from "@/styles/contact.module.css";

export default function Contact() {
  return (
  <>
    <Head>
      <title>Contacto – Atletic Les Corts Futsal</title>
      <meta name="description" content="Escríbenos para unirte al club, resolver dudas sobre los equipos o colaborar con nosotros." />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Contacto – Atletic Les Corts Futsal" />
      <meta property="og:description" content="Escríbenos para unirte al club, resolver dudas sobre los equipos o colaborar con nosotros." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://atletic-les-corts.com/contacto" />
      <meta property="og:image" content="https://atletic-les-corts.com/assets/logo.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <link rel="canonical" href="https://atletic-les-corts.com/contacto" />
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
        "url": "https://atletic-les-corts.com/contacto",
        "logo": "https://atletic-les-corts.com/assets/logo.png",
        "hasPOS": "Barcelona"
      })}} />
    </Head>

    <div>
      <div className={styles.section}>
        <h1 className={styles.title}>A qué estás esperando para unirte <br></br>al mejor club de fútbol sala de Les Corts?</h1>
        <ContactForm />
      </div>
    </div>
  </>
  );
}