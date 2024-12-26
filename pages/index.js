import Image from "next/image";
import man from "@/public/assets/man.jpg";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5 h-screen gap-5 p-6">
        <div className="col-span-1 bg-pink-600 rounded-md">
          <div className="flex flex-col justify-center items-center bg-yellow-500 mt-6">
            <Image src={man} className="rounded-full w-1/2" />
            <h1>حانیه رحیم</h1>
            <h1>نوسعه دهنده فرانت اند</h1>
          </div>
        </div>
        <div className="col-span-4 bg-yellow-600 rounded-md"></div>
      </div>
    </>
  );
}
