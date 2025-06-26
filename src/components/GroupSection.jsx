import styles from "./GroupSection.module.css";

export default function GroupSection() {
  return (
    <section className={styles.groupSection}>
      <h1 className={styles.title}>Atletic Les Corts</h1>
      <div className={styles.photoBox}>
        {/* Aquí irá la foto cuando la tengas */}
      </div>
      <p className={styles.slogan}>Todos para uno y uno para todos</p>
    </section>
  );
}
