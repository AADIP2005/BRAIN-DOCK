import React from "react";

const start = () => {
  // ✨ Contributors data
  const contributors = [
    {
      name: "Aditi Sharma",
      thought: "Sharing resources makes learning easier for everyone ✨",
      image: "/assets/contributors/aditi.jpg",
    },
    {
      name: "Rahul Verma",
      thought: "BrainDock is the bridge between students and knowledge 🚀",
      image: "/assets/contributors/rahul.jpg",
    },
    {
      name: "Sneha Gupta",
      thought: "Together, we can build a supportive learning community 💡",
      image: "/assets/contributors/sneha.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-primary">
          🌟 Our Amazing Contributors
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          BrainDock wouldn’t be possible without the support of our amazing
          contributors who share resources, thoughts, and inspiration with the
          student community. Here’s a small tribute to them ❤️
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contributors.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-primary"
              />
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-600 mt-2 italic">"{person.thought}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default start;

