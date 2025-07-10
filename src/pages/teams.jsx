"use client";
import Head from "next/head";
import styles from "@/styles/Teams.module.css";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const TeamCard = dynamic(() => import("@/components/TeamCard"), {
  loading: () => <p>Cargando equipo...</p>,
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
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTeams(data);
    };

    fetchTeams();
  }, []);

  const equiposFiltrados = teams.filter(team =>
    (!filtroCategoria || team.categoria === filtroCategoria) &&
    team.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Nuestros Equipos – Atletic Les Corts Futsal</title>
        <meta name="description" content="Conoce todos los equipos de fútbol sala del club Atletic Les Corts: categorías base, formativas y sénior." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Nuestros Equipos – Atletic Les Corts Futsal" />
        <meta property="og:description" content="Conoce todos los equipos de fútbol sala del club Atletic Les Corts: categorías base, formativas y sénior." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atletic-les-corts.com/equipos" />
        <meta property="og:image" content="https://atletic-les-corts.com/assets/logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <link rel="canonical" href="https://atletic-les-corts.com/equipos" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "Atletic Les Corts Futsal",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Les Corts",
                "addressRegion": "Barcelona",
                "addressCountry": "ES"
              },
              "url": "https://atletic-les-corts.com/equipos",
              "logo": "https://atletic-les-corts.com/assets/logo.png",
              "hasPOS": "Barcelona"
            })
          }}
        />
      </Head>

      <div className={styles.teamsSection}>
        <div className={styles.filtros}>
          <h1 className={styles.title}>Nuestros equipos</h1>
          <div className={styles.searchAndFilter}>
            <input
              type="text"
              placeholder="Buscar por nombre..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
            />
            <select onChange={e => setFiltroCategoria(e.target.value)} value={filtroCategoria}>
              <option value="">Todas las categorías</option>
              <option value="Senior">Senior</option>
              <option value="Juvenil">Juvenil</option>
              <option value="Cadete">Cadete</option>
              <option value="Infantil">Infantil</option>
            </select>
          </div>
        </div>

        <div className={styles.grid}>
          {equiposFiltrados.map(team => (
            <TeamCard key={team.id} equipo={team} />
          ))}
        </div>
      </div>
    </>
  );
}
