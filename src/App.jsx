import React from "react";
import { LandingPage } from "./components/Landingpage/LandingPage";
import { Navbar } from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductByCategory from "./components/ProductByCategory/ProductByCategory";
import Data from "./components/Products/DummyData.json";
import ProductById from "./components/Products/ProductById";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Product Datas={Data} />
            </>
          }
        />
        <Route
          path="/category/:name"
          element={
            <>
              <Navbar />
              <ProductByCategory Datas={Data} />
            </>
          }
        />
        <Route
          path="/category/:name/:id"
          element={
            <>
              <Navbar />
              <ProductById Datas={Data}/>
            </>
          }
        />
        {/* <Route
          path="/category/:name/:id/:title"
          element={
            <>
              <Navbar />
              <ProductById Datas={Data} />
            </>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
