import Image from "next/image";

export default function Products() {
  return (
    <div>
      {products.map((p) => (
        <div>
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
  name: string;
  price: {
    low: number;
    high: number;
  };
  image: string;
};

export const products: TProduct[] = [
  {
    name: "Walk-in Freezer",
    price: { low: 1000, high: 2000 },
    image: "/images/walk-in-freezer.jpeg",
  },
  {
    name: "Blast Freezer",
    price: { low: 1000, high: 2000 },
    image: "/images/blast-freezer.jpeg",
  },
  {
    name: "Temperature Controls",
    price: { low: 1000, high: 2000 },
    image: "/images/control-panels.jpeg",
  },
];
