import React from 'react';

function Features() {
  const FeaturesCards = [
    {
      title: 'Skilled Instructors',
      description:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: '🎓',
    },
    {
      title: 'Online Classes',
      description:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: '🌐',
    },
    {
      title: 'Home Projects',
      description:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: '🏠',
    },
    {
      title: 'Book Library',
      description:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: '📖',
    },
  ];

  return (
    <div className="flex justify-center gap-6 p-10">
      {FeaturesCards.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-6 w-64 h-64 bg-blue-50 rounded-lg shadow-md text-center 
          transition duration-300 ease-in-out hover:bg-[#00ACC1] hover:text-white"
        >
          <div className="text-4xl">{feature.icon}</div>
          <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
          <p className="mt-2 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
