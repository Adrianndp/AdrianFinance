import Main from "./components/Main";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <HashRouter>
      <Container maxWidth="lg">
        <Typography component={"span"} variant={"body2"}>
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </Typography>
      </Container>
    </HashRouter>
  );
};

export default App;
