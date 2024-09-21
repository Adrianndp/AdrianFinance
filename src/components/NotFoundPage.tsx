import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Typography variant="h2">Oops Something went wrong</Typography>
      <img
        style={{ marginTop: "20px", width: "50%", height: "50%" }}
        src={`${process.env.PUBLIC_URL}/images/doge.svg`}
        alt="Doge"
      />
      <Typography variant="h2" style={{ color: "blue" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Lets go back to the home page
        </Link>
      </Typography>
    </>
  );
};
export default NotFoundPage;
