import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="bg-black shadow-lg">
      <ul className="flex justify-end space-x-4 p-4">
        <li>
          <NavLink 
            to="/Portfolio"
            end
            className={({ isActive }) => 
              isActive ? 'text-teal-500 font-bold' : 'text-white hover:text-teal-300'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Portfolio/about" 
            className={({ isActive }) => 
              isActive ? 'text-teal-500 font-bold' : 'text-white hover:text-teal-300'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Portfolio/skills" // Adjusted for the base URL
            className={({ isActive }) => 
              isActive ? 'text-teal-500 font-bold' : 'text-white hover:text-teal-300'
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Portfolio/projects" // Adjusted for the base URL
            className={({ isActive }) => 
              isActive ? 'text-teal-500 font-bold' : 'text-white hover:text-teal-300'
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Portfolio/contact" // Adjusted for the base URL
            className={({ isActive }) => 
              isActive ? 'text-teal-500 font-bold' : 'text-white hover:text-teal-300'
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Portfolio/feedback" // Adjusted for the base URL
            className={({ isActive }) => 
              isActive ? 'text-teal-500 font-bold' : 'text-white hover:text-teal-300'
            }
          >
            Feedback
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
