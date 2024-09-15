interface StockData {
    name: string;
    price: number;
    change: number;
    percentage_change: number;
  }
  
  interface TopStockData {
    symbol: string;
    data: StockData;
  }
  
  interface StockInfo {
    shortName: string;
  }
  
  interface StockSearchBarProps {
    handleSubmit: (
      event: React.FormEvent<HTMLFormElement>,
      value: string
    ) => void;
  }
  interface StockSearchBarProps {
    handleSubmit: (
      event: React.FormEvent<HTMLFormElement>,
      value: string
    ) => void;
  }