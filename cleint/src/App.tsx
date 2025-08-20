import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Home />} />
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
