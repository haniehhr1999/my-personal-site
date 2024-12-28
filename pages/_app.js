import "@/styles/globals.css";
import "@/styles/font-awesome.min.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }) {
  return <>

<div dir="rtl">
      <div className="grid grid-cols-5 h-screen gap-5 p-6 bg-white">
        <div className="col-span-1 bg-blue-100 rounded-md">
          <Sidebar />
        </div>
        <div className="col-span-4 bg-blue-100 rounded-md p-5">
          <Navbar />
  <Component {...pageProps} />
        </div>
      </div>
    </div>
  </>;
}
