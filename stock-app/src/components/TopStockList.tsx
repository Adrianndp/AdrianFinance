import {
  Card,
  Avatar,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { TopStockData } from "../types";

const TopStockList = ({ stockData }: { stockData: TopStockData }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {Object.entries(stockData).map(([key, stock]) => {
        const isPositive = stock.percentage_change > 0;
        return (
          <ListItem key={key}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 1,
                minWidth: 300,
                marginBottom: 1,
                maxWidth: "100%",
                boxShadow: 1,
                cursor: "pointer",
              }}
            >
              {/* Stock Avatar */}
              <Avatar
                alt={stock.name}
                src={`/images/${stock.image}`}
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
          </ListItem>
        );
      })}
    </List>
  );
};
export default TopStockList;
