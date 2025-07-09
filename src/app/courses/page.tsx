"use client";

import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Badge = ({ children, variant = "primary" }: BadgeProps) => {
  const base =
    "inline-block px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2";
  const styles =
    variant === "secondary"
      ? "bg-gray-200 text-gray-800"
      : "bg-white text-gray-900 border border-gray-900";

  return <span className={`${base} ${styles}`}>{children}</span>;
};

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | string;
  price: string;
  tags: string[];
  category: string;
}

const levelColorMap: Record<string, string> = {
  Beginner: "bg-green-500",
  Intermediate: "bg-yellow-500",
  Advanced: "bg-red-500",
};

const CourseCard = ({
  title,
  description,
  image,
  duration,
  level,
  price,
  tags,
  category,
}: CourseCardProps) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden relative flex flex-col h-full min-h-[480px]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span
          className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded ${
            levelColorMap[level] || "bg-gray-500"
          }`}
        >
          {level}
        </span>
        <span className="absolute top-2 right-2 bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded">
          {price}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4 flex-1">{description}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <FaCalendarAlt className="mr-2" />
          <span>{duration}</span>
        </div>
        <div className="mb-2">
          <Badge variant="secondary">{category}</Badge>
        </div>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag, idx) => (
            <Badge key={idx}>{tag}</Badge>
          ))}
        </div>
        <button className="w-full mt-auto px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold shadow hover:bg-gray-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const categories = [
    "All",
    "Web Development",
    "Data Science",
    "Mobile Development",
    "DevOps",
    "AI/ML",
  ];

  const courses: CourseCardProps[] = [
    {
      title: "Advanced JavaScript Development",
      description:
        "Master modern JavaScript concepts, ES6+, async programming, and advanced patterns used in professional development.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      duration: "12 weeks",
      level: "Advanced",
      price: "$299",
      tags: ["JavaScript", "ES6+", "Async", "Professional"],
      category: "Web Development",
    },
    {
      title: "React & TypeScript Mastery",
      description:
        "Build scalable web applications using React with TypeScript, including hooks, context, and advanced patterns.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      duration: "10 weeks",
      level: "Intermediate",
      price: "$249",
      tags: ["React", "TypeScript", "Hooks", "Web Development"],
      category: "Web Development",
    },
    {
      title: "Machine Learning Fundamentals",
      description:
        "Introduction to machine learning concepts, algorithms, and practical implementation using Python and popular frameworks.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      duration: "8 weeks",
      level: "Beginner",
      price: "$199",
      tags: ["ML", "Python", "AI", "Data Science"],
      category: "Data Science",
    },
    {
      title: "iOS App Development with Swift",
      description:
        "Learn to build professional iOS applications using Swift and the latest iOS development frameworks.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      duration: "14 weeks",
      level: "Intermediate",
      price: "$349",
      tags: ["Swift", "iOS", "Mobile", "App Store"],
      category: "Mobile Development",
    },
    {
      title: "DevOps and Cloud Infrastructure",
      description:
        "Master cloud deployment, CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      duration: "16 weeks",
      level: "Advanced",
      price: "$399",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      category: "DevOps",
    },
    {
      title: "Data Science with Python",
      description:
        "Comprehensive data science course covering pandas, numpy, matplotlib, and machine learning libraries.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$279",
      tags: ["Python", "Pandas", "Data Analysis", "ML"],
      category: "Data Science",
    },
    {
      title: "Full-Stack Web Development",
      description:
        "Complete web development bootcamp covering frontend, backend, databases, and deployment strategies.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      duration: "20 weeks",
      level: "Beginner",
      price: "$499",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "React"],
      category: "Web Development",
    },
    {
      title: "Android Development with Kotlin",
      description:
        "Build modern Android applications using Kotlin, Jetpack Compose, and the latest Android development tools.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$329",
      tags: ["Kotlin", "Android", "Jetpack Compose", "Mobile"],
      category: "Mobile Development",
    },
    {
      title: "Deep Learning with TensorFlow",
      description:
        "Advanced deep learning course covering neural networks, CNNs, RNNs, and practical TensorFlow implementation.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      duration: "10 weeks",
      level: "Advanced",
      price: "$379",
      tags: ["TensorFlow", "Deep Learning", "Neural Networks", "AI"],
      category: "AI/ML",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const levelMatch =
      selectedLevel === "All" || course.level === selectedLevel;
    const categoryMatch =
      selectedCategory === "All" || course.category === selectedCategory;
    return levelMatch && categoryMatch;
  });

  return (
    <div>
      <section className="py-20 bg-gray-100 text-gray-900 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-600">
            Master cutting-edge technologies with our comprehensive course
            catalog
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Filter by Level */}
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-700">Filter by Level:</span>
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-3 rounded-xl font-semibold shadow transition duration-300 ${
                  selectedLevel === level
                    ? "bg-gray-900 text-white"
                    : "bg-white text-[#020233] border border-gray-300 hover:bg-blue-100"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Filter by Category */}
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-700">
              Filter by Category:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold shadow transition duration-300 ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-white text-[#020233] border border-gray-300 hover:bg-blue-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredCourses.length} Course
                {filteredCourses.length !== 1 ? "s" : ""} Found
              </h2>
              {(selectedLevel !== "All" || selectedCategory !== "All") && (
                <div className="flex gap-2 mt-2">
                  {selectedLevel !== "All" && (
                    <Badge variant="secondary">{selectedLevel}</Badge>
                  )}
                  {selectedCategory !== "All" && (
                    <Badge variant="secondary">{selectedCategory}</Badge>
                  )}
                </div>
              )}
            </div>
            {(selectedLevel !== "All" || selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSelectedLevel("All");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-white text-[#020233] rounded-xl font-semibold shadow hover:bg-blue-100 transition duration-300"
              >
                Clear Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="animate-scale-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to see more courses.
              </p>
              <button
                onClick={() => {
                  setSelectedLevel("All");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold shadow hover:bg-gray-700 transition duration-300"
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
