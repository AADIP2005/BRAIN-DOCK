import React, { useState } from "react";
import bannerImg from "../../../assets/banner.png";

const cseData = {
  Semester1: {
    syllabus:
      "Covers foundational mathematics, programming basics in C, and introduction to engineering concepts.",
    syllabusLink:
      "https://drive.google.com/file/d/your-sem2-link/view?usp=drive_link",
    subjects: {
      "Maths-I": {
        Unit1: ["Notes", "Lecture Video", "Assignments"],
        Unit2: ["MCQs", "Practice Questions"],
      },
      "Programming in C": {
        Unit1: ["Code Examples", "Lab Manual"],
        Unit2: ["Practice Problems"],
      },
    },
  },
  Semester2: {
    syllabus:
      "Focuses on Data Structures, Digital Logic, and problem-solving techniques.",
    syllabusLink:
      "https://drive.google.com/file/d/your-sem2-link/view?usp=drive_link",
    subjects: {
      "Data Structures": {
        Unit1: ["Notes", "Lecture Slides"],
        Unit2: ["Assignments", "Quizzes"],
      },
      "Digital Logic": {
        Unit1: ["Notes", "Videos"],
        Unit2: ["Previous Year Papers"],
      },
    },
  },
  Semester3: {
    syllabus:
      "Computer Organization, Object-Oriented Programming, and core electronics basics.",
    syllabusLink:
      "https://drive.google.com/file/d/your-sem2-link/view?usp=drive_link",
    subjects: {
      "Computer Organization": {
        Unit1: ["Notes", "Diagrams"],
        Unit2: ["MCQs", "Assignments"],
      },
    },
  },
  Semester4: {
    syllabus:
      "Operating Systems and advanced algorithms with hands-on lab components.",
    syllabusLink:
      "https://drive.google.com/file/d/your-sem2-link/view?usp=drive_link",
    subjects: {
      "Operating Systems": {
        Unit1: ["Notes", "Lecture Slides"],
        Unit2: ["Lab Programs"],
      },
    },
  },
  Semester5: {
    syllabus: "Databases, Software Engineering, and Web Technologies.",
    syllabusLink:
      "https://drive.google.com/file/d/1D6pTm6KVX-TKCrBsI4JGt8S0RahAOr5N/view?usp=drive_link",
    subjects: {
      "Database Management Systems": {
        Unit1: ["Notes", "Query Examples"],
        Unit2: ["Assignments", "Mini Projects"],
      },
    },
  },
  Semester6: {
    syllabus: "Networks, Artificial Intelligence, and advanced electives.",
    syllabusLink:
      "https://drive.google.com/file/d/1D6pTm6KVX-TKCrBsI4JGt8S0RahAOr5N/view?usp=drive_link",
    subjects: {
      "Computer Networks": {
        Unit1: ["Notes", "Lecture Slides"],
        Unit2: ["Quizzes", "Case Studies"],
      },
    },
  },
  Semester7: {
    syllabus: "Compiler Design, Distributed Systems, and elective choices.",
    syllabusLink:
      "https://drive.google.com/file/d/1D6pTm6KVX-TKCrBsI4JGt8S0RahAOr5N/view?usp=drive_link",
    subjects: {
      "Compiler Design": {
        Unit1: ["Notes", "Practice Questions"],
        Unit2: ["Assignments", "Previous Papers"],
      },
    },
  },
  Semester8: {
    syllabus:
      "Machine Learning, Data Science, and project work for industry readiness.",
    syllabusLink:
      "https://drive.google.com/file/d/1D6pTm6KVX-TKCrBsI4JGt8S0RahAOr5N/view?usp=drive_link",
    subjects: {
      "Machine Learning": {
        Unit1: ["Lecture Notes", "Datasets"],
        Unit2: ["Projects", "Practice Assignments"],
      },
    },
  },
};

const CSEAI = () => {
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
          src={bannerImg}
          alt="CSE Banner"
          className="w-full max-h-[400px] object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            CSE-AI Resources
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

      <div className="p-6 max-w-5xl mx-auto">
        {/* Step 1: Select Semester */}
        {!selectedSem && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              📘 Choose Semester
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {Object.keys(cseData).map((sem) => (
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

        {/* Step 2: Show Semester Syllabus + Subjects */}
        {selectedSem && !selectedSubject && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {selectedSem}
            </h2>

            {/* Semester Syllabus */}
            <div
              className={`p-5 mb-6 rounded-lg shadow-md ${
                darkMode
                  ? "bg-gray-800 border border-gray-600"
                  : "bg-white/80 border border-gray-300"
              }`}
            >
              <h3 className="text-xl font-bold text-primary mb-2">📖 Syllabus</h3>
              <p className="mb-4">{cseData[selectedSem].syllabus}</p>

              {/* Drive Link Button */}
              <button
                onClick={() => window.open(cseData[selectedSem].syllabusLink, "_blank")}
                className={`px-5 py-2 rounded-lg font-semibold transition
                  ${
                    darkMode
                      ? "bg-primary text-white hover:bg-secondary/80"
                      : "bg-primary text-white hover:bg-secondary/90"
                  }`}
              >
                📥 View Full Syllabus
              </button>
            </div>

            {/* Subjects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Object.keys(cseData[selectedSem].subjects).map((subject) => (
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
                    {Object.keys(cseData[selectedSem].subjects[subject]).length} Units
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

        {/* Step 3: Show Units of Subject */}
        {selectedSem && selectedSubject && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {selectedSem} → {selectedSubject} → Units
            </h2>
            <ul className="space-y-4">
              {Object.keys(cseData[selectedSem].subjects[selectedSubject]).map(
                (unit) => (
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
                    {cseData[selectedSem].subjects[selectedSubject][unit].join(
                      ", "
                    )}
                  </li>
                )
              )}
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

export default CSEAI;


