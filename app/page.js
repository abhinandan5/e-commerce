'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import { products as allProducts } from './data/products';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [filters, setFilters] = useState({
    category: 'All',
    price: 1000,
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    let tempProducts = [...allProducts];
    const searchTerm = searchParams.get('search')?.toLowerCase() || '';

    if (searchTerm) {
      tempProducts = tempProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm)
      );
    }

    if (filters.category !== 'All') {
      tempProducts = tempProducts.filter(p => p.category === filters.category);
    }

    tempProducts = tempProducts.filter(p => p.price <= filters.price);

    setFilteredProducts(tempProducts);
  }, [filters, searchParams]);

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

