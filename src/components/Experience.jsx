import React from 'react';
import reactlogo from "../assets/react.png";
import htmllogo from "../assets/html.png";
import csslogo from "../assets/css.png";
import tailwindlogo from "../assets/tailwind.png";
import jslogo from "../assets/js.png";
import figma from "../assets/figma.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: htmllogo,
      title: "HTML",
      style: "shadow-orange-500",
      width: 40 ,
      
    },
    {
      id: 2,
      src: reactlogo,
      title: 'React',
      style: 'shadow-blue-200',
      width: 40,
    },
    {
      id: 3,
      src: csslogo,
      title: 'CSS',
      style: 'shadow-blue-500',
      width: 40,
    },
    {
      id: 4,
      src: tailwindlogo,
      title: 'Tailwind',
      style: 'shadow-cyan-500',
      width: 45,
      
    },
    {
      id: 5,
      src: jslogo,
      title: 'JavaScript',
      style: 'shadow-orange',
      width: 40,
    },
    {
      id: 6,
      src: figma,
      title: 'Figma',
      style: 'shadow-orange',
      width: 75, // Set the desired width value
    },
  ];
  

  return (
    <div name="experience" className="w-full h-screen bg-gray text-black ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold inline border-b-0 border-gray-500">
            Experience
          </p>
          <p className="mt-10 text-xl">
            These are the toolkits I've worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style,width }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
             <img src={src} alt="" className={`w-${width} mx-auto items-center justify-center`} />

              <p className="font-bold text-2xl mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
