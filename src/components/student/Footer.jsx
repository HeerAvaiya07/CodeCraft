import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

        <div className="flex flex-col md:items-start items-center w-full">
          {/* <img src={assets.logo_dark} alt="logo" /> */}
          <div className='flex items-center space-x-2'><img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="w-10 lg:w-18 cursor-pointer"
          /> <label><h1 className='text-2xl text-white'>Code Craft</h1></label></div>
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            CodeCraft empowers learners with interactive coding courses and hands-on projects. Master programming skills, build real-world applications, and advance your tech career with our expert-led content.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Pages</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/About">About us</a></li>
            <li><a href="/Contact">Contact us</a></li>
            <li><a href="/privacy">Privacy policy</a></li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">Stay Connected</h2>
          <p className="text-sm text-white/80">
            Get exclusive coding tutorials, industry insights, and the latest updates from CodeCraft straight to your inbox.          </p>
          <div className="items-center pt-6">
            <span className='text-white'>Phone : <br />+1 (234) 567-8901</span>
            <br />
            <span className='text-white'>Email : <br /> support@codecraft.com</span>
          </div>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © Heer Avaiya. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;


function uniqueNumber(number) {

  let unique = new Set(number);
  return unique
}
let number = [1, 5, 3, 4, 1, 5];
console.log(uniqueNumber(unique));