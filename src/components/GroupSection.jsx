import { useEffect, useState } from "react";
import styles from "./GroupSection.module.css";
import Image from "next/image";

const images = [
  {
    desktop: "/assets/SeniorA_photo.jpg",
    mobile: "/assets/SeniorA_mobile.webp",
    alt: "Equipo Sénior A del Atletic Les Corts Futsal",
  },
  {
    desktop: "/assets/JuvenilA_photo.jpg",
    mobile: "/assets/JuvenilA_mobile.jpg",
    alt: "Equipo Juvenil A del Atletic Les Corts Futsal",
  },
];

export default function GroupSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile(); 
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const imageToShow = isMobile ? images[currentImage].mobile : images[currentImage].desktop;

  return (
    <section className={styles.groupSection}>
      <h1 className={styles.title}>Atletic Les Corts</h1>
      <div className={styles.photoBox}>
        <Image
          src={imageToShow}
          alt={images[currentImage].alt}
          fill
          className={styles.photo}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 767px) 100vw, 700px"
          priority={currentImage === 0}
          fetchPriority={currentImage === 0 ? "high" : undefined}
        />
      </div>
      <p className={styles.slogan}>
        Formación, valores y compromiso social a través del fútbol sala desde 2024.
      </p>
    </section>
  );
}
