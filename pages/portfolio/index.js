import React from "react";
import hotel from "@/public/assets/hotel.png";
import amlak from "@/public/assets/amlak.png";
import personal from "@/public/assets/personal.png";
import Image from "next/image";

const index = () => {
  return (
    <div className="text-black">
      <h1 className="text-blue-600 text-2xl my-5">نمونه کارها ( جهت بازدید روی هر یک کلیک کنید )</h1>

      <div className="grid grid-cols-3 gap-10">
        

        <div className="ih-item square effect6 from_top_and_bottom rounded-md">
          <a href="https://haniehhr1999.github.io/hotel-website/">
            <div className="img bg-red-500">
              <Image src={hotel} className="h-full aspect-square" />
            </div>
            <div className="info">
              <h3>سایت رزرو هتل</h3>
              <p>ساخته شده با html , css, js</p>
            </div>
          </a>
        </div>

        <div className="ih-item square effect6 from_top_and_bottom rounded-md">
          <a href="https://project18-next-tailwind.vercel.app/">
            <div className="img bg-red-500">
              <Image src={amlak} className="h-full aspect-square" />
            </div>
            <div className="info">
              <h3>سایت املاک</h3>
              <p>ساخته شده با نکست و تیلویند</p>
            </div>
          </a>
        </div>

        <div className="ih-item square effect6 from_top_and_bottom rounded-md">
          <a href="https://haniehhr1999.github.io/personal-site/">
            <div className="img bg-red-500">
              <Image src={personal} className="h-full aspect-square" />
            </div>
            <div className="info">
              <h3>سایت شخصی</h3>
              <p>
                ساخته شده با html , css , js دارای 6 تم رنگی و اسلایدر سوییپر جی
                اس
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
