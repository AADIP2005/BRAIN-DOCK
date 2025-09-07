import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      author: 'Aadi Pandit',
      image: '/images/aadi.jpg', // Place this image in /public/images
      title: 'Why I Started Distance Diary',
      content: `Distance Diary was born out of a desire to help students stay organized, inspired, and connected with their academic journey. Through curated notes, weekly quizzes, and thought-provoking blogs like this one, I aim to make learning engaging and stress-free.`,
      date: 'July 28, 2025',
    },
    {
      id: 2,
      author: 'Aadi Pandit',
      image: '/images/aadi.jpg',
      title: 'The Power of Self-Discipline',
      content: `Self-discipline is the bridge between goals and accomplishments. In college, it's the secret weapon that turns average students into high achievers. Start small—set a schedule, track your habits, and stay consistent.`,
      date: 'July 25, 2025',
    },
  ];

  return (
    <section className="bg-light py-12 px-4 font-poppins min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-dark mb-10 text-center">
          Author's <span className="text-primary">Blog</span>
        </h2>

        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-md p-6 mb-10 border border-gray-100">
            <div className="flex items-center mb-4">
              <img src={post.image} alt={post.author} className="w-14 h-14 rounded-full mr-4 border-2 border-primary" />
              <div>
                <h4 className="text-lg font-semibold text-dark">{post.author}</h4>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-secondary mb-3">{post.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
