import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@fontsource/rajdhani";

export default function App({ Component, pageProps }) {
  return (
    <div className="body-flex">
      <Header />
      <main className="content-wrapper">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
