import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import PublicNavbar from "./components/PublicNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage.js/ProfilePage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <PublicNavbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/product/:id" element={<DetailPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
