import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieConsentContext = createContext();

export function CookieConsentProvider({ children }) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("siteConsent");
    if (consent === "accepted") {
      setHasConsent(true);
    }
  }, []);

  return (
    <CookieConsentContext.Provider value={{ hasConsent, setHasConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export const useCookieConsent = () => useContext(CookieConsentContext);
