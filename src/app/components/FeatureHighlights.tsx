import React from "react";

const highlights = [
  {
    icon: "🎓",
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of real-world experience.",
    delay: "0",
  },
  {
    icon: "🚀",
    title: "Cutting-edge Curriculum",
    description: "Stay ahead with the latest technologies and best practices.",
    delay: "75",
  },
  {
    icon: "💼",
    title: "Career Guidance",
    description:
      "Comprehensive support to help you reach your professional goals.",
    delay: "150",
  },
];

const FeatureHighlights: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why Choose SonarB Tech?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We combine cutting-edge technology education with personalized career
          guidance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <div
            key={i}
            className={`text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in delay-${item.delay}`}
          >
            <div className="w-16 h-16 bg-[#020233] rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">{item.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureHighlights;
