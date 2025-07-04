import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const formRef = useRef(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("mapConsent");
    if (consent === "true") {
      setShowMap(true);
    }
  }, []);

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

        {showMap && (
          <div className={styles.mapBox}>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              title="Ubicación del campo Atletic Les Corts"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "8px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </section>
  );
}
