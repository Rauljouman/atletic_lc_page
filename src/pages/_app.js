import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rajdhani } from "next/font/google";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`body-flex ${rajdhani.className}`}>
      <Header />
      <div className="content-wrapper">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <CookieConsentBanner />
      <Footer />
    </div>
  );
}
