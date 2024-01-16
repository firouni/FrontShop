import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../store/cartSlice";
import RemoveCircleOutlined from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";

const Product = () => {
  const Styles = {
    pro_wrapper: {
      padding: "50px",
      display: "flex",
    },
    pro_imgContainer: {
      flex: "1",
    },
    pro_image: {
      width: "100%",
      height: "90vh",
      objectFit: "cover",
    },
    pro_infoContainer: {
      flex: "1",
      padding: "0px 50px",
    },
    pro_title: {
      fontWeight: "200",
    },
    pro_desc: {
      margin: "20px 0px",
    },
    pro_price: {
      fontWeight: "100",
      fontSize: "40px",
    },
    pro_filterContainer: {
      width: "50%",
      margin: "30px 0px",
      display: "flex",
      justifyContent: "space-between",
    },
    pro_filter: {
      display: "flex",
      alignItems: "center",
    },
    pro_filterTitle: {
      fontSize: "20px",
      fontWeight: "200",
    },
    pro_filterColor: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      margin: "0px 5px",
      cursor: "pointer",
    },
    pro_filterSize: {
      marginLeft: "10px",
      padding: "5px",
    },
    pro_addContainer: {
      width: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    pro_amountContainer: {
      display: "flex",
      alignItems: "center",
      fontWeight: "700",
    },
    pro_amount: {
      width: "30px",
      height: "30px",
      borderRadius: "10px",
      border: "1px solid teal",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px 5px",
    },
    pro_button: {
      padding: "15px",
      border: "2px solid teal",
      backgroundColor: "white",
      fontWeight: "500",
      cursor: "pointer",
    },
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div>
      <NavBar />
      <Announcement />
      <div style={Styles.pro_wrapper}>
        <div style={Styles.pro_imgContainer}>
          <img src={product.productPic} alt="" style={Styles.pro_image} />
        </div>
        <div style={Styles.pro_imgContainer}>
          <h1 style={Styles.pro_title}>{product.title}</h1>
          <p style={Styles.pro_desc}>{product.description}</p>
          <span style={Styles.pro_price}>$ {product.price}</span>
          <div style={Styles.pro_filterContainer}>
            <div style={Styles.pro_filter}>
              <span style={Styles.pro_filterTitle}>Color</span>
              {product.color?.map((c) => (
                <div
                  style={Styles.pro_filterColor}
                  color={c}
                  key={c}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
            <div style={Styles.pro_filter}>
              <span style={Styles.pro_filterTitle}>Size</span>
              <select
                style={Styles.pro_filterSize}
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div style={Styles.pro_addContainer}>
            <div style={Styles.pro_amountContainer}>
              <RemoveCircleOutlined onClick={() => handleQuantity("dec")} />
              <span style={Styles.pro_amount}>{quantity}</span>
              <AddCircleOutlined onClick={() => handleQuantity("inc")} />
            </div>
            <button style={Styles.pro_button} onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
