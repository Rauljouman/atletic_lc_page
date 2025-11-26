"use client";

import Head from "next/head";
import styles from "@/styles/teams.module.css";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const TeamCard = dynamic(() => import("@/components/TeamCard"), {
  loading: () => <p>Càrregant equip...</p>,
});

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      const { collection, getDocs } = await import("firebase/firestore");
      const { db } = await import("@/firebase/firebaseConfig");

      const querySnapshot = await getDocs(collection(db, "equipos"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTeams(data);
    };

    fetchTeams();
  }, []);

  const equipsFiltrats = teams.filter(
    (team) =>
      (!filtroCategoria || team.categoria === filtroCategoria) &&
      team.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Equips – Atlètic Les Corts Futsal</title>
        <meta
          name="description"
          content="Descobreix tots els equips de futbol sala de l'Atlètic Les Corts: base, formatius i sènior."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Equips – Atlètic Les Corts Futsal"
        />
        <meta
          property="og:description"
          content="Descobreix tots els equips de futbol sala de l'Atlètic Les Corts: base, formatius i sènior."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://atletic-les-corts.com/equips"
        />
        <meta
          property="og:image"
          content="https://atletic-les-corts.com/assets/logo.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <link rel="canonical" href="https://atletic-les-corts.com/equips" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              name: "Atlètic Les Corts Futsal",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Les Corts",
                addressRegion: "Barcelona",
                addressCountry: "ES",
              },
              url: "https://atletic-les-corts.com/equips",
              logo: "https://atletic-les-corts.com/assets/logo.png",
              hasPOS: "Barcelona",
            }),
          }}
        />
      </Head>

      <section className={styles.teamsSection}>
        <div className={styles.inner}>
          <div className={styles.filtros}>
            <p className={styles.kicker}>EQUIPS</p>
            <h1 className={styles.title}>Equips del club</h1>

            <div className={styles.searchAndFilter}>
              <input
                type="text"
                placeholder="Cerca per nom..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />

              <select
                onChange={(e) => setFiltroCategoria(e.target.value)}
                value={filtroCategoria}
              >
                <option value="">Totes les categories</option>
                <option value="Senior">Sènior</option>
                <option value="Juvenil">Juvenil</option>
                <option value="Cadete">Cadet</option>
                <option value="Infantil">Infantil</option>
              </select>
            </div>
          </div>

          <div className={styles.grid}>
            {equipsFiltrats.map((team) => (
              <TeamCard key={team.id} equipo={team} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
