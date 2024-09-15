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
import Checkout from "./components/Order/OrderInfo";
import Footer from "./Pages/Footer";
import Profile from "./components/profile/Profile";
import SearchResult from "./components/Products/searchResult";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Category />
              <Product Datas={Data} />
              <Footer />
            </>
          }
        />

        {/* Category by Name */}
        <Route
          path="/category/:name"
          element={
            <>
              <ProductByCategory Datas={Data} />
            </>
          }
        />
        <Route
          path="/category/:name/:id"
          element={<ProductById Datas={Data} />}
        />
        <Route path="/search" element={<SearchResult />} />
        {/* <Route
          path="/category/:name/:id/:title"
          element={
            <>
              <Navbar />
              <ProductById Datas={Data} />
            </>
          }
        /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
