import { Card, Avatar, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Fragment } from "react";
import { StockNewsProps } from "../types"; // Assuming this is updated to reflect the news structure

const StockNews: React.FC<StockNewsProps> = ({ newsDataList }) => {
  const fallbackImage = `${process.env.PUBLIC_URL}/images/logo.svg`;

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", padding: 2 }}>
        <Grid container spacing={2}>
          {newsDataList.map((newsData, index) => (
            <Grid xs={12} sm={12} md={6} lg={6} key={index}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 1,
                  height: "100%", // Ensures full height of grid item
                  boxShadow: 1,
                  cursor: "pointer",
                }}
                onClick={() => window.open(newsData.url, "_blank")} // Open the link in a new tab
              >
                <Avatar
                  alt={newsData.title}
                  src={newsData.image_url || fallbackImage}
                  sx={{ width: 50, height: 50, marginRight: 1 }}
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="body2"
                    noWrap
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      maxWidth: "80%",
                      fontWeight: "bold",
                      color: "#1976d2",
                    }}
                  >
                    {newsData.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default StockNews;
