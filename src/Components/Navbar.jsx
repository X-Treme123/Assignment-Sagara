import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi";
import { BiGridAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa"; 
import { MdHome } from "react-icons/md";


const Navbar = (props) => {
  const { type } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-64 h-screen bg-gray-800 text-white fixed hidden md:block"> {/* Only show on medium screens and above */}
        <div className="p-6">
          <Link to=""><img src="src/assets/logo.png" alt="logo" width={120} /></Link>
        </div>
        <ul className="mt-10">
          <p className="text-gray-500 font-bold mx-4 px-2">Menu</p>
          <li className={`py-2 px-4 ${type === "Dashboard" ? "bg-customRed" : "hover:bg-gray-700"} mx-4 rounded-lg cursor-pointer mt-2 transition ease-in-out`}>
            <Link to="/dashboard" className="flex items-center">
              <div className="flex items-center gap-3">
                <p><BiGridAlt /></p>
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li className={`py-2 px-4 ${type === "Student" ? "bg-customRed" : "hover:bg-gray-700"} mx-4 rounded-lg cursor-pointer mt-3 transition ease-in-out`}>
            <Link to="/student" className="flex items-center">
              <div className="flex items-center gap-3">
                <p><GiGraduateCap /></p>
                <p>Students</p>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="mt-10">
          <li className={`py-2 px-4 hover:bg-gray-700 mx-4 rounded-lg cursor-pointer mt-2 transition ease-in-out`}>
            <Link to="/" className="flex items-center">
              <div className="flex items-center gap-3">
                <p><MdHome /></p>
                <p>Home</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="bg-gray-800 text-white fixed top-0 w-full p-4 md:hidden flex justify-between items-center">
        <Link to=""><img src="src/assets/logo.png" alt="logo" width={120} /></Link>
        <button onClick={toggleSidebar} className="text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
        <div className="p-6">
          <Link to=""><img src="src/assets/logo.png" alt="logo" width={120} /></Link>
        </div>
        <ul className="mt-10">
          <p className="text-gray-500 font-bold mx-4 px-2">Menu</p>
          <li className={`py-2 px-4 ${type === "Dashboard" ? "bg-customRed" : "hover:bg-gray-700"} mx-4 rounded-lg cursor-pointer mt-2`}>
            <Link to="/dashboard" className="flex items-center" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-3">
                <p><BiGridAlt /></p>
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li className={`py-2 px-4 ${type === "Student" ? "bg-customRed" : "hover:bg-gray-700"} mx-4 rounded-lg cursor-pointer mt-3`}>
            <Link to="/student" className="flex items-center" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-3">
                <p><GiGraduateCap /></p>
                <p>Students</p>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="mt-10">
          <li className={`py-2 px-4 hover:bg-gray-700 mx-4 rounded-lg cursor-pointer mt-2 transition ease-in-out`}>
            <Link to="/" className="flex items-center">
              <div className="flex items-center gap-3">
                <p><MdHome /></p>
                <p>Home</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
