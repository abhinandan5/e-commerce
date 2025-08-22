'use client';

import { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

const Header = () => {
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header className="bg-blue-600 text-white shadow-md mb-4 md:mb-8 sticky top-0 z-30">
                <div className="container mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <a href="/">
                            <Image
                                src="/logo.webp"
                                alt="Logo"
                                width={120}
                                height={30}
                                priority
                            />
                            Logo
                        </a>
                    </div>

                    {/* Search Bar */}
                    <div className="relative flex-grow max-w-lg mx-4">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2 border-b border-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" size={20} />
                    </div>

                    {/* Cart Icon Button */}
                    <div>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative flex items-center space-x-2 bg-blue-800 transition-colors px-4 py-2 rounded-md"
                        >
                            <ShoppingCart size={24} />
                            <span>Cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* The Modal Component */}
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

export default Header;
