import React from "react";
import { Card, CardContent, Typography, Link, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface StockInfo {
  shortName: string;
  address1: string;
  city: string;
  state: string;
  country: string;
  website: string;
  sectorDisp: string;
  longBusinessSummary: string;
}

const StockDetail: React.FC<{ stockInfo: StockInfo }> = ({ stockInfo }) => {
  return (
    <Card sx={{ maxWidth: 600, mx: "auto", my: 3, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Company Information
        </Typography>
        <Box my={2}>
          <Typography variant="h6" color="primary">
            {stockInfo.shortName}
          </Typography>
          <Typography variant="body1">Address: {stockInfo.address1}</Typography>
          <Typography variant="body1">
            Location: {stockInfo.city}, {stockInfo.state}, {stockInfo.country}
          </Typography>
          <Link
            href={stockInfo.website}
            target="_blank"
            rel="noopener"
            variant="body1"
            color="secondary"
          >
            {stockInfo.website}
          </Link>
        </Box>

        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="subtitle1" gutterBottom>
              Sector: {stockInfo.sectorDisp}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="body2" color="textSecondary">
              {stockInfo.longBusinessSummary}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StockDetail;
