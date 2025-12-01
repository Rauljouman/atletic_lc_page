import Head from "next/head";
import styles from "@/styles/aboutUs.module.css";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>El Club – Atlètic Les Corts Futsal</title>
        <meta
          name="description"
          content="Coneix la història, els valors i la missió de l'Atlètic Les Corts Futsal."
        />
        <link rel="canonical" href="https://atletic-les-corts.com/el-club" />
      </Head>

      <section className={styles.aboutSection}>
        <div className={styles.inner}>
          <p className={styles.kicker}>EL CLUB</p>

          <h1 className={styles.title}>Qui som?</h1>

          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>La nostra història</h3>

            <p>
              L’Atlètic Les Corts neix l’any <strong>2017</strong> fruit de la
              fusió entre dos clubs del barri:{" "}
              <strong>Sang Culer Cor Català</strong> i{" "}
              <strong>Corsica Futsal</strong>. Amb aquesta unió, el projecte
              va adquirir una identitat sòlida i profundament arrelada a Les Corts.
            </p>

            {/* 🔄 PÁRRAFO ACTUALIZADO CON LOS EQUIPOS QUE TENIU ARA */}
            <p>
              Per a la temporada <strong>2025–2026</strong>, el club comptarà amb{" "}
              <strong>6 equips de base</strong> (Aleví A, Infantil A, Cadet A, B i C
              i Juvenil A) i <strong>3 equips sèniors</strong> (Sènior A, B i C).
            </p>

            <p>
              En total, som una entitat formada per{" "}
              <strong>155 esportistes federats</strong> dins de la Federació Catalana
              de Futbol. El nostre objectiu institucional és formar persones abans
              que esportistes, promovent valors com el respecte, l’esforç i el
              compromís.
            </p>
          </div>
        </div>
      </section>

      {/* ======== OBJECTIUS ======== */}
      <section className={styles.goalsSection}>
        <div className={styles.inner}>
          <h2 className={styles.titleSecondary}>Objectius del club</h2>

          <div className={styles.cardGrid}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Projecció present</h3>
              <ul className={styles.list}>
                <li>Ser un referent esportiu al barri de Les Corts.</li>
                <li>Fomentar el sentiment de pertinença al club.</li>
                <li>Impulsar l’activitat esportiva en totes les categories.</li>
                <li>
                  Contribuir al desenvolupament personal i esportiu de la joventut.
                </li>
                <li>Facilitar la integració social mitjançant el futbol sala.</li>
                <li>Promoure els valors de l’esport en equip.</li>
                <li>Fer que els jugadors gaudeixin del dia a dia.</li>
                <li>Implementar un pla formatiu de qualitat.</li>
                <li>Competir per estar en les primeres posicions.</li>
                <li>
                  Consolidar l’Atlètic Les Corts com una institució d’excel·lència.
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Projecció 2030</h3>
              <ul className={styles.list}>
                <li>Participació en totes les categories federatives.</li>
                <li>
                  Incorporació de categories benjamí masculina i femenina
                  a la temporada 2026–2027.
                </li>
                <li>
                  Objectiu 2030: arribar als{" "}
                  <strong>220 esportistes federats</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
