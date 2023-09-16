import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home.jsx";
import Sighnup from "./pages/SignupPage.jsx";
import Pricing from "./pages/PricingPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Sighnup />} />
        <Route path="/pricing" exact element={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
