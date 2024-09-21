import { StockInfo } from "../types";

const StockDetail: React.FC<{ stockInfo: StockInfo }> = ({ stockInfo }) => {
  return (
    <div>
      <h1>Company Information</h1>
      <p>{stockInfo.shortName}</p>
      <p>Adresse: {stockInfo.address1}</p>
      <p>
        Place: {stockInfo.city}, {stockInfo.state}, {stockInfo.country}{" "}
      </p>
      <p>{stockInfo.website}</p>
      <p>Sector: {stockInfo.sectorDisp}</p>
      <p>ABOUT: {stockInfo.longBusinessSummary}</p>
    </div>
  );
};

export default StockDetail;
