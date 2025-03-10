import { BannerItemType } from "@/app/_models/home";
import Image from "next/image";
import React from "react";

interface TopBrandProps {
  topBands: BannerItemType[]
}

const TopBrands = (props: TopBrandProps) => {
  const { topBands } = props;

  return (
    <div className="container mx-auto p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Top Brands</h2>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-4 lg:grid-cols-4 flex-grow">
        {topBands?.map((brand, index) => (
          <div key={brand.id} className="w-full h-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={brand.url}
              alt={`Brand ${index + 1}`}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;