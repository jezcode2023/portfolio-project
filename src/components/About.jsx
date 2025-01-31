import React from 'react';

const About = () => {
  return (
    <div 
      name="about" 
      className="w-full h-screen bg-gray"
    >
      <div 
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="mt-20 pb-8"> {/* Adjusted top margin */}
          <p className="text-3xl font-bold inline border-b-0 border-gray-500">
            About
          </p>
          <p className="text-gray-900 text-2xl mt-8"> {/* Adjusted margin-top */}
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <br />
          <p className="text-2xl mt-8"> {/* Adjusted margin-top */}
          ---</p>
          <br />
          <p className="mt-8 text-2xl">
          ---</p>
        </div>
      </div>
    </div>
  );
};

export default About;
