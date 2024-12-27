import Image from "next/image";
import React from "react";

import me from "@/public/assets/me.jpg";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-center items-center text-black mt-6 px-5">
      <Image src={me} className="rounded-full w-1/2 my-4" />
      <h1 className="text-black my-4 text-2xl font-bold">حانیه رحیم</h1>
      <h2 className="bg-slate-400 rounded py-1 px-4 mb-5">توسعه دهنده فرانت اند</h2>

      {/* card ...  */}
      <div className="bg-blue-300 w-full rounded my-2 px-3 py-1">
        <div className="flex items-center">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <div className="mx-2">ایمیل :</div>
        </div>
        <div>haniehrahim78@gmail.com</div>
      </div>

      <div className="bg-blue-300 w-full rounded my-2 px-3 py-1">
        <div className="flex items-center">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <div className="mx-2">مکان :</div>
        </div>
        <div>ایران / تهران / ستارخان</div>
      </div>

      <div className="bg-blue-300 w-full rounded my-2 px-3 py-1">
        <div className="flex items-center">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <div className="mx-2">تلفن :</div>
        </div>
        <div>09109254065</div>
      </div>
    </div>
  );
};

export default Sidebar;
