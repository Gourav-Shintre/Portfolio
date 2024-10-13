import React from 'react';

function Skill() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-100 bg-opacity-90 p-10 max-w-4xl w-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold mb-6 text-teal-500 text-center">Skills</h1>
        <ul className="text-gray-800 list-disc list-inside space-y-2">
          <li className="hover:text-teal-500 transition duration-300">HTML, CSS, and JavaScript</li>
          <li className="hover:text-teal-500 transition duration-300">React and Redux</li>
          <li className="hover:text-teal-500 transition duration-300">TypeScript</li>
          <li className="hover:text-teal-500 transition duration-300">Responsive Web Design</li>
          <li className="hover:text-teal-500 transition duration-300">RESTful APIs</li>
          <li className="hover:text-teal-500 transition duration-300">Version Control (Git, GitHub)</li>
          <li className="hover:text-teal-500 transition duration-300">Unit Testing (Jest, React Testing Library)</li>
          <li className="hover:text-teal-500 transition duration-300">Agile Methodology</li>
          <li className="hover:text-teal-500 transition duration-300">Continuous Integration/Continuous Deployment (CI/CD)</li>
        </ul>
      </div>
    </div>
  );
}

export default Skill;
