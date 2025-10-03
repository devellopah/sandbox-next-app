import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

interface PageProps {
  params: Promise<{
    filter: string[];
  }>;
}

export default async function BlogOptionalCatchAll({ params }: PageProps) {
  const { filter } = await params;

  // This demonstrates optional catch-all functionality
  // filter can be: [] (empty), ['category'], ['category', 'tech'], etc.

  let filteredPosts = posts;
  let title = "All Blog Posts";
  let description = "Browse all our blog posts";
  let filterInfo = null;

  if (filter.length > 0) {
    const [filterType, filterValue] = filter;

    if (filterType === 'category' && filterValue) {
      filteredPosts = posts.filter(post =>
        post.categories.includes(filterValue)
      );
      title = `Posts in category: ${filterValue}`;
      description = `All blog posts categorized under ${filterValue}`;
      filterInfo = { type: 'category', value: filterValue };
    } else if (filterType === 'tag' && filterValue) {
      filteredPosts = posts.filter(post =>
        post.tags.includes(filterValue)
      );
      title = `Posts tagged with: #${filterValue}`;
      description = `All blog posts tagged with ${filterValue}`;
      filterInfo = { type: 'tag', value: filterValue };
    } else if (filterType === 'author' && filterValue) {
      // Demo: filter by author (for demonstration - would need author field in Post interface)
      // filteredPosts = posts.filter(post =>
      //   post.author?.toLowerCase().includes(filterValue.toLowerCase())
      // );
      title = `Author filter demo: ${filterValue}`;
      description = `This demonstrates author filtering (would need author field in data)`;
      filterInfo = { type: 'author', value: filterValue };
    } else if (filterType === 'search' && filterValue) {
      // Demo: simple search functionality
      filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(filterValue.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(filterValue.toLowerCase())
      );
      title = `Search results for: "${filterValue}"`;
      description = `Posts matching "${filterValue}"`;
      filterInfo = { type: 'search', value: filterValue };
    }
  }

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Show current filter info for demonstration */}
        {filterInfo && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm text-blue-800">
              <strong>Optional Catch-All Demo:</strong> Currently filtering by {filterInfo.type} "{filterInfo.value}"
              <br />
              <span className="text-xs">Filter segments: [{filter.join(', ')}]</span>
            </p>
          </div>
        )}

        <div className="flex gap-4 mb-4">
          <Link href="/blog" className="text-blue-500 hover:text-blue-700">
            ← Back to All Posts
          </Link>
          <Link href="/blog/demo" className="text-green-500 hover:text-green-700">
            🆕 Optional Catch-All Demo Home
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <article key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {post.categories.map((category) => (
                  <span key={category} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {category}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    #{tag}
                  </span>
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

      {/* Demo navigation section */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Optional Catch-All Route Demonstration</h3>
        <p className="text-sm text-gray-600 mb-4">
          This route uses <code>[[...filter]]</code> syntax, which means it can handle URLs with or without path segments:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Examples that work:</h4>
            <ul className="space-y-1">
              <li><Link href="/blog/demo" className="text-blue-500">/blog/demo</Link> - No segments (shows all posts)</li>
              <li><span className="font-mono text-blue-600">/blog/demo/category/frameworks</span> - Category filter</li>
              <li><span className="font-mono text-blue-600">/blog/demo/tag/react</span> - Tag filter</li>
              <li><span className="font-mono text-blue-600">/blog/demo/search/tutorial</span> - Search demo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Compare with regular catch-all:</h4>
            <ul className="space-y-1">
              <li><span className="font-mono text-green-600">/blog/[...slug]</span> - Requires at least one segment</li>
              <li><span className="font-mono text-green-600">/blog/[...slug]/category/tech</span> - Works</li>
              <li><span className="font-mono text-red-500">/blog/[...slug]</span> - Would return 404</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
