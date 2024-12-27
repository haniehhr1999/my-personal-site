import "@/styles/globals.css";
import "@/styles/font-awesome.min.css";
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  </>;
}
