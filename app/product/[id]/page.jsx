'use client';

import { products } from '../../data/products';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';

export default function ProductDetailPage({ params }) {
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === parseInt(params.id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex flex-col md:flex-row gap-12">
            {/* Image Section */}
            <div className="md:w-1/2">
                <div className="relative w-full h-96 bg-white rounded-lg shadow-md">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                        className="p-8"
                    />
                </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
                <p className="text-gray-500 text-lg mb-4">{product.category}</p>
                <p className="text-3xl font-semibold text-primary mb-6">${product.price}</p>
                <p className="text-gray-700 mb-8">{product.description || 'No description available.'}</p>

                {/* Quantity Selector - For now, we add one at a time */}

                <button
                    onClick={() => addToCart(product)}
                    className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors text-lg"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}