"use client";

import styles from "./PavilionSection.module.css";
import { useCookieConsent } from "@/context/CookieConsentContext";

export default function PavilionSection() {
  const { hasConsent } = useCookieConsent();

  return (
    <section className={styles.pavilionSection}>
      <div className={styles.inner}>
        {/* Pill superior */}
        <p className={styles.kicker}>INSTAL·LACIONS</p>

        <h2 className={styles.title}>Poliesportiu Arístides Maillol</h2>

        <div className={styles.content}>
          <div className={styles.textBox}>
            <p>
              El nostre camp és el{" "}
              <strong>Poliesportiu Arístides Maillol</strong>, un pavelló cobert
              perfecte per gaudir del futbol sala. La pista està en excel·lents
              condicions i l’ambient és ideal tant per entrenar com per competir.
            </p>

            <p>
              📍 Ens trobaràs a{" "}
              <strong>Carrer de Martí i Franquès, 17-21</strong>, al barri de
              Les Corts, Barcelona.
            </p>

            <p>
              🚇 Arribar-hi és molt fàcil: pots baixar a{" "}
              <strong>Palau Reial (L3)</strong> o a{" "}
              <strong>Collblanc (L5)</strong>. També hi passen diverses línies
              d’autobús a prop del pavelló.
            </p>
          </div>

          {hasConsent ? (
            <div className={styles.mapBox}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.665751111211!2d2.117118174796338!3d41.38134619637175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498f61c685557%3A0x1b76e51044aa9154!2sCamp%20de%20futbol%20sala%20CEM%20Arístides%20Maillol!5e0!3m2!1sca!2es!4v1750974221303!5m2!1sca!2es"
                title="Ubicació del Poliesportiu Arístides Maillol"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          ) : (
            <p className={styles.cookieMessage}>
              Accepta les cookies per veure el mapa interactiu.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
