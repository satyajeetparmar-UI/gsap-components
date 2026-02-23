import React from 'react'
import { Link } from 'react-router-dom'

const HeroBottomText = () => {
  return (
    <div className='font-[lausanne500] flex items-center justify-center gap-2 overflow-hidden'>
      <div className='border-3 h-[110px] leading-none flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        <Link className='text-[7vw] mt-6 ' to="/project">Projects</Link>
      </div>
      <div className='border-3 h-[110px] leading-none flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        <Link className='text-[7vw] mt-6' to="/agence">Agence</Link>
      </div>
    </div>
  )
}

export default HeroBottomText