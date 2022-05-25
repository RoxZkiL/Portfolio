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
          am a continuous learner, curious, proactive, and tech-passionated, who
          wants to contribute to his region's development through technology and
          software engineering.
        </p>
      </div>
      <div className="about-img">
        <img src={image} alt="about" />
      </div>
    </div>
  );
};

export default About;
