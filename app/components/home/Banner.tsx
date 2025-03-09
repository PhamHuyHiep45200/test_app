import React from "react";

export default function Banner() {
  return (
    <>
      {/* BANNER */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
        {/* Row 1 */}
        <div className="col-span-2 bg-orange-300 flex items-center justify-center h-64">
          <h2 className="text-4xl font-bold text-white">{"MEN'S COLLECTION"}</h2>
        </div>
        <div className="bg-blue-300 flex items-center justify-center h-64">
          <h2 className="text-2xl font-bold text-white">SPORTS</h2>
        </div>
        <div className="bg-red-300 flex items-center justify-center h-64">
          <h2 className="text-2xl font-bold text-white">WOMEN</h2>
        </div>

        {/* Row 2 */}
        <div className="bg-red-400 flex items-center justify-center h-40">
          <h2 className="text-2xl font-bold text-white">25% Sunglasses</h2>
        </div>
        <div className="bg-green-300 flex items-center justify-center h-40">
          <h2 className="text-2xl font-bold text-white">COUPONS</h2>
        </div>
        <div className="col-span-2 bg-yellow-300 flex items-center justify-center h-40">
          <h2 className="text-3xl font-bold text-white">NEW BACKPACK</h2>
        </div>
      </div>
    </>
  );
}
