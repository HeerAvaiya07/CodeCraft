import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='md:text-4xl text-xl text-gray-800 font-semibold'>Master Coding Anytime, Anywhere with CodeCraft!</h1>
      <p className='text-gray-500 sm:text-base md:text-lg'>CodeCraft makes learning to code easy and accessible. Build real-world projects, get instant feedback, and advance your skills <br /> at your own pace—anytime, anywhere!</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button onClick={() => navigate("/")}  className='px-10 py-3 rounded-md text-white bg-blue-600'>Get started</button>
      </div>
    </div>
  )
}

export default CallToAction