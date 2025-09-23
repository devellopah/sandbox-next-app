export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    excerpt: "Learn the basics of Next.js and how to build modern web applications.",
    content: "Next.js is a powerful React framework that makes building web applications easier and more efficient. In this comprehensive guide, we'll explore the fundamental concepts of Next.js, including routing, data fetching, and deployment. Whether you're new to React or looking to enhance your skills, this tutorial will provide you with the knowledge you need to get started with Next.js and build modern, performant web applications.",
    date: "2023-10-01",
    categories: ["frameworks", "javascript"],
    tags: ["nextjs", "react", "tutorial", "web-development"],
  },
  {
    id: 2,
    title: "Understanding React Server Components",
    slug: "understanding-react-server-components",
    excerpt: "Explore the power of server components in React and Next.js.",
    content: "React Server Components represent a paradigm shift in how we think about React applications. Unlike traditional client-side components, Server Components run on the server, allowing for better performance, reduced bundle sizes, and improved SEO. In this article, we'll dive deep into how Server Components work, their benefits, and how to effectively use them in your Next.js applications. We'll also cover the differences between Server and Client Components and when to use each.",
    date: "2023-10-15",
    categories: ["react", "frameworks"],
    tags: ["react", "server-components", "nextjs", "performance"],
  },
  {
    id: 3,
    title: "Building Responsive UIs with Tailwind CSS",
    slug: "building-responsive-uis-with-tailwind-css",
    excerpt: "Tips and tricks for creating beautiful, responsive interfaces.",
    content: "Tailwind CSS has revolutionized the way we approach styling in modern web development. Its utility-first approach allows for rapid UI development while maintaining consistency and scalability. This guide covers essential Tailwind concepts including responsive design, custom utilities, and best practices for organizing your styles. Learn how to create beautiful, responsive interfaces that work seamlessly across all devices and screen sizes.",
    date: "2023-11-01",
    categories: ["css", "design"],
    tags: ["tailwind", "css", "responsive-design", "ui"],
  },
];
