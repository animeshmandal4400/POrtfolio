import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import ParticleComponent from './particle';
import TitleSpan from "./Titlespan";
import fig from "../assets/fig.png"

const Home = () => {
  return (
    <div className='bg-bg-dark flex items-center justify-center gap-20 w-full h-screen absolute font-firaCode'>
      <ParticleComponent/>
    <div className='flex flex-col justify-center items-start z-20'>
      <h4 className=' text-white  '>Hi, my name is</h4>
      <div className=" text-[6vw] text-white font-black">
            ANIMESH MANDAL
          </div>
          <div>
            <h2 className='text-white text-[2vw] font-extrabold'>
              I'm a {""}
              <span
                className="Span"
                style={{ color: "#4E9F3D", fontWeight: "bold" }}
              >
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Web Developer",
                    "Game Developer",
                    "Graphic Designer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>
          <p className='max-w-3xl text-white mt-7' >
              I am a Computer Science student with experience building websites
              and web applications.
            </p>
            <div className='flex gap-10 font-semibold '>
            <button className=' bg-primary  hover:bg-bg-dark hover:shadow-lg text-primary  hover:text-primary py-2 px-4 border border-primary text-bg-dark border rounded border-primary mt-10 '>
              Hire Me
            </button>
            <button className='bg-bg-dark hover:bg-primary text-primary hover:text-bg-dark py-2 px-4 border border-primary text-white border rounded border-primary mt-10 '>
              Resume
            </button>
            </div>
            
      </div>
      <div className=' flex relative w-[13vw] bg-bg-dark items-center z-[99] '>
        <img className='absolute' src={fig} />
      </div>
      
    </div>
  )
}

export default Home