const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Start Your Tech Journey?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Join thousands of students who have advanced their careers with SonarB
          Tech Institute
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-[#020233] rounded-xl font-semibold shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
          <button className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#020233] transition-all duration-300 transform hover:scale-105">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
