import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';

export default function Home() {
  const { categories } = productsData;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop"
          alt="Tech background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Premium Tech for Modern Life
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Discover our curated collection of premium tech products designed to enhance your digital lifestyle.
            </p>
            <div className="mt-10">
              <Link href="/products">
                <Button size="lg" className="rounded-md">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose EchoTech Pro?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer the best in tech with unmatched service and support.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Premium Selection',
                  description: 'Carefully curated products from top brands',
                },
                {
                  title: 'Expert Support',
                  description: '24/7 technical support from our team of experts',
                },
                {
                  title: 'Fast Shipping',
                  description: 'Free express shipping on orders over $100',
                },
              ].map((feature) => (
                <div key={feature.title} className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8">
                    <div className="-mt-6">
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}