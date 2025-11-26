import Head from "next/head";
import styles from "@/styles/legal.module.css";

export default function LegalNotice() {
  return (
    <>
      <Head>
        <title>Avís Legal – Atlètic Les Corts Futsal</title>
        <meta
          name="description"
          content="Consulta l’Avís Legal del lloc web de l’Atlètic Les Corts Futsal."
        />
      </Head>

      <section className={styles.pavilionSection}>
        <h1 className={styles.title}>Avís Legal</h1>

        <div className={styles.textBox}>
          <p><strong>01. Titular del lloc web</strong></p>
          <p>
            Aquest lloc web és titularitat d’<strong>Atlètic Les Corts Futsal</strong> 
            (d’ara endavant, “el Club”).  
            <br />
            Correu de contacte:{" "}
            <a href="mailto:coordinacion.atlcfs@gmail.com">coordinacion.atlcfs@gmail.com</a>.
          </p>
          <p>
            La present informació regula les condicions d’ús, responsabilitats i
            obligacions dels usuaris que accedeixen al domini del Club.
          </p>

          <p><strong>02. Cookies</strong></p>
          <p>
            El lloc web utilitza cookies amb la finalitat de facilitar la navegació,
            millorar l’experiència d’usuari i obtenir informació estadística.
            Les cookies utilitzades s’associen únicament amb un usuari anònim i el seu dispositiu,
            i no permeten identificar dades personals.
          </p>
          <p>
            L’usuari pot configurar el navegador per acceptar o rebutjar les cookies,
            així com eliminar-les en qualsevol moment.  
            Per a més informació, consulta la nostra <strong>Política de Cookies</strong>.
          </p>

          <p><strong>03. Política d’enllaços</strong></p>
          <p>
            Els enllaços des de webs de tercers cap al lloc del Club només poden dirigir-se
            a la pàgina principal i no poden realitzar-se pràctiques que indueixin
            a confusió, engany o perjudici del Club.
          </p>
          <p>
            El lloc web pot contenir enllaços a webs de tercers. El Club actua com a
            mer intermediari i no és responsable dels continguts, serveis o informacions
            proporcionades en aquestes pàgines, excepte quan tingui coneixement efectiu
            de la seva il·licitud i no desactivi l’enllaç corresponent.
          </p>

          <p><strong>04. Condicions d’ús</strong></p>
          <p>
            L’ús del lloc web implica l’acceptació plena de les condicions presents en aquest Avís Legal.
            L’usuari es compromet a utilitzar el lloc i els seus continguts de forma diligent,
            conforme a la llei, a la moral i a l’ordre públic.
          </p>
          <p>
            Queda prohibit transmetre, difondre o posar a disposició de tercers qualsevol tipus
            de material present al web sense autorització prèvia del Club.
          </p>

          <p><strong>05. Propietat intel·lectual i industrial</strong></p>
          <p>
            Tots els continguts del lloc (textos, imatges, logotips, marques, dissenys, etc.)
            són propietat del Club o bé disposen d’autorització per al seu ús,
            i estan protegits per la normativa de propietat intel·lectual i industrial.
          </p>
          <p>
            No s’entén cedida cap llicència d’ús a favor de l’usuari, quedant prohibida
            qualsevol reproducció, distribució, comunicació pública o transformació
            sense autorització expressa i per escrit.
          </p>

          <p><strong>06. Xarxes socials oficials</strong></p>
          <p>
            El Club disposa de perfils oficials en diverses xarxes socials.
            L’ús d’aquests perfils requereix l’acceptació tant d’aquest Avís Legal
            com de les condicions generals de la plataforma corresponent.
          </p>
          <p>
            El Club no es fa responsable de les opinions o comentaris publicats pels usuaris,
            ni dels continguts aportats per tercers.
          </p>

          <p><strong>07. Exempció de responsabilitats</strong></p>
          <p>
            El Club no es fa responsable dels danys i perjudicis derivats de:
          </p>
          <ul>
            <li>Un ús inadequat del lloc web per part de l’usuari.</li>
            <li>La interrupció del funcionament del web.</li>
            <li>La presència de virus o elements maliciosos.</li>
            <li>Continguts de tercers accessibles des d’enllaços externs.</li>
            <li>Errors o omissions en els continguts.</li>
          </ul>
          <p>
            El Club podrà efectuar millores, actualitzacions o modificacions en qualsevol moment
            sense generar dret a reclamació.
          </p>

          <p><strong>08. Legislació i jurisdicció aplicable</strong></p>
          <p>
            Aquest Avís Legal es regeix per la legislació espanyola.  
            En cas de controvèrsia, les parts se sotmetran als jutjats i tribunals
            competents segons la normativa vigent.
          </p>
        </div>
      </section>
    </>
  );
}
