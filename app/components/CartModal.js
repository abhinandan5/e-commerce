import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { X, Plus, Minus } from 'lucide-react';

const CartModal = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, cartTotal, updateQuantity } = useCart();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-transparent bg-opacity-50 z-40 flex justify-end"
            onClick={onClose}
        >
            {/* Modal Sliding Panel */}
            <div
                className="w-full max-w-md h-full bg-white shadow-lg z-50 flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">Shopping Cart</h2>
                    <button onClick={onClose}><X size={24} /></button>
                </div>

                <div className="flex-grow overflow-y-auto p-4">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                        <ul className="divide-y">
                            {cartItems.map(item => (
                                <li key={item.id} className="flex items-center py-4">
                                    <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md object-contain" />
                                    <div className="ml-4 flex-grow">
                                        <p className="font-semibold">{item.name}</p>
                                        {/* NEW: Quantity Controls */}
                                        <div className="flex items-center mt-1">
                                            <button onClick={() => updateQuantity(item.id, -1)} className="border rounded-md p-1 hover:bg-gray-100">
                                                <Minus size={16} />
                                            </button>
                                            <span className="px-3">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} className="border rounded-md p-1 hover:bg-gray-100">
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                        <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:underline">
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="p-4 border-t">
                    <div className="flex justify-between items-center font-bold text-lg mb-4">
                        <span>Subtotal:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
