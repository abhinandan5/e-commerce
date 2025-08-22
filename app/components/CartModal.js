import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { X } from 'lucide-react';

const CartModal = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, cartTotal } = useCart();

    if (!isOpen) return null;

    return (
        // Backdrop
        <div
            className="fixed inset-0 bg-transparent bg-opacity-50 z-40 flex justify-end"
            onClick={onClose}
        >
            {/* Modal Sliding Panel */}
            <div
                className="w-full max-w-md h-3/4 bg-white shadow-lg z-50 flex flex-col transform transition-transform duration-300 ease-in-out"
                style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">Shopping Cart</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800"><X size={24} /></button>
                </div>

                {/* Cart Items */}
                <div className="flex-grow overflow-y-auto p-4">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-center mt-4">Your cart is empty.</p>
                    ) : (
                        <ul className="divide-y divide-gray-200">
                            {cartItems.map(item => (
                                <li key={item.id} className="flex items-center py-4">
                                    <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md object-contain border p-1" />
                                    <div className="ml-4 flex-grow">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.quantity} x ${item.price}</p>
                                    </div>
                                    <p className="font-semibold">${(item.quantity * item.price).toFixed(2)}</p>
                                    <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                                        <X size={20} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer with Subtotal */}
                <div className="p-4 border-t">
                    <div className="flex justify-between items-center font-bold text-lg mb-4">
                        <span>Subtotal:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
