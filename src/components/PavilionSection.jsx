import Image from "next/image";
import styles from "./PavilionSection.module.css";
import Campo from "../assets/campo.jpg";

export default function PavilionSection() {
  return (
    <section className={styles.pavilionSection}>
      <h2 className={styles.title}>Nuestro templo</h2>

      <div className={styles.content}>
        <div className={styles.imageBox}>
          <Image
            src={Campo}
            alt="Campo de fútbol"
            fill
            style={{ objectFit: "cover", borderRadius: 8 }}
          />
        </div>

        <div className={styles.textBox}>
          <p>
            Jugamos en el <strong>Poliesportiu Arístides Maillol</strong>, un pabellón cubierto que está genial para fútbol sala. La pista está en muy buen estado, tiene buen suelo y el ambiente es perfecto para entrenar y competir.
          </p>
          <p>
            📍 Está en <strong>Carrer de Martí i Franquès, 17‑21</strong>, en el barrio de Les Corts (Barcelona).
          </p>
          <p>
            🚇 Puedes venir en metro sin problema: tienes la parada de <strong>Palau Reial (L3)</strong> a unos 6 minutos andando, o <strong>Collblanc (L5)</strong> si te va mejor. También paran un montón de buses por la zona, así que llegar es muy fácil.
          </p>
        </div>
      </div>
    </section>
  );
}
