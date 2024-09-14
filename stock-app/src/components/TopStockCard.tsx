import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface Stock {
  name: string;
  image: string;
  changePercentage: number;
}

const TopStockCard = ({ stock }: { stock: Stock }) => {
  const { name, image, changePercentage } = stock;
  const isPositive = changePercentage >= 0;

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        minWidth: 300,
        marginBottom: 2,
      }}
    >
      {/* Stock Avatar */}
      <Avatar
        alt={name}
        src={image}
        sx={{ width: 56, height: 56, marginRight: 2 }}
      />

      {/* Stock Info */}
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="h6">{name}</Typography>
        <Box display="flex" alignItems="center">
          {/* Conditional styling and icons for increase or decrease */}
          {isPositive ? (
            <ArrowUpwardIcon sx={{ color: "green", marginRight: 0.5 }} />
          ) : (
            <ArrowDownwardIcon sx={{ color: "red", marginRight: 0.5 }} />
          )}
          <Typography
            variant="body1"
            sx={{ color: isPositive ? "green" : "red" }}
          >
            {changePercentage}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default TopStockCard;
