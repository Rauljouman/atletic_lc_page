import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      enableDeclineButton
      style={{ background: "#fff", color: "#333", padding: "20px" }}
      buttonStyle={{ background: "#ff6a00", color: "#fff" }}
      declineButtonStyle={{ background: "#ccc", color: "#333" }}
      cookieName="siteConsent"
      onAccept={() => Cookies.set("siteConsent", "all", { expires: 365 })}
      onDecline={() => Cookies.set("siteConsent", "essential", { expires: 365 })}
    >
      <h3>Resumen de privacidad</h3>
      <p>Esta web usa cookies esenciales y de terceros. Puedes elegir.</p>
      <button onClick={() => Cookies.set("siteConsent", "all", { expires: 365 })}>
        Activar todo
      </button>
      <button onClick={() => Cookies.set("siteConsent", "essential", { expires: 365 })}>
        Guardar ajustes
      </button>
    </CookieConsent>
  );
}
