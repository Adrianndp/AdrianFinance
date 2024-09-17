import {
  Card,
  Avatar,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { StockNewsProps } from "../types"; // Assuming this is updated to reflect the news structure

const StockNews: React.FC<StockNewsProps> = ({ newsDataList }) => {
  const fallbackImage = "/images/logo.svg";
  return (
    <Fragment>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} gutterBottom>
        News
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {newsDataList.map((newsData, index) => {
          return (
            <ListItem key={index}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 1,
                  maxWidth: "100%",
                  boxShadow: 1,
                  cursor: "pointer",
                  maxHeight: 100, // Adjusted to fit content nicely
                  width: 700,
                }}
                onClick={() => window.open(newsData.url, "_blank")} // Open the link in a new tab
              >
                <Avatar
                  alt={newsData.title}
                  src={newsData.image_url || fallbackImage}
                  sx={{ width: 40, height: 40, marginRight: 1 }}
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography variant="body2" noWrap>
                    {newsData.title}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          );
        })}
      </List>
    </Fragment>
  );
};

export default StockNews;
