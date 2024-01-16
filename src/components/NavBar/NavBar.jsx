import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IMG from "../../cardetail-logo-slogan.jpg";

const NavBar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity, isLoggedIn)

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="left">
          <span className="lang">EN</span>
          <div className="search">
            <input
              type="text"
              placeholder="search"
              style={{ border: "none" }}
            />
            <SearchOutlinedIcon style={{ color: "gray", fontSize: 18 }} />
          </div>
        </div>
        <div className="center">
          <Link to="/">
            <img src={IMG} id="logo" alt="" />
          </Link>
        </div>
        <div className="right">
          <div className="menuItem">
            <Link className="link" to="/register">
              {!isLoggedIn && "Register"}
            </Link>
          </div>
          <div className="menuItem">
            <Link className="link" to="/login">
              {!isLoggedIn && "Login"}
            </Link>
          </div>
          <div className="menuItem" onClick={handleLogout}>
            <Link className="link" to="/login">
              {isLoggedIn && "Logout"}
            </Link>
          </div>

          <Link className="link" to="/cart">
            <div className="menuItem">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default NavBar;
