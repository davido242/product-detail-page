import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");

  if(!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const products = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        {products.map((product: any) => (<p key={product._id}>{product.name}</p>))}
      </div>
    </main>
  );
}