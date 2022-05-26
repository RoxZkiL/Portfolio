import React from "react";
import "./Slider.css";
import image1 from "./pi.jpg";
import image2 from "./E-Commerce CompuTechShop.jpg";
import image3 from "./The Dog's App.jpg";

const slidesInfo = [
  {
    src: image1,
    alt: "The Dog's App",
    desc: "The Dog's App",
    link: "https://pi-dogs-jesus-matute.vercel.app/",
  },
  {
    src: image2,
    alt: "CompuTechShop E-Commerce",
    desc: "CompuTechShop E-Commerce",
    link: "https://computechshop.vercel.app/",
  },
  {
    src: image3,
    alt: "Dog App",
    desc: "Dog App",
    link: "https://pi-dogs-jesus-matute.vercel.app/home",
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
