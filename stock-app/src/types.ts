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
    shortName: string;
  }

  export interface StockSearchBarProps {
    handleSubmit: (
      event: React.FormEvent<HTMLFormElement> | null,
      value: string
    ) => void;
  }

  export interface TopStockListProps extends StockSearchBarProps {
    stockData: TopStockData;
  }