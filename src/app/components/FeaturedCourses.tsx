import React from "react";
import Button from "./Buttons";
import Link from "next/link";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Advanced JavaScript Development",
    description: "Master modern JS, async programming & patterns.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    duration: "12 weeks",
    level: "Advanced",
    price: "$299",
    tags: ["JavaScript", "ES6+", "Async", "Professional"],
  },
  {
    title: "React & TypeScript Mastery",
    description: "Build scalable apps with React, TS, Hooks.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    duration: "10 weeks",
    level: "Intermediate",
    price: "$249",
    tags: ["React", "TypeScript", "Hooks"],
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Intro to ML using Python & real-world examples.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    duration: "8 weeks",
    level: "Beginner",
    price: "$199",
    tags: ["ML", "Python", "AI"],
  },
];

const FeaturedCourses: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600">
            Explore our most popular courses
          </p>
        </div>
        <Link href="/courses">
          <Button
            variant="outline"
            className="border-[#020233] text-[#020233] hover:bg-[#020233] hover:text-white"
          >
            View All Courses
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCourses;
