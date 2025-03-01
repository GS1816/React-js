import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes/Routes"; // ✅ Import the separate routes
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ margin: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ margin: "10px" }}>
          Contact
        </Link>
      </nav>
      <div style={{ padding: "20px" }}>
        <AppRoutes /> {/* ✅ Use the centralized routes here */}
      </div>
      <Footer />
    </Router>
  );
};

export default App;
