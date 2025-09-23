import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function BlogFilter({ params }: PageProps) {
  const { slug } = await params;

  if (slug.length !== 2) {
    notFound();
  }

  const [filterType, filterValue] = slug;

  let filteredPosts;
  let title;
  let description;

  if (filterType === 'category') {
    filteredPosts = posts.filter(post =>
      post.categories.includes(filterValue)
    );
    title = `Posts in category: ${filterValue}`;
    description = `All blog posts categorized under ${filterValue}`;
  } else if (filterType === 'tag') {
    filteredPosts = posts.filter(post =>
      post.tags.includes(filterValue)
    );
    title = `Posts tagged with: #${filterValue}`;
    description = `All blog posts tagged with ${filterValue}`;
  } else {
    notFound();
  }

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href="/blog" className="text-blue-500 hover:text-blue-700">
          ← Back to All Posts
        </Link>
      </div>

      <div className="space-y-6">
        {filteredPosts.map((post) => (
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
    </div>
  );
}
