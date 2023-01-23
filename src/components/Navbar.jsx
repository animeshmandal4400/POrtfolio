import React, {useState} from 'react'
import {AiFillHome, AiOutlineHome, AiOutlineMenu} from 'react-icons/ai';
import {BsFillGridFill, BsFillPersonFill, BsGithub, BsGrid, BsInstagram, BsLinkedin, BsPerson} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {BiMenuAltRight} from 'react-icons/bi';
import Logo from "../assets/logo.png"
import {MdClose, MdEmail} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Navbar = () => {
  const[nav, setNav] = useState(false);
  const handleNav = () => {
  setNav (!nav);
};

  return (
   <div className='z-[99] shadow-md shadow-stone-800 sticky '>
 {/*   <Link>
    <img src={Logo} alt="Logo" className='object-contain h-48 w-48' />
    </Link> */}
    
    <motion.div
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
        
     className='absolute top-4 z-50 left-14 text-white font-playfair text-3xl cursor-pointer'>
    AM
    </motion.div>
    <div className='sm:hidden bg-[#141414] h-16 font-firaCode'>
    {nav ? <MdClose size={25} color="white" onClick={handleNav} className="absolute top-4 right-8 z-40 sm:hidden cursor-pointer" /> :
    <BiMenuAltRight size={25} color="white" onClick={handleNav} className="absolute top-4 right-8 z-40 sm:hidden cursor-pointer " />}
    {
      nav ?(
        <div className='fixed w-full h-screen bg-bg-dark flex flex-col justify-center items-center z-30 '>
          <a href='' className='text-primary   w-[75%] flex justify-center items-center rounded-full shadow-lg bg-bg shadow-gray-400 m-10 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiFillHome size={20} />
            <span className='pl-4  '>Home</span>
          </a>
          <a href='' className='text-primary   w-[75%] flex justify-center items-center rounded-full shadow-lg bg-bg shadow-gray-400 m-10 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <BsFillPersonFill size={20} />
            <span className='pl-4'>About Me</span>
          </a>
          <a href='' className='text-primary   w-[75%] flex justify-center items-center rounded-full shadow-lg bg-bg shadow-gray-400 m-10 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <BsFillGridFill size={18} />
            <span className='pl-4'>Projects</span>
          </a>
          <a href='' className='text-primary   w-[75%] flex justify-center items-center rounded-full shadow-lg bg-bg shadow-gray-400 m-10 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <MdEmail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
        <div className='flex justify-center items-center'>
          <a className='text-primary text-lg flex mr-5'>
            <BsInstagram />
          </a>
          <a className='text-primary text-lg flex mr-5'>
            <BsGithub/>
          </a>
          <a className='text-primary text-lg flex'>
            <BsLinkedin/>
          </a>
        </div>
        </div>
      )
      : (
        ""
        )
    }

    </div>
    
    <div className='sm:block hidden z-40 fixed bg-[#141414] shadow-xl shadow-stone-800 w-40 flex flex-col h-screen font-firaCode '>
    <div className='flex flex-col justify-center h-screen items-center'>
    <div className='flex flex-col items-start my-[8rem]'>
    <a href='' className=' text-primary text-lg text-left flex space-x-2 justify-center items-center m-5 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-primary-variant '>
    <AiFillHome className=''/>
    <span >Home</span>
    </a>
    <a href='' className=' text-primary text-lg text-left flex space-x-2 justify-center items-center m-5 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-primary-variant '>
    <BsFillPersonFill className=''/>
    <span >About Me</span>
    </a>
    <a href='' className=' text-primary text-lg text-left flex space-x-2 justify-center items-center m-5 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-primary-variant '>
    <BsFillGridFill className=''/>
    <span>Projects</span>
    </a>
    <a href='' className=' text-primary text-lg text-left flex space-x-2 justify-center items-center m-5 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-primary-variant '>
    <MdEmail className=''/>
    <span>Contact</span>
    </a>
      </div>
    
    <div className=' flex flex-col '>
    <a href='' className=' text-primary text-lg text-left flex space-x-2 justify-center items-center m-5 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-primary-variant '>
        <BsInstagram/>
      </a>
      <a href='' className=' text-primary text-lg text-left flex space-x-2 justify-center items-center m-5 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-primary-variant '>
        <BsLinkedin/>
      </a>
      <a href='' className=' text-primary text-lg text-left flex space-x-2 justify-center items-center m-5 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-primary-variant '>
        <BsGithub/>
      </a>

    </div>
    </div>
    </div>
     
    
   </div>
  )
}

export default Navbar