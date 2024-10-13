import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Home() {
  const handleDownload = () => {
    toast.success('Resume downloaded successfully!', {
      autoClose: 2000,
    });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-gray-900 text-center p-8 md:p-16 bg-white bg-opacity-90 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
          <h2 className="text-xl md:text-2xl mb-4">Hello, It's Me</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-teal-600">Gourav Shintre</h1>
          <p className="text-lg md:text-xl mb-2">And I'm a</p>
          <span className="text-teal-500 font-bold text-2xl md:text-3xl">Frontend Developer</span>

          <p className="text-gray-700 mt-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            I’m a passionate Frontend Developer specializing in crafting seamless user interfaces and experiences. I focus on writing clean and efficient code, keeping up with the latest technologies, and constantly improving my skills in modern JavaScript frameworks and libraries.
          </p>

          <div className="mt-8">
            <a
              href="/Portfolio/Gourav_Shintre_resume.pdf"
              download
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105"
              onClick={handleDownload}
            >
              Download Resume
            </a>
            <ToastContainer />
          </div>

          <ul className="flex justify-center gap-8 mt-10">
            <li>
              <NavLink to="https://www.linkedin.com/in/gourav-shintre-b52545252/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
                  className="w-12 h-12 hover:scale-110 transition duration-300 ease-in-out"
                  alt="LinkedIn"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://github.com/Gourav-Shintre" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://pngimg.com/uploads/github/github_PNG85.png"
                  className="w-12 h-12 hover:scale-110 transition duration-300 ease-in-out"
                  alt="GitHub"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
