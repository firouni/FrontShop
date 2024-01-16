import React, { useState } from "react";
import "./slider.css";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../..//Data";

const Arrow = styled.div`
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
`;
const Wrapper = styled.div`
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    background-color: #${(props) => props.bg};
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div className="sl-container">
            <Arrow
                className="Arrow"
                direction="left"
                onClick={() => handleClick("left")}
            >
                <ArrowLeftOutlinedIcon />{" "}
            </Arrow>
            <Wrapper className="sl-wrapper" slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide className="Slide" bg={item.bg} key={item.id}>
                        <div className="ImgContainer">
                            <img src={item.img} alt="" className="Image" />
                        </div>
                        <div className="InfoContainer">
                            <h1 className="Title">{item.title}</h1>
                            <p className="Desc">{item.desc}</p>
                            <button className="Button">SHOW NOW</button>
                        </div>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow
                className="Arrow"
                direction="right"
                onClick={() => handleClick("right")}
            >
                <ArrowRightOutlinedIcon />
            </Arrow>
        </div>
    );
};

export default Slider;
