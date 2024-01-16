import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ item }) => {
    return (
        <div className="pr_container">
            <div className="pr_circle"/>
            <img src={item.productPic} alt="" className="pr_image" />
            <div className="pr_info">
                <div className="pr_icon">
                    <ShoppingCartOutlinedIcon />
                </div>
                <div className="pr_icon">
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlinedIcon />
                    </Link>
                </div>
                <div className="pr_icon">
                    <FavoriteBorderOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Product;