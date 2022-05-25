import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>JESUS MATUTE</h1>
      <p>
        Web-Developer || Javacsript || React || Redux || Boostrap || NodeJs ||
        Express || PostgreSQL || Sequelize
      </p>
    </div>
  );
};

export default Cover;
