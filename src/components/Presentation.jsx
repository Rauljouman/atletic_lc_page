import Image from "next/image";
import styles from "./Presentation.module.css";

export default function Presentation() {
  return (
    <div className={styles.groupSection}>
          <h1 className={styles.title}>Atlètic Les Corts</h1>
          <div className={styles.photoBox}>
            <Image
              src="/assets/SeniorA_photo.jpeg"
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
            Formando personas y valores a través del fútbol sala desde 2017.
          </p>
        </div>
  );
}