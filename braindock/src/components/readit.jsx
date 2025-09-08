import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    title: "Welcome to BrainDock 💡",
    body: "This is the community space. Share your thoughts, resources, or memes!",
    author: "Admin",
    votes: 3,
    image: null,
    comments: [],
  },
];

const Readit = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newPost, setNewPost] = useState({ title: "", body: "", image: null });
  const [newComment, setNewComment] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setNewPost({ ...newPost, image: reader.result });
    reader.readAsDataURL(file);
  };

  // Add new post
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title.trim() && !newPost.body.trim() && !newPost.image) return;

    const post = {
      id: posts.length + 1,
      title: newPost.title,
      body: newPost.body,
      author: "Guest",
      votes: 0,
      image: newPost.image,
      comments: [],
    };
    setPosts([post, ...posts]);
    setNewPost({ title: "", body: "", image: null });
    setShowModal(false);
  };

  // Add new comment
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !selectedPost) return;

    const comment = {
      id: selectedPost.comments.length + 1,
      text: newComment,
      author: "Guest",
    };

    const updatedPosts = posts.map((p) =>
      p.id === selectedPost.id
        ? { ...p, comments: [...p.comments, comment] }
        : p
    );

    setPosts(updatedPosts);
    setSelectedPost({
      ...selectedPost,
      comments: [...selectedPost.comments, comment],
    });
    setNewComment("");
  };

  // Voting
  const handleVote = (id, val) => {
    const updatedPosts = posts.map((p) =>
      p.id === id ? { ...p, votes: p.votes + val } : p
    );
    setPosts(updatedPosts);
    if (selectedPost) {
      setSelectedPost(updatedPosts.find((p) => p.id === selectedPost.id) || null);
    }
  };

  return (
    <section className="min-h-screen bg-blue-50">
      <div className="max-w-2xl mx-auto py-8 px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-blue-600">
            BrainDock Community 💬
          </h1>
        </div>

        {/* Feed */}
        {!selectedPost ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                {/* Post Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">{post.author}</span>
                  <span className="text-sm text-gray-500">{post.votes} votes</span>
                </div>

                {/* Post Content */}
                <div
                  className="px-4 py-4 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{post.title}</h3>
                  <p className="text-gray-700 mb-2">{post.body}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="post"
                      className="rounded-xl max-h-80 w-full object-cover"
                    />
                  )}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
                  <div className="flex gap-4 text-xl">
                    <button
                      onClick={() => handleVote(post.id, 1)}
                      className="hover:text-green-500 transition"
                    >
                      👍
                    </button>
                    <button
                      onClick={() => handleVote(post.id, -1)}
                      className="hover:text-red-500 transition"
                    >
                      👎
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {post.comments.length} comments
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Single Post View */
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-blue-600 mb-4 hover:underline"
            >
              ← Back to feed
            </button>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedPost.title}</h2>
            <p className="text-sm text-gray-600 mb-4">by {selectedPost.author}</p>
            <p className="mb-4 text-gray-800">{selectedPost.body}</p>
            {selectedPost.image && (
              <img
                src={selectedPost.image}
                alt="post"
                className="rounded-xl mb-6 max-h-96 w-full object-cover"
              />
            )}

            {/* Comments */}
            <h3 className="text-lg font-semibold mb-3 text-gray-800">💬 Comments</h3>
            <div className="space-y-3 mb-4">
              {selectedPost.comments.map((c) => (
                <div
                  key={c.id}
                  className="bg-gray-100 p-3 rounded-xl text-sm"
                >
                  <p className="font-medium text-gray-800">{c.author}</p>
                  <p className="text-gray-700">{c.text}</p>
                </div>
              ))}
              {selectedPost.comments.length === 0 && (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>

            {/* Add Comment */}
            <form onSubmit={handleCommentSubmit} className="space-y-3">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                rows="3"
                className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Comment
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Floating + Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-pink-500 text-white text-3xl shadow-lg hover:bg-pink-600 transition"
      >
        +
      </button>

      {/* Modal for Creating Post */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">✨ Create a New Post</h2>
            <form onSubmit={handlePostSubmit} className="space-y-3">
              <input
                type="text"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                placeholder="What's on your mind?"
                className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                value={newPost.body}
                onChange={(e) =>
                  setNewPost({ ...newPost, body: e.target.value })
                }
                placeholder="Share your thoughts..."
                rows="3"
                className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm"
              />
              {newPost.image && (
                <div className="mt-3">
                  <img
                    src={newPost.image}
                    alt="Preview"
                    className="rounded-xl max-h-60 object-cover"
                  />
                </div>
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Readit;




