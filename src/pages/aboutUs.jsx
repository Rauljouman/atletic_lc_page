import styles from "@/styles/aboutUs.module.css"

export default function aboutUs() {
  return (
    <div>
      <section className={styles.aboutUsSection}>
        <h2 className={styles.title}>¿Quiénes somos?</h2>
        <div className={styles.block}>
          <h3 className={styles.subtitle}>Nuestra historia</h3>
          <p>
            Atlètic Les Corts nace en 2017 fruto de la unión de dos clubs independientes del barrio de Les Corts: <strong>Sang Culer Cor Català</strong> y <strong>Corsica Futsal</strong>.
          </p>
          <p>
            Para la temporada 2025-2026 el club contará con <strong>8 equipos de base</strong> (Alevín, Infantil A, B y C Escolar, Cadete A, B y C y Juvenil A), <strong>3 equipos sénior</strong> (Sénior A, B y C) y <strong>1 equipo veterano</strong>. ¡En total, 155 deportistas federados en la Federació Catalana de Futbol!
          </p>
          <p>
            Además, lideramos una red internacional llamada <strong>Futsal Partner</strong> con clubes de Europa, América del Norte, Sudamérica y Oceanía, para la promoción de jóvenes talentos y programas de intercambio como el <strong>Erasmus Esportius</strong>.
          </p>
          <p>
            Nuestro reto institucional es consolidar el club como una entidad de referencia en la formación de personas y deportistas, fomentando la pertenencia al barrio y promoviendo el fútbol sala como una actividad social y de integración.
          </p>
        </div>
      </section>

      <section className={styles.aboutGoalSection}>
        <h2 className={styles.title2}>Nuestros objetivos</h2>
        <div className={styles.goalsGrid}>
          <div className={styles.column}>
            <h3 className={styles.subtitle}>Proyección presente</h3>
            <ul className={styles.list}>
              <li>Ser un referente deportivo en el barrio de Les Corts.</li>
              <li>Fomentar el sentido de pertenencia al club.</li>
              <li>Promover la actividad deportiva en todos los niveles.</li>
              <li>Contribuir al desarrollo de la juventud de Les Corts.</li>
              <li>Ofrecer oportunidades de integración a través del fútbol sala.</li>
              <li>Transmitir los valores del deporte en equipo.</li>
              <li>Hacer que los jugadores se diviertan practicando fútbol sala.</li>
              <li>Implementar un plan formativo de calidad.</li>
              <li>Posicionar a los equipos en los primeros puestos.</li>
              <li>Consolidar Atlètic Les Corts como una institución de excelencia.</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.subtitle}>Proyección 2030</h3>
            <ul className={styles.list}>
              <li>Participación en todas las categorías federativas.</li>
              <li>Incorporación de categorías benjamín masculina y femenina en 2026-2027.</li>
              <li>Meta 2030: alcanzar los 220 deportistas federados.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
