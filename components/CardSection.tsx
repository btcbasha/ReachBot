import React from 'react';
import Image from 'next/image';

const CardSection: React.FC = () => {
  const features = [
    'Custom CSV Imports',
    'Sales Navigator Searches',
    'LinkedIn Searches',
    'LinkedIn Groups',
    'LinkedIn Events',
    'Commenters on a LinkedIn post'
  ];

  return (
    <div className='bg-white pt-[2rem] md:pt-0'>
      <div className="mt-[2rem] mx-[1rem] sm:mx-[2rem] md:mx-[4rem] lg:mx-[10rem] bg-white">
        <div className="flex flex-col space-y-16">
          {/* First Card */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-gray-800">
                Find your dream customers
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 text-gray-700">
                Pull prospects from anywhere
              </h2>
              <p className="text-gray-600 mb-4">We support</p>
              <ul className="list-disc pl-5 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2 py-1 text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-black text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-gray-800 transition duration-300">
                Automate for free →
              </button>
            </div>

            <div className="md:w-1/2 relative">
              <Image
                width={700}
                height={500}
                alt="Sales Robot Website Redesign"
                src="https://cdn.prod.website-files.com/66028c3f31c8a5d0d6d10874/662b6115249c70254b82316a_Sales%20Robot%20Website%20Redesign%20(3)-p-800.png"
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 relative">
              <Image
                width={700}
                height={500}
                alt="Sales Robot Website Redesign"
                src="https://cdn.prod.website-files.com/66028c3f31c8a5d0d6d10874/6673f245d1d959af6bd303a7_Sales%20Robot%20Website%20Redesign%20(8)-p-800.png"
              />
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0 ml-[1rem] sm:ml-[2rem] md:ml-[3rem]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-gray-800">
                Find your dream customers
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 text-gray-700">
                Pull prospects from anywhere
              </h2>
              <p className="text-gray-600 mb-4">We support</p>
              <ul className="list-disc pl-5 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2 py-1 text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-black text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-gray-800 transition duration-300">
                Automate for free →
              </button>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-gray-800">
                Find your dream customers
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 text-gray-700">
                Pull prospects from anywhere
              </h2>
              <p className="text-gray-600 mb-4">We support</p>
              <ul className="list-disc pl-5 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2 py-1 text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-black text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-gray-800 transition duration-300">
                Automate for free →
              </button>
            </div>

            <div className="md:w-1/2 relative">
              <Image
                width={700}
                height={500}
                alt="Sales Robot Website Redesign"
                src="https://cdn.prod.website-files.com/66028c3f31c8a5d0d6d10874/667297b37d38bf0f6c9082d1_Sales%20Robot%20Website%20Redesign%20Campaign%20Lifecycle-p-800.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
