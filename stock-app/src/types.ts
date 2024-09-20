export interface StockData {
    name: string;
    price: number;
    symbol: string;
    change: number;
    percentage_change: number;
    image_name: string;
  }
  
  export interface TopStockData {
    symbol: string;
    data: StockData;
  }
  
  export interface StockInfo {
    // Company Information
    shortName: string;
    address1: string;
    city: string;
    state: string;
    country: string;
    website: string;
    indestryDisp: string;
    sectorDisp: string;
    longBusinessSummary: string;
    // Stock Price and Trading Data
    currentPrice: number;
    marketCap: number;
    // Performance Metrics
    priceToBook: number;
    returnOnAssets: number;
    returnOnEquity: number;
    // Stock Data
    sharesOutstanding: number;
    floatShares: number;
    sharesShort: number;
    shortRatio: number;
  }

  export interface StockSearchBarProps {
    handleSubmit: (
      event: React.FormEvent<HTMLFormElement> | null,
      value: string
    ) => void;
  }

  export interface TopStockListProps extends StockSearchBarProps {
    topStockDataList: TopStockData;
  }

  export interface NeswData {
    title: string;
    url: string;
    image_url: string | null;
  }


  export interface StockNewsProps {
    newsDataList: NeswData[];
  }