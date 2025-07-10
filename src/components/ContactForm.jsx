import styles from "./ContactForm.module.css";
import { useRef } from "react";
import { useCookieConsent } from "@/context/CookieConsentContext";

export default function ContactForm() {
  const formRef = useRef(null);
  const { hasConsent } = useCookieConsent();

  const handleSubmit = () => {
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 100);
  };

  return (
    <section className={styles.contactSection} id="contacto">
      <h2 className={styles.title}>Contacta con nosotros</h2>
      <p className={styles.subtitle}>
        Si tienes alguna duda, consulta o simplemente quieres saludar, escríbenos por aquí.
      </p>
      <div className={styles.container}>
        <form
          className={styles.form}
          autoComplete="on"
          action="https://formsubmit.co/rauljouman@gmail.com"
          method="POST"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputGroup}>
            <input type="text" id="nombre" name="Nombre" placeholder=" " required />
            <label htmlFor="nombre">Nombre</label>
          </div>

          <div className={styles.inputGroup}>
            <input type="email" id="email" name="Email usado" placeholder=" " required />
            <label htmlFor="email">Email</label>
          </div>

          <div className={styles.inputGroup}>
            <textarea name="Mensaje" id="mensaje" placeholder=" " required></textarea>
            <label htmlFor="mensaje">Mensaje</label>
          </div>

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.button}>Enviar</button>
          </div>

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="¡Nuevo mensaje desde tu web! 📨" />
          <input type="hidden" name="_blacklist" value="email,name" />
          <input type="hidden" name="_next" value="https://www.instagram.com/atlescortsfs/?hl=es" />
        </form>

        {hasConsent ? (
          <div className={styles.mapBox}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.665751111211!2d2.117118174796338!3d41.38134619637175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498f61c685557%3A0x1b76e51044aa9154!2sCamp%20de%20futbol%20sala%20CEM%20Arístides%20Maillol!5e0!3m2!1sca!2ses!4v1750974221303!5m2!1sca!2ses"
              title="Ubicación del campo Atlétic Les Corts Futsal"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ) : (
          <p style={{ color: "white", marginTop: "20px", textAlign: "center" }}>
            Acepta las cookies para ver el mapa interactivo.
          </p>
        )}
      </div>
    </section>
  );
}
