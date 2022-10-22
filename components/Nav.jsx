import React, { useState } from 'react'
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'


const Nav = () => {
  const [open,setOpen] = useState(false)
  const handleNav = ()=>{
    setOpen(!open)
  }

  return (
    <div className='h-8 flex justify-between'>
      <div className="flex justify-between container">

        <div className="flex space-x-1">
            <img src='logo.png' className='h-4 self-center' alt='logo'/>
            <h1 className='text-lg font-bold'>Fullstack123</h1>
        </div>
        <ul className='hidden md:flex space-x-6 pr-2 text-lg font-medium '>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#work">Our Work</Link></li>
            <li><Link href="#inquiry">Contact</Link></li>
            <li><Link href="#about">About</Link></li>
           
        </ul>
      </div>
    
{/* mobile menu */}
    <div className="">
    <div
        className={
          open ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>
        {/* Side Drawer Menu */}
        </div>
       
              <div className={open
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 '
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen '}>
             <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <img
                    src='/logo.png'
                    className='h-10 '
                    
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            </div>
              
              <ul className='cursor-pointer'>
            <li className='py-2'>Home</li>
            <li className='py-4 '> <Link href='#work'>Our Work</Link> </li>
            <li className='py-4 '><Link href='#contact'>Contact</Link></li>
            <li className='py-4 '> <Link href='#about' onClick={handleNav}>About</Link></li>
        </ul>

              </div>
    

    </div>
    <div
            
            onClick={handleNav}
            className='md:hidden px-2'
          >
            <AiOutlineMenu size={25} />
          </div>
      

    </div>
  )
}

export default Nav