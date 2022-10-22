import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Inquiry = () => {
  return (
    <div className='bg-[#22A9D3] w-full py-5 snap-normal' id='inquiry'>
      <div className="container">
        
    <h1 className='text-white text-xl pb-2'>Want to hire Us?</h1>
    <div className="md:flex justify-around ">

    <div className=" w-4/5  md:max-w-3/5 mx-auto">
    <img src="/map.png" alt="" className='  my-2  ' />
      
    </div>
    <div className=" w-4/5  md:w-2/5 flex mx-auto items-center">

     <form action="/">
      <div className="flex gap-x-10 ">
        
    <input type="text" id="fname" name="first Name"  className='mb-1 w-full outline-none py-1 px-1' placeholder="Name"/>
    <input type="text" id="lname" name="lastname" className='mb-1 w-full outline-none py-1 px-1' placeholder="last name"/>
      </div>
    <input type="text" id="lname" name="lastname" className='mb-1 w-full outline-none py-1 px-1' placeholder="Subject"/>
    <textarea id="subject" name="subject" className='mb-1 w-full outline-none py-1 px-1' placeholder="Write something" ></textarea>
    <button type="submit" className='w-full bg-kgreen py-2 flex items-center justify-around text-white'> <p>Send Inquiry</p> <AiOutlineSend/> </button>

  </form>     
    </div>
      </div>
    </div>

  </div>
  )
}

export default Inquiry