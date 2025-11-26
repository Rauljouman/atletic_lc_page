import styles from "./ContactForm.module.css";
import { useRef } from "react";
import Image from "next/image";

export default function ContactForm() {
  const formRef = useRef(null);

  const handleSubmit = () => {
    requestAnimationFrame(() => {
      formRef.current?.reset();
    });
  };

  return (
    <section className={styles.contactSection} id="contacte">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>CONTACTE</p>
          <h2 className={styles.title}>Contacta amb nosaltres</h2>
          <p className={styles.subtitle}>
            Si tens qualsevol dubte o consulta, escriu-nos i et respondrem el
            més aviat possible.
          </p>
        </header>

        <div className={styles.content}>
          {/* Formulari */}
          <form
            className={styles.form}
            autoComplete="on"
            action="https://formsubmit.co/coordinacion.atlcfs@gmail.com"
            method="POST"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputGroup}>
              <input type="text" id="nom" name="Nom" placeholder=" " required />
              <label htmlFor="nom">Nom</label>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                name="Correu electrònic"
                placeholder=" "
                required
              />
              <label htmlFor="email">Correu electrònic</label>
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="Missatge"
                id="missatge"
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="missatge">Missatge</label>
            </div>

            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.button}>
                Enviar
              </button>
            </div>

            {/* Hidden fields FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Nou missatge des de la web de l'Atlètic Les Corts 📨"
            />
            <input type="hidden" name="_blacklist" value="email,name" />
            <input
              type="hidden"
              name="_next"
              value="https://www.instagram.com/atlescortsfs/?hl=es"
            />
          </form>

          {/* Imatge al costat del formulari */}
          <div className={styles.imageBox}>
            <Image
              src="/assets/campo.jpg"
              alt="Pavelló Atlètic Les Corts"
              width={480}
              height={320}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
