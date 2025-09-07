import React from "react";
import { Link } from "react-router-dom";

const branches = [
  { name: "CSE", desc: "Core resources for Computer Science Engineering.", path: "/cse" },
  { name: "CSE AI", desc: "Specialized resources for AI in CSE.", path: "/cseai" },
  { name: "ECE", desc: "Electronics and Communication Engineering resources.",path:"/ece" },
  { name: "ECE AI", desc: "AI-focused resources for ECE students.",path:"/eceai" },
  { name: "IT", desc: "Information Technology learning resources.",path:"/it" },
  { name: "AI ML", desc: "Artificial Intelligence & Machine Learning materials.",path:"/aiml" },
  { name: "MAE", desc: "Mechanical & Automation Engineering resources.",path:"/mae" },
  { name: "BBA", desc: "Business Administration resources.",path:"/bba" },
];

const Resources = () => {
  return (
    <section className="min-h-screen bg-dark text-light py-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Explore Resources
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-dark2 p-6 rounded-xl shadow-md border border-gray-700 hover:border-secondary transition cursor-pointer text-center"
            >
              <h2 className="text-2xl font-bold text-primary mb-3">
                {branch.name}
              </h2>
              <p className="text-gray-300 mb-4">{branch.desc}</p>

              {/* Link to branch page if path exists */}
              {branch.path ? (
                <Link
                  to={branch.path}
                  className="bg-primary text-light px-6 py-2 rounded-lg hover:bg-secondary transition inline-block"
                >
                  View Resources
                </Link>
              ) : (
                <button className="bg-primary text-light px-6 py-2 rounded-lg hover:bg-secondary transition">
                  View Resources
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
