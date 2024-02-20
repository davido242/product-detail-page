import React from 'react';

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if(!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

interface singleProductsProps{
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
  products: singleProductsProps[]
}

export default async function SingleProduct({ params }: { params: { _id: number } }) {
  const products = await getData();
  const product = products.find((item: any) => item._id === params._id);
  if(product) {
    console.log(product);
  }else{
    console.log("No Product Found");
  }
  return (
    <div>
      <p>Single Product</p>
      
    </div>
  )
}
