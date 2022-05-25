import React from "react";
import "./Slider.css";
import image1 from "./pi.jpg";
import image2 from "./pg.jpg";

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
    src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Proyecto 3",
    desc: "Proyecto 3",
    link: "https://pi-dogs-jesus-matute.vercel.app/",
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
