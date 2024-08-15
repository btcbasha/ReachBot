'use client'
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

function NavbarComponent() {
  return (
    <div className='flex justify-around mt-8'>
       <div className='flex mt-2 '>
       <div>
        <img className='w-12 h-9' src="https://cdn.prod.website-files.com/66028c3f31c8a5d0d6d10874/660b9dbb5ee5f2e4b46f74e7_Sales%20Robot%20Website%20Redesign%20icon.png" alt="" />
       </div>
       <div className='mx-3'>
        <h1 className='text-blue-500 font-semibold text-xl'>profitPilot</h1>
       </div>
       </div>
       

       <div className='flex'>
        <div className='py-2'>
        <ul className='flex font-semibold text-slate-700 '>
          <Link href="/" className='px-3 hover:text-blue-400'><li>Home</li></Link>
          <Link href="/" className='px-3 hover:text-blue-400'><li>Features</li></Link>
          <Link href="/" className='px-3 hover:text-blue-400'><li>Pricing</li></Link>
          <Link href="/" className='px-3 hover:text-blue-400'><li>Whitelabel</li></Link>
          <Link href="/" className='px-3 hover:text-blue-400'><li>About</li></Link>
          <Link href="/" className='px-3 hover:text-blue-400'><li>Resources</li></Link>
        </ul>
        </div>
        <div className='w-1 h-6 bg-slate-400 mt-2 mx-2'></div>

       <div className='flex  mx-4'>
       <div className='mx-4 py-2 cursor-pointer  font-semibold hover:text-blue-400'>
            Sign in
        </div>
        <div>
            <Button className='p-6'>Join Waitlist</Button>
            {/* <button className='bg-black text-white p-3 px-4 rounded-xl'>Join waitlist</button> */}
        </div>
       </div>
       </div>

    </div>
  )
}

export default NavbarComponent;