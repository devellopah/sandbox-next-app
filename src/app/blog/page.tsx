import Link from "next/link";
import { posts } from "@/data/posts";

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {post.categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category}`}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                  >
                    {category}
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag}`}
                    className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded hover:bg-gray-200"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 space-y-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          ← Back to Home
        </Link>

        {/* Optional Catch-All Route Demo Section */}
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-green-800">Optional Catch-All Route Demo</h3>
          <p className="text-sm text-green-700 mb-3">
            Experience the difference between regular and optional catch-all routes:
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/blog/demo-home" className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200">
              🆕 Optional Catch-All Demo
            </Link>
            <Link href="/blog/demo/category/frameworks" className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200">
              Category Filter
            </Link>
            <Link href="/blog/demo/tag/react" className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded hover:bg-purple-200">
              Tag Filter
            </Link>
            <Link href="/blog/demo/search/tutorial" className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded hover:bg-orange-200">
              Search Demo
            </Link>
          </div>
          <p className="text-xs text-green-600 mt-2">
            💡 Optional catch-all routes can handle URLs with or without path segments
          </p>
        </div>
      </div>
    </div>
  );
}
