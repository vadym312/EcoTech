"use client"

import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';
import { usePathname } from 'next/navigation';

export default function ProductPage() {
  const pathname = usePathname();
  const product = productsData.products.find((p) => p.id === pathname.split('/').pop());

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Products', href: '/products' },
    { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), href: `/products?category=${product.category}` },
    { label: product.name },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-8">
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900">Features</h3>
            <ul className="mt-4 space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
            <div className="mt-4 space-y-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-gray-200 py-2">
                  <dt className="text-sm text-gray-500">{key}</dt>
                  <dd className="text-sm font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.934l-6.18 3.246 1.18-6.874L.001 7.466l6.902-1.003L10 0l3.097 6.463 6.902 1.003-4.999 4.84 1.18 6.874L10 15.934z"
                  />
                </svg>
              ))}
            </div>
            <p className="ml-3 text-sm text-gray-500">
              {product.reviews} reviews
            </p>
          </div>

          <div className="mt-8">
            <Button className="w-full" size="lg">
              Add to Cart
            </Button>
          </div>

          {product.stock < 10 && (
            <p className="mt-4 text-sm text-red-500">
              Only {product.stock} left in stock - order soon
            </p>
          )}
        </div>
      </div>
    </div>
  );
}