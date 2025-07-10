import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import styles from "./CookieConsentPanel.module.css";
import { useCookieConsent } from "@/context/CookieConsentContext";

export default function CookieConsentPanel() {
  const [visible, setVisible] = useState(false);
  const { hasConsent, setHasConsent } = useCookieConsent();

  useEffect(() => {
    if (!hasConsent && !Cookies.get("siteConsent")) {
      setVisible(true);
    }
  }, [hasConsent]);

  const acceptCookies = () => {
    Cookies.set("siteConsent", "accepted", { expires: 365 });
    setHasConsent(true);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <button className={styles.close} onClick={acceptCookies}>✕</button>
        <h2 className={styles.title}>Resumen de privacidad</h2>
        <p className={styles.description}>
          Usamos cookies esenciales para el correcto funcionamiento del sitio. Además, el mapa de Google puede establecer cookies de terceros. <br />Al continuar navegando, aceptas su uso.
        </p>
        <div className={styles.buttons}>
          <button onClick={acceptCookies} className={styles.acceptAll}>
            Aceptar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
