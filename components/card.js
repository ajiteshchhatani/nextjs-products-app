import Image from "next/image";
import { useState } from "react";

export default function Card({ products }) {

    const [gridView , setGridView] = useState(true);

    const handleChangeViewButtonClick = () => {
        setGridView(!gridView);
    }

    return (
        <div>
            <button onClick={handleChangeViewButtonClick} className="hidden ml-auto mb-4 lg:block px-4 py-2 bg-blue-500 text-white rounded-lg">
                Toggle grid/list view
            </button>
            <div className="flex flex-row flex-wrap justify-between">
                {
                    products.map((product) => (
                        <div key={product.id} className={`w-45 rounded bg-white shadow-lg mb-4 ${gridView ? `lg:w-32` : `lg:w-45`}`}>
                            <Image
                                src={product.thumbnail}
                                width={400}
                                height={0}
                                className={`w-full h-24 md:h-52`}
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
        </div>
    )
}