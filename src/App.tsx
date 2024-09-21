import Main from "./components/Main";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container maxWidth="lg">
        <Typography component={"span"} variant={"body2"}>
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </Typography>
      </Container>
    </Router>
  );
};

export default App;
