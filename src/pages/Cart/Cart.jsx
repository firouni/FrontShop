import React, { useEffect, useState } from "react";
import "./cart.css";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import styled from "styled-components";

const KEY = process.env.STRIPE;

const TopButton = styled.button`
    border: ${(props) => props.type === "filled" && "none"};
    color: ${(props) => props.type === "filled" && "white"};
    background-color: ${(props) =>props.type === "filled" ? "black" : "transparent"};
`;
const SummaryItem = styled.div`
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState({});
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async (req, res) => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                });
                navigate("/success", {
                    stripeData: res.data,
                    products: res.cart,
                });
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate]);

    return (
        <>
            <NavBar />
            <Announcement />
            <div className="cart-container">
                <div style={{ padding: "20px" }}>
                    <h1 className="cart-title">YOUR BAG</h1>
                    <div className="cart-top">
                        <TopButton className="cart-topButton">
                            CONTINUE SHOPPING
                        </TopButton>
                        <div className="cart-topTexts">
                            <span className="cart-topText"> Shopping Bag(2)</span>
                            <span className="cart-topText"> Your Wishlist (0)</span>
                        </div>
                        <button className="cart-topButton" type="filled">
                            CHECKOUT NOW
                        </button>
                    </div>

                    <div className="cart-bottom">
                        <div className="cart-info" style={{ flex: 3 }}>
                            {cart.products.map((product) => (
                                <div className="cart-product">
                                    <div className="cart-productDetail">
                                        <img src={product.productPic} alt="" />
                                        <div className="cart-details">
                                            <span className="cart-productId">
                                                <b>ID:</b> {product._id}
                                            </span>
                                            <span className="cart-productName">
                                                <b>Product:</b> {product.title}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="cart-priceDetail">
                                        <div className="cart-productAmountContainer">
                                            <AddCircleOutlinedIcon />
                                            <div className="cart-productAmount">
                                                {product.quantity}
                                            </div>
                                            <RemoveCircleOutlinedIcon />
                                        </div>
                                        <div className="cart-productPrice">
                                            $ {product.price * product.quantity}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <hr className="cart-Hr" />
                        </div>

                        <div className="cart-summary">
                            <h1 className="cart-summaryTitle">ORDER SUMMARY</h1>
                            <SummaryItem className="cart-summaryItem">
                                <span className="cart-summaryItemText">Subtotal</span>
                                <span className="cart-summaryItemPrice">$ {cart.total}</span>
                            </SummaryItem>
                            <SummaryItem className="cart-summaryItem">
                                <span className="cart-summaryItemText">
                                    Estimated Shipping
                                </span>
                                <span className="cart-summaryItemPrice">$ 5.90</span>
                            </SummaryItem>
                            <SummaryItem className="cart-summaryItem">
                                <span className="cart-summaryItemText">
                                    Shipping Discount
                                </span>
                                <span className="cart-summaryItemPrice">$ -5.90</span>
                            </SummaryItem>
                            <SummaryItem className="cart-summaryItem" type="total">
                                <span className="cart-summaryItemText">Total</span>
                                <span className="cart-summaryItemPrice">$ {cart.total}</span>
                            </SummaryItem>
                            <StripeCheckout
                                name="Detailing Shop"
                                image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800"
                                billingAddress
                                shippingAddress
                                description={`Your total is $${cart.total}`}
                                amount={cart.total * 100}
                                token={onToken}
                                stripeKey={KEY}
                            >
                                <button className="cart-button">CHECKOUT NOW</button>
                            </StripeCheckout>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Cart;
