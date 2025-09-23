'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sneakers } from '../../../data/sneakers';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState<string>('8');
  const [quantity, setQuantity] = useState<number>(1);

  const sneaker = sneakers.find(s => s.id === params.id);

  if (!sneaker) {
    notFound();
  }

  const sizes = ['6', '7', '8', '9', '10', '11', '12', '13'];
  const relatedProducts = sneakers
    .filter(s => s.id !== sneaker.id && s.category === sneaker.category)
    .slice(0, 3);

  const handleAddToCart = () => {
    // In a real app, this would add to cart state/context
    alert(`Added ${quantity} x ${sneaker.name} (Size ${selectedSize}) to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/shop" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Shop
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">{sneaker.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={sneaker.image}
                alt={sneaker.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Additional images could go here */}
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700">
                <Image
                  src={sneaker.image}
                  alt={`${sneaker.name} view 1`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700">
                <Image
                  src={sneaker.image}
                  alt={`${sneaker.name} view 2`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700">
                <Image
                  src={sneaker.image}
                  alt={`${sneaker.name} view 3`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700">
                <Image
                  src={sneaker.image}
                  alt={`${sneaker.name} view 4`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {sneaker.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                {sneaker.brand}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  ${sneaker.price}
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  In Stock
                </span>
              </div>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mb-6">
                {sneaker.category}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Description
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {sneaker.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Size
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border rounded-lg font-medium transition-colors ${selectedSize === size
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-center min-w-[3rem] text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {quantity} selected
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Add to Cart - ${(sneaker.price * quantity).toFixed(2)}
              </button>
              <div className="flex gap-4">
                <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Add to Wishlist
                </button>
                <Link
                  href="/shop"
                  className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Product Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Brand:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{sneaker.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Category:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{sneaker.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">SKU:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{sneaker.id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedSneaker) => (
                <div key={relatedSneaker.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Link href={`/product/${relatedSneaker.id}`}>
                    <div className="relative">
                      <Image
                        src={relatedSneaker.image}
                        alt={relatedSneaker.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href={`/product/${relatedSneaker.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2">
                        {relatedSneaker.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {relatedSneaker.brand}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-600">
                        ${relatedSneaker.price}
                      </span>
                      <Link
                        href={`/product/${relatedSneaker.id}`}
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
