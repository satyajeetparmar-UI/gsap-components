import React from 'react'
import Video from '../components/home/Video'
import HeroTopText from '../components/home/HeroTopText'
import HeroBottomText from '../components/home/HeroBottomText'

function Home() {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative overflow-hidden flex flex-col justify-between'>
        <HeroTopText />
        <HeroBottomText />
      </div>
    </div>
  )
}

export default Home