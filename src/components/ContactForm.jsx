import styles from "./ContactForm.module.css";
import Logo from "../assets/logo.png";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className={styles.contactSection} id="contacto">
      <h2 className={styles.title}>Contacta con nosotros</h2>
      <p className={styles.subtitle}>
        Si tienes alguna duda, consulta o simplemente quieres saludar, escríbenos por aquí.
      </p>
      <div className={styles.container}>
        <form className={styles.form} autoComplete="off">
          <div className={styles.inputGroup}>
            <input type="text" required placeholder=" " />
            <label>Nombre</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="email" required placeholder=" " />
            <label>Email</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea rows="4" required placeholder=" "></textarea>
            <label>Mensaje</label>
          </div >
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.button}>Enviar</button>
          </div>

        </form>

        <div className={styles.mapBox}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.665751111211!2d2.117118174796338!3d41.38134619637175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498f61c685557%3A0x1b76e51044aa9154!2sCamp%20de%20futbol%20sala%20CEM%20Ar%C3%ADstides%20Maillol!5e0!3m2!1sca!2ses!4v1750974221303!5m2!1sca!2ses"
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: '8px',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
