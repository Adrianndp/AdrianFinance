import React, { useState, useEffect } from "react";
import BasicChart from "./BasicChart";

function StockPrices() {
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

  const handleChange = (event: any) => {
    if (event.key === "Enter") {
      setStockName(event.target.value.toUpperCase());
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleChange}
        placeholder="Enter stock name and press Enter"
        className="form-control text-uppercase"
      />
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
      </div>
      <BasicChart />
    </div>
  );
}

export default StockPrices;
