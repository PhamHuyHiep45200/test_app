import React from "react";

const TopBrands = () => {
  const brands = [
    "/images/brand1.jpg",
    "/images/brand2.jpg",
    "/images/brand3.jpg",
    "/images/brand4.jpg",
    "/images/brand5.jpg",
    "/images/brand6.jpg",
    "/images/brand7.jpg",
    "/images/brand8.jpg",
    "/images/brand9.jpg",
    "/images/brand10.jpg",
    "/images/brand11.jpg",
    "/images/brand12.jpg",
    "/images/brand13.jpg",
    "/images/brand14.jpg",
    "/images/brand15.jpg",
    "/images/brand16.jpg",
  ];

  return (
    <div className="container mx-auto p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Top Brands</h2>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-4 lg:grid-cols-4 flex-grow">
        {brands.map((brand, index) => (
          <div key={index} className="w-full h-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
            {/* <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-full h-full object-cover"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;