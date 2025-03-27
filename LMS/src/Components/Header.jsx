import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden ' style={{backgroundImage: "url('/carousel-1.jpg')"} } >
       <Navbar/>
       <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h4  className='text-teal-300 text-3xl'>Best Online Courses</h4>
       <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>The best online learning platform</h2>
       <p></p>
       <div className='flex gap-10 items-center justify-center pt-10'>
       <button className=' bg-teal-300 p-3'>Read More</button>
       <button className=' bg-white text-black p-3'>Join Now</button>
       </div>
       
       </div>
    </div>
  )
}

export default Header
