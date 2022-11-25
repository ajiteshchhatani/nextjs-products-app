import Image from "next/image";

export default function Card({ products }) {
    return (
        <div className="flex flex-row flex-wrap justify-between">
            {
                products.map((product) => (
                    <div key={product.id} className="w-45 md:max-w-xs lg:max-w-sm mb-4 rounded bg-white shadow-lg">
                        <Image
                            src={product.thumbnail}
                            width={400}
                            height={0}
                            className="h-24 md:max-w-xs lg:max-w-sm md:h-52"
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