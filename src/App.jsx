import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
