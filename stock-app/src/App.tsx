import Navbar from "./components/Navbar";
import StockPrices from "./components/StockPrices";

function App() {
  return (
    <div>
      <Navbar />
      <StockPrices stockName="AAPL" />
    </div>
  );
}

export default App;
