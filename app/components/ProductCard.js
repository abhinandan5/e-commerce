'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.stopPropagation(); // Prevent the link from navigating when button is clicked
        addToCart(product);
    };

    return (
        <div className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col group">
            <Link href={`/product/${product.id}`} className="block">
                {/* Product Image */}
                <div className="relative w-full h-48">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                        className="p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </Link>

            {/* Product Details */}
            <div className="p-4 flex flex-col flex-grow">
                <Link href={`/product/${product.id}`} className="block">
                    <h3 className="text-lg font-semibold mb-1 hover:text-primary">{product.name} </h3>
                </Link>
                <p className="text-gray-700 font-bold mb-2">${product.price}</p>

                {product.rating && (
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className={i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                            />
                        ))}
                    </div>
                )}

                {/* Optional: Description */}
                {product.description && (
                    <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                )}

                <div className="mt-auto">
                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;