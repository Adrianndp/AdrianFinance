import React, { useState, useEffect } from "react";
import StockSearchBar from "./StockSearchBar";
import Navbar from "./Navbar";
import BasicFooter from "./BasicFooter";

function Main() {
  const [stockName, setStockName] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (stockName) {
      fetch(`http://127.0.0.1:8000/stock_prices/?stock_name=${stockName}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    }
  }, [stockName]); // Only re-run the effect if stockName changes

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    value: string
  ) => {
    event.preventDefault();
    setStockName(value.toUpperCase());
  };

  return (
    <div>
      <StockSearchBar handleSubmit={handleSubmit} />
      <Navbar data={data} />
      <BasicFooter />
    </div>
  );
}

export default Main;
