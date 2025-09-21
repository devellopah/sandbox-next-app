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
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
