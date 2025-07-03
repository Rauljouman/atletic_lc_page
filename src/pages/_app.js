import "@/styles/globals.css";
import Header from "@/components/Header";
import "@fontsource/rajdhani"
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
