import { CgNametag } from "react-icons/cg";
import React, { useState } from "react";

const nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar flex items-center justify-between p-8 mx-auto md:flex-row position:fixed">
        <div>
          <a
            href=""
            className="flex items-center text-white text-2xl transition tracking-wider hover:scale-100 hover:text-purple-600 hover:underline  duration-2000"
          >
            <CgNametag />
            Logo
          </a>
        </div>
        <div className="space-x-4">
          <div className="text-white ssm:hidden lg:block space-x-2">
            <a
              href="#"
              className="hover:text-purple-600 hover:underline px-5 py-2 text-md"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-purple-600  hover:underline px-5 py-2 text-md"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-purple-600  hover:underline px-5 py-2 text-md"
            >
              Resume
            </a>
            <a
              href="#"
              className="hover:text-purple-600  hover:underline px-5 py-2 text-md"
            >
              Projects
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {isOpen && (
              <div className="flex flex-col bg-black text-white py-2 px-4 shadow-lg mt-2">
                {/* Add your navigation links here */}
                <a href="#" className="hover:text-purple-600">
                  Home
                </a>
                <a href="#" className="hover:text-purple-600">
                  Projects
                </a>
                <a href="#" className="hover:text-purple-600">
                  About
                </a>
                <a href="#" className="hover:text-purple-600">
                  Resume
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default nav;
