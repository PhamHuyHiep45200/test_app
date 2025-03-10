import { BannerItemType } from "@/app/_models/home";
import Image from "next/image";
import React from "react";

interface BannerProps {
  items: BannerItemType[]
}

export default function Banner(props: BannerProps) {
  const { items } = props;
  return (
    <>
      {/* BANNER */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
        {/* Row 1 */}
        <div className="col-span-2 bg-orange-300 flex items-center justify-center h-100">
          <Image src={items?.[0]?.url} width={500} height={500} alt="Banner 1" className="w-full h-100 object-cover" />
        </div>
        <div className="bg-blue-300 flex items-center justify-center h-100">
          <Image src={items?.[1]?.url} width={500} height={500} alt="Banner 1" className="w-full h-100 object-cover" />
        </div>
        <div className="bg-red-300 flex items-center justify-center h-100">
          <Image src={items?.[2]?.url} width={500} height={500} alt="Banner 1" className="w-full h-100 object-cover" />
        </div>

        {/* Row 2 */}
        <div className="bg-red-400 flex items-center justify-center h-60">
          <Image src={items?.[3]?.url} width={500} height={500} alt="Banner 1" className="w-full h-60 object-cover" />
        </div>
        <div className="bg-green-300 flex items-center justify-center h-60">
          <Image src={items?.[4]?.url} width={500} height={500} alt="Banner 1" className="w-full h-60 object-cover" />
        </div>
        <div className="col-span-2 bg-yellow-300 flex items-center justify-center h-60">
          <Image src={items?.[5]?.url} width={500} height={500} alt="Banner 1" className="w-full h-60 object-cover" />
        </div>
      </div>
    </>
  );
}
