import { useState } from "react";
import "./App.css";
import Ad from "./Component/Ad";
import Footer from "./Component/Footer";
import Header from "./Component/Header.jsx";
import Hero from "./Component/Hero";

function App() {
  return (
    <div className="MainContainer">
      <Header />
      <Hero />
      <Ad />
      <Footer />
    </div>
  );
}

export default App;
