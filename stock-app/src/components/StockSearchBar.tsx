import React, { useState } from "react";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// TODO use at the HOME PAGE only

const options = ["AAPL", "AMZN"];

const StockSearchBar: React.FC<StockSearchBarProps> = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: string | null
  ) => {
    if (newValue) {
      setInputValue(newValue);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(event, inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <Autocomplete
        options={options}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </form>
  );
};

export default StockSearchBar;
