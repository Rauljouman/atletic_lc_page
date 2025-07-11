import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>© 2025 Atletic Les Corts.</p>
        <p>Todos los derechos reservados.</p>
      </div>
      <div className={styles.right}>
        <div className={styles.addressBlock}>
          <a
            href="https://www.google.com/maps/place/Poliesportiu+Ar%C3%ADstides+Maillol"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver ubicación en el mapa"
            className={styles.touchTarget}
          >
            Carrer de Martí i Franquès, 17‑21
          </a>
          <a
            href="tel:+34678677719"
            title="Teléfono"
            className={styles.touchTarget}
          >
            678 67 77 19
          </a>
        </div>
      </div>
    </footer>
  );
}
