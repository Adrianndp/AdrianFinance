import React, { useEffect, useState } from "react";
import "../Home.css"; // Make sure to import your CSS file

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
            <h1>ABOUT</h1>
            <h1>TO CHANGE</h1>
          </div>
        </div>
      </div>
      <div className="page-content">
        <h1>How Adrian Finance Works</h1>
        <p>
          Adrian Finance makes it easy to track stocks and cryptocurrencies in
          real-time. Simply enter the stock or crypto symbol of the company or
          currency you want to track, and the app will provide you with detailed
          data and charts.
        </p>

        <h2>Stock Market Search</h2>
        <p>
          You can search for companies by their stock symbols. Here are a few
          examples:
        </p>
        <ul>
          <li>
            For <span>Apple Inc.</span>, search for <strong>AAPL</strong>
          </li>
          <li>
            For <span>Meta Platforms</span>, search for <strong>META</strong>
          </li>
          <li>
            For <span>Tesla</span>, search for <strong>TSLA</strong>
          </li>
        </ul>

        <h2>Cryptocurrency Search</h2>
        <p>
          You can also search for your favorite cryptocurrencies. For example:
        </p>
        <ul>
          <li>
            For <span>Bitcoin</span>, search for <strong>BTC</strong>
          </li>
          <li>
            For <span>Ethereum</span>, search for <strong>ETH</strong>
          </li>
          <li>
            For <span>Dogecoin</span>, search for <strong>DOGE</strong>
          </li>
        </ul>

        <p style={{ textAlign: "center" }}>
          <a style={{ fontSize: "xx-large" }} href="main">
            Try it out!
          </a>
        </p>
        <p>
          Welcome to Adrian Finance! your go-to platform for navigating the
          stock market with ease! Whether you're just starting out in the world
          of finance or you're a seasoned investor, our app provides everything
          you need to stay ahead in the market. With real-time stock data,
          comprehensive graphs, and key information at your fingertips, you can
          easily track market trends, analyze performance, and make informed
          decisions. Our expert recommendations give you an extra edge, helping
          you identify opportunities that suit your investment goals. Adrian
          Finance is designed to be user-friendly, making it perfect for
          beginners who want to understand the stock market while also offering
          valuable insights for experienced traders. Get started today and take
          control of your financial future! Ready to dive into the world of
          investing?
        </p>
        <p>
          This project started as a personal learning experience, allowing me to
          explore how market trends work and how data could help shape better
          decisions. From analyzing graphs to compiling real-time stock data, I
          wanted to create a tool that was both insightful and easy to use —
          perfect for anyone wanting to learn about stocks or sharpen their
          trading skills. While Adrian Finance is still a learning project at
          its core, you’re welcome to explore it and make use of the tools it
          offers. From stock graphs and key info to personalized
          recommendations, this app can help you get started in the world of
          finance or enhance your investing knowledge.
        </p>
      </div>
    </div>
  );
};

export default Home;
