import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
    const Styles = {
        cat_container: {
            flex: 1,
            margin: "3px",
            height: "70vh",
            position: "relative",
        },
        cat_image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        cat_info: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        cat_title: {
            color: "white",
            marginBottom: "20px",
        },
        cat_button: {
            border: "none",
            padding: "10px",
            backgroundColor: "white",
            color: "gray",
            cursor: "pointer",
            fontWeight: "600",
        }
    };

    return (
        <div style={Styles.cat_container}>
            <Link to={`/products/${item.cat}`}>
                <img src={item.img} style={Styles.cat_image} alt=""/>
                <div style={Styles.cat_info}>
                    <h1 style={Styles.cat_title}>{item.title}</h1>
                    <button style={Styles.cat_button}>SHOP NOW</button>
                </div>
            </Link>
        </div>
    );
};

export default CategoryItem;