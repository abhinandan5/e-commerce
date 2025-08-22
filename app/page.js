'use client'; // This is required for using hooks

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import { products as allProducts } from './data/products'; // Import our mock data

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [filters, setFilters] = useState({
    category: 'All',
    price: 1000,
  });

  useEffect(() => {
    let tempProducts = [...allProducts];

    // Filter by category
    if (filters.category !== 'All') {
      tempProducts = tempProducts.filter(p => p.category === filters.category);
    }

    // Filter by price
    tempProducts = tempProducts.filter(p => p.price <= filters.price);

    setFilteredProducts(tempProducts);
  }, [filters]); // Re-run the effect when filters change

  const handleFilterChange = (filterName, filterValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Sidebar filters={filters} onFilterChange={handleFilterChange} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}