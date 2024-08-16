import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[8rem] md:mt-[10rem]  text-center px-4">
      <h1 className="text-3xl md:text-7xl font-bold mb-4 text-gray-800">
        Message 100s of people<br />on Email & LinkedIn
      </h1>
      <h2 className="text-5xl md:text-4xl font-semibold mb-4 lg:mb-8">
        <span className="text-blue-400">Every Week.</span>{' '}
        <span className="text-purple-400">Automatically.</span>
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl ">
        Try our proven sales automation software and get hot leads every day like our 3k+ users do
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
          Join Waitlist →
        </button>
        <button className="bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
          Book a demo →
        </button>
      </div>
    </div>
  );
};

export default HeroSection;