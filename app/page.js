import { Suspense } from 'react';
import ProductPageLayout from './components/ProductPageLayout';

// A simple loading placeholder
function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductPageLayout />
    </Suspense>
  );
}