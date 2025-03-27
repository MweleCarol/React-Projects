import React ,{useState,useEffect} from 'react'


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() =>{
    if (showMobileMenu){
      document.body.style.overflow ='hidden'

    }else{
      document.body.style.overflow ='auto'
    }

    return ()=> {
      document.body.style.overflow ='auto'
    };


  },[setShowMobileMenu])



  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md: px-20 lg:px-32 bg-transparent'>
     
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-ponter hover:text-teal-300'>Home</a>
          <a href="#About" className='cursor-ponter hover:text-teal-300'>About</a>
          <a href="#Projects" className='cursor-ponter hover:text-teal-300'>Courses</a>
          <a href="#Testimonials" className='cursor-ponter hover:text-teal-300'>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
     
      </div>
      {/*-------Mobile Menu ----*/}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full': 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a href="#Header" className='px-4 py2 rounded-full inline-block'>Home</a>
          <a href="#About" className='px-4 py2 rounded-full inline-block'>About</a>
          <a href="#Projects" className='px-4 py2 rounded-full inline-block'>Projects</a>
          <a href="#Testimonials" className='px-4 py2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
