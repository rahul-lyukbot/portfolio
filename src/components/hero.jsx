import React from "react";
import "./hero.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import bgImage from "../assets/bg-image.jpg";

const hero = () => {
  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%", // Add width and height to ensure the container is visible
    height: "100vh",
  };
  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    textAlign: "left",
    color: "#fff",
    padding: "10%",
    width: "100%", // Full width on smaller screens
  };

  // Media query for smaller screens
  const mediaQuery = `@media (max-width: 768px) {
    left: 0;
    transform: none; // Remove vertical centering
    text-align: center; // Center-align text on smaller screens
  }`;

  const hoverStyles = {
    fontSize: "110%", // Increase font size on hover
    transition: "font-size 0.3s ease", // Smooth transition effect
  };

  // Media query for responsive buttons
  const buttonMediaQuery = `@media (max-width: 768px) {
    bottom: "10px";
    left: "10px";
    alignItems: "center";
  }`;

  return (
    <div className="home" style={backgroundStyle}>
      <div className="flex flex-col ml-100 inline-block" style={textStyle}>
        <h1 className="text-6xl font-bold font-alata">
          <span
            className="transition-transform transform  scale-100 hover:scale-110"
            style={{ display: "inline-block" }}
          >
            Rahul<span className="font-sans text-4xl "> Saini</span>
          </span>
        </h1>
        <p className="text-2xl font-sans">
          <span
            className="transition-transform transform inline-block scale-100 hover:scale-110"
            style={{ display: "inline-block" }}
          >
            Software Engineer
          </span>
        </p>
        <div className="mt-10" style={{ position: "relative" }}>
          <button className="bg-transparent tracking-widest border border-purple-500  hover:border-purple-700 text-white hover:text-purple-700 font-bold py-2 px-4 rounded rounded-full mr-2">
            Resume
          </button>
          <button className="bg-transparent tracking-widest border border-purple-500  hover:border-purple-700 text-white hover:text-purple-700 font-bold py-2 px-4 rounded rounded-full">
            Portfolio
          </button>
          <div className="flex flex-col  justify-end items-center">
            <div className="flex space-x-2 mt-10">
              <a
                href="your_facebook_url_here"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-500 mr-3"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="your_twitter_url_here"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-500 mr-3"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="your_instagram_url_here"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-500 mr-3"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="your_linkedin_url_here"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-500"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="your_linkedin_url_here"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-500"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{mediaQuery}</style>
      <style>{buttonMediaQuery}</style>
    </div>
  );
};

export default hero;
