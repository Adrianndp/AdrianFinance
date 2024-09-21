import React, { useState, useEffect } from "react";
import BasicFooter from "./BasicFooter";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicChart from "./BasicChart";
import StockDetail from "./StockDetail";
import Grid from "@mui/material/Grid2";
import TopNavbar from "./TopNavbar";
import TopStockList from "./TopStockList";
import StockNews from "./StockNews";
import SemiGauge from "./SemiGauge";
import { StockInfo, TopStockData, NeswData } from "../types";

// http://127.0.0.1:8000
const url: string = "https://thread-hot-middle.glitch.me";

function Main() {
  const [stockName, setStockName] = useState("AAPL");
  const [stockInfo, setStockInfo] = useState<StockInfo | null>(null);
  const [topStocks, setTopStocks] = useState<TopStockData | null>(null);
  const [newsData, setNewsData] = useState<NeswData[] | null>(null);
  const [stockData, setStockData] = useState(null);
  const [tabPage, setTabPage] = React.useState("1");

  useEffect(() => {
    fetch(`${url}/top_stocks/`)
      .then((response) => response.json())
      .then((json) => setTopStocks(json))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Simulating data fetching
    if (stockName) {
      fetch(`${url}/stock_info/?stock_name=${stockName}`)
        .then((response) => response.json())
        .then((json) => setStockInfo(json))
        .catch((error) => console.error(error));
    }
  }, [stockName]); // Only re-run the effect if stockName changes

  useEffect(() => {
    if (stockName) {
      fetch(`${url}/stock_news/?stock_name=${stockName}`)
        .then((response) => response.json())
        .then((json) => setNewsData(json))
        .catch((error) => console.error(error));
    }
  }, [stockName]); // Only re-run the effect if stockName changes

  useEffect(() => {
    if (stockName) {
      fetch(`${url}/stock_prices/?stock_name=${stockName}`)
        .then((response) => response.json())
        .then((json) => setStockData(json))
        .catch((error) => console.error(error));
    }
  }, [stockName]); // Only re-run the effect if stockName changes

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabPage(newValue);
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | null,
    value: string
  ) => {
    if (event) {
      event.preventDefault();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top when clicking one top stock
    }
    setStockName(value.toUpperCase());
  };

  return (
    <>
      <TopNavbar handleSubmit={handleSubmit} />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tabPage}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="fullWidth"
            >
              <Tab label="Overview" value="1" />
              <Tab label="Details" value="2" />
              <Tab label="Strategy" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {/* First Tab */}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {/* Left Side 8 */}
                <Grid size={8}>
                  {stockInfo && stockInfo.shortName ? (
                    <BasicChart
                      title={stockInfo.shortName + " Chart"}
                      data={stockData}
                    />
                  ) : (
                    <></>
                  )}
                </Grid>
                {/* Right Side 4 */}
                <Grid size={4}>
                  {topStocks ? (
                    <TopStockList
                      topStockDataList={topStocks}
                      handleSubmit={handleSubmit}
                    />
                  ) : (
                    <p>Loading top stocks...</p>
                  )}
                  <img
                    src={`${process.env.PUBLIC_URL}/svgs/doge.svg`}
                    alt="Doge"
                  />
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            {/* Second Tab */}
            {stockInfo && <StockDetail stockInfo={stockInfo} />}
          </TabPanel>
          <TabPanel value="3">
            {/* Third Tab */}
            <Typography variant="h5" gutterBottom>
              Company Information
            </Typography>
            <SemiGauge title="Strong Buy" data={0.85} />
            <Typography variant="h5" gutterBottom>
              News
            </Typography>
            {newsData && newsData.length > 0 ? (
              <StockNews newsDataList={newsData} />
            ) : null}
          </TabPanel>
        </TabContext>
      </Box>
      <BasicFooter />
    </>
  );
}

export default Main;
