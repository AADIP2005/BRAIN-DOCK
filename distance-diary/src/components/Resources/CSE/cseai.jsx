import React, { useState } from "react";
import bannerImg from "../../../assets/banner.png";

const cseAIData = {
  Semester1: {
    "Mathematics-I": {
      Unit1: ["Notes", "Lecture Video", "Assignments"],
      Unit2: ["MCQs", "Practice Questions"],
    },
    "Python Programming": {
      Unit1: ["Code Examples", "Lab Manual"],
      Unit2: ["Practice Problems"],
    },
  },
  Semester2: {
    "Data Structures & Algorithms": {
      Unit1: ["Notes", "Lecture Slides"],
      Unit2: ["Assignments", "Quizzes"],
    },
    "AI Fundamentals": {
      Unit1: ["Notes", "Videos"],
      Unit2: ["Previous Year Papers"],
    },
  },
  Semester3: {
    "Machine Learning": {
      Unit1: ["Notes", "Lecture Slides"],
      Unit2: ["Assignments", "Projects"],
    },
    "Probability & Statistics": {
      Unit1: ["Notes", "Videos"],
      Unit2: ["MCQs", "Practice Questions"],
    },
  },
  Semester4: {
    "Deep Learning": {
      Unit1: ["Notes", "Lecture Slides"],
      Unit2: ["Assignments", "Projects"],
    },
    "Natural Language Processing": {
      Unit1: ["Notes", "Videos"],
      Unit2: ["Quizzes", "Projects"],
    },
  },
};

const CSEAI = () => {
  const [selectedSem, setSelectedSem] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900">
      {/* Banner */}
      <div className="w-full h-64 overflow-hidden relative">
        <img
          src={bannerImg}
          alt="CSE AI Banner"
          className="w-full max-h-[400px] object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            CSE AI Resources
          </h1>
        </div>
      </div>

      <div className="p-6 max-w-5xl mx-auto">
        {/* Step 1: Select Semester */}
        {!selectedSem && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              📘 Choose Semester
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {Object.keys(cseAIData).map((sem) => (
                <button
                  key={sem}
                  onClick={() => setSelectedSem(sem)}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md 
                             border border-gray-300 hover:border-secondary hover:scale-105 
                             transition-transform duration-300 ease-out text-lg font-semibold"
                >
                  {sem}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Subject */}
        {selectedSem && !selectedSubject && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {selectedSem} – Choose Subject
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Object.keys(cseAIData[selectedSem]).map((subject) => (
                <div
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className="cursor-pointer bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md 
                             border border-gray-300 hover:border-secondary hover:scale-105 
                             transition-transform duration-300 ease-out flex flex-col items-center justify-center text-center"
                >
                  <span className="text-lg font-bold">{subject}</span>
                  <span className="mt-2 text-gray-600 text-sm">
                    {Object.keys(cseAIData[selectedSem][subject]).length} Units
                  </span>
                </div>
              ))}
            </div>

            {/* Back button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setSelectedSem(null)}
                className="px-5 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-primary transition"
              >
                🔙 Back
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Show Units */}
        {selectedSem && selectedSubject && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {selectedSem} → {selectedSubject} → Units
            </h2>
            <ul className="space-y-4">
              {Object.keys(cseAIData[selectedSem][selectedSubject]).map((unit) => (
                <li
                  key={unit}
                  className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md 
                             border border-gray-300 hover:border-primary transition"
                >
                  <strong className="text-primary">{unit}</strong>:{" "}
                  {cseAIData[selectedSem][selectedSubject][unit].join(", ")}
                </li>
              ))}
            </ul>

            {/* Back button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setSelectedSubject(null)}
                className="px-5 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-primary transition"
              >
                🔙 Back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CSEAI;


