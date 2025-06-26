import "@/styles/globals.css";
import Header from "@/components/Header";
import "@fontsource/rajdhani"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
