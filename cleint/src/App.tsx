import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import "./App.css"
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (like fetching data, assets, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Loader will stay for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Home />}
    </>
  );
}

export default App;
