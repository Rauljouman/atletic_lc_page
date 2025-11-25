import Image from "next/image";
import styles from "./Sponsor.module.css";

const SPONSORS = [
  {
    name: "BocaArte",
    logo: "/assets/Sponsors/bocaarte.png",
    url: "https://www.instagram.com/bocaarte.gastrotapas/",
  },
  {
    name: "VitoSport",
    logo: "/assets/Sponsors/vito.png",
    url: "https://www.instagram.com/vitosport_bcn/",
  },
  {
    name: "Rekete Pizza",
    logo: "/assets/Sponsors/reketepizza.jpg",
    url: "https://www.instagram.com/rekete.pizza/",
  },
  {
    name: "Movment",
    logo: "/assets/Sponsors/movment.jpg",
    url: "https://www.instagram.com/movmentapp/",
  },
  {
    name: "bcoach",
    logo: "/assets/Sponsors/bcoach.jpg",
    url: "https://www.instagram.com/bcoachfootball/",
  },
  {
    name: "Zumub",
    logo: "/assets/Sponsors/zumub.jpg",
    url: "https://www.zumub.com/",
  },
  {
    name: "Zion Analytics",
    logo: "/assets/Sponsors/zion.png",
    url: "https://www.instagram.com/zion_analytics/",
  },
  {
    name: "Cluber",
    logo: "/assets/Sponsors/cluber.png",
    url: "https://www.cluber.es/",
  },
];

export default function Sponsor() {
  return (
    <section className={styles.sponsorsSection} id="sponsors">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Partners del club</p>
          <h2 className={styles.title}>Els nostres partners</h2>
          <p className={styles.textBox}>
            Gràcies a les marques que ens donen suport i ens impulsen a seguir creixent.
          </p>
        </header>

        <div className={styles.grid}>
          {SPONSORS.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className={styles.logo}
                />
              </div>
              <span className={styles.cardName}>{sponsor.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
