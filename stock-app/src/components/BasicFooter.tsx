// Footer.js
import { Box, Container, Typography, Link } from "@mui/material";

const BasicFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 0,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          © {new Date().getFullYear()} Adrian Stock
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Made with yfinance API "}
          <Link color="inherit" href="https://yourwebsite.com">
            Your Company
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default BasicFooter;
