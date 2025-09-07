import React, { useState } from "react";

const About = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmitted(true);
      setFeedback("");
    }
  };

  // ✨ Founder & Co-Founder data
  const founder = {
    name: "Bhavya Sinha",
    thought: "Sharing resources makes learning easier for everyone ✨",
    role: "Founder",
    image: "/assets/contributors/aditi.jpg",
  };

  const coFounder = {
    name: "Aditi Pandit",
    thought: "BrainDock is the bridge between students and knowledge 🚀",
    role: "Co-Founder",
    image: "/assets/contributors/rahul.jpg",
  };

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* About Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
          About BrainDock 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
          <strong>BrainDock</strong> is an all-round website built exclusively
          for IGDTUW students. It is a one-stop platform where you can dock all
          your academic needs — from
          <span className="text-primary font-semibold"> exam resources</span>,
          <span className="text-secondary font-semibold"> projects</span>, and
          <span className="text-primary font-semibold"> placement preparation</span>
          to community support and more.
          <br />
          <br />
          Our mission is to make learning accessible, collaborative, and
          stress-free by providing high-quality resources, interactive tools, and
          an engaging student community.
        </p>

        {/* Feedback Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-4">We’d love your Feedback 💬</h2>
          {submitted ? (
            <p className="text-green-600 font-semibold">
              ✅ Thank you for your feedback!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write your feedback here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                rows="4"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>

        {/* Founder & Co-Founder Section */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-primary">
            Meet the Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-primary"
              />
              <h3 className="text-xl font-semibold">{founder.name}</h3>
              <p className="text-sm text-gray-500">{founder.role}</p>
              <p className="text-gray-600 mt-2 italic">"{founder.thought}"</p>
            </div>

            {/* Co-Founder */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <img
                src={coFounder.image}
                alt={coFounder.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-primary"
              />
              <h3 className="text-xl font-semibold">{coFounder.name}</h3>
              <p className="text-sm text-gray-500">{coFounder.role}</p>
              <p className="text-gray-600 mt-2 italic">"{coFounder.thought}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
