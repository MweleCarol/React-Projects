import React from 'react'
import webImage from '../assets/cat-1.jpg'
import graphicImage from '../assets/cat-2.jpg'
import editingImage from '../assets/cat-3.jpg'
import marketingImage from '../assets/cat-4.jpg'

const Categories = () => {
  
const courses = [
  {
    title: "Web Design",
    coursesCount: 49,
    image: webImage,
  },
  {
    title: "Graphic Design",
    coursesCount: 49,
    image: graphicImage,
  },
  {
    title: "Video Editing",
    coursesCount: 49,
    image: editingImage,
  },
  {
    title: "Online Marketing",
    coursesCount: 49,
    image: marketingImage,
  },
];

  return (
    <div>
       <div className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Courses Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="relative group">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-60 object-cover rounded-lg transition duration-300 ease-in-out group-hover:brightness-75"
            />
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-blue-500">{course.coursesCount} Courses</p>
            </div>
          </div>
        ))}
      </div>

     {/* Scroll to Top Button */}
      <button className="fixed bottom-6 right-6 bg-[#00ACC1] text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
        ↑
      </button>
    </div>
  
      
    </div>
  )
}

export default Categories






