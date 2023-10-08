import React from "react";
import personImage from "../assets/project.png";

const About = () => {
  const aboutTextStyle = {
    top: "50%",
  };

  return (
    <div className="about-container min-h-screen mt-20">
      <div className="flex flex-row-reverse about-content">
        <img src={personImage} alt="Rahul Saini" className="w-1/2 " />
        <div className="about-text  ml-28 text-white inline-block space-y-10">
          <h1 className="font-leagueSpartan font-bold text-4xl underline">
            About
          </h1>
          <p className="block font-leagueSpartan text-start w-2/4">
            "Hi there! I'm Rahul Saini, a Software Engineer Trainee at Cisco
            Systems Pvt. Ltd., based in Bangalore, India. My journey in the tech
            world began in 2022, and I've been part of the CX-development team,
            where I've had the privilege of contributing to enterprise-level
            projects. I'm passionate about applying Cisco's design and
            architecture principles to build robust applications that align
            seamlessly with business goals. Notably, I played a key role in
            driving a 16.04% YoY revenue increase, reflecting Cisco's remarkable
            $15.203B revenue in Q3 2023. Let's connect and chat about tech,
            development, and more!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
