import React from "react";
import "./styles.css"
import BlackButton from "../../Components/BlackButton";

const HeroBanner = () => {
  return (
    <header>
      <a href="https://www.google.com" target="_self"  className="banner">
        <div className="text-container">
          <h1>Top rated. Innovative.
            <br />
            Trending.
          </h1>
          <p>
            Discover must-haves only at Ulta.
          </p>
          <BlackButton label={"Shop now"} action={() => {}} />
        </div>
      </a>
    </header>
  );
};

export default HeroBanner;