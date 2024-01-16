import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import NavBar from '../../components/NavBar/NavBar';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import Products from "../../components/Products/Products";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default Home