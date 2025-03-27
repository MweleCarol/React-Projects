
import React from "react";
import instructor1 from "../assets/team-1.jpg";
import instructor2 from "../assets/team-2.jpg";
import instructor3 from "../assets/team-3.jpg";
import instructor4 from "../assets/team-4.jpg";

const instructors = [
  { name: "Instructor Name", designation: "Designation", image: instructor1 },
  { name: "Instructor Name", designation: "Designation", image: instructor2 },
  { name: "Instructor Name", designation: "Designation", image: instructor3 },
  { name: "Instructor Name", designation: "Designation", image: instructor4 },
];

const Instructors = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Expert Instructors
      </h2>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <img src={instructor.image} alt={instructor.name} className="w-full h-72 object-cover" />
              <div className="bg-cyan-100 py-4 relative">
                <h3 className="text-lg font-bold text-gray-900 mt-6">{instructor.name}</h3>
                <p className="text-gray-600">{instructor.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
