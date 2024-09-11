import React, { useState, useEffect } from "react";
import StockSearchBar from "./StockSearchBar";
import BasicFooter from "./BasicFooter";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicChart from "./BasicChart";

// todo navbar not needed anymore

function Main() {
  const [stockName, setStockName] = useState("");
  const [stockInfo, setStockInfo] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [tabPage, setTabPage] = React.useState("1");

  useEffect(() => {
    // Simulating data fetching
    if (stockName) {
      fetch(`http://127.0.0.1:8000/stock_info/?stock_name=${stockName}`)
        .then((response) => response.json())
        .then((json) => setStockInfo(json))
        .catch((error) => console.error(error));
    }
  }, [stockName]); // Only re-run the effect if stockName changes

  useEffect(() => {
    if (stockName) {
      fetch(`http://127.0.0.1:8000/stock_prices/?stock_name=${stockName}`)
        .then((response) => response.json())
        .then((json) => setStockData(json))
        .catch((error) => console.error(error));
    }
  }, [stockName]); // Only re-run the effect if stockName changes

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabPage(newValue);
  };

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

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tabPage}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Overview" value="1" />
              <Tab label="Details" value="2" />
              <Tab label="Strategy" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BasicChart data={stockData} />
            <pre>{JSON.stringify(stockInfo, null, 2)}</pre>
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
      <BasicFooter />
    </div>
  );
}

export default Main;
