import styles from "./TeamModal.module.css";

export default function TeamModal({ equipo, cerrar }) {
  return (
    <div className={styles.modalOverlay} onClick={cerrar}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button onClick={cerrar} className={styles.cerrar}>✕</button>
        <img src={equipo.image} alt={equipo.nombre} className={styles.img} />
        <h2 className="title">{equipo.nombre}</h2>
      </div>
    </div>
  );
}
