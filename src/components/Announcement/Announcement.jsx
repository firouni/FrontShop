import React from "react";

const Announcement = () => {
    const Styles = {
        Ann_container: {
            height: "30px",
            backgroundColor: "teal",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "500",
        }
    };
    return (
        <div style={Styles.Ann_container}>
            Super Deal! Free Shipping on Orders Over $50
        </div>
    )
};

export default Announcement;