import Image from "next/image";

export default function Card({ products }) {
    return (
        <div className="flex flex-col px-4 py-0 md:flex-row md:flex-wrap md:justify-between md:p-0">
            {
                products.map((product) => (
                    <div key={product.id} className="md:basis-1/5 md:max-w-xs lg:max-w-sm mb-4 rounded bg-white shadow-lg">
                        <Image
                            src={product.thumbnail}
                            width={400}
                            height={0}
                            className="max-w-xs lg:max-w-sm md:h-52"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt={`${product.title} alt image`}
                        />
                        <div className="px-6 py-4">
                            <p className="text-xl mb-2">{product.title}</p>
                            <p className="text-gray-700 mb-2">{product.description}</p>
                            <p className="text-gray-700 mb-2"><span className="font-bold">Brand: </span>{product.brand}</p>
                            <p className="text-gray-700"><span className="font-bold">Price: </span>{product.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}