import Head from "next/head";
import styles from "@/styles/legal.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacitat – Atlètic Les Corts Futsal</title>
        <meta
          name="description"
          content="Consulta com Atlètic Les Corts Futsal tracta les teves dades personals d’acord amb el RGPD."
        />
      </Head>

      <section className={styles.pavilionSection}>
        <h1 className={styles.title}>Política de Privacitat</h1>

        <div className={styles.textBox}>
          <p><strong>Responsable del tractament</strong></p>
          <p>
            Atlètic Les Corts Futsal (d’ara endavant, “el Club”).  
            Correu de contacte:{" "}
            <a href="mailto:coordinacion.atlcfs@gmail.com">coordinacion.atlcfs@gmail.com</a>
          </p>

          <p><strong>Garantia de privacitat</strong></p>
          <p>
            El Club garanteix la confidencialitat i protecció de les dades personals
            facilitades, d’acord amb el Reglament General de Protecció de Dades (RGPD).
            La visita al nostre lloc web no implica que l’usuari estigui obligat
            a facilitar cap informació personal. Tanmateix, és possible que se sol·licitin
            dades a través de formularis de contacte.
          </p>

          <p><strong>Finalitat del tractament</strong></p>
          <p>
            Les dades facilitades s’incorporaran a un fitxer responsabilitat del Club
            i es faran servir per:
          </p>
          <ul>
            <li>Respondre consultes i sol·licituds enviades a través del web.</li>
            <li>Gestionar comunicacions relacionades amb el Club.</li>
            <li>Enviar informació sobre activitats, esdeveniments o serveis relacionats amb l’entitat.</li>
          </ul>

          <p>
            En utilitzar els nostres formularis, l’usuari accepta de manera expressa el tractament de les dades per a les finalitats descrites.
          </p>

          <p><strong>Cessions de dades</strong></p>
          <p>
            El Club només cedirà dades a tercers quan sigui necessari per gestionar adequadament serveis relacionats
            amb l’activitat esportiva (per exemple, gestió federativa o assegurances esportives),
            o quan així ho exigeixi la normativa vigent.  
            Aquest tractament s’ajusta als articles 10, 11 i 12 del RGPD.
          </p>

          <p><strong>Conservació de les dades</strong></p>
          <p>
            Les dades seran conservades durant el temps necessari per atendre la finalitat
            per la qual van ser recollides o fins que l’usuari sol·liciti la seva supressió.
          </p>

          <p><strong>Drets dels usuaris</strong></p>
          <p>Pots exercir els teus drets dirigint una comunicació escrita a:</p>
          <p>
            <strong>Atlètic Les Corts Futsal</strong>  
            <br />
            Correu: <a href="mailto:coordinacion.atlcfs@gmail.com">coordinacion.atlcfs@gmail.com</a>
          </p>

          <p>Drets reconeguts:</p>
          <ul>
            <li><strong>Dret d’accés</strong> a les teves dades personals.</li>
            <li><strong>Dret de rectificació</strong> en cas que siguin incorrectes.</li>
            <li><strong>Dret de supressió</strong> quan les dades ja no siguin necessàries.</li>
            <li>
              <strong>Dret a la limitació</strong> del tractament quan es compleixin els requisits
              legalment previstos.
            </li>
            <li>
              <strong>Dret d’oposició</strong> al tractament de les dades, tret de motius legítims
              imperiosos.
            </li>
            <li>
              <strong>Dret a la portabilitat</strong> per transmetre les dades a un altre responsable.
            </li>
          </ul>

          <p><strong>Retirada del consentiment</strong></p>
          <p>
            Pots retirar el consentiment en qualsevol moment, sense que això afecti
            la licitud del tractament basat en el consentiment previ.
          </p>

          <p><strong>Reclamacions davant l’autoritat de control</strong></p>
          <p>
            Si consideres que existeix algun problema en el tractament de les teves dades,
            pots dirigir-te a l’Agència Espanyola de Protecció de Dades (AEPD).
          </p>

          <p><strong>Caràcter obligatori de les dades</strong></p>
          <p>
            La negativa a facilitar les dades requerides pot suposar la impossibilitat
            de rebre informació o accedir als serveis sol·licitats.
          </p>
        </div>
      </section>
    </>
  );
}
