"use client"

import { Suspense } from 'react';
import ProductList from './ProductList';
import Breadcrumb from '@/components/Breadcrumb';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: 'Products' },
  ];

  const searchParams = useParams();

  if (searchParams?.category) {
    breadcrumbItems.push({
      label: (searchParams?.category as string).charAt(0).toUpperCase() + (searchParams?.category as string).slice(1),
    });
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <div className="space-y-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Our Products
        </h1>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList category={searchParams?.category as string} search={searchParams?.search as string} />
        </Suspense>
      </div>
    </div>
  );
}

function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="group">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4 mt-4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
      ))}
    </div>
  );
}