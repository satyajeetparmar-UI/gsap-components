import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
  
  gsap.registerPlugin(ScrollTrigger)

  const imgDivRef = useRef(null)
  const imgRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x64',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
  ]

  useGSAP(() => {
    
    ScrollTrigger.create({
      trigger: imgDivRef.current,
      // markers: true,
      start: "top 21.6%",
      end: "top -95%",
      pin: true,
      scrub: true,
      onUpdate: (elem)=> {
        let imageIndex;
        if (elem.progress<1) {
          imageIndex = Math.floor(elem.progress * imageArray.length) 
        } else {
          imageIndex = imageArray.length-1
        }
        imgRef.current.src = imageArray[imageIndex]        
      }
    })
  })

  return (
    <div>
      <div className="section1">
        <div
          ref={imgDivRef}
          className="absolute h-auto w-[15vw] rounded-3xl top-[10vw] left-[30.1vw] overflow-hidden"
        >
          <img 
            ref={imgRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative z-10 font-[lausanne300]">
          <div className="mt-[56vh]">
            <h1 className="text-[20vw] uppercase leading-[17vw] text-center">
              SEVEN7Y <br /> TWO
            </h1>
          </div>
          <div className="mt-10 pl-[50%]">
            <p className="text-5xl indent-56">
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agence
