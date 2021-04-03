import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>This is HomePage</h1>
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          {/* link */}
          {/* icon */}
          {/* Avatar */}
        </div>
        <div className="home__body"></div>
      </div>
    </div>
  );
}

export default Home;
