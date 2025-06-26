import styles from "./GroupSection.module.css";

export default function GroupSection() {
  return (
    <section className={styles.groupSection}>
      <h1 className={styles.title}>Atletic Les Corts</h1>
      <div className={styles.photoBox}>
        {/* Foto cuando haya */}
      </div>
      <p className={styles.slogan}>Formación, valores y compromiso social a través del fútbol sala desde 2024.</p>
    </section>
  );
}
