import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="reg-container">
      <div className="reg-wrapper">
        <h1 className="reg-title">CREATE AN ACCOUNT</h1>
        <form className="reg-form">
          <input className="reg-input" placeholder="name" />
          <input className="reg-input" placeholder="last name" />
          <input className="reg-input" placeholder="username" />
          <input className="reg-input" placeholder="email" />
          <input className="reg-input" placeholder="password" />
          <input className="reg-input" placeholder="confirm password" />
          <span className="reg-agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="reg-button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
