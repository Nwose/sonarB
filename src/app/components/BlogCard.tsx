import React from "react";
import Image from "next/image";

const BlogCard = ({ title, excerpt, image, author, date, readTime, tags }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
    <Image
      src={image}
      alt={title}
      width={500}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
      <div className="text-sm text-gray-500 mb-4">
        <p>
          ✍️ {author} | 📅 {date} | ⏱ {readTime} min read
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default BlogCard;
