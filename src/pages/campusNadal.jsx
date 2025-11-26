import Image from "next/image";
import styles from "@/styles/campusNadal.module.css";

export default function CampusNadalPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>

        {/* BLOQUE IZQUIERDO */}
        <div className={styles.textBlock}>
          
          <span className={styles.pill}>Campus de Nadal 2025</span>

          <h1 className={styles.title}>Tecnificació de futbol sala</h1>

          <p className={styles.subtitle}>
            Millora la tècnica, la tàctica i la presa de decisions amb l&apos;staff
            de l&apos;Atlètic Les Corts. Grups reduïts i entrenaments intensius.
          </p>

          {/* Torns */}
          <div className={styles.infoGrid}>

            {/* TORN 1 */}
            <div className={styles.turn}>
              <h2>Torn 1</h2>
              <p>22, 23 i 24 de desembre</p>
              <p className={styles.price}>65€</p>

              <div className={styles.qrInside}>
                <Image
                  src="/assets/Campus/qr1pago.jpg"
                  alt="QR Torn 1"
                  width={110}
                  height={110}
                  className={styles.qrImgInside}
                />
              </div>

              <a
                href="https://link-torn1.com"
                target="_blank"
                className={styles.linkBtn}
              >
                Inscripció Torn 1
              </a>
            </div>

            {/* TORN 2 */}
            <div className={styles.turn}>
              <h2>Torn 2</h2>
              <p>29, 30, 31 de desembre i 2 de gener</p>
              <p className={styles.price}>75€</p>

              <div className={styles.qrInside}>
                <Image
                  src="/assets/Campus/qr2pago.jpg"
                  alt="QR Torn 2"
                  width={110}
                  height={110}
                  className={styles.qrImgInside}
                />
              </div>

              <a
                href="https://link-torn2.com"
                target="_blank"
                className={styles.linkBtn}
              >
                Inscripció Torn 2
              </a>
            </div>

          </div>
        </div>

        {/* BLOQUE DERECHO – CARTEL */}
        <div className={styles.rightBlock}>
          <div className={styles.poster}>
            <Image
              src="/assets/Campus/campus-nadal-promo.jpg"
              alt="Cartell Campus Nadal"
              width={600}
              height={800}
              className={styles.posterImg}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
