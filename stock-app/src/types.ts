export interface StockData {
    name: string;
    price: number;
    change: number;
    percentage_change: number;
  }
  
  export interface TopStockData {
    symbol: string;
    data: StockData;
  }
  
  export interface StockInfo {
    shortName: string;
  }
  
  export interface StockSearchBarProps {
    handleSubmit: (
      event: React.FormEvent<HTMLFormElement>,
      value: string
    ) => void;
  }
  export interface StockSearchBarProps {
    handleSubmit: (
      event: React.FormEvent<HTMLFormElement>,
      value: string
    ) => void;
  }