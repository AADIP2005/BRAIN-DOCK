// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold">Brain Dock</h1>
          <p className="text-sm mt-1">Dock your ideas, resources & projects in one place.</p>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/resources" className="hover:underline text-sm">Resources</a>
          <a href="/projects" className="hover:underline text-sm">Projects</a>
          <a href="/placements" className="hover:underline text-sm">Placements</a>
          <a href="/contact" className="hover:underline text-sm">Contact</a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-4">
        © {new Date().getFullYear()} Brain Dock. All rights reserved.
      </div>
    </footer>
  );
}
