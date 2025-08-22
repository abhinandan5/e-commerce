'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const Header = () => {
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // State for the search input
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

    // Debounce effect to avoid updating URL on every keystroke
    useEffect(() => {
        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams);
            if (searchTerm) {
                params.set('search', searchTerm);
            } else {
                params.delete('search');
            }
            // Only push to router if we are on the home page
            if (pathname === '/') {
                replace(`${pathname}?${params.toString()}`);
            }
        }, 300); // 300ms delay

        return () => clearTimeout(handler);
    }, [searchTerm, searchParams, pathname, replace]);

    return (
        <>
            <header className="bg-blue-600 text-white shadow-md mb-4 md:mb-8 sticky top-0 z-30">
                <div className="container mx-auto flex items-center justify-between p-4">

                    <a href="/" className="flex items-center gap-3">
                        <Image src="/images/logo.webp" alt="Logo" width={40} height={40} priority className="rounded-full" />
                        <span className="text-2xl font-bold hidden sm:inline">ShopSphere</span>
                    </a>

                    <div className="relative flex-grow border-b border-2 rounded-lg max-w-lg mx-4">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2 text-white rounded-md"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" size={20} />
                    </div>
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative flex items-center space-x-2 bg-primary-dark hover:bg-blue-800 px-4 py-2 rounded-md"
                    >
                        <ShoppingCart size={24} />
                        <span>Cart</span>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </header>
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

export default Header;