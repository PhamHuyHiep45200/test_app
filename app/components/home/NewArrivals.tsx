import Image from "next/image";
import React from "react";

const newArrivals = [
  {
    image: "/images/product1.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
  {
    image: "/images/product2.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
  {
    image: "/images/product3.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
  {
    image: "/images/product4.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
  {
    image: "/images/product5.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
  {
    image: "/images/product6.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
  {
    image: "/images/product7.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
  {
    image: "/images/product8.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
  {
    image: "/images/product9.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
  {
    image: "/images/product10.jpg",
    name: "Roadster Women Round Neck",
    price: "$18.59",
  },
];

function NewArrivals() {
  return (
    <div className="container mx-auto">
      <h2 className="text-lg font-semibold mt-8 mb-4">New Arrivals</h2>
      <div className="grid grid-cols-5 gap-4">
        {newArrivals.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <Image
              src={product.image}
              width={100}
              height={240}
              alt={product.name}
              className="w-full h-60 object-cover rounded"
            />
            <h3 className="text-sm font-medium mt-2">{product.name}</h3>
            <p className="text-gray-500 text-xs">
              Fendi began life in 1925 as a fur and ...
            </p>
            <p className="text-lg font-semibold mt-1">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
