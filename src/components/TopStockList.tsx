import {
  Card,
  Avatar,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { TopStockListProps } from "../types";

const TopStockList: React.FC<TopStockListProps> = ({
  topStockDataList,
  handleSubmit,
}) => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography
        variant="h4"
        sx={{ marginTop: 2, marginBottom: 3 }}
        gutterBottom
      >
        Market Titans
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(topStockDataList).map(([key, stock]) => {
          const isPositive = stock.percentage_change > 0;
          return (
            <Grid item xs={12} sm={12} md={6} lg={6} key={key}>
              <Card
                onClick={() => handleSubmit(null, stock.symbol)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 1,
                  height: "100%", // Ensures the card takes full height within its grid cell
                  boxShadow: 1,
                  cursor: "pointer",
                }}
              >
                <Avatar
                  alt={stock.name}
                  src={`${process.env.PUBLIC_URL}/images/${stock.image_name}`}
                  sx={{ width: 40, height: 40, marginRight: 1 }}
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography variant="h6">{stock.name}</Typography>
                  <Box display="flex" alignItems="center">
                    {isPositive ? (
                      <ArrowUpwardIcon
                        sx={{ color: "green", marginRight: 0.5 }}
                      />
                    ) : (
                      <ArrowDownwardIcon
                        sx={{ color: "red", marginRight: 0.5 }}
                      />
                    )}
                    <Typography
                      variant="body1"
                      sx={{ color: isPositive ? "green" : "red" }}
                    >
                      {stock.percentage_change.toFixed(2)}%
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopStockList;
