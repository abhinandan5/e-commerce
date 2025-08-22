const Sidebar = ({ filters, onFilterChange }) => {
    const handleCategoryChange = (e) => {
        onFilterChange('category', e.target.value);
    };

    const handlePriceChange = (e) => {
        onFilterChange('price', Number(e.target.value));
    };

    return (
        <aside className="w-full md:w-1/4 p-6 bg-blue-600 text-white rounded-lg shadow-lg self-start">
            <h2 className="text-2xl font-bold mb-6">Filters</h2>

            {/* Category Filter */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                    {['All', 'Electronics', 'Clothing', 'Footwear', 'Accessories'].map((cat) => (
                        <label key={cat} className="flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value={cat}
                                checked={filters.category === cat}
                                onChange={handleCategoryChange}
                                className="h-4 w-4"
                            />
                            <span className="ml-2">{cat}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div>
                <h3 className="text-lg font-semibold mb-3">Price</h3>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.price}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm mt-2">
                    <span>$0</span>
                    <span>${filters.price}</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;