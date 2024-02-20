"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductsProps{
  _id: number,
  title: string,
  description: string,
  image: string,
  price: number,
  previousPrice: number,
  isNew: boolean,
  category: string,
  brand: string,
  slug?: string
}

interface Props{
  products: ProductsProps[]
}

export default function Products({ products }: Props) {
  const router = useRouter();
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10'>
      {products.map((item) => (
        <div onClick={() => router.push(`/singleProduct/${item._id}`)} key={item._id}>
          <div className='border border-gray-300 rounded-md hover:border-gray-950 duration-300 overflow-hidden p-4'>
            <Image src={item?.image} alt={item.title} width={500} height={500} className='w-full h-80 object-cover' />
            <div>
              <p>{item?.title}</p>
              <p className='font-semibold'>${item?.price}</p>
              <div className='flex items-center justify-between text-xs text-white py-4'>
                <button className='bg-gray-500 p-2 rounded-md hover:bg-gray-700'>Add to Cart</button>
                <button className='bg-gray-500 p-2 rounded-md hover:bg-gray-700'>More info</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
