import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 text-sm mb-4">Published on {post.date}</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div>
              <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category}`}
                    className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag}`}
                    className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded hover:bg-gray-200"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
          <div className="whitespace-pre-line text-gray-800 leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-500 hover:text-blue-700 font-medium">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
