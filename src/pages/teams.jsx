"use client";
import styles from "@/styles/Teams.module.css";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig"; 
import TeamCard from "@/components/TeamCard";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
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
    <div className={styles.teamsSection}>
      <div className={styles.filtros}>
        <h2 className={styles.title}>Nuestros equipos</h2>
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
  );
}