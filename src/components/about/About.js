import React from "react";
import "./About.css";
import image from "./Jesus Matute Portfolio.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About Me</h3>
        <p>
          I build web applications, from their data modeling to their design. I
          am a proactive, and tech-passionated person, who wants to contribute
          to his region's development through technology and software
          engineering. I am characterized by my responsibility, charisma and
          sympathy with the people in my work group. I consider innovation and
          helping people around me to be my passion. It should be noted that I
          am always willing to learn new things and contribute with everything
          within my reach so that my work environment grows and be more
          prosperous every day.
        </p>
      </div>
      <div className="about-img">
        <img src={image} alt="about" />
      </div>
    </div>
  );
};

export default About;
