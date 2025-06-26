import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        © 2025 Atletic Les Corts. Todos los derechos reservados.
      </div>
      <div className={styles.right}>
        <a
          href="https://www.google.com/maps/place/Poliesportiu+Ar%C3%ADstides+Maillol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carrer de Martí i Franquès, 17‑21
        </a>
        <span> | </span>
        <a href="tel:+34678677719" title="Teléfono">678 67 77 19</a>
      </div>
    </footer>
  );
}
