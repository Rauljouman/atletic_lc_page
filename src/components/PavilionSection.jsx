import Image from "next/image";
import styles from "./PavilionSection.module.css";

export default function PavilionSection() {
  return (
    <section className={styles.pavilionSection} id="pavilion">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Poliesportiu Arístides Maillol</p>
          {/* Eliminamos el título grande para no repetir */}
        </div>

        <div className={styles.content}>
          <div className={styles.imageBox}>
            <Image
              src="/assets/campo.jpg"
              alt="Pavelló de joc Atlètic Les Corts"
              fill
              priority
              fetchPriority="high"
              className={styles.photo}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            />
          </div>

          <div className={styles.textBox}>
            <p>
              El nostre camp és el <strong>Poliesportiu Arístides Maillol</strong>, un
              pavelló cobert en excel·lents condicions, ideal per gaudir del futbol sala
              tant en els entrenaments com en la competició. Un espai cuidat, amb bon
              ambient i pensat perquè jugadors i jugadores hi puguin donar el millor.
            </p>
            <p>
              📍 Ens trobaràs a <strong>Carrer de Martí i Franquès, 17-21</strong>, al cor
              del barri de Les Corts, Barcelona.
            </p>
            <p>
              🚇 Arribar-hi és molt fàcil: tens les estacions de{" "}
              <strong>Palau Reial (L3)</strong> i <strong>Collblanc (L5)</strong> a
              prop, i diverses línies d’autobús amb parada a poca distància.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
