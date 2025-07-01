import { useState } from "react";
import TeamModal from "./TeamModal";
import styles from "./TeamCard.module.css";

export default function TeamCard({ equipo }) {
  const [verModal, setVerModal] = useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setVerModal(true)}>
        <img src={equipo.image} alt={equipo.nombre} className={styles.img} />
        <h3>{equipo.nombre}</h3>
      </div>

      {verModal && <TeamModal equipo={equipo} cerrar={() => setVerModal(false)} />}
    </>
  );
}
