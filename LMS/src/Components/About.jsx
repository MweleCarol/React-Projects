import React from 'react';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2">
          <img src={aboutImage}  alt="Person holding books" className="rounded-lg shadow-md" />
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h5 className="text-teal-500 uppercase font-semibold text-lg tracking-wide text-5xl">
            About Us
          </h5>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Welcome to eLEARNING
          </h2>
          <p className="text-gray-600 mt-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p className="text-gray-600 mt-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6 text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">➜</span>
              <span>Skilled Instructors</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">➜</span>
              <span>Online Classes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">➜</span>
              <span>International Certificate</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">➜</span>
              <span>Skilled Instructors</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">➜</span>
              <span>Online Classes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">➜</span>
              <span>International Certificate</span>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
