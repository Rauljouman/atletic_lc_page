import Image from "next/image";
import styles from "./Presentation.module.css";
import { useState, useEffect } from "react";

export default function Presentation() {
  const images = [
    "/assets/carrusel_foto/foto1.jpeg",
    "/assets/carrusel_foto/foto2.jpeg",
    "/assets/carrusel_foto/foto4.jpeg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* === BLOQUE TEXTO IZQUIERDA === */}
        <div className={styles.textBlock}>
          <span className={styles.pill}>Atlètic Les Corts Futsal</span>

          <h1 className={styles.title}>
            Futbol sala, <br /> passió i família <br />
            al barri de Les Corts.
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

        {/* === BLOQUE IMAGEN DERECHA (CARRUSEL) === */}
        <div className={styles.imageSide}>
          <div className={styles.halo} />

          <div className={styles.imageFrame}>
            <Image
              src={images[current]}
              alt="Foto del club Atlètic Les Corts Futsal"
              width={1200}
              height={800}
              className={styles.photo}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
