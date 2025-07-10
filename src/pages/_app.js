import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rajdhani } from "next/font/google";
import CookieConsentPanel from "@/components/CookieConsentPanel";
import { CookieConsentProvider } from "@/context/CookieConsentContext"; // 👈 AÑADIDO

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <CookieConsentProvider> 
      <div className={`body-flex ${rajdhani.className}`}>
        <Header />
        <div className="content-wrapper">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <CookieConsentPanel />
        <Footer />
      </div>
    </CookieConsentProvider>
  );
}
