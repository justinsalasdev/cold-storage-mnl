import Image from "next/image";

export default function Products() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {products.map((p) => (
        <div key={p.id} className="rounded border border-slate-600">
          <Image
            src={p.image}
            alt={p.name}
            width={300}
            height={200}
            className="object-cover w-full h-52"
          />
          <p className="font-light p-2 uppercase">{p.name}</p>
        </div>
      ))}
    </div>
  );
}

type TProduct = {
  id: string;
  name: string;
  price: {
    low: number;
    high: number;
  };
  image: string;
};

export const products: TProduct[] = [
  {
    id: "1",
    name: "Walk-in Freezer",
    price: { low: 1000, high: 2000 },
    image: "/images/walk-in-freezer.jpeg",
  },
  {
    id: "2",
    name: "Blast Freezer",
    price: { low: 1000, high: 2000 },
    image: "/images/blast-freezer.jpeg",
  },
  {
    id: "3",
    name: "Temperature Controls",
    price: { low: 1000, high: 2000 },
    image: "/images/control-panels.jpeg",
  },
];
