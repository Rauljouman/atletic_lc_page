import Head from "next/head";
import styles from "@/styles/aboutUs.module.css"

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros – Atletic Les Corts Futsal</title>
        <meta name="description" content="Conoce la historia, valores y misión del Atletic Les Corts Futsal. Más que un club, una comunidad." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Sobre Nosotros – Atletic Les Corts Futsal" />
        <meta property="og:description" content="Conoce la historia, valores y misión del Atletic Les Corts Futsal. Más que un club, una comunidad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atletic-les-corts.com/sobre-nosotros" />
        <meta property="og:image" content="https://atletic-les-corts.com/assets/logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <link rel="canonical" href="https://atletic-les-corts.com/sobre-nosotros" />
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
          "url": "https://atletic-les-corts.com/sobre-nosotros",
          "logo": "https://atletic-les-corts.com/assets/logo.png",
          "hasPOS": "Barcelona"
        })}} />
      </Head>

      <div>
        <section className={styles.aboutUsSection}>
          <h1 className={styles.title}>¿Quiénes somos?</h1>
          <div className={styles.block}>
            <h3 className={styles.subtitle}>Nuestra historia</h3>
            <p>
              Atlètic Les Corts nace en 2017 fruto de la unión de dos clubs independientes del barrio de Les Corts: <strong>Sang Culer Cor Català</strong> y <strong>Corsica Futsal</strong>.
            </p>
            <p>
              Para la temporada 2025-2026 el club contará con <strong>8 equipos de base</strong> (Alevín, Infantil A, B y C Escolar, Cadete A, B y C y Juvenil A), <strong>3 equipos sénior</strong> (Sénior A, B y C) y <strong>1 equipo veterano</strong>. ¡En total, 155 deportistas federados en la Federació Catalana de Futbol!
            </p>
            <p>
              Además, lideramos una red internacional llamada <strong>Futsal Partner</strong> con clubes de Europa, América del Norte, Sudamérica y Oceanía, para la promoción de jóvenes talentos y programas de intercambio como el <strong>Erasmus Esportius</strong>.
            </p>
            <p>
              Nuestro reto institucional es consolidar el club como una entidad de referencia en la formación de personas y deportistas, fomentando la pertenencia al barrio y promoviendo el fútbol sala como una actividad social y de integración.
            </p>
          </div>
        </section>

        <section className={styles.aboutGoalSection}>
          <h2 className={styles.title2}>Nuestros objetivos</h2>
          <div className={styles.goalsGrid}>
            <div className={styles.column}>
              <h3 className={styles.subtitle}>Proyección presente</h3>
              <ul className={styles.list}>
                <li>Ser un referente deportivo en el barrio de Les Corts.</li>
                <li>Fomentar el sentido de pertenencia al club.</li>
                <li>Promover la actividad deportiva en todos los niveles.</li>
                <li>Contribuir al desarrollo de la juventud de Les Corts.</li>
                <li>Ofrecer oportunidades de integración a través del fútbol sala.</li>
                <li>Transmitir los valores del deporte en equipo.</li>
                <li>Hacer que los jugadores se diviertan practicando fútbol sala.</li>
                <li>Implementar un plan formativo de calidad.</li>
                <li>Posicionar a los equipos en los primeros puestos.</li>
                <li>Consolidar Atlètic Les Corts como una institución de excelencia.</li>
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.subtitle}>Proyección 2030</h3>
              <ul className={styles.list}>
                <li>Participación en todas las categorías federativas.</li>
                <li>Incorporación de categorías benjamín masculina y femenina en 2026-2027.</li>
                <li>Meta 2030: alcanzar los 220 deportistas federados.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
