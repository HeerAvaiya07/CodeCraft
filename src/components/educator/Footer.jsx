import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t">
      <div className='flex items-center gap-4'>
        <div className='flex items-center space-x-2'><img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="w-10 lg:w-18 cursor-pointer" 
              /> <label><h1 className='text-2xl'>Code Craft</h1></label></div>
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © Heer Avaiya. All Right Reserved.
        </p>
      </div>
      <div className='flex items-center gap-3 max-md:mt-4'> 
        <a href="#">
          <img src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="twitter_icon" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="instagram_icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;