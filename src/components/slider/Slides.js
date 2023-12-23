import React from "react";
import "./Slider.css";
import image1 from "../../media/images/pi (4).jpg";
import image2 from "../../media/images/tictactoegame.jpg";
import image3 from "../../media/images/pgEcommerce (1).jpg";

const slidesInfo = [
  {
    src: image1,
    alt: "The Dog's App",
    desc: "The Dog's App",
    link: "https://pi-dogs-jesus-matute.vercel.app/",
  },
  {
    src: image2,
    alt: "Tic Tac Toe",
    desc: "Tic Tac Toe Game",
    link: "https://tic-tac-toe-game-pt2x1k3me-roxzkil.vercel.app/",
  },
  {
    src: image3,
    alt: "CompuTechShop E-Commerce",
    desc: "CompuTechShop E-Commerce",
    link: "https://computechshop.vercel.app/",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.link} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
