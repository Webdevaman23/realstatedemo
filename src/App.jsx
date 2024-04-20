import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
