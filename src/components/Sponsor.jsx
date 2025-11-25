import styles from "./Sponsor.module.css";

export default function Sponsor() {
  return (
    <div className={styles.sponsorsSection}>

      <h2 className={styles.title}>Sponsors oficiales</h2>

      <p className={styles.textBox}>
        Gracias a nuestros Sponsors por apoyar y hacer posible este proyecto.
      </p>

      <div className={styles.sponsors}>

        <a href="https://www.instagram.com/bocaarte.gastrotapas/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/sponsors/Bocaarte.png" alt="BocaArte" />
        </a>

        <a href="https://www.instagram.com/vitosport_bcn/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/sponsors/vito.png" alt="VitoSport" />
        </a>

        <a href="https://www.instagram.com/reketepizza_/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/sponsors/reketepizza.jpg" alt="ReketePizza" />
        </a>

        <a href="https://www.instagram.com/movment.bcn/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/sponsors/movment.jpg" alt="Movment" />
        </a>

        <a href="https://www.instagram.com/bcoach.app/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/sponsors/bcoach.jpg" alt="bcoach" />
        </a>

        <a href="https://www.instagram.com/zumub.es/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/sponsors/zumub.jpg" alt="Zumub" />
        </a>

        <a href="https://www.instagram.com/zionsportsanalytics/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/sponsors/zion.png" alt="Zion Analytics" />
        </a>

        <a href="https://www.instagram.com/cluber_app/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/sponsors/cluber.png" alt="Cluber" />
        </a>

      </div>
    </div>
  );
}
