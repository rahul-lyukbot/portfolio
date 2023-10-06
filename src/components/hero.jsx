import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsGithub,
} from "react-icons/bs";

import bgImage from "../assets/bg-image.jpg";

const hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%", // Add width and height to ensure the container is visible
    height: "100vh",
    opacity: "70%",
  };

  return <div className="home" style={backgroundStyle}></div>;
};

export default hero;
