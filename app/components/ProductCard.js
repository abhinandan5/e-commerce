'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { Plus, Minus } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { cartItems, addToCart, updateQuantity } = useCart();
    const itemInCart = cartItems.find(item => item.id === product.id);
    const quantityInCart = itemInCart ? itemInCart.quantity : 0;

    const handleAddToCart = (e) => {
        e.stopPropagation();
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
                    {quantityInCart === 0 ? (
                        <button
                            onClick={() => addToCart(product)}
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center justify-center gap-8">
                            <button
                                onClick={() => updateQuantity(product.id, -1)}
                                className="border rounded-full p-2 hover:bg-gray-100 transition-colors"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="font-bold text-lg">{quantityInCart}</span>
                            <button
                                onClick={() => updateQuantity(product.id, 1)}
                                className="border rounded-full p-2 hover:bg-gray-100 transition-colors"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProductCard;