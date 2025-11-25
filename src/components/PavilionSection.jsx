import Image from "next/image";
import styles from "./PavilionSection.module.css";

export default function PavilionSection() {
  return (
    <div className={styles.pavilionSection}>
      <h2 className={styles.title}>Nuestro templo</h2>

      <div className={styles.content}>
        <div className={styles.imageBox}>
          <Image
            src="/assets/campo.jpg"
            alt="Campo de fútbol"
            width={600}
            height={400}
            className={styles.miClaseSiTienes}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 600px"
          />
        </div>

        <div className={styles.textBox}>
          <p>
            Nuestro campo es el <strong>Poliesportiu Arístides Maillol</strong>, un pabellón cubierto que está genial para jugar a fútbol sala. La pista está en muy buenas condiciones, con un suelo que se nota cuidado, y el ambiente es perfecto tanto para entrenar como para competir.
          </p>
          <p>
            📍 Nos encontrarás en <strong>Carrer de Martí i Franquès, 17‑21</strong>, en pleno barrio de Les Corts, Barcelona.
          </p>
          <p>
            🚇 Llegar es muy fácil: puedes bajarte en <strong>Palau Reial (L3)</strong> o en <strong>Collblanc (L5)</strong>, lo que te venga mejor. También pasan bastantes buses por la zona, así que no hay pérdida.
          </p>
        </div>
      </div>
    </div>
  );
}
