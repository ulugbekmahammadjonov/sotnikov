import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
 

  return (
    <header className=" bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          My App
        </div>
        <div className="flex space-x-12">
          <NavLink to="/posts" className={({ isActive }) => isActive ? "text-white font-bold underline decoration-solid underline-offset-4" : "text-gray-300 hover:text-white"} >
            Posts
          </NavLink>
          <NavLink to="/albums" className={({ isActive }) => isActive ? "text-white font-bold underline decoration-solid underline-offset-4" : "text-gray-300 hover:text-white"}>
            Albums
          </NavLink>
          <NavLink to="/tasks" className={({ isActive }) => isActive ? "text-white font-bold underline decoration-solid underline-offset-4" : "text-gray-300 hover:text-white"}>
            Tasks
          </NavLink>
        </div>
       
      </nav>
    
      
    </header>
  );
};

export default Navbar;
