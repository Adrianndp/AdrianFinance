import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StockSearchBar: React.FC<any> = ({ handleChange }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      onKeyDown={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default StockSearchBar;
