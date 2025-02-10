import Link from 'next/link';
import { Monitor } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">EchoTech Pro</span>
            </Link>
            <p className="text-sm text-gray-500">
              Making technology accessible to everyone. Premium tech products for your everyday needs.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Products</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/products/laptops" className="text-sm text-gray-500 hover:text-gray-900">
                      Laptops
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/smartphones" className="text-sm text-gray-500 hover:text-gray-900">
                      Smartphones
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/accessories" className="text-sm text-gray-500 hover:text-gray-900">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-sm text-gray-500 hover:text-gray-900">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping" className="text-sm text-gray-500 hover:text-gray-900">
                      Shipping
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-sm text-gray-500 hover:text-gray-900">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} EchoTech Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}