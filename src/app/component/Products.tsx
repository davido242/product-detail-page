"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface ProductsProps{
  _id: number,
  title: string,
  description: string,
  image: string,
  price: number,
  previousPrice: number,
  isNew: boolean,
  category: string,
  brand: string
}

interface Props{
  products: ProductsProps[]
}

export default function Products({ products }: Props) {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10'>
      {products.map((item) => (
        <Link href={"/"} key={item._id}>
          <div className='border border-gray-300 rounded-md hover:border-gray-950 duration-300'>
            <Image src={item?.image} alt={item.title} width={500} height={500} className='w-full h-80 object-cover' />
            <div>
              <p>{item?.title}</p>
              <p>${item?.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}