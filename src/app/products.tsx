import Image from "next/image";

export default function Products() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {products.map((p) => (
        <div key={p.id} className="">
          <Image
            src={p.image}
            alt={p.name}
            width={300}
            height={200}
            className="object-cover w-full h-52"
          />
          <div className="p-2 pb-4 bg-slate-50/5">
            <p className="font-light mt-2  uppercase">{p.name}</p>
            <p className="mt-2 text-sm text-slate-400">product description</p>
          </div>
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
    image: "/images/cold-room.jpeg",
  },
  {
    id: "2",
    name: "Blast Freezer",
    price: { low: 1000, high: 2000 },
    image: "/images/cold-room.jpeg",
  },
  {
    id: "3",
    name: "Temperature Controls",
    price: { low: 1000, high: 2000 },
    image: "/images/control-panel.jpeg",
  },
  {
    id: "4",
    name: "Condensers",
    price: { low: 1000, high: 2000 },
    image: "/images/condensers.jpeg",
  },
];
