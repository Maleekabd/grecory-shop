import React from "react";
import { LandingPage } from "./components/Landingpage/LandingPage";
import { Navbar } from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Product />
    </div>
  );
};

export default App;
