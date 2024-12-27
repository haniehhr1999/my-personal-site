import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div dir="rtl">
      <div className="grid grid-cols-5 h-screen gap-5 p-6 bg-white">
        <div className="col-span-1 bg-blue-100 rounded-md">
          <Sidebar />
        </div>
        <div className="col-span-4 bg-blue-100 rounded-md p-5">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
