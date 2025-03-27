import React from "react";
import webImage from "../assets/course-1.jpg";
import courseImage from "../assets/course-2.jpg";
import image from "../assets/course-3.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Web Design & Development Course for Beginners",
      price: "$149.00",
      rating: 5,
      reviews: 123,
      duration: "1.49 Hrs",
      students: 30,
      instructor: "John Doe",
      image: webImage, // ✅ Directly use the imported variable
    },
    {
      title: "Web Design & Development Course for Beginners",
      price: "$149.00",
      rating: 5,
      reviews: 123,
      duration: "1.49 Hrs",
      students: 30,
      instructor: "John Doe",
      image: courseImage, // ✅ Use the imported variable
    },
    {
      title: "Web Design & Development Course for Beginners",
      price: "$149.00",
      rating: 5,
      reviews: 123,
      duration: "1.49 Hrs",
      students: 30,
      instructor: "John Doe",
      image: image, // ✅ Use the imported variable
    },
  ];

  return (
    <div className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
      Popular Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="bg-[#00ACC1] text-white px-4 py-2 rounded-md text-sm">
                  Read More
                </button>
                <button className="bg-[#00ACC1] text-white px-4 py-2 rounded-md text-sm">
                  Join Now
                </button>
              </div>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-2xl font-bold">{course.price}</h3>
              <div className="flex justify-center text-yellow-400 text-lg mt-2">
                {"★".repeat(course.rating)}
              </div>
              <p className="text-gray-600 text-sm mt-1">({course.reviews})</p>
              <p className="text-lg font-semibold mt-2">{course.title}</p>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-100 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <span>👨‍🏫</span> {course.instructor}
              </div>
              <div className="flex items-center gap-2">
                <span>⏳</span> {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <span>👥</span> {course.students} Students
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
