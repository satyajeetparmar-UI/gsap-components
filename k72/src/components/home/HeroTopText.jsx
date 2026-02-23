import React from 'react'
import Video from './Video'

const HeroTopText = () => {
  return (
    <div className='font-[lausanne300] uppercase text-[9.5vw] text-center leading-[8vw] pt-3'>
      <div>
        The spark for
      </div>
      <div className='flex items-center justify-center'>
        all
        <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden mb-8'><Video /></div>
        things
      </div>
      <div>
        creative
      </div>
    </div>
  )
}

export default HeroTopText