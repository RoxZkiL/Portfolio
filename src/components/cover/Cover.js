import React from "react";
import "./Cover.css";
import coverVideo from "../../media/videos/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>JESUS MATUTE</h1>
      <p>
        JavacSript || TypeScript || NextJS || React || Redux || HTML || CSS ||
        Boostrap || NodeJS || Express || PostgreSQL || MongoDB || Sequelize
      </p>
    </div>
  );
};

export default Cover;
