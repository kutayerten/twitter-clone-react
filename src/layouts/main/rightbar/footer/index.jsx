import { Popover } from '@headlessui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='mb-4 px-4 flex flex-wrap gap-2'>
        <Link to="/" className='text-[#71767b] leading-4 text-[13px] hover:underline'>Terms of Service</Link>
        <Link to="/" className='text-[#71767b] leading-4 text-[13px] hover:underline'>Privacy Policy</Link>
        <Link to="/" className='text-[#71767b] leading-4 text-[13px] hover:underline'>Cookie Policy</Link>
        <Link to="/" className='text-[#71767b] leading-4 text-[13px] hover:underline'>Imprint</Link>
        <Link to="/" className='text-[#71767b] leading-4 text-[13px] hover:underline'>Accessibility</Link>
        <Link to="/" className='text-[#71767b] leading-4 text-[13px] hover:underline'>Ads info</Link>
        <div className="inline-flex">
        <Popover className="relative inline-flex leading-4">
            <Popover.Button className='text-[#71767b] outline-none leading-4 text-[13px] hover:underline inline-flex items-center'>
             More 
             <svg viewBox="0 0 24 24" className='h-[1em] px-0.5 '><path fill='currentColor' d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
            </Popover.Button>
            <Popover.Panel className="w-max max-w-[384px] shadow-box bg-black flex flex-col absolute bottom-0 right-0 rounded-xl overflow-hidden">
            <Link to="/" className='py-3 px-4 text-white leading-5 text-[15px] font-bold transition-colors w-full hover:bg-[#3c424452]'>About</Link>
            <Link to="/" className='py-3 px-4 text-white leading-5 text-[15px] font-bold transition-colors w-full hover:bg-[#3c424452]'>Download the X app</Link>
            <Link to="/" className='py-3 px-4 text-white leading-5 text-[15px] font-bold transition-colors w-full hover:bg-[#3c424452]'>Status</Link>
            <Link to="/" className='py-3 px-4 text-white leading-5 text-[15px] font-bold transition-colors w-full hover:bg-[#3c424452]'>X for Business</Link>
            <Link to="/" className='py-3 px-4 text-white leading-5 text-[15px] font-bold transition-colors w-full hover:bg-[#3c424452]'>Developers</Link>
            </Popover.Panel>
        </Popover>
        </div>
        <span className='text-[#71767b] leading-4 text-[13px]'>© 2023 Kutay Erten.</span>
    </footer>
  )
}