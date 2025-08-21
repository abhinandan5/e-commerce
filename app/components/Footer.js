import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white mt-auto">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-8">
                {/* Column 1: Filters/Brand */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Logo</h3>
                    <p className="text-gray-300 text-sm">© 2024 American</p>
                </div>

                {/* Column 2: About Us */}
                <div>
                    <h3 className="font-bold text-lg mb-2">About Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Redundant Filters Link (as per image) */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Filters</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">All</a></li>
                        <li><a href="#" className="hover:text-white">Electronics</a></li>
                    </ul>
                </div>

                {/* Column 4: Follow Us */}
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