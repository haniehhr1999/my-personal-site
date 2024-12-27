import Image from "next/image";import me from "@/public/assets/me.jpg";

export default function Home() {
  return (
    <div dir="rtl">
      <div className="grid grid-cols-5 h-screen gap-5 p-6 bg-white">
        <div className="col-span-1 bg-blue-100 rounded-md">
          <div className="flex flex-col justify-center items-center bg-yellow-500 mt-6">
            <Image src={me} className="rounded-full w-1/2" />
            <h1>حانیه رحیم</h1>
            <h1>نوسعه دهنده فرانت اند</h1>
          </div>
        </div>
        <div className="col-span-4 bg-blue-100 rounded-md p-5">
          <nav className="rounded-md bg-slate-400 px-5 py-3">
            <ul className="flex">
              <li className="mx-3 cursor-pointer">درباره من</li>
              <li className="mx-3 cursor-pointer">رزومه</li>
              <li className="mx-3 cursor-pointer">پورتفولیو</li>
              <li className="mx-3 cursor-pointer">مقالات</li>
              <li className="mx-3 cursor-pointer">ارتباط با من</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
