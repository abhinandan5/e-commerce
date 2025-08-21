import { Search, ShoppingCart } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-primary text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/images/logo.webp">Logo</a>
                </div>

                {/* Search Bar */}
                <div className="relative flex-grow max-w-lg mx-4">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>

                {/* Cart Icon */}
                <button className="flex items-center space-x-2 bg-primary-dark hover:bg-blue-800 transition-colors px-4 py-2 rounded-md">
                    <ShoppingCart size={24} />
                    <span>Cart</span>
                </button>
            </div>
        </header>
    );
};

export default Header;