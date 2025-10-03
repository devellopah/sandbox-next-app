import Link from "next/link";

export default function BlogDemo() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Optional Catch-All Route Demonstration</h1>
        <p className="text-gray-600 mb-4">
          This page demonstrates the difference between regular catch-all routes and optional catch-all routes in Next.js.
        </p>
        <Link href="/blog" className="text-blue-500 hover:text-blue-700">
          ← Back to All Posts
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Regular Catch-All Route</h2>
          <p className="text-gray-600 mb-4">
            Uses <code>[...slug]</code> syntax and requires at least one path segment.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="font-mono text-blue-600">/blog/[...slug]/category/frameworks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="font-mono text-blue-600">/blog/[...slug]/tag/react</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">✗</span>
              <span className="font-mono text-gray-500">/blog/[...slug] (would return 404)</span>
            </div>
          </div>
        </div>

        <div className="p-6 border border-green-200 rounded-lg bg-green-50">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Optional Catch-All Route</h2>
          <p className="text-gray-600 mb-4">
            Uses <code>[[...filter]]</code> syntax and can handle URLs with or without path segments.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <Link href="/blog/demo" className="text-blue-500">
                /blog/demo (no segments)
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="font-mono text-blue-600">/blog/demo/[[...filter]]/category/frameworks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="font-mono text-blue-600">/blog/demo/[[...filter]]/tag/react</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">Key Differences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2 text-gray-800">Regular Catch-All [...slug]</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Requires at least one path segment</li>
              <li>• /route without segments → 404</li>
              <li>• More restrictive but predictable</li>
              <li>• Good for required filtering</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-green-800">Optional Catch-All [[...filter]]</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Can handle zero or more segments</li>
              <li>• /route without segments → works</li>
              <li>• More flexible for different URL patterns</li>
              <li>• Good for optional filtering/features</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Try the Optional Catch-All Route</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog/demo" className="px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200">
            View All Posts (no filter)
          </Link>
          <Link href="/blog/demo/category/frameworks" className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
            Filter by Category
          </Link>
          <Link href="/blog/demo/tag/react" className="px-4 py-2 bg-purple-100 text-purple-800 rounded hover:bg-purple-200">
            Filter by Tag
          </Link>
          <Link href="/blog/demo/search/tutorial" className="px-4 py-2 bg-orange-100 text-orange-800 rounded hover:bg-orange-200">
            Search Demo
          </Link>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Technical Implementation</h3>
        <p className="text-sm text-gray-600 mb-4">
          The optional catch-all route is implemented at <code>/blog/demo/[[...filter]]/page.tsx</code>.
          The double square brackets <code>[[...filter]]</code> make the route optional, allowing it to match URLs
          with or without additional path segments.
        </p>
        <div className="bg-gray-800 text-green-400 p-4 rounded text-sm font-mono">
          {`// In params, filter can be:
// [] (empty array) - no segments
// ['category', 'frameworks'] - two segments
// ['tag', 'react'] - two segments
// etc.

const { filter } = await params;
if (filter.length > 0) {
  const [filterType, filterValue] = filter;
  // Handle filtering logic
}`}
        </div>
      </div>
    </div>
  );
}
