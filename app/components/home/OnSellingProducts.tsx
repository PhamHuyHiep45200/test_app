import { OnSellingProductsType } from '@/app/_models/home'
import Image from 'next/image'
import React from 'react'

interface OnSellingProductsProps {
  product: OnSellingProductsType[]
}

function OnSellingProducts(props: OnSellingProductsProps) {
  const { product } = props
  return (
    <div className='container mx-auto'>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">On Selling Products</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 bg-yellow-500 p-6 text-white flex flex-col items-center justify-center rounded-lg">
            <p className="text-lg font-bold">SALE OFFER!</p>
            <p className="text-3xl font-bold">50%</p>
            <p>Limited Time Valid</p>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {product?.map((prd, index) => (
              <div key={prd.mal_id} className="bg-white p-4 shadow rounded-lg">
                <div className="bg-gray-200 h-32 rounded-lg mb-2">
                  <Image
                    src={prd.url}
                    alt={prd.url}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-lg" />
                </div>
                <p className="text-sm font-semibold">Product {index + 1}</p>
                <p className="text-sm text-gray-500">$12.99</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exclusive Section */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-6 flex flex-col items-center justify-center rounded-lg">
          <p className="text-xl font-bold">NEW YEAR</p>
          <p className="text-5xl font-extrabold text-gray-500">2021</p>
          <button className="mt-4 bg-white px-4 py-2 rounded-lg shadow">#WOMEN EXCLUSIVE</button>
        </div>
        <div className="bg-gray-200 p-6 flex flex-col items-center justify-center rounded-lg">
          <p className="text-xl font-bold">EXCLUSIVE</p>
          <p className="text-5xl font-extrabold text-gray-500">2021</p>
          <button className="mt-4 bg-white px-4 py-2 rounded-lg shadow">#MEN EXCLUSIVE</button>
        </div>
      </div>
    </div>
  )
}

export default OnSellingProducts