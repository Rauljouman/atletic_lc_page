import styles from "./GroupSection.module.css";
import Image from "next/image";

export default function GroupSection() {
  return (
    <section className={styles.groupSection}>
      <h1 className={styles.title}>Atletic Les Corts</h1>
      <div className={styles.photoBox}>
        <Image
          src="/assets/SeniorA_photo.jpg"
          alt="Equipo Sénior A del Atletic Les Corts Futsal"
          fill
          className={styles.photo}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          priority
          fetchPriority="high"
        />
      </div>
      <p className={styles.slogan}>
        Formación, valores y compromiso social a través del fútbol sala desde 2024.
      </p>
    </section>
  );
}
