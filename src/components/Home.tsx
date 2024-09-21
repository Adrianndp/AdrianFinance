import React, { useEffect, useState } from "react";
import "../Home.css"; // Make sure to import your CSS file
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Home = () => {
  const [fixme, setFixme] = useState(false);

  useEffect(() => {
    const heroShinker = () => {
      const hero = document.querySelector(".hero-nav") as HTMLElement;
      if (!hero) return;

      const heroHeight = hero.offsetHeight;

      // Set the padding-top for the parent of the hero element
      if (hero.parentElement) {
        hero.parentElement.style.paddingTop = heroHeight + "px";
      }

      const handleScroll = () => {
        const scrollOffset = window.pageYOffset;

        // Adjust the height of the hero element as you scroll
        if (scrollOffset < heroHeight) {
          hero.style.height = heroHeight - scrollOffset + "px";
        }

        // Add or remove the "fixme" class based on scroll position
        if (scrollOffset > heroHeight - 215) {
          hero.classList.add("fixme");
          setFixme(true);
        } else {
          hero.classList.remove("fixme");
          setFixme(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
    };

    heroShinker();
  }, []);

  return (
    <div className="App">
      <div className={`hero-nav ${fixme ? "fixme" : ""}`}>
        <div className="hero-nav__inner">
          <div>
            <h1>FINANCE IS</h1>
            <h1>ALL ABOUT</h1>
            <h1>TO CHANGE</h1>
          </div>
        </div>
      </div>
      <div className="page-content">
        <img
          style={{ marginTop: "20px" }}
          src={`${process.env.PUBLIC_URL}/images/doge.svg`}
          alt="Doge"
        />
        <Typography variant="h4" gutterBottom>
          How Adrian Finance Works
        </Typography>

        <Typography variant="h6">
          Analyse your favorite stocks{" "}
          <ShowChartIcon sx={{ color: "green", marginRight: 1 }} />
        </Typography>

        <Typography variant="h6">
          Create Strategies before investing{" "}
          <AttachMoneyIcon
            sx={{ color: "gold", marginLeft: 2, marginRight: 1 }}
          />
        </Typography>

        <Typography variant="body1">
          Search for your favorite Stocks Like Apple, Tesla, Amazon, etc. By
          their stock name <strong>AAPL, TSLA, AMZN</strong>
        </Typography>

        <p style={{ textAlign: "center" }}>
          <Link
            to="/main"
            style={{ fontSize: "xx-large", textAlign: "center" }}
          >
            Try it out!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
