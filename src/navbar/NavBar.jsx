import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-black p-8 ">
      <ul className="flex justify-evenly ">
        <li>
          <NavLink 
            to="/Portfolio"
            end
            className={({ isActive }) => 
              isActive 
                ? 'text-teal-500 font-bold relative group'
                : 'text-white hover:text-teal-300 relative group'
            }
          >
            Home
            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to="/Portfolio/about" 
            className={({ isActive }) => 
              isActive 
                ? 'text-teal-500 font-bold relative group'
                : 'text-white hover:text-teal-300 relative group'
            }
          >
            About
            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li> */}
        <li>
          <NavLink 
            to="/Portfolio/skills"
            className={({ isActive }) => 
              isActive 
                ? 'text-teal-500 font-bold relative group'
                : 'text-white hover:text-teal-300 relative group'
            }
          >
            About
            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Portfolio/projects"
            className={({ isActive }) => 
              isActive 
                ? 'text-teal-500 font-bold relative group'
                : 'text-white hover:text-teal-300 relative group'
            }
          >
            Projects
            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Portfolio/contact"
            className={({ isActive }) => 
              isActive 
                ? 'text-teal-500 font-bold relative group'
                : 'text-white hover:text-teal-300 relative group'
            }
          >
            Contact
            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to="/Portfolio/feedback"
            className={({ isActive }) => 
              isActive 
                ? 'text-teal-500 font-bold relative group'
                : 'text-white hover:text-teal-300 relative group'
            }
          >
            Feedback
            <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}

export default NavBar;
