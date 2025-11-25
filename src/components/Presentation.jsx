import Image from "next/image";
import styles from "./Presentation.module.css";

export default function Presentation() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Bloque de texto izquierda */}
        <div className={styles.textBlock}>
          <span className={styles.pill}>Atlètic Les Corts Futsal</span>
          <h1 className={styles.title}>
            Futbol sala, <br /> passió i família <br />al barri de Les Corts.
          </h1>
          <p className={styles.subtitle}>
            Som un club formatiu on jugadors, famílies i staff comparteixen uns
            mateixos valors dins i fora de la pista. Des de l&apos;escola fins als
            sèniors, l&apos;objectiu és fer créixer persones abans que esportistes.
          </p>

          <div className={styles.ctas}>
            <a href="/teams" className={styles.primaryBtn}>
              Veure equips
            </a>

            <a href="/contact" className={styles.secondaryBtn}>
              Contacta'ns
            </a>
          </div>
        </div>

        {/* Bloque imagen derecha */}
        <div className={styles.imageSide}>
          <div className={styles.halo} />
          <div className={styles.imageFrame}>
            <Image
              src="/assets/SeniorA.jpeg"
              alt="Jugadores del Atlètic Les Corts Futsal"
              fill
              className={styles.photo}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
