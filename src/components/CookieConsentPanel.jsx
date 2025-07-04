import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import styles from "./CookieConsentPanel.module.css";

export default function CookieConsentPanel() {
  const [visible, setVisible] = useState(false);
  const consent = Cookies.get("siteConsent");

  useEffect(() => {
    if (!consent) {
      setVisible(true);
    }
  }, [consent]);

  const saveConsent = (choice) => {
    Cookies.set("siteConsent", choice, { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <button className={styles.close} onClick={() => saveConsent("essential")}>
          ✕
        </button>
        <h2 className="title">Resumen de privacidad</h2>
        <p className="description">
          Esta web utiliza cookies para ofrecerte la mejor experiencia posible. Puedes elegir qué tipo de cookies deseas aceptar.
        </p>
        <div className={styles.buttons}>
          <button onClick={() => saveConsent("all")} className={styles.acceptAll}>
            Activar todo
          </button>
          <button onClick={() => saveConsent("essential")} className={styles.save}>
            Guardar ajustes
          </button>
        </div>
      </div>
    </div>
  );
}
