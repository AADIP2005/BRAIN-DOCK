import React, { useState } from "react";
import eceBanner from "../../assets/mecBanner.png"; // <-- new ECE banner

const eceData = {
  Semester1: {
    "Mathematics-I": {
      Unit1: ["Notes", "Lecture Slides", "Assignments"],
      Unit2: ["Practice Problems", "MCQs"],
    },
    "Basic Electrical Engineering": {
      Unit1: ["Notes", "Lab Manual"],
      Unit2: ["Previous Year Papers"],
    },
  },
  Semester2: {
    "Analog Electronics": {
      Unit1: ["Notes", "Lecture Slides"],
      Unit2: ["Assignments", "Quizzes"],
    },
    "Digital Logic Design": {
      Unit1: ["Notes", "Videos"],
      Unit2: ["Practice Questions"],
    },
  },
  Semester3: {
    "Signals & Systems": {
      Unit1: ["Notes", "Lecture Slides"],
      Unit2: ["Assignments", "Quizzes"],
    },
    "Electromagnetic Theory": {
      Unit1: ["Notes", "Videos"],
      Unit2: ["Previous Year Papers"],
    },
  },
  Semester4: {
    "Microprocessors & Microcontrollers": {
      Unit1: ["Notes", "Lecture Slides"],
      Unit2: ["Projects", "Assignments"],
    },
    "Communication Systems": {
      Unit1: ["Notes", "Videos"],
      Unit2: ["Quizzes", "Practice Questions"],
    },
  },
};

const mae = () => {
  const [selectedSem, setSelectedSem] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Banner */}
      <div className="w-full h-64 overflow-hidden relative">
        <img
          src={eceBanner}
          alt="MAE Banner"
          className="w-full max-h-[400px] object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            MAE Resources
          </h1>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-6 px-4 py-2 rounded-lg shadow-md 
                     bg-white/80 text-gray-900 hover:bg-gray-200 
                     dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Content */}
      <div className="p-6 max-w-5xl mx-auto">
        {/* Step 1: Select Semester */}
        {!selectedSem && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              📘 Choose Semester
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {Object.keys(eceData).map((sem) => (
                <button
                  key={sem}
                  onClick={() => setSelectedSem(sem)}
                  className={`p-6 rounded-xl shadow-md backdrop-blur-sm text-lg font-semibold 
                    transition-transform duration-300 ease-out hover:scale-105
                    ${
                      darkMode
                        ? "bg-gray-800 border border-gray-600 hover:border-primary"
                        : "bg-white/80 border border-gray-300 hover:border-primary"
                    }`}
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
              {Object.keys(eceData[selectedSem]).map((subject) => (
                <div
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`cursor-pointer p-6 rounded-xl shadow-md 
                    backdrop-blur-sm flex flex-col items-center justify-center text-center 
                    transition-transform duration-300 ease-out hover:scale-105
                    ${
                      darkMode
                        ? "bg-gray-800 border border-gray-600 hover:border-secondary"
                        : "bg-white/80 border border-gray-300 hover:border-secondary"
                    }`}
                >
                  <span className="text-lg font-bold">{subject}</span>
                  <span className="mt-2 text-sm opacity-70">
                    {Object.keys(eceData[selectedSem][subject]).length} Units
                  </span>
                </div>
              ))}
            </div>

            {/* Back button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setSelectedSem(null)}
                className={`px-5 py-2 rounded-lg transition ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-primary"
                    : "bg-gray-300 text-gray-900 hover:bg-primary hover:text-white"
                }`}
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
              {Object.keys(eceData[selectedSem][selectedSubject]).map((unit) => (
                <li
                  key={unit}
                  className={`p-5 rounded-lg shadow-md transition
                    ${
                      darkMode
                        ? "bg-gray-800 border border-gray-600 hover:border-primary"
                        : "bg-white/80 border border-gray-300 hover:border-primary"
                    }`}
                >
                  <strong className="text-primary">{unit}</strong>:{" "}
                  {eceData[selectedSem][selectedSubject][unit].join(", ")}
                </li>
              ))}
            </ul>

            {/* Back button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setSelectedSubject(null)}
                className={`px-5 py-2 rounded-lg transition ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-primary"
                    : "bg-gray-300 text-gray-900 hover:bg-primary hover:text-white"
                }`}
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

export default mae;
