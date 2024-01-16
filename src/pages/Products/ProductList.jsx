import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

const ProductList = () => {
  const Styles = {
    pr_title: {
      margin: "20px",
    },
    pr_filterContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    pr_filter: {
      margin: "20px",
    },
    pr_filterText: {
      fontSize: "20px",
      fontWeight: "600",
      marginRight: "20px",
    },
    pr_select: {
      padding: "10px",
      marginRight: "20px",
    },
  };

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <NavBar />
      <Announcement />
      <h1 style={Styles.pr_title}>
        {cat}
      </h1>
      <div style={Styles.pr_filterContainer}>
        <div style={Styles.pr_filter}>
          <span style={Styles.pr_filterText}>
            Filter Products:
          </span>
          <select
            style={Styles.pr_select}
            name="color"
            onChange={handleFilters}
          >
            <option disabled>Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>

          <select name="size"
            style={Styles.pr_select}
            onChange={handleFilters}>
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div style={Styles.pr_filter}>
          <span style={Styles.pr_filterText}>
            Sort Products:
          </span>
          <select
            style={Styles.pr_select}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default ProductList