'use client'
import { ProductType } from '@/app/_models/home'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

interface FlashSaleProps {
  products: ProductType[]
}

function FlashSale({ products }: FlashSaleProps) {
  const t = useTranslations('product');
  return (
    <div className='container mx-auto'>
      <section className="p-6 mx-10 bg-white border border-gray-300 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{t('flashSale')}</h2>
          <span className="text-gray-500 text-sm">{t('timeOver')}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-50 rounded-md p-4 shadow-sm flex flex-col">
              <Image
                width={200}
                height={300}
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded-md mb-2"
                priority
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500 truncate line-clamp-3 whitespace-break-spaces">{product.description}</p>
              <div className="gap-2 flex-1 flex items-end">
                <span className="text-red-500 font-bold">{product.ki}</span>
                {product.maxKi && (
                  <span className="text-gray-400 line-through">{product.maxKi}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FlashSale