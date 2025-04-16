import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col md:flex-row items-center justify-between w-full px-8 py-4 border-t bg-white text-gray-700">
      {/* Left - Logo + Name */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
        <img src={assets.logo} alt="Logo" className="w-10 lg:w-14" />
        <h1 className="text-2xl font-semibold">Code Craft</h1>
      </div>

      {/* Right - Copyright */}
      <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-0">
        Copyright 2025 © Heer Avaiya. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
