import { useEffect, useState } from "react";
import styles from "./GroupSection.module.css";
import Image from "next/image";

const images = [
  { src: "/assets/SeniorA_photo.jpg", alt: "Equipo Sénior A del Atletic Les Corts Futsal" },
  { src: "/assets/JuvenilA_photo.jpg", alt: "Equipo Juvenil A del Atletic Les Corts Futsal" },
];

export default function GroupSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.groupSection}>
      <h1 className={styles.title}>Atletic Les Corts</h1>
      <div className={styles.photoBox}>
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          style={{ objectFit: "cover" }}
          className={styles.photo}
          width={600}
          height={400}
        />
      </div>
      <p className={styles.slogan}>
        Formación, valores y compromiso social a través del fútbol sala desde 2024.
      </p>
    </section>
  );
}
