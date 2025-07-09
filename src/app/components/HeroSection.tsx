"use client";

export default function HeroSection() {
  return (
    <section
      className="relative pt-24 pb-16 min-h-[100vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/EduTech.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#020233",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#020233cc] via-[#02023388] to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        <div className="w-full lg:w-2/5 text-white ml-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Welcome to{" "}
            <span className="text-blue-400">SonarB Tech Institute</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
            At SonarB Tech Institute, we provide expertise in advanced
            technological instruction, fostering an inclusive learning
            environment with comprehensive career guidance.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-[#020233] rounded-xl font-semibold shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
              Explore Courses
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#020233] transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden lg:block lg:w-3/5" />
      </div>
    </section>
  );
}
