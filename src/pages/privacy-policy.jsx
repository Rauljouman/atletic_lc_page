import Head from "next/head";
import styles from "@/styles/legal.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad – Atlètic Les Corts Futsal</title>
        <meta name="description" content="Lee la Política de Privacidad de Atlètic Les Corts Futsal y cómo tratamos tus datos personales conforme al RGPD." />
      </Head>
      <section className={styles.pavilionSection}>
        <h1 className={styles.title}>Política de Privacidad</h1>
        <div className={styles.textBox}>
          <p><strong>Responsable del tratamiento:</strong></p>
          <p>Atlètic Les Corts Futsal, correo electrónico: <a href="mailto:coordinacion.atlcfs@gmail.com">coordinacion.atlcfs@gmail.com</a>.</p>

          <p><strong>Finalidad del tratamiento:</strong></p>
          <p>Tratar tus datos personales con el fin de gestionar las consultas que recibimos a través de este sitio web.</p>

          <p><strong>Legitimación:</strong></p>
          <p>El tratamiento de tus datos se basa en tu consentimiento expreso.</p>

          <p><strong>Conservación:</strong></p>
          <p>Los datos se conservarán solo el tiempo necesario para cumplir con la finalidad por la que fueron recabados.</p>

          <p><strong>Destinatarios:</strong></p>
          <p>No se cederán datos a terceros, salvo obligación legal.</p>

          <p><strong>Derechos:</strong></p>
          <p>Tienes derecho a acceder, rectificar y suprimir tus datos, así como otros derechos, escribiendo al correo indicado arriba.</p>

          <p><strong>Medidas de seguridad:</strong></p>
          <p>Implementamos medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales.</p>
        </div>
      </section>
    </>
  );
}
