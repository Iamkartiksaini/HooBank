import "./App.css";
import Feature from "./Component/Feature";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Intro from "./Component/Intro";
import Product from "./Component/Product";
import Upcomings from "./Component/Upcomings";
import WhatisGPT from "./Component/WhatisGPT";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <WhatisGPT />
      <Feature />
      <Product />
      <Upcomings />
      <Footer />
    </>
  );
};

export default App;
