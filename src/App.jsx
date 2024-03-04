import { useEffect } from "react";
import Brands from "./components/brands/Brands";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/productsSlice";
import ProductsList from "./components/products-list/ProductsList";
import Cart from "./pages/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  // FETCH DATA WHEN HOME PAGE OPENED
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>

      {/* CONFIGURE NOTIFICATION SETTING */}
      <Toaster
        gutter={12}
        position="top-center"
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
      
    </BrowserRouter>
  );
}

export default App;
