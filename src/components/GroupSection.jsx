import { useEffect, useState } from "react";
import styles from "./GroupSection.module.css";

const images = [
  "/assets/SeniorA_photo.jpg",
  "/assets/JuvenilA_photo.jpg",
  "/assets/pavilion.jpg"
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
        <img
          src={images[currentImage]}
          alt="Foto equipo"
          className={styles.photo}
        />
      </div>
      <p className={styles.slogan}>
        Formación, valores y compromiso social a través del fútbol sala desde 2024.
      </p>
    </section>
  );
}
