import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Categories from './Components/Categories'
import Features from './Components/FeaturesCards'
import Courses from './Components/Courses'
import Instructors from './Components/Instructors'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <Features/>
      <About/> 
      <Categories/>
      <Courses/>
      <Instructors/>
    
      <Footer/>
    </div>
  )
}

export default App
