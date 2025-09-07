import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import heroImg from "../assets/hero.png"; 
import logo from "../assets/logo1.png"; 


const Hero = () => {
  return (
    <section className="bg-dark text-light min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-6 text-center md:text-left">
            WELC
            <span className="inline-flex items-center justify-center w-24 h-24 md:w-20 md:h-20 rounded-full bg-light mx-1">
              <img
                src={logo}
                alt="Logo"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full"
              />
            </span>
            ME! <br /> to <span className="text-primary">Brain-dock</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
            Now you can dock your ideas and resources....
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <Link to="/start">
              <button className="bg-primary text-light font-semibold px-8 py-4 text-lg rounded-lg hover:bg-secondary transition">
                Start Today
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-dark2 text-light px-8 py-4 text-lg rounded-lg hover:bg-secondary transition">
                About us
              </button>
            </Link>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Choose your Category :</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-gray-300 text-lg">
              <span className="hover:text-primary cursor-pointer">Resources</span>
              <span className="hover:text-secondary cursor-pointer">Projects</span>
              <span className="hover:text-primary cursor-pointer">Placements</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex justify-center">
          <img
            src={heroImg}
            alt="Brain Dock Illustration"
            className="w-full max-w-md shadow-lg rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


