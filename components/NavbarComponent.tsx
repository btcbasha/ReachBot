'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative lg:mx-[7rem]'>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button 
          className='absolute top-4 right-4 text-white text-2xl'
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <div className='flex flex-col items-center mt-16'>
          <ul className='flex flex-col font-semibold text-white'>
            <li className='px-6 py-2 hover:text-blue-400'><Link href="/">Home</Link></li>
            <li className='px-6 py-2 hover:text-blue-400'><Link href="/">Features</Link></li>
            <li className='px-6 py-2 hover:text-blue-400'><Link href="/">Pricing</Link></li>
            <li className='px-6 py-2 hover:text-blue-400'><Link href="/">About</Link></li>
            <li className='px-6 py-2 hover:text-blue-400'><Link href="/">Resources</Link></li>
          </ul>
        </div>
      </div>

      <div className='flex flex-row justify-between items-center mt-8 px-4 md:px-8'>
        <button 
          className='md:hidden flex items-center px-3 py-2 border border-gray-600 rounded'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
        <div className='flex items-center ml-24 lg:ml-0  mb-4 md:mb-0'>
          <img className='w-12 h-9' src="https://cdn.prod.website-files.com/66028c3f31c8a5d0d6d10874/660b9dbb5ee5f2e4b46f74e7_Sales%20Robot%20Website%20Redesign%20icon.png" alt="Logo" />
          <h1 className='text-blue-500 font-semibold text-xl ml-3'>ReachBot</h1>
        </div>

        <div className='hidden md:flex'>
          <ul className='flex font-semibold text-slate-700'>
            <li className='px-3 py-2 hover:text-blue-400'><Link href="/">Home</Link></li>
            <li className='px-3 py-2 hover:text-blue-400'><Link href="/">Features</Link></li>
            <li className='px-3 py-2 hover:text-blue-400'><Link href="/">Pricing</Link></li>
            <li className='px-3 py-2 hover:text-blue-400'><Link href="/">About</Link></li>
            <li className='px-3 py-2 hover:text-blue-400'><Link href="/">Resources</Link></li>
          </ul>
        </div>
        <div className='flex items-center mt-4 md:mt-0'>
          <div className='hidden md:block mx-4 py-2 cursor-pointer text-center font-semibold hover:text-blue-400'>
            Sign in
          </div>
          <Button className='hidden md:block text-center p-3'>Join Waitlist</Button>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
