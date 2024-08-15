import Image from 'next/image';
import React from 'react';

const MessageBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white p-8  flex flex-col justify-center h-96">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Message <span className="text-blue-300">100s</span> on people on LinkedIn and{' '}
            <span className="text-cyan-300">cold email.</span>
          </h1>
          <p className="text-xl mb-2">Every Week. Automatically.</p>
          <p className="text-lg mb-6">Trusted by 3.2k users in 45 countries.</p>
          <div className="flex space-x-4">
            <button className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Book a Demo
            </button>
            <button className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Get started
            </button>
          </div>
        </div>
        <div className=" rounded-lg">
          <img
            height={600}
            width={600}
            src="https://st4.depositphotos.com/1008648/19994/i/450/depositphotos_199948198-stock-photo-white-cyborg-finger-touch-human.jpg"
            alt="Robot hand"
            className="w-full max-w-sm rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBanner;