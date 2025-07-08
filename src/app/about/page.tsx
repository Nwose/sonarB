import React from "react";

import { FaRocket, FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";

const About: React.FC = () => {
  const timeline = [
    {
      year: "2018",
      description:
        "SonarB Tech Institute was founded with a vision to democratize advanced technology education.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Expanded to online learning platforms, reaching students globally during the pandemic.",
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description:
        "Established partnerships with leading tech companies for internships and job placements.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description:
        "Launched AI-powered personalized learning paths and career guidance systems.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
      bio: "Former Silicon Valley engineer with 15+ years in tech leadership.",
    },
    {
      name: "Mark Johnson",
      role: "Head of Curriculum",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in educational technology with a passion for innovative teaching methods.",
    },
    {
      name: "Dr. Priya Patel",
      role: "Director of Research",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "AI researcher focused on machine learning applications in education.",
    },
    {
      name: "Alex Rodriguez",
      role: "Head of Student Success",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Dedicated to ensuring every student achieves their career goals.",
    },
  ];

  const values = [
    {
      icon: <FaRocket className="text-4xl text-sonarb-navy mb-4" />,
      title: "Innovation",
      description:
        "We continuously evolve our teaching methods and curriculum to stay ahead of industry trends.",
    },
    {
      icon: <FaUsers className="text-4xl text-sonarb-navy mb-4" />,
      title: "Inclusivity",
      description:
        "We foster an inclusive learning environment where everyone can thrive regardless of their background.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-sonarb-navy mb-4" />,
      title: "Empowerment",
      description:
        "We empower our students with the knowledge and skills needed to succeed in their chosen careers.",
    },
    {
      icon: <FaHandshake className="text-4xl text-sonarb-navy mb-4" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, from curriculum design to student support.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About SonarB Tech
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-900">
            Pioneering the future of technology education through innovation,
            expertise, and dedication
          </p>
          <div>
            <button className="px-6 py-3 bg-white text-[#020233] rounded-xl font-semibold shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 border border-gray-900">
              Explore Courses
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SonarB Tech Institute, our mission is to democratize access
                to advanced technology education. We believe that everyone
                deserves the opportunity to learn cutting-edge skills and
                advance their careers in the rapidly evolving tech industry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to providing world-class instruction, fostering
                an inclusive learning environment, and offering comprehensive
                career guidance to help our students achieve their professional
                goals.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
            <div className="order-2 lg:order-1 animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Future vision"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We envision a future where technology education is accessible to
                all, where learning is personalized and engaging, and where
                every student has the tools and support they need to succeed in
                the digital economy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is to become the leading global platform for advanced
                technology education, known for our innovation, quality, and
                commitment to student success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
              >
                <div className="flex items-center justify-center text-4xl mb-4 text-gray-900">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our evolution as a leading tech education
              institute
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-900"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } animate-fade-in-up`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate educators and industry experts behind SonarB Tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sonarb-navy text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-500">
            Be part of the future of technology education. Start your journey
            with us today.
          </p>
          <button className="px-6 py-3 bg-white text-[#020233] rounded-xl font-semibold shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 border border-gray-900">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
