import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Product Listing</h2>
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;