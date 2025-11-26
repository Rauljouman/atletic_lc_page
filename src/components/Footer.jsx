import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Link href="/legal-notice" className={styles.link}>
          Avís Legal
        </Link>
        <Link href="/privacy-policy" className={styles.link}>
          Política de Privacitat
        </Link>
      </div>

      <div className={styles.center}>
        <p className={styles.copy}>© {new Date().getFullYear()} Atlètic Les Corts Futsal</p>
        <p className={styles.rights}>Tots els drets reservats</p>
      </div>

      <div className={styles.right}>
        <a
          href="https://www.google.com/maps/place/Poliesportiu+Arístides+Maillol"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.touchTarget}
        >
          Carrer de Martí i Franquès, 17-21 · Barcelona
        </a>

        <a href="tel:+34678677719" className={styles.touchTarget}>
          678 67 77 19
        </a>
      </div>
    </footer>
  );
}
