import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white mt-auto">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-8">
                <div>
                    <Link href="/" className="flex items-center gap-3">
                        <h3 className="font-bold text-lg mb-2">ShopSphere</h3>
                    </Link>
                    <p className="text-gray-300 text-sm">© 2025 ShopSphere</p>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="font-bold text-lg mb-2">About Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* CRedundant Filters Link */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Filters</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">All</a></li>
                        <li><a href="#" className="hover:text-white">Electronics</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white"><Facebook size={24} /></a>
                        <a href="#" className="text-gray-300 hover:text-white"><Twitter size={24} /></a>
                        <a href="#" className="text-gray-300 hover:text-white"><Instagram size={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;