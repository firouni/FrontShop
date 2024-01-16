import React from "react";
import { categories } from "../../Data";
import CategoryItem from "./CategoryItem";

const Styles = {
  catContainer: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
  },
};

const Categories = () => {
  return (
    <div style={Styles.catContainer}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
