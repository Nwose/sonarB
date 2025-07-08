// components/LatestBlogs.tsx
import React from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";
import Button from "./Buttons";

const blogs = [
  {
    title: "Future of Web Dev 2024",
    excerpt: "Trends & emerging tech shaping web dev.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    author: "Dr. Sarah Chen",
    date: "Dec 1, 2024",
    readTime: "5",
    tags: ["Trends", "Web Dev"],
  },
  {
    title: "Scalable Apps with Microservices",
    excerpt: "Designing clean, modular systems with microservices.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    author: "Mark Johnson",
    date: "Nov 28, 2024",
    readTime: "7",
    tags: ["Microservices", "Architecture"],
  },
];

const LatestBlogs = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Blogs
          </h2>
          <p className="text-xl text-gray-600">
            Insights, tips, and industry news
          </p>
        </div>
        <Link href="/blog">
          <Button
            variant="outline"
            className="border-[#020233] text-[#020233] hover:bg-[#020233] hover:text-white"
          >
            View All Blogs
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </div>
  </section>
);

export default LatestBlogs;
