import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      </Routes>
    </Router>
  );
}