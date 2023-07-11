import Image from "next/image";

export default function Products() {
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <p className="font-semibold text-lg">{p.name}</p>
          <Image
            src={p.image}
            alt={p.name}
            width={300}
            height={200}
            className="object-contain"
          />
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
