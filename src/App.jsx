import { LandingPage } from "./components/Landingpage/LandingPage";
import { Navbar } from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductByCategory from "./components/ProductByCategory/ProductByCategory";
import Data from "./components/Products/DummyData.json";
import ProductById from "./components/Products/ProductById";
import Login from "./Pages/login";
import Category from "./components/Category/Category";
import Register from "./Pages/signup";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Category />
              <Product Datas={Data} />
            </>
          }
        />

        {/* Category by Name */}
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
              <ProductById Datas={Data} />
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
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
