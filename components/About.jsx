import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import {DiDjango, DiPhp} from 'react-icons/di'
import {RiFlutterFill} from 'react-icons/ri'

const About = () => {
  return (
    <div className='pl-5 mt-2 ' id='about'>
      <h1 className='font-bold text-xl '>About Us</h1>

      <div className=" md:flex justify-around items-center">
      <div className="rounded-full w-60 h-60 items-center  bg-[#D9D9D9] ">

      <img src='logo.png' className=' self-center ml-2 mt-2' alt='logo'/>
      </div>
      <p className='md:w-3/5 text-center'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum mauris facilisis sed sed odio molestie. Et fermentum turpis nunc proin augue enim. Sed et condimentum dui malesuada viverra faucibus id ullamcorper tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi porta vivamus fermentum, iaculis posuere tellus est et sagittis. Mattis lobortis nunc neque lectus. Lobortis feugiat lobortis habitant elit.
      </p>



      </div>

      <h1 className='font-bold text-lg'>My Skills</h1>
      <div className="flex justify-around py-4 ">
        <div className="rounded-full shadow-xl p-4 text-kpurple">
          <AiFillHtml5 size={40}/>
        </div>
        <div className="rounded-full shadow-xl p-4 text-kgreen">
          <DiDjango size={40}/>
        </div>
        <div className="rounded-full shadow-xl p-4 text-kblue">
          <RiFlutterFill size={40}/>
        </div>
        <div className="rounded-full shadow-xl p-4 ">
          <DiPhp size={40}/>
        </div>

      </div>
      
    </div>
  )
}

export default About