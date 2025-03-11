import { ProductType } from "@/app/_models/home";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface NewArrivalsProps {
  items: ProductType[];
}

function NewArrivals(props: NewArrivalsProps) {
  const { items } = props;
  const t = useTranslations('product');

  return (
    <div className="container mx-auto">
      <h2 className="text-lg font-semibold mt-8 mb-4">{t('newArrivals')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {!!items?.length && items.map((prd) => (
          <div key={prd.id} className="bg-white rounded-lg shadow p-4">
            <Image
              src={prd.image}
              width={100}
              height={240}
              alt={prd.name}
              className="w-full h-60 object-cover rounded"
            />
            <h3 className="text-sm font-medium mt-2">{prd.name}</h3>
            <p className="text-gray-500 text-xs line-clamp-1">
              {prd.description}
            </p>
            <p className="text-lg font-semibold mt-1">{prd.ki}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
