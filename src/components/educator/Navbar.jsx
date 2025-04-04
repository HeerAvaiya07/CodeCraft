import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ bgColor }) => {

  const { isEducator } = useContext(AppContext)
  const { user } = useUser()

  return isEducator && user && (
    <div className={`flex items-center justify-between px-4 md:px-8 border-b bg-[#bae6fd] border-gray-500 py-3`}>
      <Link to="/">
        <div className='flex items-center space-x-2'><img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="w-14 lg:w-18 cursor-pointer"
        /> <label><h1 className='text-3xl font-semibold'>Code Craft</h1></label></div>
      </Link>
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user.username}</p>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;