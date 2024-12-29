import Image from "next/image";
import React from "react";
import react_certificate from "@/public/assets/react.jpg";
import web1_certificate from "@/public/assets/web1.jpg";
import web2_certificate from "@/public/assets/web2.jpg";
import web3_certificate from "@/public/assets/web3.jpg";
import uiux_certificate from "@/public/assets/uiux.jpg";

const index = () => {
  return (
    <div className="text-black px-6">
      <h1 className="text-blue-600 text-2xl my-5"> مدارک و گواهینامه ها</h1>
      <div className="grid grid-cols-3 gap-10">
        <Image src={react_certificate} className="rounded-md" />
        <Image src={web1_certificate} className="rounded-md" />
        <Image src={web2_certificate} className="rounded-md" />
        <Image src={web3_certificate} className="rounded-md" />
        <Image src={uiux_certificate} className="rounded-md" />
      </div>
    </div>
  );
};

export default index;
