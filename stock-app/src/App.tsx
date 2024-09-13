import Main from "./components/Main";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Typography component={"span"} variant={"body2"}>
        <Main />
      </Typography>
    </Container>
  );
};

export default App;
