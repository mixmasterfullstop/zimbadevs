import React from 'react'

const WelcomeSection = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-3 min-h-screen mt-10 mx-2 gap-4 ">

        <div className="">
        <h1 className='font-bold text-3xl uppercase mx-8'>ict solutions</h1>
        <p className='pt-4 mx-8'>Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Voluptates quasi adipisci corrupti repudiandae!
           Delectus eaque fugiat dolorum, commodi vero 
           perferendis! Perspiciatis, impedit aliquid.</p>
           <div className="pt-2  w-full justify-between lg:flex space-y-2 lg:space-y-0">
           <button className='bg-[#046A64]  rounded-sm py-1 text-white w-full mr-2' >hire us</button>
           <button className='border border-black border-2 rounded font-medium py-1 w-full'>view our work</button>
           </div>
           
      </div>
      <div className='  flex col-span-2 md:px-10'>
        <div className="space-y-16 ">
              {/* green circle */}
              <div className="bg-[#046A64] h-20 md:h-32 w-20 md:w-32 rounded-full "></div>
        {/* blue circle */}
        <div className="mx-2 bg-[#22A9D3] h-20 w-20 md:h-32 md:w-32 rounded-full"></div>

        </div>
       
        {/* image  */}
        <img src="/welcomeVector.png" className='resize mx-auto  h-3/5  ' alt=" vector" />
     
        {/* purple circle */}
        <div className="bg-[#782E93] h-20 w-20  rounded-full md:h-32 md:w-32 "></div>

      </div>

        </div>
       
    </div>
  )
} 

export default WelcomeSection