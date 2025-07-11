import Head from "next/head";
import styles from "@/styles/legal.module.css";

export default function LegalNotice() {
  return (
    <>
      <Head>
        <title>Aviso Legal – Atlètic Les Corts Futsal</title>
        <meta name="description" content="Consulta el Aviso Legal del sitio web de Atlètic Les Corts Futsal." />
      </Head>
      <section className={styles.pavilionSection}>
        <h1 className={styles.title}>Aviso Legal</h1>
        <div className={styles.textBox}>
          <p><strong>Identificación del titular:</strong></p>
          <p>Este sitio web pertenece a Atlètic Les Corts Futsal (en adelante, “el Club”), con correo electrónico de contacto: <a href="mailto:coordinacion.atlcfs@gmail.com">coordinacion.atlcfs@gmail.com</a>.</p>

          <p><strong>Objeto:</strong></p>
          <p>Este Aviso Legal regula el acceso, navegación y uso del sitio web de Atlètic Les Corts Futsal, así como las responsabilidades derivadas de la utilización de sus contenidos.</p>

          <p><strong>Propiedad intelectual e industrial:</strong></p>
          <p>Todos los contenidos del sitio (textos, imágenes, logotipos, etc.) son propiedad del Club o tienen licencia de uso, y están protegidos por los derechos de propiedad intelectual e industrial.</p>

          <p><strong>Responsabilidad:</strong></p>
          <p>El Club no se responsabiliza del mal uso que los usuarios puedan hacer de los contenidos ni de los daños derivados del uso de este sitio web.</p>

          <p><strong>Enlaces externos:</strong></p>
          <p>El Club puede incluir enlaces a otros sitios web, no siendo responsable del contenido de dichos sitios ni del uso que se haga de ellos.</p>

          <p><strong>Modificaciones:</strong></p>
          <p>El Club se reserva el derecho a modificar en cualquier momento y sin previo aviso el contenido del sitio web y del presente Aviso Legal.</p>
        </div>
      </section>
    </>
  );
}
