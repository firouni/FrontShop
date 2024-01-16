import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Product from "./pages/Products/Product";
import ProductList from "./pages/Products/ProductList";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Success from "./pages/Success/Success";
import NotFound from "./components/NotFound";

function App() {
  const user = useSelector((state) => state.user.currentUser);
    console.log(user);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/login"
          //element={user ? <Navigate to="/" /> : <Login />} />
          element={ <Login />} />
        <Route
          path="/register"
          element={ <Register />} />
          {/*element={user ? <Navigate to="/login" /> : <Register />} />*/}
      </Routes>
    </div>
  );
}

export default App;
